import * as jspb from 'google-protobuf'



export class Tracking extends jspb.Message {
  getId(): string;
  setId(value: string): Tracking;

  getCreateAt(): number;
  setCreateAt(value: number): Tracking;

  getUpdateAt(): number;
  setUpdateAt(value: number): Tracking;

  getName(): string;
  setName(value: string): Tracking;

  getProductionBatchId(): string;
  setProductionBatchId(value: string): Tracking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tracking.AsObject;
  static toObject(includeInstance: boolean, msg: Tracking): Tracking.AsObject;
  static serializeBinaryToWriter(message: Tracking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tracking;
  static deserializeBinaryFromReader(message: Tracking, reader: jspb.BinaryReader): Tracking;
}

export namespace Tracking {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    productionBatchId: string,
  }
}

