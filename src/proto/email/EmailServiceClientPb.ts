/**
 * @fileoverview gRPC-Web generated client stub for email
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: proto/email/email.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_email_email_pb from '../../proto/email/email_pb'; // proto import: "proto/email/email.proto"


export class EmailServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSend = new grpcWeb.MethodDescriptor(
    '/email.EmailService/Send',
    grpcWeb.MethodType.UNARY,
    proto_email_email_pb.EmailRequest,
    proto_email_email_pb.EmailResponse,
    (request: proto_email_email_pb.EmailRequest) => {
      return request.serializeBinary();
    },
    proto_email_email_pb.EmailResponse.deserializeBinary
  );

  send(
    request: proto_email_email_pb.EmailRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_email_email_pb.EmailResponse>;

  send(
    request: proto_email_email_pb.EmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_email_email_pb.EmailResponse) => void): grpcWeb.ClientReadableStream<proto_email_email_pb.EmailResponse>;

  send(
    request: proto_email_email_pb.EmailRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_email_email_pb.EmailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/email.EmailService/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/email.EmailService/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

}

