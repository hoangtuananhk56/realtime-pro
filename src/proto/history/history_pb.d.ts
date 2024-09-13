import * as jspb from 'google-protobuf'

import * as proto_reference_reference_pb from '../../proto/reference/reference_pb'; // proto import: "proto/reference/reference.proto"


export class MetaData extends jspb.Message {
  getCount(): number;
  setCount(value: number): MetaData;

  getOffset(): number;
  setOffset(value: number): MetaData;

  getLimit(): number;
  setLimit(value: number): MetaData;

  getTotal(): number;
  setTotal(value: number): MetaData;

  getCountHistory(): number;
  setCountHistory(value: number): MetaData;

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
    countHistory: number,
  }
}

export class HistoryChange extends jspb.Message {
  getEventType(): string;
  setEventType(value: string): HistoryChange;

  getField(): string;
  setField(value: string): HistoryChange;

  getValue(): string;
  setValue(value: string): HistoryChange;

  getOldValue(): string;
  setOldValue(value: string): HistoryChange;

  getNewValue(): string;
  setNewValue(value: string): HistoryChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryChange.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryChange): HistoryChange.AsObject;
  static serializeBinaryToWriter(message: HistoryChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryChange;
  static deserializeBinaryFromReader(message: HistoryChange, reader: jspb.BinaryReader): HistoryChange;
}

export namespace HistoryChange {
  export type AsObject = {
    eventType: string,
    field: string,
    value: string,
    oldValue: string,
    newValue: string,
  }
}

export class History extends jspb.Message {
  getId(): string;
  setId(value: string): History;

  getCreatedAt(): number;
  setCreatedAt(value: number): History;

  getMovementType(): string;
  setMovementType(value: string): History;

  getMovementState(): string;
  setMovementState(value: string): History;

  getObjectType(): string;
  setObjectType(value: string): History;

  getObjectId(): string;
  setObjectId(value: string): History;

  getObjectNumber(): string;
  setObjectNumber(value: string): History;

  getCode(): string;
  setCode(value: string): History;

  getDescription(): string;
  setDescription(value: string): History;

  getUserId(): string;
  setUserId(value: string): History;

  getSscc(): string;
  setSscc(value: string): History;

  getQte(): number;
  setQte(value: number): History;

  getOld(): proto_reference_reference_pb.Reference | undefined;
  setOld(value?: proto_reference_reference_pb.Reference): History;
  hasOld(): boolean;
  clearOld(): History;

  getNew(): proto_reference_reference_pb.Reference | undefined;
  setNew(value?: proto_reference_reference_pb.Reference): History;
  hasNew(): boolean;
  clearNew(): History;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): History;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): History;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): History;

  getChrono(): string;
  setChrono(value: string): History;

  getAction(): string;
  setAction(value: string): History;

  getLocationAddress(): string;
  setLocationAddress(value: string): History;

  getEventType(): string;
  setEventType(value: string): History;

  getObjectSearchType(): string;
  setObjectSearchType(value: string): History;

  getChangesList(): Array<HistoryChange>;
  setChangesList(value: Array<HistoryChange>): History;
  clearChangesList(): History;
  addChanges(value?: HistoryChange, index?: number): HistoryChange;

  getUserName(): string;
  setUserName(value: string): History;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): History;

  getMissionId(): string;
  setMissionId(value: string): History;

  getPreviousLocation(): string;
  setPreviousLocation(value: string): History;

  getCurrentLocation(): string;
  setCurrentLocation(value: string): History;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): History.AsObject;
  static toObject(includeInstance: boolean, msg: History): History.AsObject;
  static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): History;
  static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
  export type AsObject = {
    id: string,
    createdAt: number,
    movementType: string,
    movementState: string,
    objectType: string,
    objectId: string,
    objectNumber: string,
    code: string,
    description: string,
    userId: string,
    sscc: string,
    qte: number,
    old?: proto_reference_reference_pb.Reference.AsObject,
    pb_new?: proto_reference_reference_pb.Reference.AsObject,
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    chrono: string,
    action: string,
    locationAddress: string,
    eventType: string,
    objectSearchType: string,
    changesList: Array<HistoryChange.AsObject>,
    userName: string,
    referenceNumber: string,
    missionId: string,
    previousLocation: string,
    currentLocation: string,
  }

  export enum OldCase { 
    _OLD_NOT_SET = 0,
    OLD = 13,
  }

  export enum NewCase { 
    _NEW_NOT_SET = 0,
    NEW = 14,
  }
}

export class GetHistoryRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetHistoryRequest;

  getOffset(): number;
  setOffset(value: number): GetHistoryRequest;

  getFrom(): number;
  setFrom(value: number): GetHistoryRequest;

  getTo(): number;
  setTo(value: number): GetHistoryRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetHistoryRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetHistoryRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetHistoryRequest;

  getChrono(): string;
  setChrono(value: string): GetHistoryRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): GetHistoryRequest;
  clearUserIdsList(): GetHistoryRequest;
  addUserIds(value: string, index?: number): GetHistoryRequest;

  getObjectSearchTypesList(): Array<string>;
  setObjectSearchTypesList(value: Array<string>): GetHistoryRequest;
  clearObjectSearchTypesList(): GetHistoryRequest;
  addObjectSearchTypes(value: string, index?: number): GetHistoryRequest;

  getObjectNumber(): string;
  setObjectNumber(value: string): GetHistoryRequest;

  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): GetHistoryRequest;
  clearActionsList(): GetHistoryRequest;
  addActions(value: string, index?: number): GetHistoryRequest;

  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): GetHistoryRequest;
  clearTypesList(): GetHistoryRequest;
  addTypes(value: string, index?: number): GetHistoryRequest;

  getOrderBy(): string;
  setOrderBy(value: string): GetHistoryRequest;

  getOrder(): number;
  setOrder(value: number): GetHistoryRequest;

  getClientId(): string;
  setClientId(value: string): GetHistoryRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetHistoryRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryRequest): GetHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryRequest;
  static deserializeBinaryFromReader(message: GetHistoryRequest, reader: jspb.BinaryReader): GetHistoryRequest;
}

export namespace GetHistoryRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    from: number,
    to: number,
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    chrono: string,
    userIdsList: Array<string>,
    objectSearchTypesList: Array<string>,
    objectNumber: string,
    actionsList: Array<string>,
    typesList: Array<string>,
    orderBy: string,
    order: number,
    clientId: string,
    companyId: string,
    warehouseId: string,
  }
}

export class GetHistoryResponse extends jspb.Message {
  getEntryList(): Array<History>;
  setEntryList(value: Array<History>): GetHistoryResponse;
  clearEntryList(): GetHistoryResponse;
  addEntry(value?: History, index?: number): History;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetHistoryResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetHistoryResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryResponse): GetHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryResponse;
  static deserializeBinaryFromReader(message: GetHistoryResponse, reader: jspb.BinaryReader): GetHistoryResponse;
}

export namespace GetHistoryResponse {
  export type AsObject = {
    entryList: Array<History.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getName(): string;
  setName(value: string): User;

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
    name: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetUserRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetUserRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetUserRequest;

  getClientId(): string;
  setClientId(value: string): GetUserRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetUserRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    clientCodeNom: string,
    warehouseCodeNom: string,
    companyCodeNom: string,
    clientId: string,
    warehouseId: string,
    companyId: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getEntryList(): Array<User>;
  setEntryList(value: Array<User>): GetUserResponse;
  clearEntryList(): GetUserResponse;
  addEntry(value?: User, index?: number): User;

  getMessageerror(): string;
  setMessageerror(value: string): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    entryList: Array<User.AsObject>,
    messageerror: string,
  }
}

