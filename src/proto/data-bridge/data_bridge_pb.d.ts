import * as jspb from 'google-protobuf'



export class ImportRequest extends jspb.Message {
  getImportHistoryId(): string;
  setImportHistoryId(value: string): ImportRequest;

  getSource(): string;
  setSource(value: string): ImportRequest;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ImportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportRequest): ImportRequest.AsObject;
  static serializeBinaryToWriter(message: ImportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportRequest;
  static deserializeBinaryFromReader(message: ImportRequest, reader: jspb.BinaryReader): ImportRequest;
}

export namespace ImportRequest {
  export type AsObject = {
    importHistoryId: string,
    source: string,
    chunk: Uint8Array | string,
  }
}

export class ImportResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ImportResponse;

  getErrordata(): Uint8Array | string;
  getErrordata_asU8(): Uint8Array;
  getErrordata_asB64(): string;
  setErrordata(value: Uint8Array | string): ImportResponse;

  getFlow(): string;
  setFlow(value: string): ImportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportResponse): ImportResponse.AsObject;
  static serializeBinaryToWriter(message: ImportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportResponse;
  static deserializeBinaryFromReader(message: ImportResponse, reader: jspb.BinaryReader): ImportResponse;
}

export namespace ImportResponse {
  export type AsObject = {
    status: string,
    errordata: Uint8Array | string,
    flow: string,
  }
}

export class CreateImportHistoryRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): CreateImportHistoryRequest;

  getType(): string;
  setType(value: string): CreateImportHistoryRequest;

  getStatus(): string;
  setStatus(value: string): CreateImportHistoryRequest;

  getCreatedBy(): string;
  setCreatedBy(value: string): CreateImportHistoryRequest;

  getFileSize(): number;
  setFileSize(value: number): CreateImportHistoryRequest;

  getNumberLines(): number;
  setNumberLines(value: number): CreateImportHistoryRequest;

  getFileHash(): string;
  setFileHash(value: string): CreateImportHistoryRequest;

  getMetadata(): string;
  setMetadata(value: string): CreateImportHistoryRequest;

  getClientId(): string;
  setClientId(value: string): CreateImportHistoryRequest;

  getCompanyId(): string;
  setCompanyId(value: string): CreateImportHistoryRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): CreateImportHistoryRequest;

  getUploadedAt(): number;
  setUploadedAt(value: number): CreateImportHistoryRequest;

  getFilename(): string;
  setFilename(value: string): CreateImportHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImportHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImportHistoryRequest): CreateImportHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateImportHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImportHistoryRequest;
  static deserializeBinaryFromReader(message: CreateImportHistoryRequest, reader: jspb.BinaryReader): CreateImportHistoryRequest;
}

export namespace CreateImportHistoryRequest {
  export type AsObject = {
    path: string,
    type: string,
    status: string,
    createdBy: string,
    fileSize: number,
    numberLines: number,
    fileHash: string,
    metadata: string,
    clientId: string,
    companyId: string,
    warehouseId: string,
    uploadedAt: number,
    filename: string,
  }
}

export class CreateImportHistoryResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateImportHistoryResponse;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateImportHistoryResponse;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateImportHistoryResponse;

  getDeletedAt(): number;
  setDeletedAt(value: number): CreateImportHistoryResponse;

  getPath(): string;
  setPath(value: string): CreateImportHistoryResponse;

  getType(): string;
  setType(value: string): CreateImportHistoryResponse;

  getStatus(): string;
  setStatus(value: string): CreateImportHistoryResponse;

  getUploadedAt(): number;
  setUploadedAt(value: number): CreateImportHistoryResponse;

  getProcessedAt(): number;
  setProcessedAt(value: number): CreateImportHistoryResponse;

  getCreatedBy(): string;
  setCreatedBy(value: string): CreateImportHistoryResponse;

  getFileSize(): number;
  setFileSize(value: number): CreateImportHistoryResponse;

  getNumberLines(): number;
  setNumberLines(value: number): CreateImportHistoryResponse;

  getFileHash(): string;
  setFileHash(value: string): CreateImportHistoryResponse;

  getMetadata(): string;
  setMetadata(value: string): CreateImportHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImportHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImportHistoryResponse): CreateImportHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateImportHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImportHistoryResponse;
  static deserializeBinaryFromReader(message: CreateImportHistoryResponse, reader: jspb.BinaryReader): CreateImportHistoryResponse;
}

export namespace CreateImportHistoryResponse {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    deletedAt: number,
    path: string,
    type: string,
    status: string,
    uploadedAt: number,
    processedAt: number,
    createdBy: string,
    fileSize: number,
    numberLines: number,
    fileHash: string,
    metadata: string,
  }
}

