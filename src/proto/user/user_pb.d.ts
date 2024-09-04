import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getCreateAt(): number;
  setCreateAt(value: number): User;

  getUpdateAt(): number;
  setUpdateAt(value: number): User;

  getUsername(): string;
  setUsername(value: string): User;

  getFirstname(): string;
  setFirstname(value: string): User;

  getLastname(): string;
  setLastname(value: string): User;

  getAddress(): string;
  setAddress(value: string): User;

  getDepartmentId(): string;
  setDepartmentId(value: string): User;

  getCompanyId(): string;
  setCompanyId(value: string): User;

  getIsVendor(): boolean;
  setIsVendor(value: boolean): User;

  getVendorId(): string;
  setVendorId(value: string): User;

  getCode(): string;
  setCode(value: string): User;

  getClientId(): string;
  setClientId(value: string): User;

  getRole(): string;
  setRole(value: string): User;

  getWarehouseId(): string;
  setWarehouseId(value: string): User;

  getPreNom(): string;
  setPreNom(value: string): User;

  getNom(): string;
  setNom(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    username: string,
    firstname: string,
    lastname: string,
    address: string,
    departmentId: string,
    companyId: string,
    isVendor: boolean,
    vendorId: string,
    code: string,
    clientId: string,
    role: string,
    warehouseId: string,
    preNom: string,
    nom: string,
  }
}

