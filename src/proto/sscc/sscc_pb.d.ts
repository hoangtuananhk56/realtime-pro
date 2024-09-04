import * as jspb from 'google-protobuf'



export class SSCC extends jspb.Message {
  getId(): string;
  setId(value: string): SSCC;

  getCreateAt(): number;
  setCreateAt(value: number): SSCC;

  getUpdateAt(): number;
  setUpdateAt(value: number): SSCC;

  getNum(): string;
  setNum(value: string): SSCC;

  getCodeStatus(): string;
  setCodeStatus(value: string): SSCC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCC.AsObject;
  static toObject(includeInstance: boolean, msg: SSCC): SSCC.AsObject;
  static serializeBinaryToWriter(message: SSCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCC;
  static deserializeBinaryFromReader(message: SSCC, reader: jspb.BinaryReader): SSCC;
}

export namespace SSCC {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    num: string,
    codeStatus: string,
  }
}

