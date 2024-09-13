import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class UpdateDeviceTokenRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UpdateDeviceTokenRequest;

  getToken(): string;
  setToken(value: string): UpdateDeviceTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceTokenRequest): UpdateDeviceTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDeviceTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceTokenRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceTokenRequest, reader: jspb.BinaryReader): UpdateDeviceTokenRequest;
}

export namespace UpdateDeviceTokenRequest {
  export type AsObject = {
    userId: string,
    token: string,
  }
}

