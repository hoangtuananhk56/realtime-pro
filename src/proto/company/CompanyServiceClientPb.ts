/**
 * @fileoverview gRPC-Web generated client stub for company
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: proto/company/company.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_company_company_pb from '../../proto/company/company_pb'; // proto import: "proto/company/company.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class CompanyServiceClient {
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

  methodDescriptorCreateCompany = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/CreateCompany',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.CreateCompanyRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_company_company_pb.CreateCompanyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createCompany(
    request: proto_company_company_pb.CreateCompanyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  createCompany(
    request: proto_company_company_pb.CreateCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createCompany(
    request: proto_company_company_pb.CreateCompanyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/CreateCompany',
        request,
        metadata || {},
        this.methodDescriptorCreateCompany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/CreateCompany',
    request,
    metadata || {},
    this.methodDescriptorCreateCompany);
  }

  methodDescriptorUpdateCompany = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/UpdateCompany',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.UpdateCompanyRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_company_company_pb.UpdateCompanyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateCompany(
    request: proto_company_company_pb.UpdateCompanyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateCompany(
    request: proto_company_company_pb.UpdateCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateCompany(
    request: proto_company_company_pb.UpdateCompanyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/UpdateCompany',
        request,
        metadata || {},
        this.methodDescriptorUpdateCompany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/UpdateCompany',
    request,
    metadata || {},
    this.methodDescriptorUpdateCompany);
  }

  methodDescriptorGetAll = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/GetAll',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.GetAllRequest,
    proto_company_company_pb.GetAllResponse,
    (request: proto_company_company_pb.GetAllRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.GetAllResponse.deserializeBinary
  );

  getAll(
    request: proto_company_company_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.GetAllResponse>;

  getAll(
    request: proto_company_company_pb.GetAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.GetAllResponse>;

  getAll(
    request: proto_company_company_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/GetAll',
        request,
        metadata || {},
        this.methodDescriptorGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/GetAll',
    request,
    metadata || {},
    this.methodDescriptorGetAll);
  }

  methodDescriptorGetAllCompaniesByWarehouseId = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/GetAllCompaniesByWarehouseId',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.WarehouseIdRequest,
    proto_company_company_pb.GetAllCompaniesByWarehouseIdResponse,
    (request: proto_company_company_pb.WarehouseIdRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.GetAllCompaniesByWarehouseIdResponse.deserializeBinary
  );

  getAllCompaniesByWarehouseId(
    request: proto_company_company_pb.WarehouseIdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.GetAllCompaniesByWarehouseIdResponse>;

  getAllCompaniesByWarehouseId(
    request: proto_company_company_pb.WarehouseIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllCompaniesByWarehouseIdResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.GetAllCompaniesByWarehouseIdResponse>;

  getAllCompaniesByWarehouseId(
    request: proto_company_company_pb.WarehouseIdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllCompaniesByWarehouseIdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/GetAllCompaniesByWarehouseId',
        request,
        metadata || {},
        this.methodDescriptorGetAllCompaniesByWarehouseId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/GetAllCompaniesByWarehouseId',
    request,
    metadata || {},
    this.methodDescriptorGetAllCompaniesByWarehouseId);
  }

  methodDescriptorGetAllCompanyWarehouseForUpdate = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/GetAllCompanyWarehouseForUpdate',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.GetAllCompanyWarehouseForUpdateRequest,
    proto_company_company_pb.GetAllCompanyWarehouseForUpdateResponse,
    (request: proto_company_company_pb.GetAllCompanyWarehouseForUpdateRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.GetAllCompanyWarehouseForUpdateResponse.deserializeBinary
  );

  getAllCompanyWarehouseForUpdate(
    request: proto_company_company_pb.GetAllCompanyWarehouseForUpdateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.GetAllCompanyWarehouseForUpdateResponse>;

  getAllCompanyWarehouseForUpdate(
    request: proto_company_company_pb.GetAllCompanyWarehouseForUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllCompanyWarehouseForUpdateResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.GetAllCompanyWarehouseForUpdateResponse>;

  getAllCompanyWarehouseForUpdate(
    request: proto_company_company_pb.GetAllCompanyWarehouseForUpdateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllCompanyWarehouseForUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/GetAllCompanyWarehouseForUpdate',
        request,
        metadata || {},
        this.methodDescriptorGetAllCompanyWarehouseForUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/GetAllCompanyWarehouseForUpdate',
    request,
    metadata || {},
    this.methodDescriptorGetAllCompanyWarehouseForUpdate);
  }

  methodDescriptorFindCompanyById = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/FindCompanyById',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.FindCompanyByIdRequest,
    proto_company_company_pb.FindCompanyByIdResponse,
    (request: proto_company_company_pb.FindCompanyByIdRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.FindCompanyByIdResponse.deserializeBinary
  );

  findCompanyById(
    request: proto_company_company_pb.FindCompanyByIdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.FindCompanyByIdResponse>;

  findCompanyById(
    request: proto_company_company_pb.FindCompanyByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.FindCompanyByIdResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.FindCompanyByIdResponse>;

  findCompanyById(
    request: proto_company_company_pb.FindCompanyByIdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.FindCompanyByIdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/FindCompanyById',
        request,
        metadata || {},
        this.methodDescriptorFindCompanyById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/FindCompanyById',
    request,
    metadata || {},
    this.methodDescriptorFindCompanyById);
  }

  methodDescriptorDeleteCompany = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/DeleteCompany',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.DeleteCompanyRequest,
    proto_company_company_pb.DeleteCompanyResponse,
    (request: proto_company_company_pb.DeleteCompanyRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.DeleteCompanyResponse.deserializeBinary
  );

  deleteCompany(
    request: proto_company_company_pb.DeleteCompanyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.DeleteCompanyResponse>;

  deleteCompany(
    request: proto_company_company_pb.DeleteCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.DeleteCompanyResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.DeleteCompanyResponse>;

  deleteCompany(
    request: proto_company_company_pb.DeleteCompanyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.DeleteCompanyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/DeleteCompany',
        request,
        metadata || {},
        this.methodDescriptorDeleteCompany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/DeleteCompany',
    request,
    metadata || {},
    this.methodDescriptorDeleteCompany);
  }

  methodDescriptorDeleteManyCompany = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/DeleteManyCompany',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.DeleteManyCompanyRequest,
    proto_company_company_pb.DeleteManyCompanyResponse,
    (request: proto_company_company_pb.DeleteManyCompanyRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.DeleteManyCompanyResponse.deserializeBinary
  );

  deleteManyCompany(
    request: proto_company_company_pb.DeleteManyCompanyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.DeleteManyCompanyResponse>;

  deleteManyCompany(
    request: proto_company_company_pb.DeleteManyCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.DeleteManyCompanyResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.DeleteManyCompanyResponse>;

  deleteManyCompany(
    request: proto_company_company_pb.DeleteManyCompanyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.DeleteManyCompanyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/DeleteManyCompany',
        request,
        metadata || {},
        this.methodDescriptorDeleteManyCompany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/DeleteManyCompany',
    request,
    metadata || {},
    this.methodDescriptorDeleteManyCompany);
  }

  methodDescriptorGetAllCompanyList = new grpcWeb.MethodDescriptor(
    '/company.CompanyService/GetAllCompanyList',
    grpcWeb.MethodType.UNARY,
    proto_company_company_pb.GetAllCompanyListRequest,
    proto_company_company_pb.GetAllCompanyListResponse,
    (request: proto_company_company_pb.GetAllCompanyListRequest) => {
      return request.serializeBinary();
    },
    proto_company_company_pb.GetAllCompanyListResponse.deserializeBinary
  );

  getAllCompanyList(
    request: proto_company_company_pb.GetAllCompanyListRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_company_company_pb.GetAllCompanyListResponse>;

  getAllCompanyList(
    request: proto_company_company_pb.GetAllCompanyListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllCompanyListResponse) => void): grpcWeb.ClientReadableStream<proto_company_company_pb.GetAllCompanyListResponse>;

  getAllCompanyList(
    request: proto_company_company_pb.GetAllCompanyListRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_company_company_pb.GetAllCompanyListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/company.CompanyService/GetAllCompanyList',
        request,
        metadata || {},
        this.methodDescriptorGetAllCompanyList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/company.CompanyService/GetAllCompanyList',
    request,
    metadata || {},
    this.methodDescriptorGetAllCompanyList);
  }

}

