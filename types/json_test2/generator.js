const protobuf = require('protobufjs');
const path = require('path');
const fs = require('fs');
const { log } = require('console');

// Resolve paths from the script's location to make it runnable from anywhere
const protoPath = path.resolve(__dirname, '../../specification/grpc/a2a.proto');
// const protoPath = path.resolve(__dirname, './test.proto');
const googleProtoPath = path.resolve(__dirname, '../node_modules/google-proto-files');
const outputPath = path.resolve(__dirname, './a2a.json');

// Create a new Root object to hold the protobuf definitions
const root = new protobuf.Root();

// Set up a path resolver to handle the google proto files
const originalResolvePath = root.resolvePath;
root.resolvePath = function(origin, target) {
    if (target.startsWith("google/")) {
        return path.join(googleProtoPath, target);
    }
    // Fallback to the default resolver for other paths
    return originalResolvePath(origin, target);
};

// Load the main proto file, keeping comments
root.loadSync(protoPath, { keepCase: true, alternateCommentMode: true });

// Convert to a JSON descriptor
const descriptor = root.toJSON({ keepComments: true });

// Type mapping from Protobuf to JSON Schema
function getJsonSchemaType(field) {
    if (field.rule === 'repeated') {
        return {
            type: 'array',
            items: getJsonSchemaType({ ...field, rule: undefined })
        };
    }

    if (field.keyType) { // It's a map
        return {
            type: 'object',
            additionalProperties: getJsonSchemaType({ type: field.type })
        };
    }

    switch (field.type) {
        case 'string':
            return { type: 'string' };
        case 'bool':
            return { type: 'boolean' };
        case 'bytes':
            return { type: 'string', contentEncoding: 'base64' };
        case 'float':
        case 'double':
            return { type: 'number' };
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return { type: 'integer' };
        case 'int64':
        case 'uint64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return { type: 'string', format: 'int64' };
        default:
            // It's a nested message or enum
            return { "$ref": `#/definitions/${field.type}` };
    }
}

// Transforms the Protobuf JSON descriptor into a JSON Schema
function transformToSchema(namespace, prefix = '') {
    let definitions = {};

    if (namespace.nested) {
        // console.log('this is the namespace: ', namespace); 
        for (const key in namespace.nested) {
            // console.log('this is the key: ', key);
            const nestedItem = namespace.nested[key];
            const fullName = key;

            // console.log('this is the nestedItem: ', nestedItem);
            if (nestedItem.fields) { // It's a message
                const properties = {};
                const examples = [];
                const required = [];

                for (const fieldName in nestedItem.fields) {
                    // console.log('this is the field: ', nestedItem.fields[fieldName]);
                    const field = nestedItem.fields[fieldName];
                    const prop = getJsonSchemaType(field);
                    if (field.comment) {
                        let description = field.comment;
                        if (field.comment.includes('Example:')) {
                            const exampleMatch = field.comment.match(/Example:\s*(.*)/);
                            examples.push(exampleMatch[0].trim());
                            description = field.comment.split('Example:')[0].trim();
                        }
                        prop.description = description;
                    }
                    properties[fieldName] = prop;
                    // In proto3, every field is optional, but for this schema we'll mark them as required
                    // as per the user's example.
                    required.push(fieldName);
                }

                definitions[fullName] = {
                    type: 'object',
                    properties: properties,
                    required: required
                };
                if (nestedItem.comment) {
                    if (nestedItem.comment.includes(']\n')) {
                        const commentParts = nestedItem.comment.split(']\n');
                        definitions[fullName].description = commentParts[1].trim();
                    } else {
                        definitions[fullName].description = nestedItem.comment;
                    }
                }
                if (examples.length > 0) {
                    definitions[fullName].examples = examples;
                }
            } else if (nestedItem.values) { // It's an enum
                 definitions[fullName] = {
                    type: 'string',
                    enum: Object.keys(nestedItem.values)
                };
                 if (nestedItem.comment) {
                    // console.log('this is the comment: ', nestedItem.comment);
                    definitions[fullName].description = nestedItem.comment;
                }
            }

            if (nestedItem.nested) { // Recurse into nested namespaces
                Object.assign(definitions, transformToSchema(nestedItem, fullName));
            }
        }
    }
    return definitions;
}

const definitions = transformToSchema(descriptor);

const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": definitions
};

const finalJsonString = JSON.stringify(schema, null, 2);


fs.writeFileSync(outputPath, finalJsonString);

console.log(`Successfully wrote JSON schema to ${outputPath}`);
