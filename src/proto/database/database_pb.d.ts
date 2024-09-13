import * as jspb from 'google-protobuf'



export class DropAndUnitRequest extends jspb.Message {
  getUserCode(): string;
  setUserCode(value: string): DropAndUnitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropAndUnitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropAndUnitRequest): DropAndUnitRequest.AsObject;
  static serializeBinaryToWriter(message: DropAndUnitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropAndUnitRequest;
  static deserializeBinaryFromReader(message: DropAndUnitRequest, reader: jspb.BinaryReader): DropAndUnitRequest;
}

export namespace DropAndUnitRequest {
  export type AsObject = {
    userCode: string,
  }
}

export class DropAndUnitResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): DropAndUnitResponse;

  getMessageErr(): string;
  setMessageErr(value: string): DropAndUnitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropAndUnitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropAndUnitResponse): DropAndUnitResponse.AsObject;
  static serializeBinaryToWriter(message: DropAndUnitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropAndUnitResponse;
  static deserializeBinaryFromReader(message: DropAndUnitResponse, reader: jspb.BinaryReader): DropAndUnitResponse;
}

export namespace DropAndUnitResponse {
  export type AsObject = {
    status: string,
    messageErr: string,
  }
}

export class MigrateRequest extends jspb.Message {
  getUserCode(): string;
  setUserCode(value: string): MigrateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateRequest): MigrateRequest.AsObject;
  static serializeBinaryToWriter(message: MigrateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateRequest;
  static deserializeBinaryFromReader(message: MigrateRequest, reader: jspb.BinaryReader): MigrateRequest;
}

export namespace MigrateRequest {
  export type AsObject = {
    userCode: string,
  }
}

export class MigrateResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): MigrateResponse;

  getMessageErr(): string;
  setMessageErr(value: string): MigrateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateResponse): MigrateResponse.AsObject;
  static serializeBinaryToWriter(message: MigrateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateResponse;
  static deserializeBinaryFromReader(message: MigrateResponse, reader: jspb.BinaryReader): MigrateResponse;
}

export namespace MigrateResponse {
  export type AsObject = {
    status: string,
    messageErr: string,
  }
}

export class MigrateDataRequest extends jspb.Message {
  getUserCode(): string;
  setUserCode(value: string): MigrateDataRequest;

  getVersion(): string;
  setVersion(value: string): MigrateDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateDataRequest): MigrateDataRequest.AsObject;
  static serializeBinaryToWriter(message: MigrateDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateDataRequest;
  static deserializeBinaryFromReader(message: MigrateDataRequest, reader: jspb.BinaryReader): MigrateDataRequest;
}

export namespace MigrateDataRequest {
  export type AsObject = {
    userCode: string,
    version: string,
  }
}

