import * as jspb from 'google-protobuf'



export class Zone extends jspb.Message {
  getId(): string;
  setId(value: string): Zone;

  getName(): string;
  setName(value: string): Zone;

  getWarehouseId(): string;
  setWarehouseId(value: string): Zone;

  getCode(): string;
  setCode(value: string): Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    id: string,
    name: string,
    warehouseId: string,
    code: string,
  }
}

