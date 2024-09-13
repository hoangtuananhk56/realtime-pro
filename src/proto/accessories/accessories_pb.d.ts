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

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllRequest;
  static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class GetCompanyWarehouseByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetCompanyWarehouseByUserIdRequest;

  getClientId(): string;
  setClientId(value: string): GetCompanyWarehouseByUserIdRequest;

  getIsBlock(): boolean;
  setIsBlock(value: boolean): GetCompanyWarehouseByUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyWarehouseByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyWarehouseByUserIdRequest): GetCompanyWarehouseByUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetCompanyWarehouseByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyWarehouseByUserIdRequest;
  static deserializeBinaryFromReader(message: GetCompanyWarehouseByUserIdRequest, reader: jspb.BinaryReader): GetCompanyWarehouseByUserIdRequest;
}

export namespace GetCompanyWarehouseByUserIdRequest {
  export type AsObject = {
    userId: string,
    clientId: string,
    isBlock: boolean,
  }
}

export class GetCompanyWarehouseRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyWarehouseRequest): GetCompanyWarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: GetCompanyWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyWarehouseRequest;
  static deserializeBinaryFromReader(message: GetCompanyWarehouseRequest, reader: jspb.BinaryReader): GetCompanyWarehouseRequest;
}

export namespace GetCompanyWarehouseRequest {
  export type AsObject = {
  }
}

export class GetCompanyWarehouseResponse extends jspb.Message {
  getEntryList(): Array<WarehouseCompany>;
  setEntryList(value: Array<WarehouseCompany>): GetCompanyWarehouseResponse;
  clearEntryList(): GetCompanyWarehouseResponse;
  addEntry(value?: WarehouseCompany, index?: number): WarehouseCompany;

  getMessageerror(): string;
  setMessageerror(value: string): GetCompanyWarehouseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyWarehouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyWarehouseResponse): GetCompanyWarehouseResponse.AsObject;
  static serializeBinaryToWriter(message: GetCompanyWarehouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyWarehouseResponse;
  static deserializeBinaryFromReader(message: GetCompanyWarehouseResponse, reader: jspb.BinaryReader): GetCompanyWarehouseResponse;
}

export namespace GetCompanyWarehouseResponse {
  export type AsObject = {
    entryList: Array<WarehouseCompany.AsObject>,
    messageerror: string,
  }
}

export class CodeNomMess extends jspb.Message {
  getId(): string;
  setId(value: string): CodeNomMess;

  getCodeNom(): string;
  setCodeNom(value: string): CodeNomMess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeNomMess.AsObject;
  static toObject(includeInstance: boolean, msg: CodeNomMess): CodeNomMess.AsObject;
  static serializeBinaryToWriter(message: CodeNomMess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeNomMess;
  static deserializeBinaryFromReader(message: CodeNomMess, reader: jspb.BinaryReader): CodeNomMess;
}

export namespace CodeNomMess {
  export type AsObject = {
    id: string,
    codeNom: string,
  }
}

export class NomMess extends jspb.Message {
  getId(): string;
  setId(value: string): NomMess;

  getNom(): string;
  setNom(value: string): NomMess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NomMess.AsObject;
  static toObject(includeInstance: boolean, msg: NomMess): NomMess.AsObject;
  static serializeBinaryToWriter(message: NomMess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NomMess;
  static deserializeBinaryFromReader(message: NomMess, reader: jspb.BinaryReader): NomMess;
}

export namespace NomMess {
  export type AsObject = {
    id: string,
    nom: string,
  }
}

export class FilterForCompanyRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): FilterForCompanyRequest;

  getUserRole(): string;
  setUserRole(value: string): FilterForCompanyRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): FilterForCompanyRequest;

  getClientId(): string;
  setClientId(value: string): FilterForCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForCompanyRequest): FilterForCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: FilterForCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForCompanyRequest;
  static deserializeBinaryFromReader(message: FilterForCompanyRequest, reader: jspb.BinaryReader): FilterForCompanyRequest;
}

export namespace FilterForCompanyRequest {
  export type AsObject = {
    userId: string,
    userRole: string,
    warehouseId: string,
    clientId: string,
  }
}

export class FilterForCompanyResponse extends jspb.Message {
  getEntryList(): Array<CodeNomMess>;
  setEntryList(value: Array<CodeNomMess>): FilterForCompanyResponse;
  clearEntryList(): FilterForCompanyResponse;
  addEntry(value?: CodeNomMess, index?: number): CodeNomMess;

  getMessageerror(): string;
  setMessageerror(value: string): FilterForCompanyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForCompanyResponse): FilterForCompanyResponse.AsObject;
  static serializeBinaryToWriter(message: FilterForCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForCompanyResponse;
  static deserializeBinaryFromReader(message: FilterForCompanyResponse, reader: jspb.BinaryReader): FilterForCompanyResponse;
}

export namespace FilterForCompanyResponse {
  export type AsObject = {
    entryList: Array<CodeNomMess.AsObject>,
    messageerror: string,
  }
}

export class FilterForClientRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): FilterForClientRequest;

  getUserRole(): string;
  setUserRole(value: string): FilterForClientRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): FilterForClientRequest;

  getCompanyId(): string;
  setCompanyId(value: string): FilterForClientRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForClientRequest): FilterForClientRequest.AsObject;
  static serializeBinaryToWriter(message: FilterForClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForClientRequest;
  static deserializeBinaryFromReader(message: FilterForClientRequest, reader: jspb.BinaryReader): FilterForClientRequest;
}

export namespace FilterForClientRequest {
  export type AsObject = {
    userId: string,
    userRole: string,
    warehouseId: string,
    companyId: string,
  }
}

export class FilterForClientResponse extends jspb.Message {
  getEntryList(): Array<CodeNomMess>;
  setEntryList(value: Array<CodeNomMess>): FilterForClientResponse;
  clearEntryList(): FilterForClientResponse;
  addEntry(value?: CodeNomMess, index?: number): CodeNomMess;

  getMessageerror(): string;
  setMessageerror(value: string): FilterForClientResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForClientResponse): FilterForClientResponse.AsObject;
  static serializeBinaryToWriter(message: FilterForClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForClientResponse;
  static deserializeBinaryFromReader(message: FilterForClientResponse, reader: jspb.BinaryReader): FilterForClientResponse;
}

export namespace FilterForClientResponse {
  export type AsObject = {
    entryList: Array<CodeNomMess.AsObject>,
    messageerror: string,
  }
}

export class FilterForWarehouseRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): FilterForWarehouseRequest;

  getUserRole(): string;
  setUserRole(value: string): FilterForWarehouseRequest;

  getCompanyId(): string;
  setCompanyId(value: string): FilterForWarehouseRequest;

  getClientId(): string;
  setClientId(value: string): FilterForWarehouseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForWarehouseRequest): FilterForWarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: FilterForWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForWarehouseRequest;
  static deserializeBinaryFromReader(message: FilterForWarehouseRequest, reader: jspb.BinaryReader): FilterForWarehouseRequest;
}

export namespace FilterForWarehouseRequest {
  export type AsObject = {
    userId: string,
    userRole: string,
    companyId: string,
    clientId: string,
  }
}

export class FilterForWarehouseResponse extends jspb.Message {
  getEntryList(): Array<CodeNomMess>;
  setEntryList(value: Array<CodeNomMess>): FilterForWarehouseResponse;
  clearEntryList(): FilterForWarehouseResponse;
  addEntry(value?: CodeNomMess, index?: number): CodeNomMess;

  getMessageerror(): string;
  setMessageerror(value: string): FilterForWarehouseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForWarehouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForWarehouseResponse): FilterForWarehouseResponse.AsObject;
  static serializeBinaryToWriter(message: FilterForWarehouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForWarehouseResponse;
  static deserializeBinaryFromReader(message: FilterForWarehouseResponse, reader: jspb.BinaryReader): FilterForWarehouseResponse;
}

export namespace FilterForWarehouseResponse {
  export type AsObject = {
    entryList: Array<CodeNomMess.AsObject>,
    messageerror: string,
  }
}

export class FilterForNiveauRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): FilterForNiveauRequest;

  getUserRole(): string;
  setUserRole(value: string): FilterForNiveauRequest;

  getClientId(): string;
  setClientId(value: string): FilterForNiveauRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): FilterForNiveauRequest;

  getCompanyId(): string;
  setCompanyId(value: string): FilterForNiveauRequest;

  getType(): string;
  setType(value: string): FilterForNiveauRequest;
  hasType(): boolean;
  clearType(): FilterForNiveauRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForNiveauRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForNiveauRequest): FilterForNiveauRequest.AsObject;
  static serializeBinaryToWriter(message: FilterForNiveauRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForNiveauRequest;
  static deserializeBinaryFromReader(message: FilterForNiveauRequest, reader: jspb.BinaryReader): FilterForNiveauRequest;
}

export namespace FilterForNiveauRequest {
  export type AsObject = {
    userId: string,
    userRole: string,
    clientId: string,
    warehouseId: string,
    companyId: string,
    type?: string,
  }

  export enum TypeCase { 
    _TYPE_NOT_SET = 0,
    TYPE = 6,
  }
}

export class FilterForNiveauResponse extends jspb.Message {
  getEntryList(): Array<string>;
  setEntryList(value: Array<string>): FilterForNiveauResponse;
  clearEntryList(): FilterForNiveauResponse;
  addEntry(value: string, index?: number): FilterForNiveauResponse;

  getMessageerror(): string;
  setMessageerror(value: string): FilterForNiveauResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterForNiveauResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterForNiveauResponse): FilterForNiveauResponse.AsObject;
  static serializeBinaryToWriter(message: FilterForNiveauResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterForNiveauResponse;
  static deserializeBinaryFromReader(message: FilterForNiveauResponse, reader: jspb.BinaryReader): FilterForNiveauResponse;
}

export namespace FilterForNiveauResponse {
  export type AsObject = {
    entryList: Array<string>,
    messageerror: string,
  }
}

export class GetTotalRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetTotalRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetTotalRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetTotalRequest;

  getType(): string;
  setType(value: string): GetTotalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTotalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTotalRequest): GetTotalRequest.AsObject;
  static serializeBinaryToWriter(message: GetTotalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTotalRequest;
  static deserializeBinaryFromReader(message: GetTotalRequest, reader: jspb.BinaryReader): GetTotalRequest;
}

export namespace GetTotalRequest {
  export type AsObject = {
    clientId: string,
    companyId: string,
    warehouseId: string,
    type: string,
  }
}

export class GetTotalResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): GetTotalResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetTotalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTotalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTotalResponse): GetTotalResponse.AsObject;
  static serializeBinaryToWriter(message: GetTotalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTotalResponse;
  static deserializeBinaryFromReader(message: GetTotalResponse, reader: jspb.BinaryReader): GetTotalResponse;
}

export namespace GetTotalResponse {
  export type AsObject = {
    total: number,
    messageerror: string,
  }
}

export class FilterReferenceItem extends jspb.Message {
  getId(): string;
  setId(value: string): FilterReferenceItem;

  getName(): string;
  setName(value: string): FilterReferenceItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterReferenceItem.AsObject;
  static toObject(includeInstance: boolean, msg: FilterReferenceItem): FilterReferenceItem.AsObject;
  static serializeBinaryToWriter(message: FilterReferenceItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterReferenceItem;
  static deserializeBinaryFromReader(message: FilterReferenceItem, reader: jspb.BinaryReader): FilterReferenceItem;
}

export namespace FilterReferenceItem {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class FilterMemberItem extends jspb.Message {
  getId(): string;
  setId(value: string): FilterMemberItem;

  getName(): string;
  setName(value: string): FilterMemberItem;

  getPreName(): string;
  setPreName(value: string): FilterMemberItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterMemberItem.AsObject;
  static toObject(includeInstance: boolean, msg: FilterMemberItem): FilterMemberItem.AsObject;
  static serializeBinaryToWriter(message: FilterMemberItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterMemberItem;
  static deserializeBinaryFromReader(message: FilterMemberItem, reader: jspb.BinaryReader): FilterMemberItem;
}

export namespace FilterMemberItem {
  export type AsObject = {
    id: string,
    name: string,
    preName: string,
  }
}

export class GetDashboardFilterResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): GetDashboardFilterResponse;

  getReferencesList(): Array<FilterReferenceItem>;
  setReferencesList(value: Array<FilterReferenceItem>): GetDashboardFilterResponse;
  clearReferencesList(): GetDashboardFilterResponse;
  addReferences(value?: FilterReferenceItem, index?: number): FilterReferenceItem;

  getMembersList(): Array<FilterMemberItem>;
  setMembersList(value: Array<FilterMemberItem>): GetDashboardFilterResponse;
  clearMembersList(): GetDashboardFilterResponse;
  addMembers(value?: FilterMemberItem, index?: number): FilterMemberItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardFilterResponse): GetDashboardFilterResponse.AsObject;
  static serializeBinaryToWriter(message: GetDashboardFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardFilterResponse;
  static deserializeBinaryFromReader(message: GetDashboardFilterResponse, reader: jspb.BinaryReader): GetDashboardFilterResponse;
}

export namespace GetDashboardFilterResponse {
  export type AsObject = {
    messageerror: string,
    referencesList: Array<FilterReferenceItem.AsObject>,
    membersList: Array<FilterMemberItem.AsObject>,
  }
}

export class GetDashboardInformationRequest extends jspb.Message {
  getClientIdList(): Array<string>;
  setClientIdList(value: Array<string>): GetDashboardInformationRequest;
  clearClientIdList(): GetDashboardInformationRequest;
  addClientId(value: string, index?: number): GetDashboardInformationRequest;

  getCompanyIdList(): Array<string>;
  setCompanyIdList(value: Array<string>): GetDashboardInformationRequest;
  clearCompanyIdList(): GetDashboardInformationRequest;
  addCompanyId(value: string, index?: number): GetDashboardInformationRequest;

  getWarehouseIdList(): Array<string>;
  setWarehouseIdList(value: Array<string>): GetDashboardInformationRequest;
  clearWarehouseIdList(): GetDashboardInformationRequest;
  addWarehouseId(value: string, index?: number): GetDashboardInformationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardInformationRequest): GetDashboardInformationRequest.AsObject;
  static serializeBinaryToWriter(message: GetDashboardInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardInformationRequest;
  static deserializeBinaryFromReader(message: GetDashboardInformationRequest, reader: jspb.BinaryReader): GetDashboardInformationRequest;
}

export namespace GetDashboardInformationRequest {
  export type AsObject = {
    clientIdList: Array<string>,
    companyIdList: Array<string>,
    warehouseIdList: Array<string>,
  }
}

export class ValidWarningDluoRequest extends jspb.Message {
  getDluo(): number;
  setDluo(value: number): ValidWarningDluoRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): ValidWarningDluoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidWarningDluoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidWarningDluoRequest): ValidWarningDluoRequest.AsObject;
  static serializeBinaryToWriter(message: ValidWarningDluoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidWarningDluoRequest;
  static deserializeBinaryFromReader(message: ValidWarningDluoRequest, reader: jspb.BinaryReader): ValidWarningDluoRequest;
}

export namespace ValidWarningDluoRequest {
  export type AsObject = {
    dluo: number,
    warehouseId: string,
  }
}

export class ValidWarningDluoResponse extends jspb.Message {
  getIsWarning(): boolean;
  setIsWarning(value: boolean): ValidWarningDluoResponse;

  getMessageError(): string;
  setMessageError(value: string): ValidWarningDluoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidWarningDluoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidWarningDluoResponse): ValidWarningDluoResponse.AsObject;
  static serializeBinaryToWriter(message: ValidWarningDluoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidWarningDluoResponse;
  static deserializeBinaryFromReader(message: ValidWarningDluoResponse, reader: jspb.BinaryReader): ValidWarningDluoResponse;
}

export namespace ValidWarningDluoResponse {
  export type AsObject = {
    isWarning: boolean,
    messageError: string,
  }
}

