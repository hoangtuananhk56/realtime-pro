import * as jspb from 'google-protobuf'



export class Chrono extends jspb.Message {
  getId(): string;
  setId(value: string): Chrono;

  getCreateAt(): number;
  setCreateAt(value: number): Chrono;

  getUpdateAt(): number;
  setUpdateAt(value: number): Chrono;

  getProductionItemId(): string;
  setProductionItemId(value: string): Chrono;

  getName(): string;
  setName(value: string): Chrono;

  getTypeAlerte(): string;
  setTypeAlerte(value: string): Chrono;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chrono.AsObject;
  static toObject(includeInstance: boolean, msg: Chrono): Chrono.AsObject;
  static serializeBinaryToWriter(message: Chrono, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chrono;
  static deserializeBinaryFromReader(message: Chrono, reader: jspb.BinaryReader): Chrono;
}

export namespace Chrono {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    productionItemId: string,
    name: string,
    typeAlerte: string,
  }
}

