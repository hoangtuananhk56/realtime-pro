import * as jspb from 'google-protobuf'



export class Warehouse extends jspb.Message {
  getId(): string;
  setId(value: string): Warehouse;
  hasId(): boolean;
  clearId(): Warehouse;

  getCreateAt(): number;
  setCreateAt(value: number): Warehouse;
  hasCreateAt(): boolean;
  clearCreateAt(): Warehouse;

  getUpdateAt(): number;
  setUpdateAt(value: number): Warehouse;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Warehouse;

  getNom(): string;
  setNom(value: string): Warehouse;

  getAdresse(): string;
  setAdresse(value: string): Warehouse;

  getCode(): string;
  setCode(value: string): Warehouse;

  getCodeNom(): string;
  setCodeNom(value: string): Warehouse;

  getHeight(): number;
  setHeight(value: number): Warehouse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Warehouse.AsObject;
  static toObject(includeInstance: boolean, msg: Warehouse): Warehouse.AsObject;
  static serializeBinaryToWriter(message: Warehouse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Warehouse;
  static deserializeBinaryFromReader(message: Warehouse, reader: jspb.BinaryReader): Warehouse;
}

export namespace Warehouse {
  export type AsObject = {
    id?: string,
    createAt?: number,
    updateAt?: number,
    nom: string,
    adresse: string,
    code: string,
    codeNom: string,
    height: number,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum CreateAtCase { 
    _CREATE_AT_NOT_SET = 0,
    CREATE_AT = 2,
  }

  export enum UpdateAtCase { 
    _UPDATE_AT_NOT_SET = 0,
    UPDATE_AT = 3,
  }
}

