cd "$(dirname "$0")"
# This command generates a binary file named 'myschema.desc'
protoc --descriptor_set_out=myschema.desc --include_imports -I ../../specification/grpc -I ../node_modules/google-proto-files a2a.proto

# This command reads the binary descriptor and outputs the JSON representation to stdout
protoc --decode=google.protobuf.FileDescriptorSet google/protobuf/descriptor.proto < myschema.desc > myschema_definition.json