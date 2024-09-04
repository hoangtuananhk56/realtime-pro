#!/bin/bash
cd src/
PROTO_DIR=./

protoc -I=. ./proto/**/*.proto \
    --js_out=import_style=commonjs:${PROTO_DIR} \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}

