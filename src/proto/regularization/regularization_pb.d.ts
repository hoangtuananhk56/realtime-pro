import * as jspb from 'google-protobuf'



export class RegularizationReason extends jspb.Message {
  getId(): string;
  setId(value: string): RegularizationReason;

  getName(): string;
  setName(value: string): RegularizationReason;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularizationReason.AsObject;
  static toObject(includeInstance: boolean, msg: RegularizationReason): RegularizationReason.AsObject;
  static serializeBinaryToWriter(message: RegularizationReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularizationReason;
  static deserializeBinaryFromReader(message: RegularizationReason, reader: jspb.BinaryReader): RegularizationReason;
}

export namespace RegularizationReason {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class Regularization extends jspb.Message {
  getId(): string;
  setId(value: string): Regularization;

  getRegType(): number;
  setRegType(value: number): Regularization;

  getReason(): string;
  setReason(value: string): Regularization;

  getSscc(): string;
  setSscc(value: string): Regularization;

  getQuantity(): number;
  setQuantity(value: number): Regularization;

  getComment(): string;
  setComment(value: string): Regularization;

  getWeight(): string;
  setWeight(value: string): Regularization;

  getHeight(): string;
  setHeight(value: string): Regularization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Regularization.AsObject;
  static toObject(includeInstance: boolean, msg: Regularization): Regularization.AsObject;
  static serializeBinaryToWriter(message: Regularization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Regularization;
  static deserializeBinaryFromReader(message: Regularization, reader: jspb.BinaryReader): Regularization;
}

export namespace Regularization {
  export type AsObject = {
    id: string,
    regType: number,
    reason: string,
    sscc: string,
    quantity: number,
    comment: string,
    weight: string,
    height: string,
  }
}

export class CreateRegRequest extends jspb.Message {
  getEntry(): Regularization | undefined;
  setEntry(value?: Regularization): CreateRegRequest;
  hasEntry(): boolean;
  clearEntry(): CreateRegRequest;

  getUserId(): string;
  setUserId(value: string): CreateRegRequest;

  getIsConfirmQte(): boolean;
  setIsConfirmQte(value: boolean): CreateRegRequest;

  getIsConfirmDimension(): boolean;
  setIsConfirmDimension(value: boolean): CreateRegRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRegRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRegRequest): CreateRegRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRegRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRegRequest;
  static deserializeBinaryFromReader(message: CreateRegRequest, reader: jspb.BinaryReader): CreateRegRequest;
}

export namespace CreateRegRequest {
  export type AsObject = {
    entry?: Regularization.AsObject,
    userId: string,
    isConfirmQte: boolean,
    isConfirmDimension: boolean,
  }
}

export class CreateRegResponse extends jspb.Message {
  getEntry(): Regularization | undefined;
  setEntry(value?: Regularization): CreateRegResponse;
  hasEntry(): boolean;
  clearEntry(): CreateRegResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CreateRegResponse;

  getDimension(): RegDimension | undefined;
  setDimension(value?: RegDimension): CreateRegResponse;
  hasDimension(): boolean;
  clearDimension(): CreateRegResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRegResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRegResponse): CreateRegResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRegResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRegResponse;
  static deserializeBinaryFromReader(message: CreateRegResponse, reader: jspb.BinaryReader): CreateRegResponse;
}

export namespace CreateRegResponse {
  export type AsObject = {
    entry?: Regularization.AsObject,
    messageerror: string,
    dimension?: RegDimension.AsObject,
  }
}

export class RegDimension extends jspb.Message {
  getWeight(): string;
  setWeight(value: string): RegDimension;

  getHeight(): string;
  setHeight(value: string): RegDimension;

  getIsOverWeight(): boolean;
  setIsOverWeight(value: boolean): RegDimension;

  getIsOverHeight(): boolean;
  setIsOverHeight(value: boolean): RegDimension;

  getAvailableWeight(): string;
  setAvailableWeight(value: string): RegDimension;

  getAvailableHeight(): string;
  setAvailableHeight(value: string): RegDimension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegDimension.AsObject;
  static toObject(includeInstance: boolean, msg: RegDimension): RegDimension.AsObject;
  static serializeBinaryToWriter(message: RegDimension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegDimension;
  static deserializeBinaryFromReader(message: RegDimension, reader: jspb.BinaryReader): RegDimension;
}

export namespace RegDimension {
  export type AsObject = {
    weight: string,
    height: string,
    isOverWeight: boolean,
    isOverHeight: boolean,
    availableWeight: string,
    availableHeight: string,
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

export class GetAllReasonRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllReasonRequest;

  getOffset(): number;
  setOffset(value: number): GetAllReasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllReasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllReasonRequest): GetAllReasonRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllReasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllReasonRequest;
  static deserializeBinaryFromReader(message: GetAllReasonRequest, reader: jspb.BinaryReader): GetAllReasonRequest;
}

export namespace GetAllReasonRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class GetAllReasonResponse extends jspb.Message {
  getEntryList(): Array<RegularizationReason>;
  setEntryList(value: Array<RegularizationReason>): GetAllReasonResponse;
  clearEntryList(): GetAllReasonResponse;
  addEntry(value?: RegularizationReason, index?: number): RegularizationReason;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetAllReasonResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetAllReasonResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllReasonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllReasonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllReasonResponse): GetAllReasonResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllReasonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllReasonResponse;
  static deserializeBinaryFromReader(message: GetAllReasonResponse, reader: jspb.BinaryReader): GetAllReasonResponse;
}

export namespace GetAllReasonResponse {
  export type AsObject = {
    entryList: Array<RegularizationReason.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

