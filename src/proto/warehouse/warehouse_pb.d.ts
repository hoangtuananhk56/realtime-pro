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

export class CreateRequest extends jspb.Message {
  getEntry(): Warehouse | undefined;
  setEntry(value?: Warehouse): CreateRequest;
  hasEntry(): boolean;
  clearEntry(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    entry?: Warehouse.AsObject,
  }
}

export class Response extends jspb.Message {
  getEntry(): Warehouse | undefined;
  setEntry(value?: Warehouse): Response;
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
    entry?: Warehouse.AsObject,
    messageerror: string,
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

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Warehouse>;
  setEntryList(value: Array<Warehouse>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Warehouse, index?: number): Warehouse;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetAllResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetAllResponse;

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
    entryList: Array<Warehouse.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
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

export class ValidDeletingWarehouseRequest extends jspb.Message {
  getWarehouseId(): string;
  setWarehouseId(value: string): ValidDeletingWarehouseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidDeletingWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidDeletingWarehouseRequest): ValidDeletingWarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: ValidDeletingWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidDeletingWarehouseRequest;
  static deserializeBinaryFromReader(message: ValidDeletingWarehouseRequest, reader: jspb.BinaryReader): ValidDeletingWarehouseRequest;
}

export namespace ValidDeletingWarehouseRequest {
  export type AsObject = {
    warehouseId: string,
  }
}

export class ValidDeletingWarehouseResponse extends jspb.Message {
  getCanDelete(): boolean;
  setCanDelete(value: boolean): ValidDeletingWarehouseResponse;

  getMessageerror(): string;
  setMessageerror(value: string): ValidDeletingWarehouseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidDeletingWarehouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidDeletingWarehouseResponse): ValidDeletingWarehouseResponse.AsObject;
  static serializeBinaryToWriter(message: ValidDeletingWarehouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidDeletingWarehouseResponse;
  static deserializeBinaryFromReader(message: ValidDeletingWarehouseResponse, reader: jspb.BinaryReader): ValidDeletingWarehouseResponse;
}

export namespace ValidDeletingWarehouseResponse {
  export type AsObject = {
    canDelete: boolean,
    messageerror: string,
  }
}

export class HookDeletingWarehouseRequest extends jspb.Message {
  getWarehouseId(): string;
  setWarehouseId(value: string): HookDeletingWarehouseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HookDeletingWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HookDeletingWarehouseRequest): HookDeletingWarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: HookDeletingWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HookDeletingWarehouseRequest;
  static deserializeBinaryFromReader(message: HookDeletingWarehouseRequest, reader: jspb.BinaryReader): HookDeletingWarehouseRequest;
}

export namespace HookDeletingWarehouseRequest {
  export type AsObject = {
    warehouseId: string,
  }
}

export class HookDeletingWarehouseResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): HookDeletingWarehouseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HookDeletingWarehouseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HookDeletingWarehouseResponse): HookDeletingWarehouseResponse.AsObject;
  static serializeBinaryToWriter(message: HookDeletingWarehouseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HookDeletingWarehouseResponse;
  static deserializeBinaryFromReader(message: HookDeletingWarehouseResponse, reader: jspb.BinaryReader): HookDeletingWarehouseResponse;
}

export namespace HookDeletingWarehouseResponse {
  export type AsObject = {
    messageerror: string,
  }
}

