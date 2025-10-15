#!/bin/bash

set -eux

cd $(dirname $0)

go build -o protoc-gen-jsonschema ../main.go

export DEBUG=true

protoc \
  --plugin=protoc-gen-jsonschema=./protoc-gen-jsonschema \
  --jsonschema_out=./ \
  --jsonschema_opt=entrypoint_message=SendMessageRequest \
  --jsonschema_opt=entrypoint_message=AgentProvider \
  --jsonschema_opt=draft=Draft07 \
  --jsonschema_opt=output_file_suffix=.json \
  -I ../node_modules/google-proto-files/ \
  -I ../../specification/grpc/ \
  a2a.proto

rm protoc-gen-jsonschema