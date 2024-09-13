import * as jspb from 'google-protobuf'



export class Reserve extends jspb.Message {
  getId(): string;
  setId(value: string): Reserve;

  getCreatedAt(): number;
  setCreatedAt(value: number): Reserve;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Reserve;

  getReserveTypeId(): string;
  setReserveTypeId(value: string): Reserve;

  getReserveTypeName(): string;
  setReserveTypeName(value: string): Reserve;

  getAttenduId(): string;
  setAttenduId(value: string): Reserve;

  getSscc(): string;
  setSscc(value: string): Reserve;

  getQuantity(): number;
  setQuantity(value: number): Reserve;

  getIsTakePhotos(): boolean;
  setIsTakePhotos(value: boolean): Reserve;

  getIsInputNumber(): boolean;
  setIsInputNumber(value: boolean): Reserve;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Reserve;
  clearImagesList(): Reserve;
  addImages(value: string, index?: number): Reserve;

  getIsBlock(): boolean;
  setIsBlock(value: boolean): Reserve;

  getComment(): string;
  setComment(value: string): Reserve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reserve.AsObject;
  static toObject(includeInstance: boolean, msg: Reserve): Reserve.AsObject;
  static serializeBinaryToWriter(message: Reserve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reserve;
  static deserializeBinaryFromReader(message: Reserve, reader: jspb.BinaryReader): Reserve;
}

export namespace Reserve {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    reserveTypeId: string,
    reserveTypeName: string,
    attenduId: string,
    sscc: string,
    quantity: number,
    isTakePhotos: boolean,
    isInputNumber: boolean,
    imagesList: Array<string>,
    isBlock: boolean,
    comment: string,
  }
}

export class ReserveType extends jspb.Message {
  getId(): string;
  setId(value: string): ReserveType;

  getCreatedAt(): number;
  setCreatedAt(value: number): ReserveType;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ReserveType;

  getName(): string;
  setName(value: string): ReserveType;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ReserveType;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): ReserveType;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ReserveType;

  getIsTakePhotos(): boolean;
  setIsTakePhotos(value: boolean): ReserveType;

  getIsInputNumber(): boolean;
  setIsInputNumber(value: boolean): ReserveType;

  getIsDeductQty(): boolean;
  setIsDeductQty(value: boolean): ReserveType;

  getCompanyId(): string;
  setCompanyId(value: string): ReserveType;

  getWarehouseId(): string;
  setWarehouseId(value: string): ReserveType;

  getClientId(): string;
  setClientId(value: string): ReserveType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveType.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveType): ReserveType.AsObject;
  static serializeBinaryToWriter(message: ReserveType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveType;
  static deserializeBinaryFromReader(message: ReserveType, reader: jspb.BinaryReader): ReserveType;
}

export namespace ReserveType {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    name: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    isTakePhotos: boolean,
    isInputNumber: boolean,
    isDeductQty: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class GetReserveTypeForMissionRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetReserveTypeForMissionRequest;

  getOffset(): number;
  setOffset(value: number): GetReserveTypeForMissionRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetReserveTypeForMissionRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetReserveTypeForMissionRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetReserveTypeForMissionRequest;

  getAttenduId(): string;
  setAttenduId(value: string): GetReserveTypeForMissionRequest;

  getSscc(): string;
  setSscc(value: string): GetReserveTypeForMissionRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetReserveTypeForMissionRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetReserveTypeForMissionRequest;

  getClientId(): string;
  setClientId(value: string): GetReserveTypeForMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReserveTypeForMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReserveTypeForMissionRequest): GetReserveTypeForMissionRequest.AsObject;
  static serializeBinaryToWriter(message: GetReserveTypeForMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReserveTypeForMissionRequest;
  static deserializeBinaryFromReader(message: GetReserveTypeForMissionRequest, reader: jspb.BinaryReader): GetReserveTypeForMissionRequest;
}

export namespace GetReserveTypeForMissionRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    attenduId: string,
    sscc: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class GetReserveForMissionRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetReserveForMissionRequest;

  getOffset(): number;
  setOffset(value: number): GetReserveForMissionRequest;

  getAttenduId(): string;
  setAttenduId(value: string): GetReserveForMissionRequest;

  getSscc(): string;
  setSscc(value: string): GetReserveForMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReserveForMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReserveForMissionRequest): GetReserveForMissionRequest.AsObject;
  static serializeBinaryToWriter(message: GetReserveForMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReserveForMissionRequest;
  static deserializeBinaryFromReader(message: GetReserveForMissionRequest, reader: jspb.BinaryReader): GetReserveForMissionRequest;
}

export namespace GetReserveForMissionRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    attenduId: string,
    sscc: string,
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

export class GetReserveTypeForMissionResponse extends jspb.Message {
  getEntryList(): Array<ReserveType>;
  setEntryList(value: Array<ReserveType>): GetReserveTypeForMissionResponse;
  clearEntryList(): GetReserveTypeForMissionResponse;
  addEntry(value?: ReserveType, index?: number): ReserveType;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetReserveTypeForMissionResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetReserveTypeForMissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetReserveTypeForMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReserveTypeForMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReserveTypeForMissionResponse): GetReserveTypeForMissionResponse.AsObject;
  static serializeBinaryToWriter(message: GetReserveTypeForMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReserveTypeForMissionResponse;
  static deserializeBinaryFromReader(message: GetReserveTypeForMissionResponse, reader: jspb.BinaryReader): GetReserveTypeForMissionResponse;
}

export namespace GetReserveTypeForMissionResponse {
  export type AsObject = {
    entryList: Array<ReserveType.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class GetReserveForMissionResponse extends jspb.Message {
  getEntryList(): Array<Reserve>;
  setEntryList(value: Array<Reserve>): GetReserveForMissionResponse;
  clearEntryList(): GetReserveForMissionResponse;
  addEntry(value?: Reserve, index?: number): Reserve;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetReserveForMissionResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetReserveForMissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetReserveForMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReserveForMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReserveForMissionResponse): GetReserveForMissionResponse.AsObject;
  static serializeBinaryToWriter(message: GetReserveForMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReserveForMissionResponse;
  static deserializeBinaryFromReader(message: GetReserveForMissionResponse, reader: jspb.BinaryReader): GetReserveForMissionResponse;
}

export namespace GetReserveForMissionResponse {
  export type AsObject = {
    entryList: Array<Reserve.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class CreateManyReserveTypeRequest extends jspb.Message {
  getEntryList(): Array<ReserveType>;
  setEntryList(value: Array<ReserveType>): CreateManyReserveTypeRequest;
  clearEntryList(): CreateManyReserveTypeRequest;
  addEntry(value?: ReserveType, index?: number): ReserveType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateManyReserveTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateManyReserveTypeRequest): CreateManyReserveTypeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateManyReserveTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateManyReserveTypeRequest;
  static deserializeBinaryFromReader(message: CreateManyReserveTypeRequest, reader: jspb.BinaryReader): CreateManyReserveTypeRequest;
}

export namespace CreateManyReserveTypeRequest {
  export type AsObject = {
    entryList: Array<ReserveType.AsObject>,
  }
}

export class CreateManyReserveTypeResponse extends jspb.Message {
  getEntryList(): Array<ReserveType>;
  setEntryList(value: Array<ReserveType>): CreateManyReserveTypeResponse;
  clearEntryList(): CreateManyReserveTypeResponse;
  addEntry(value?: ReserveType, index?: number): ReserveType;

  getMessageerror(): string;
  setMessageerror(value: string): CreateManyReserveTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateManyReserveTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateManyReserveTypeResponse): CreateManyReserveTypeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateManyReserveTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateManyReserveTypeResponse;
  static deserializeBinaryFromReader(message: CreateManyReserveTypeResponse, reader: jspb.BinaryReader): CreateManyReserveTypeResponse;
}

export namespace CreateManyReserveTypeResponse {
  export type AsObject = {
    entryList: Array<ReserveType.AsObject>,
    messageerror: string,
  }
}

export class CreateManyReserveRequest extends jspb.Message {
  getEntryList(): Array<Reserve>;
  setEntryList(value: Array<Reserve>): CreateManyReserveRequest;
  clearEntryList(): CreateManyReserveRequest;
  addEntry(value?: Reserve, index?: number): Reserve;

  getAttfilepathsList(): Array<string>;
  setAttfilepathsList(value: Array<string>): CreateManyReserveRequest;
  clearAttfilepathsList(): CreateManyReserveRequest;
  addAttfilepaths(value: string, index?: number): CreateManyReserveRequest;

  getLocationInfo(): CheckPutAwayLocationInfo | undefined;
  setLocationInfo(value?: CheckPutAwayLocationInfo): CreateManyReserveRequest;
  hasLocationInfo(): boolean;
  clearLocationInfo(): CreateManyReserveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateManyReserveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateManyReserveRequest): CreateManyReserveRequest.AsObject;
  static serializeBinaryToWriter(message: CreateManyReserveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateManyReserveRequest;
  static deserializeBinaryFromReader(message: CreateManyReserveRequest, reader: jspb.BinaryReader): CreateManyReserveRequest;
}

export namespace CreateManyReserveRequest {
  export type AsObject = {
    entryList: Array<Reserve.AsObject>,
    attfilepathsList: Array<string>,
    locationInfo?: CheckPutAwayLocationInfo.AsObject,
  }
}

export class CheckPutAwayLocationInfo extends jspb.Message {
  getBarCode(): string;
  setBarCode(value: string): CheckPutAwayLocationInfo;

  getUserId(): string;
  setUserId(value: string): CheckPutAwayLocationInfo;

  getAttProductionIdList(): Array<string>;
  setAttProductionIdList(value: Array<string>): CheckPutAwayLocationInfo;
  clearAttProductionIdList(): CheckPutAwayLocationInfo;
  addAttProductionId(value: string, index?: number): CheckPutAwayLocationInfo;

  getEntryDate(): number;
  setEntryDate(value: number): CheckPutAwayLocationInfo;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): CheckPutAwayLocationInfo;

  getIsAnomaly(): boolean;
  setIsAnomaly(value: boolean): CheckPutAwayLocationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPutAwayLocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPutAwayLocationInfo): CheckPutAwayLocationInfo.AsObject;
  static serializeBinaryToWriter(message: CheckPutAwayLocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPutAwayLocationInfo;
  static deserializeBinaryFromReader(message: CheckPutAwayLocationInfo, reader: jspb.BinaryReader): CheckPutAwayLocationInfo;
}

export namespace CheckPutAwayLocationInfo {
  export type AsObject = {
    barCode: string,
    userId: string,
    attProductionIdList: Array<string>,
    entryDate: number,
    isAuto: boolean,
    isAnomaly: boolean,
  }
}

export class LocationDTO extends jspb.Message {
  getId(): string;
  setId(value: string): LocationDTO;

  getZoneId(): string;
  setZoneId(value: string): LocationDTO;

  getAisle(): string;
  setAisle(value: string): LocationDTO;

  getBay(): string;
  setBay(value: string): LocationDTO;

  getZoneCode(): string;
  setZoneCode(value: string): LocationDTO;

  getLevel(): number;
  setLevel(value: number): LocationDTO;

  getEntryBlock(): string;
  setEntryBlock(value: string): LocationDTO;

  getCode(): string;
  setCode(value: string): LocationDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationDTO.AsObject;
  static toObject(includeInstance: boolean, msg: LocationDTO): LocationDTO.AsObject;
  static serializeBinaryToWriter(message: LocationDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationDTO;
  static deserializeBinaryFromReader(message: LocationDTO, reader: jspb.BinaryReader): LocationDTO;
}

export namespace LocationDTO {
  export type AsObject = {
    id: string,
    zoneId: string,
    aisle: string,
    bay: string,
    zoneCode: string,
    level: number,
    entryBlock: string,
    code: string,
  }
}

export class CreateManyReserveResponse extends jspb.Message {
  getEntryList(): Array<Reserve>;
  setEntryList(value: Array<Reserve>): CreateManyReserveResponse;
  clearEntryList(): CreateManyReserveResponse;
  addEntry(value?: Reserve, index?: number): Reserve;

  getMessageerror(): string;
  setMessageerror(value: string): CreateManyReserveResponse;

  getDataerror(): string;
  setDataerror(value: string): CreateManyReserveResponse;

  getIsAnomaly(): boolean;
  setIsAnomaly(value: boolean): CreateManyReserveResponse;

  getLocationId(): string;
  setLocationId(value: string): CreateManyReserveResponse;

  getLocation(): LocationDTO | undefined;
  setLocation(value?: LocationDTO): CreateManyReserveResponse;
  hasLocation(): boolean;
  clearLocation(): CreateManyReserveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateManyReserveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateManyReserveResponse): CreateManyReserveResponse.AsObject;
  static serializeBinaryToWriter(message: CreateManyReserveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateManyReserveResponse;
  static deserializeBinaryFromReader(message: CreateManyReserveResponse, reader: jspb.BinaryReader): CreateManyReserveResponse;
}

export namespace CreateManyReserveResponse {
  export type AsObject = {
    entryList: Array<Reserve.AsObject>,
    messageerror: string,
    dataerror: string,
    isAnomaly: boolean,
    locationId: string,
    location?: LocationDTO.AsObject,
  }
}

export class ValidQtyRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): ValidQtyRequest;

  getQuantity(): number;
  setQuantity(value: number): ValidQtyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidQtyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidQtyRequest): ValidQtyRequest.AsObject;
  static serializeBinaryToWriter(message: ValidQtyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidQtyRequest;
  static deserializeBinaryFromReader(message: ValidQtyRequest, reader: jspb.BinaryReader): ValidQtyRequest;
}

export namespace ValidQtyRequest {
  export type AsObject = {
    sscc: string,
    quantity: number,
  }
}

export class ValidQtyResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): ValidQtyResponse;

  getMessageerror(): string;
  setMessageerror(value: string): ValidQtyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidQtyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidQtyResponse): ValidQtyResponse.AsObject;
  static serializeBinaryToWriter(message: ValidQtyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidQtyResponse;
  static deserializeBinaryFromReader(message: ValidQtyResponse, reader: jspb.BinaryReader): ValidQtyResponse;
}

export namespace ValidQtyResponse {
  export type AsObject = {
    valid: boolean,
    messageerror: string,
  }
}

export class DeleteAllReserveByAttenduInfoRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): DeleteAllReserveByAttenduInfoRequest;

  getAttenduId(): string;
  setAttenduId(value: string): DeleteAllReserveByAttenduInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllReserveByAttenduInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllReserveByAttenduInfoRequest): DeleteAllReserveByAttenduInfoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAllReserveByAttenduInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllReserveByAttenduInfoRequest;
  static deserializeBinaryFromReader(message: DeleteAllReserveByAttenduInfoRequest, reader: jspb.BinaryReader): DeleteAllReserveByAttenduInfoRequest;
}

export namespace DeleteAllReserveByAttenduInfoRequest {
  export type AsObject = {
    sscc: string,
    attenduId: string,
  }
}

export class DeleteAllReserveByAttenduInfoResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): DeleteAllReserveByAttenduInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllReserveByAttenduInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllReserveByAttenduInfoResponse): DeleteAllReserveByAttenduInfoResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAllReserveByAttenduInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllReserveByAttenduInfoResponse;
  static deserializeBinaryFromReader(message: DeleteAllReserveByAttenduInfoResponse, reader: jspb.BinaryReader): DeleteAllReserveByAttenduInfoResponse;
}

export namespace DeleteAllReserveByAttenduInfoResponse {
  export type AsObject = {
    messageerror: string,
  }
}

export class ReserveOnAttenduDTO extends jspb.Message {
  getReserveTypeName(): string;
  setReserveTypeName(value: string): ReserveOnAttenduDTO;

  getSscc(): string;
  setSscc(value: string): ReserveOnAttenduDTO;

  getQuantity(): number;
  setQuantity(value: number): ReserveOnAttenduDTO;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): ReserveOnAttenduDTO;
  clearImagesList(): ReserveOnAttenduDTO;
  addImages(value: string, index?: number): ReserveOnAttenduDTO;

  getComment(): string;
  setComment(value: string): ReserveOnAttenduDTO;

  getIsBlock(): boolean;
  setIsBlock(value: boolean): ReserveOnAttenduDTO;

  getId(): string;
  setId(value: string): ReserveOnAttenduDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveOnAttenduDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveOnAttenduDTO): ReserveOnAttenduDTO.AsObject;
  static serializeBinaryToWriter(message: ReserveOnAttenduDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveOnAttenduDTO;
  static deserializeBinaryFromReader(message: ReserveOnAttenduDTO, reader: jspb.BinaryReader): ReserveOnAttenduDTO;
}

export namespace ReserveOnAttenduDTO {
  export type AsObject = {
    reserveTypeName: string,
    sscc: string,
    quantity: number,
    imagesList: Array<string>,
    comment: string,
    isBlock: boolean,
    id: string,
  }
}

export class ReserveOnAttenduResponse extends jspb.Message {
  getEntryList(): Array<ReserveOnAttenduDTO>;
  setEntryList(value: Array<ReserveOnAttenduDTO>): ReserveOnAttenduResponse;
  clearEntryList(): ReserveOnAttenduResponse;
  addEntry(value?: ReserveOnAttenduDTO, index?: number): ReserveOnAttenduDTO;

  getMessageerror(): string;
  setMessageerror(value: string): ReserveOnAttenduResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveOnAttenduResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveOnAttenduResponse): ReserveOnAttenduResponse.AsObject;
  static serializeBinaryToWriter(message: ReserveOnAttenduResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveOnAttenduResponse;
  static deserializeBinaryFromReader(message: ReserveOnAttenduResponse, reader: jspb.BinaryReader): ReserveOnAttenduResponse;
}

export namespace ReserveOnAttenduResponse {
  export type AsObject = {
    entryList: Array<ReserveOnAttenduDTO.AsObject>,
    messageerror: string,
  }
}

export class ReserveOnAttenduRequest extends jspb.Message {
  getAttenduId(): string;
  setAttenduId(value: string): ReserveOnAttenduRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveOnAttenduRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveOnAttenduRequest): ReserveOnAttenduRequest.AsObject;
  static serializeBinaryToWriter(message: ReserveOnAttenduRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveOnAttenduRequest;
  static deserializeBinaryFromReader(message: ReserveOnAttenduRequest, reader: jspb.BinaryReader): ReserveOnAttenduRequest;
}

export namespace ReserveOnAttenduRequest {
  export type AsObject = {
    attenduId: string,
  }
}

export class UpdateReserveRequest extends jspb.Message {
  getEntry(): Reserve | undefined;
  setEntry(value?: Reserve): UpdateReserveRequest;
  hasEntry(): boolean;
  clearEntry(): UpdateReserveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReserveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReserveRequest): UpdateReserveRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReserveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReserveRequest;
  static deserializeBinaryFromReader(message: UpdateReserveRequest, reader: jspb.BinaryReader): UpdateReserveRequest;
}

export namespace UpdateReserveRequest {
  export type AsObject = {
    entry?: Reserve.AsObject,
  }
}

export class UpdateReserveResponse extends jspb.Message {
  getEntry(): Reserve | undefined;
  setEntry(value?: Reserve): UpdateReserveResponse;
  hasEntry(): boolean;
  clearEntry(): UpdateReserveResponse;

  getIsallreserveunblock(): boolean;
  setIsallreserveunblock(value: boolean): UpdateReserveResponse;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): UpdateReserveResponse;
  hasMetadata(): boolean;
  clearMetadata(): UpdateReserveResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateReserveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReserveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReserveResponse): UpdateReserveResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateReserveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReserveResponse;
  static deserializeBinaryFromReader(message: UpdateReserveResponse, reader: jspb.BinaryReader): UpdateReserveResponse;
}

export namespace UpdateReserveResponse {
  export type AsObject = {
    entry?: Reserve.AsObject,
    isallreserveunblock: boolean,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class UpdateReservesRequest extends jspb.Message {
  getEntryList(): Array<Reserve>;
  setEntryList(value: Array<Reserve>): UpdateReservesRequest;
  clearEntryList(): UpdateReservesRequest;
  addEntry(value?: Reserve, index?: number): Reserve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReservesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReservesRequest): UpdateReservesRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReservesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReservesRequest;
  static deserializeBinaryFromReader(message: UpdateReservesRequest, reader: jspb.BinaryReader): UpdateReservesRequest;
}

export namespace UpdateReservesRequest {
  export type AsObject = {
    entryList: Array<Reserve.AsObject>,
  }
}

export class UpdateReservesResponse extends jspb.Message {
  getEntryList(): Array<Reserve>;
  setEntryList(value: Array<Reserve>): UpdateReservesResponse;
  clearEntryList(): UpdateReservesResponse;
  addEntry(value?: Reserve, index?: number): Reserve;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): UpdateReservesResponse;
  hasMetadata(): boolean;
  clearMetadata(): UpdateReservesResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateReservesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReservesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReservesResponse): UpdateReservesResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateReservesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReservesResponse;
  static deserializeBinaryFromReader(message: UpdateReservesResponse, reader: jspb.BinaryReader): UpdateReservesResponse;
}

export namespace UpdateReservesResponse {
  export type AsObject = {
    entryList: Array<Reserve.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

