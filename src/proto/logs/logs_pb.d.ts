import * as jspb from 'google-protobuf'



export class Log extends jspb.Message {
  getName(): string;
  setName(value: string): Log;

  getData(): string;
  setData(value: string): Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    name: string,
    data: string,
  }
}

export class LogRequest extends jspb.Message {
  getLogentry(): Log | undefined;
  setLogentry(value?: Log): LogRequest;
  hasLogentry(): boolean;
  clearLogentry(): LogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogRequest): LogRequest.AsObject;
  static serializeBinaryToWriter(message: LogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRequest;
  static deserializeBinaryFromReader(message: LogRequest, reader: jspb.BinaryReader): LogRequest;
}

export namespace LogRequest {
  export type AsObject = {
    logentry?: Log.AsObject,
  }
}

export class LogResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): LogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogResponse): LogResponse.AsObject;
  static serializeBinaryToWriter(message: LogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogResponse;
  static deserializeBinaryFromReader(message: LogResponse, reader: jspb.BinaryReader): LogResponse;
}

export namespace LogResponse {
  export type AsObject = {
    result: string,
  }
}

