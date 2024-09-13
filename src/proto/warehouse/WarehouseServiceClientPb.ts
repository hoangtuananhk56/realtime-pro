/**
 * @fileoverview gRPC-Web generated client stub for Warehouse
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: proto/warehouse/warehouse.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_warehouse_warehouse_pb from '../../proto/warehouse/warehouse_pb'; // proto import: "proto/warehouse/warehouse.proto"


export class WarehouseServiceClient {
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

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/Warehouse.WarehouseService/Create',
    grpcWeb.MethodType.UNARY,
    proto_warehouse_warehouse_pb.CreateRequest,
    proto_warehouse_warehouse_pb.Response,
    (request: proto_warehouse_warehouse_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    proto_warehouse_warehouse_pb.Response.deserializeBinary
  );

  create(
    request: proto_warehouse_warehouse_pb.CreateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_warehouse_warehouse_pb.Response>;

  create(
    request: proto_warehouse_warehouse_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.Response) => void): grpcWeb.ClientReadableStream<proto_warehouse_warehouse_pb.Response>;

  create(
    request: proto_warehouse_warehouse_pb.CreateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Warehouse.WarehouseService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Warehouse.WarehouseService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorGetAll = new grpcWeb.MethodDescriptor(
    '/Warehouse.WarehouseService/GetAll',
    grpcWeb.MethodType.UNARY,
    proto_warehouse_warehouse_pb.GetAllRequest,
    proto_warehouse_warehouse_pb.GetAllResponse,
    (request: proto_warehouse_warehouse_pb.GetAllRequest) => {
      return request.serializeBinary();
    },
    proto_warehouse_warehouse_pb.GetAllResponse.deserializeBinary
  );

  getAll(
    request: proto_warehouse_warehouse_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_warehouse_warehouse_pb.GetAllResponse>;

  getAll(
    request: proto_warehouse_warehouse_pb.GetAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.GetAllResponse) => void): grpcWeb.ClientReadableStream<proto_warehouse_warehouse_pb.GetAllResponse>;

  getAll(
    request: proto_warehouse_warehouse_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.GetAllResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Warehouse.WarehouseService/GetAll',
        request,
        metadata || {},
        this.methodDescriptorGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Warehouse.WarehouseService/GetAll',
    request,
    metadata || {},
    this.methodDescriptorGetAll);
  }

  methodDescriptorValidWarningDluo = new grpcWeb.MethodDescriptor(
    '/Warehouse.WarehouseService/ValidWarningDluo',
    grpcWeb.MethodType.UNARY,
    proto_warehouse_warehouse_pb.ValidWarningDluoRequest,
    proto_warehouse_warehouse_pb.ValidWarningDluoResponse,
    (request: proto_warehouse_warehouse_pb.ValidWarningDluoRequest) => {
      return request.serializeBinary();
    },
    proto_warehouse_warehouse_pb.ValidWarningDluoResponse.deserializeBinary
  );

  validWarningDluo(
    request: proto_warehouse_warehouse_pb.ValidWarningDluoRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_warehouse_warehouse_pb.ValidWarningDluoResponse>;

  validWarningDluo(
    request: proto_warehouse_warehouse_pb.ValidWarningDluoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.ValidWarningDluoResponse) => void): grpcWeb.ClientReadableStream<proto_warehouse_warehouse_pb.ValidWarningDluoResponse>;

  validWarningDluo(
    request: proto_warehouse_warehouse_pb.ValidWarningDluoRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.ValidWarningDluoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Warehouse.WarehouseService/ValidWarningDluo',
        request,
        metadata || {},
        this.methodDescriptorValidWarningDluo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Warehouse.WarehouseService/ValidWarningDluo',
    request,
    metadata || {},
    this.methodDescriptorValidWarningDluo);
  }

  methodDescriptorValidDeletingWarehouse = new grpcWeb.MethodDescriptor(
    '/Warehouse.WarehouseService/ValidDeletingWarehouse',
    grpcWeb.MethodType.UNARY,
    proto_warehouse_warehouse_pb.ValidDeletingWarehouseRequest,
    proto_warehouse_warehouse_pb.ValidDeletingWarehouseResponse,
    (request: proto_warehouse_warehouse_pb.ValidDeletingWarehouseRequest) => {
      return request.serializeBinary();
    },
    proto_warehouse_warehouse_pb.ValidDeletingWarehouseResponse.deserializeBinary
  );

  validDeletingWarehouse(
    request: proto_warehouse_warehouse_pb.ValidDeletingWarehouseRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_warehouse_warehouse_pb.ValidDeletingWarehouseResponse>;

  validDeletingWarehouse(
    request: proto_warehouse_warehouse_pb.ValidDeletingWarehouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.ValidDeletingWarehouseResponse) => void): grpcWeb.ClientReadableStream<proto_warehouse_warehouse_pb.ValidDeletingWarehouseResponse>;

  validDeletingWarehouse(
    request: proto_warehouse_warehouse_pb.ValidDeletingWarehouseRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.ValidDeletingWarehouseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Warehouse.WarehouseService/ValidDeletingWarehouse',
        request,
        metadata || {},
        this.methodDescriptorValidDeletingWarehouse,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Warehouse.WarehouseService/ValidDeletingWarehouse',
    request,
    metadata || {},
    this.methodDescriptorValidDeletingWarehouse);
  }

  methodDescriptorHookDeletingWarehouse = new grpcWeb.MethodDescriptor(
    '/Warehouse.WarehouseService/HookDeletingWarehouse',
    grpcWeb.MethodType.UNARY,
    proto_warehouse_warehouse_pb.HookDeletingWarehouseRequest,
    proto_warehouse_warehouse_pb.HookDeletingWarehouseResponse,
    (request: proto_warehouse_warehouse_pb.HookDeletingWarehouseRequest) => {
      return request.serializeBinary();
    },
    proto_warehouse_warehouse_pb.HookDeletingWarehouseResponse.deserializeBinary
  );

  hookDeletingWarehouse(
    request: proto_warehouse_warehouse_pb.HookDeletingWarehouseRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_warehouse_warehouse_pb.HookDeletingWarehouseResponse>;

  hookDeletingWarehouse(
    request: proto_warehouse_warehouse_pb.HookDeletingWarehouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.HookDeletingWarehouseResponse) => void): grpcWeb.ClientReadableStream<proto_warehouse_warehouse_pb.HookDeletingWarehouseResponse>;

  hookDeletingWarehouse(
    request: proto_warehouse_warehouse_pb.HookDeletingWarehouseRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_warehouse_warehouse_pb.HookDeletingWarehouseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Warehouse.WarehouseService/HookDeletingWarehouse',
        request,
        metadata || {},
        this.methodDescriptorHookDeletingWarehouse,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Warehouse.WarehouseService/HookDeletingWarehouse',
    request,
    metadata || {},
    this.methodDescriptorHookDeletingWarehouse);
  }

}

