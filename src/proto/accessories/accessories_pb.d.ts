import * as jspb from 'google-protobuf'



export class MetaData extends jspb.Message {
  getCount(): number;
  setCount(value: number): MetaData;

  getOffset(): number;
  setOffset(value: number): MetaData;

  getLimit(): number;
  setLimit(value: number): MetaData;

  getTotal(): number;
  setTotal(value: number): MetaData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaData.AsObject;
  static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
  static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaData;
  static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
}

export namespace MetaData {
  export type AsObject = {
    count: number,
    offset: number,
    limit: number,
    total: number,
  }
}

export class ClientCompany extends jspb.Message {
  getCreateAt(): number;
  setCreateAt(value: number): ClientCompany;

  getUpdateAt(): number;
  setUpdateAt(value: number): ClientCompany;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientCompany;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ClientCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCompany.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCompany): ClientCompany.AsObject;
  static serializeBinaryToWriter(message: ClientCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCompany;
  static deserializeBinaryFromReader(message: ClientCompany, reader: jspb.BinaryReader): ClientCompany;
}

export namespace ClientCompany {
  export type AsObject = {
    createAt: number,
    updateAt: number,
    clientCodeNom: string,
    companyCodeNom: string,
  }
}

export class WarehouseClient extends jspb.Message {
  getCreateAt(): number;
  setCreateAt(value: number): WarehouseClient;

  getUpdateAt(): number;
  setUpdateAt(value: number): WarehouseClient;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): WarehouseClient;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseClient.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseClient): WarehouseClient.AsObject;
  static serializeBinaryToWriter(message: WarehouseClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseClient;
  static deserializeBinaryFromReader(message: WarehouseClient, reader: jspb.BinaryReader): WarehouseClient;
}

export namespace WarehouseClient {
  export type AsObject = {
    createAt: number,
    updateAt: number,
    clientCodeNom: string,
    warehouseCodeNom: string,
  }
}

export class WarehouseCompany extends jspb.Message {
  getCreateAt(): number;
  setCreateAt(value: number): WarehouseCompany;

  getUpdateAt(): number;
  setUpdateAt(value: number): WarehouseCompany;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseCompany;

  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseCompany;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): WarehouseCompany;

  getCompanyId(): string;
  setCompanyId(value: string): WarehouseCompany;

  getIsBlock(): boolean;
  setIsBlock(value: boolean): WarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseCompany.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseCompany): WarehouseCompany.AsObject;
  static serializeBinaryToWriter(message: WarehouseCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseCompany;
  static deserializeBinaryFromReader(message: WarehouseCompany, reader: jspb.BinaryReader): WarehouseCompany;
}

export namespace WarehouseCompany {
  export type AsObject = {
    createAt: number,
    updateAt: number,
    warehouseCodeNom: string,
    warehouseId: string,
    companyCodeNom: string,
    companyId: string,
    isBlock: boolean,
  }
}

export class ClientWarehouseCompany extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ClientWarehouseCompany;

  getCompanyCodeNom(): number;
  setCompanyCodeNom(value: number): ClientWarehouseCompany;

  getClientCodeNom(): number;
  setClientCodeNom(value: number): ClientWarehouseCompany;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): ClientWarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientWarehouseCompany.AsObject;
  static toObject(includeInstance: boolean, msg: ClientWarehouseCompany): ClientWarehouseCompany.AsObject;
  static serializeBinaryToWriter(message: ClientWarehouseCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientWarehouseCompany;
  static deserializeBinaryFromReader(message: ClientWarehouseCompany, reader: jspb.BinaryReader): ClientWarehouseCompany;
}

export namespace ClientWarehouseCompany {
  export type AsObject = {
    userId: string,
    companyCodeNom: number,
    clientCodeNom: number,
    warehouseCodeNom: string,
  }
}

