import * as jspb from 'google-protobuf'



export class ICPE extends jspb.Message {
  getId(): string;
  setId(value: string): ICPE;

  getCreateAt(): number;
  setCreateAt(value: number): ICPE;

  getUpdateAt(): number;
  setUpdateAt(value: number): ICPE;

  getCode(): string;
  setCode(value: string): ICPE;

  getDescription(): string;
  setDescription(value: string): ICPE;

  getQteNv1(): string;
  setQteNv1(value: string): ICPE;

  getQteTotalRef(): string;
  setQteTotalRef(value: string): ICPE;

  getQteTotalCode(): string;
  setQteTotalCode(value: string): ICPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICPE.AsObject;
  static toObject(includeInstance: boolean, msg: ICPE): ICPE.AsObject;
  static serializeBinaryToWriter(message: ICPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICPE;
  static deserializeBinaryFromReader(message: ICPE, reader: jspb.BinaryReader): ICPE;
}

export namespace ICPE {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    code: string,
    description: string,
    qteNv1: string,
    qteTotalRef: string,
    qteTotalCode: string,
  }
}

