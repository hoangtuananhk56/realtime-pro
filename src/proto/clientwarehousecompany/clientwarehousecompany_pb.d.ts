import * as jspb from 'google-protobuf'



export class ClientWarehouseCompany extends jspb.Message {
  getId(): string;
  setId(value: string): ClientWarehouseCompany;

  getCreateAt(): number;
  setCreateAt(value: number): ClientWarehouseCompany;

  getUpdateAt(): number;
  setUpdateAt(value: number): ClientWarehouseCompany;

  getUserId(): string;
  setUserId(value: string): ClientWarehouseCompany;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ClientWarehouseCompany;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientWarehouseCompany;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): ClientWarehouseCompany;

  getCompanyId(): string;
  setCompanyId(value: string): ClientWarehouseCompany;

  getClientId(): string;
  setClientId(value: string): ClientWarehouseCompany;

  getWarehouseId(): string;
  setWarehouseId(value: string): ClientWarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientWarehouseCompany.AsObject;
  static toObject(includeInstance: boolean, msg: ClientWarehouseCompany): ClientWarehouseCompany.AsObject;
  static serializeBinaryToWriter(message: ClientWarehouseCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientWarehouseCompany;
  static deserializeBinaryFromReader(message: ClientWarehouseCompany, reader: jspb.BinaryReader): ClientWarehouseCompany;
}

export namespace ClientWarehouseCompany {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    userId: string,
    companyCodeNom: string,
    clientCodeNom: string,
    warehouseCodeNom: string,
    companyId: string,
    clientId: string,
    warehouseId: string,
  }
}

