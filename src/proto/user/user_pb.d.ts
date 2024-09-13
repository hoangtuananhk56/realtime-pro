import * as jspb from 'google-protobuf'

import * as proto_authentication_authentication_pb from '../../proto/authentication/authentication_pb'; // proto import: "proto/authentication/authentication.proto"


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

export class UserCreationPayload extends jspb.Message {
  getEntry(): proto_authentication_authentication_pb.User | undefined;
  setEntry(value?: proto_authentication_authentication_pb.User): UserCreationPayload;
  hasEntry(): boolean;
  clearEntry(): UserCreationPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCreationPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UserCreationPayload): UserCreationPayload.AsObject;
  static serializeBinaryToWriter(message: UserCreationPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCreationPayload;
  static deserializeBinaryFromReader(message: UserCreationPayload, reader: jspb.BinaryReader): UserCreationPayload;
}

export namespace UserCreationPayload {
  export type AsObject = {
    entry?: proto_authentication_authentication_pb.User.AsObject,
  }
}

export class Response extends jspb.Message {
  getEntry(): proto_authentication_authentication_pb.User | undefined;
  setEntry(value?: proto_authentication_authentication_pb.User): Response;
  hasEntry(): boolean;
  clearEntry(): Response;

  getMessageerror(): string;
  setMessageerror(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    entry?: proto_authentication_authentication_pb.User.AsObject,
    messageerror: string,
  }
}

export class UserAvailableRequest extends jspb.Message {
  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): UserAvailableRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): UserAvailableRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): UserAvailableRequest;

  getMissionType(): string;
  setMissionType(value: string): UserAvailableRequest;

  getUserId(): string;
  setUserId(value: string): UserAvailableRequest;

  getCompanyId(): string;
  setCompanyId(value: string): UserAvailableRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UserAvailableRequest;

  getClientId(): string;
  setClientId(value: string): UserAvailableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAvailableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserAvailableRequest): UserAvailableRequest.AsObject;
  static serializeBinaryToWriter(message: UserAvailableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAvailableRequest;
  static deserializeBinaryFromReader(message: UserAvailableRequest, reader: jspb.BinaryReader): UserAvailableRequest;
}

export namespace UserAvailableRequest {
  export type AsObject = {
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    missionType: string,
    userId: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<proto_authentication_authentication_pb.User>;
  setEntryList(value: Array<proto_authentication_authentication_pb.User>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: proto_authentication_authentication_pb.User, index?: number): proto_authentication_authentication_pb.User;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllResponse): GetAllResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllResponse;
  static deserializeBinaryFromReader(message: GetAllResponse, reader: jspb.BinaryReader): GetAllResponse;
}

export namespace GetAllResponse {
  export type AsObject = {
    entryList: Array<proto_authentication_authentication_pb.User.AsObject>,
    messageerror: string,
  }
}

export class AssignedMissionResponse extends jspb.Message {
  getEntryList(): Array<AssignedPerStockitResponse>;
  setEntryList(value: Array<AssignedPerStockitResponse>): AssignedMissionResponse;
  clearEntryList(): AssignedMissionResponse;
  addEntry(value?: AssignedPerStockitResponse, index?: number): AssignedPerStockitResponse;

  getMessageerror(): string;
  setMessageerror(value: string): AssignedMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignedMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignedMissionResponse): AssignedMissionResponse.AsObject;
  static serializeBinaryToWriter(message: AssignedMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignedMissionResponse;
  static deserializeBinaryFromReader(message: AssignedMissionResponse, reader: jspb.BinaryReader): AssignedMissionResponse;
}

export namespace AssignedMissionResponse {
  export type AsObject = {
    entryList: Array<AssignedPerStockitResponse.AsObject>,
    messageerror: string,
  }
}

export class AssignedPerStockitResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AssignedPerStockitResponse;

  getNom(): string;
  setNom(value: string): AssignedPerStockitResponse;

  getPreNom(): string;
  setPreNom(value: string): AssignedPerStockitResponse;

  getUserId(): string;
  setUserId(value: string): AssignedPerStockitResponse;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): AssignedPerStockitResponse;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): AssignedPerStockitResponse;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): AssignedPerStockitResponse;

  getAssigned(): number;
  setAssigned(value: number): AssignedPerStockitResponse;

  getInProgress(): number;
  setInProgress(value: number): AssignedPerStockitResponse;

  getCompleted(): number;
  setCompleted(value: number): AssignedPerStockitResponse;

  getCompanyId(): string;
  setCompanyId(value: string): AssignedPerStockitResponse;

  getWarehouseId(): string;
  setWarehouseId(value: string): AssignedPerStockitResponse;

  getClientId(): string;
  setClientId(value: string): AssignedPerStockitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignedPerStockitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignedPerStockitResponse): AssignedPerStockitResponse.AsObject;
  static serializeBinaryToWriter(message: AssignedPerStockitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignedPerStockitResponse;
  static deserializeBinaryFromReader(message: AssignedPerStockitResponse, reader: jspb.BinaryReader): AssignedPerStockitResponse;
}

export namespace AssignedPerStockitResponse {
  export type AsObject = {
    id: string,
    nom: string,
    preNom: string,
    userId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    assigned: number,
    inProgress: number,
    completed: number,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class UserListRequest extends jspb.Message {
  getClientCodeNom(): string;
  setClientCodeNom(value: string): UserListRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): UserListRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): UserListRequest;

  getLimit(): number;
  setLimit(value: number): UserListRequest;

  getOffset(): number;
  setOffset(value: number): UserListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRequest): UserListRequest.AsObject;
  static serializeBinaryToWriter(message: UserListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRequest;
  static deserializeBinaryFromReader(message: UserListRequest, reader: jspb.BinaryReader): UserListRequest;
}

export namespace UserListRequest {
  export type AsObject = {
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    limit: number,
    offset: number,
  }
}

export class UserList extends jspb.Message {
  getId(): string;
  setId(value: string): UserList;

  getRole(): string;
  setRole(value: string): UserList;

  getNom(): string;
  setNom(value: string): UserList;

  getPreNom(): string;
  setPreNom(value: string): UserList;

  getCode(): string;
  setCode(value: string): UserList;

  getMail(): string;
  setMail(value: string): UserList;

  getClientList(): Array<string>;
  setClientList(value: Array<string>): UserList;
  clearClientList(): UserList;
  addClient(value: string, index?: number): UserList;

  getCompanyList(): Array<string>;
  setCompanyList(value: Array<string>): UserList;
  clearCompanyList(): UserList;
  addCompany(value: string, index?: number): UserList;

  getWarehouseList(): Array<string>;
  setWarehouseList(value: Array<string>): UserList;
  clearWarehouseList(): UserList;
  addWarehouse(value: string, index?: number): UserList;

  getAction(): string;
  setAction(value: string): UserList;

  getStatut(): boolean;
  setStatut(value: boolean): UserList;

  getUpdate(): number;
  setUpdate(value: number): UserList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    id: string,
    role: string,
    nom: string,
    preNom: string,
    code: string,
    mail: string,
    clientList: Array<string>,
    companyList: Array<string>,
    warehouseList: Array<string>,
    action: string,
    statut: boolean,
    update: number,
  }
}

export class InfoCommon extends jspb.Message {
  getCodeNom(): string;
  setCodeNom(value: string): InfoCommon;

  getCode(): string;
  setCode(value: string): InfoCommon;

  getNom(): string;
  setNom(value: string): InfoCommon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoCommon.AsObject;
  static toObject(includeInstance: boolean, msg: InfoCommon): InfoCommon.AsObject;
  static serializeBinaryToWriter(message: InfoCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoCommon;
  static deserializeBinaryFromReader(message: InfoCommon, reader: jspb.BinaryReader): InfoCommon;
}

export namespace InfoCommon {
  export type AsObject = {
    codeNom: string,
    code: string,
    nom: string,
  }
}

export class UserListReponse extends jspb.Message {
  getEntryList(): Array<UserList>;
  setEntryList(value: Array<UserList>): UserListReponse;
  clearEntryList(): UserListReponse;
  addEntry(value?: UserList, index?: number): UserList;

  getMessageerror(): string;
  setMessageerror(value: string): UserListReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListReponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserListReponse): UserListReponse.AsObject;
  static serializeBinaryToWriter(message: UserListReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListReponse;
  static deserializeBinaryFromReader(message: UserListReponse, reader: jspb.BinaryReader): UserListReponse;
}

export namespace UserListReponse {
  export type AsObject = {
    entryList: Array<UserList.AsObject>,
    messageerror: string,
  }
}

export class GetAllUsersResponse extends jspb.Message {
  getEntryList(): Array<UserList>;
  setEntryList(value: Array<UserList>): GetAllUsersResponse;
  clearEntryList(): GetAllUsersResponse;
  addEntry(value?: UserList, index?: number): UserList;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetAllUsersResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetAllUsersResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUsersResponse): GetAllUsersResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUsersResponse;
  static deserializeBinaryFromReader(message: GetAllUsersResponse, reader: jspb.BinaryReader): GetAllUsersResponse;
}

export namespace GetAllUsersResponse {
  export type AsObject = {
    entryList: Array<UserList.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

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

export class CodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): CodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CodeRequest): CodeRequest.AsObject;
  static serializeBinaryToWriter(message: CodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeRequest;
  static deserializeBinaryFromReader(message: CodeRequest, reader: jspb.BinaryReader): CodeRequest;
}

export namespace CodeRequest {
  export type AsObject = {
    code: string,
  }
}

