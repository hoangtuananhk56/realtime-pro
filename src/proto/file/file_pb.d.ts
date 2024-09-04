import * as jspb from 'google-protobuf'



export class AttFile extends jspb.Message {
  getId(): string;
  setId(value: string): AttFile;

  getCreateAt(): number;
  setCreateAt(value: number): AttFile;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttFile;

  getName(): string;
  setName(value: string): AttFile;

  getAttenduId(): string;
  setAttenduId(value: string): AttFile;

  getDescription(): string;
  setDescription(value: string): AttFile;

  getPath(): string;
  setPath(value: string): AttFile;

  getFileType(): string;
  setFileType(value: string): AttFile;

  getFileSize(): number;
  setFileSize(value: number): AttFile;

  getSource(): string;
  setSource(value: string): AttFile;

  getSscc(): string;
  setSscc(value: string): AttFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttFile.AsObject;
  static toObject(includeInstance: boolean, msg: AttFile): AttFile.AsObject;
  static serializeBinaryToWriter(message: AttFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttFile;
  static deserializeBinaryFromReader(message: AttFile, reader: jspb.BinaryReader): AttFile;
}

export namespace AttFile {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    attenduId: string,
    description: string,
    path: string,
    fileType: string,
    fileSize: number,
    source: string,
    sscc: string,
  }
}

export class ComFile extends jspb.Message {
  getId(): string;
  setId(value: string): ComFile;

  getCreateAt(): number;
  setCreateAt(value: number): ComFile;

  getUpdateAt(): number;
  setUpdateAt(value: number): ComFile;

  getName(): string;
  setName(value: string): ComFile;

  getCommandeId(): string;
  setCommandeId(value: string): ComFile;

  getDescription(): string;
  setDescription(value: string): ComFile;

  getPath(): string;
  setPath(value: string): ComFile;

  getFileType(): string;
  setFileType(value: string): ComFile;

  getFileSize(): number;
  setFileSize(value: number): ComFile;

  getSource(): string;
  setSource(value: string): ComFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComFile.AsObject;
  static toObject(includeInstance: boolean, msg: ComFile): ComFile.AsObject;
  static serializeBinaryToWriter(message: ComFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComFile;
  static deserializeBinaryFromReader(message: ComFile, reader: jspb.BinaryReader): ComFile;
}

export namespace ComFile {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    commandeId: string,
    description: string,
    path: string,
    fileType: string,
    fileSize: number,
    source: string,
  }
}

