import * as jspb from 'google-protobuf'



export class Matieresdangereuses extends jspb.Message {
  getId(): string;
  setId(value: string): Matieresdangereuses;

  getCreateAt(): number;
  setCreateAt(value: number): Matieresdangereuses;

  getUpdateAt(): number;
  setUpdateAt(value: number): Matieresdangereuses;

  getCode(): string;
  setCode(value: string): Matieresdangereuses;

  getDescription(): string;
  setDescription(value: string): Matieresdangereuses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Matieresdangereuses.AsObject;
  static toObject(includeInstance: boolean, msg: Matieresdangereuses): Matieresdangereuses.AsObject;
  static serializeBinaryToWriter(message: Matieresdangereuses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Matieresdangereuses;
  static deserializeBinaryFromReader(message: Matieresdangereuses, reader: jspb.BinaryReader): Matieresdangereuses;
}

export namespace Matieresdangereuses {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    code: string,
    description: string,
  }
}

