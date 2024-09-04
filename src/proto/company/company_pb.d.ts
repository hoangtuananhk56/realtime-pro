import * as jspb from 'google-protobuf'



export class Company extends jspb.Message {
  getId(): string;
  setId(value: string): Company;

  getNom(): string;
  setNom(value: string): Company;

  getCode(): string;
  setCode(value: string): Company;

  getCodeNom(): string;
  setCodeNom(value: string): Company;

  getCreatedAt(): number;
  setCreatedAt(value: number): Company;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Company;

  getPriorityPicking(): boolean;
  setPriorityPicking(value: boolean): Company;

  getWarehouseCompanyList(): Array<WarehouseCompanyTable>;
  setWarehouseCompanyList(value: Array<WarehouseCompanyTable>): Company;
  clearWarehouseCompanyList(): Company;
  addWarehouseCompany(value?: WarehouseCompanyTable, index?: number): WarehouseCompanyTable;

  getBlockDel(): boolean;
  setBlockDel(value: boolean): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    id: string,
    nom: string,
    code: string,
    codeNom: string,
    createdAt: number,
    updatedAt: number,
    priorityPicking: boolean,
    warehouseCompanyList: Array<WarehouseCompanyTable.AsObject>,
    blockDel: boolean,
  }
}

export class WarehouseCompanyTable extends jspb.Message {
  getId(): string;
  setId(value: string): WarehouseCompanyTable;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseCompanyTable;

  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseCompanyTable;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): WarehouseCompanyTable;

  getCompanyId(): string;
  setCompanyId(value: string): WarehouseCompanyTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseCompanyTable.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseCompanyTable): WarehouseCompanyTable.AsObject;
  static serializeBinaryToWriter(message: WarehouseCompanyTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseCompanyTable;
  static deserializeBinaryFromReader(message: WarehouseCompanyTable, reader: jspb.BinaryReader): WarehouseCompanyTable;
}

export namespace WarehouseCompanyTable {
  export type AsObject = {
    id: string,
    warehouseCodeNom: string,
    warehouseId: string,
    companyCodeNom: string,
    companyId: string,
  }
}

