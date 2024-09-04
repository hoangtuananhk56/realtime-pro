import * as jspb from 'google-protobuf'



export class Palette extends jspb.Message {
  getId(): string;
  setId(value: string): Palette;

  getCreateAt(): number;
  setCreateAt(value: number): Palette;

  getUpdateAt(): number;
  setUpdateAt(value: number): Palette;

  getCodeStatus(): string;
  setCodeStatus(value: string): Palette;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Palette.AsObject;
  static toObject(includeInstance: boolean, msg: Palette): Palette.AsObject;
  static serializeBinaryToWriter(message: Palette, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Palette;
  static deserializeBinaryFromReader(message: Palette, reader: jspb.BinaryReader): Palette;
}

export namespace Palette {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    codeStatus: string,
  }
}

