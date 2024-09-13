import * as jspb from 'google-protobuf'



export class Zone extends jspb.Message {
  getId(): string;
  setId(value: string): Zone;

  getName(): string;
  setName(value: string): Zone;

  getWarehouseId(): string;
  setWarehouseId(value: string): Zone;

  getCode(): string;
  setCode(value: string): Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    id: string,
    name: string,
    warehouseId: string,
    code: string,
  }
}

export class ZoneCreateRequest extends jspb.Message {
  getEntry(): Zone | undefined;
  setEntry(value?: Zone): ZoneCreateRequest;
  hasEntry(): boolean;
  clearEntry(): ZoneCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneCreateRequest): ZoneCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ZoneCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneCreateRequest;
  static deserializeBinaryFromReader(message: ZoneCreateRequest, reader: jspb.BinaryReader): ZoneCreateRequest;
}

export namespace ZoneCreateRequest {
  export type AsObject = {
    entry?: Zone.AsObject,
  }
}

export class ZoneResponse extends jspb.Message {
  getEntry(): Zone | undefined;
  setEntry(value?: Zone): ZoneResponse;
  hasEntry(): boolean;
  clearEntry(): ZoneResponse;

  getMessageerror(): string;
  setMessageerror(value: string): ZoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneResponse): ZoneResponse.AsObject;
  static serializeBinaryToWriter(message: ZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneResponse;
  static deserializeBinaryFromReader(message: ZoneResponse, reader: jspb.BinaryReader): ZoneResponse;
}

export namespace ZoneResponse {
  export type AsObject = {
    entry?: Zone.AsObject,
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

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetAllRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetAllRequest;

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
    warehouseCodeNom: string,
    warehouseId: string,
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Zone>;
  setEntryList(value: Array<Zone>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Zone, index?: number): Zone;

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
    entryList: Array<Zone.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class GetZoneByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetZoneByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoneByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoneByIdRequest): GetZoneByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetZoneByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoneByIdRequest;
  static deserializeBinaryFromReader(message: GetZoneByIdRequest, reader: jspb.BinaryReader): GetZoneByIdRequest;
}

export namespace GetZoneByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class CheckCanDeleteZoneByIdRequest extends jspb.Message {
  getZoneId(): string;
  setZoneId(value: string): CheckCanDeleteZoneByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCanDeleteZoneByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCanDeleteZoneByIdRequest): CheckCanDeleteZoneByIdRequest.AsObject;
  static serializeBinaryToWriter(message: CheckCanDeleteZoneByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCanDeleteZoneByIdRequest;
  static deserializeBinaryFromReader(message: CheckCanDeleteZoneByIdRequest, reader: jspb.BinaryReader): CheckCanDeleteZoneByIdRequest;
}

export namespace CheckCanDeleteZoneByIdRequest {
  export type AsObject = {
    zoneId: string,
  }
}

export class CheckCanDeleteZoneByIdResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): CheckCanDeleteZoneByIdResponse;

  getZoneId(): string;
  setZoneId(value: string): CheckCanDeleteZoneByIdResponse;

  getIsUsed(): boolean;
  setIsUsed(value: boolean): CheckCanDeleteZoneByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCanDeleteZoneByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCanDeleteZoneByIdResponse): CheckCanDeleteZoneByIdResponse.AsObject;
  static serializeBinaryToWriter(message: CheckCanDeleteZoneByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCanDeleteZoneByIdResponse;
  static deserializeBinaryFromReader(message: CheckCanDeleteZoneByIdResponse, reader: jspb.BinaryReader): CheckCanDeleteZoneByIdResponse;
}

export namespace CheckCanDeleteZoneByIdResponse {
  export type AsObject = {
    messageError: string,
    zoneId: string,
    isUsed: boolean,
  }
}

