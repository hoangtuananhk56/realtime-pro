import * as jspb from 'google-protobuf'

import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"
import * as proto_attendu_attendu_pb from '../../proto/attendu/attendu_pb'; // proto import: "proto/attendu/attendu.proto"
import * as proto_reserve_reserve_pb from '../../proto/reserve/reserve_pb'; // proto import: "proto/reserve/reserve.proto"


export class Location extends jspb.Message {
  getId(): string;
  setId(value: string): Location;

  getCreateAt(): number;
  setCreateAt(value: number): Location;

  getUpdateAt(): number;
  setUpdateAt(value: number): Location;

  getName(): string;
  setName(value: string): Location;

  getStorageType(): string;
  setStorageType(value: string): Location;

  getStorageFunc(): string;
  setStorageFunc(value: string): Location;

  getZoneId(): string;
  setZoneId(value: string): Location;

  getAisle(): string;
  setAisle(value: string): Location;

  getBay(): string;
  setBay(value: string): Location;

  getWidth(): number;
  setWidth(value: number): Location;

  getHeight(): number;
  setHeight(value: number): Location;

  getLength(): number;
  setLength(value: number): Location;

  getEntryBlock(): string;
  setEntryBlock(value: string): Location;

  getConditionement(): string;
  setConditionement(value: string): Location;

  getMaxHeight(): number;
  setMaxHeight(value: number): Location;

  getMaxWeight(): number;
  setMaxWeight(value: number): Location;

  getMinHeight(): number;
  setMinHeight(value: number): Location;

  getLevel(): number;
  setLevel(value: number): Location;

  getDebut(): number;
  setDebut(value: number): Location;

  getFin(): number;
  setFin(value: number): Location;

  getLocationType(): string;
  setLocationType(value: string): Location;

  getCode(): string;
  setCode(value: string): Location;

  getParentId(): string;
  setParentId(value: string): Location;

  getChildrenList(): Array<Location>;
  setChildrenList(value: Array<Location>): Location;
  clearChildrenList(): Location;
  addChildren(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    storageType: string,
    storageFunc: string,
    zoneId: string,
    aisle: string,
    bay: string,
    width: number,
    height: number,
    length: number,
    entryBlock: string,
    conditionement: string,
    maxHeight: number,
    maxWeight: number,
    minHeight: number,
    level: number,
    debut: number,
    fin: number,
    locationType: string,
    code: string,
    parentId: string,
    childrenList: Array<Location.AsObject>,
  }
}

export class LocationCreateRequest extends jspb.Message {
  getEntry(): Location | undefined;
  setEntry(value?: Location): LocationCreateRequest;
  hasEntry(): boolean;
  clearEntry(): LocationCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocationCreateRequest): LocationCreateRequest.AsObject;
  static serializeBinaryToWriter(message: LocationCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationCreateRequest;
  static deserializeBinaryFromReader(message: LocationCreateRequest, reader: jspb.BinaryReader): LocationCreateRequest;
}

export namespace LocationCreateRequest {
  export type AsObject = {
    entry?: Location.AsObject,
  }
}

export class LocationResponse extends jspb.Message {
  getEntry(): Location | undefined;
  setEntry(value?: Location): LocationResponse;
  hasEntry(): boolean;
  clearEntry(): LocationResponse;

  getMessageerror(): string;
  setMessageerror(value: string): LocationResponse;

  getRecType(): number;
  setRecType(value: number): LocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocationResponse): LocationResponse.AsObject;
  static serializeBinaryToWriter(message: LocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationResponse;
  static deserializeBinaryFromReader(message: LocationResponse, reader: jspb.BinaryReader): LocationResponse;
}

export namespace LocationResponse {
  export type AsObject = {
    entry?: Location.AsObject,
    messageerror: string,
    recType: number,
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
  getEntryList(): Array<Location>;
  setEntryList(value: Array<Location>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Location, index?: number): Location;

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
    entryList: Array<Location.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class VallidLocationRequest extends jspb.Message {
  getCodeBar(): string;
  setCodeBar(value: string): VallidLocationRequest;

  getAttId(): string;
  setAttId(value: string): VallidLocationRequest;

  getWarehourseId(): string;
  setWarehourseId(value: string): VallidLocationRequest;

  getUserId(): string;
  setUserId(value: string): VallidLocationRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): VallidLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VallidLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VallidLocationRequest): VallidLocationRequest.AsObject;
  static serializeBinaryToWriter(message: VallidLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VallidLocationRequest;
  static deserializeBinaryFromReader(message: VallidLocationRequest, reader: jspb.BinaryReader): VallidLocationRequest;
}

export namespace VallidLocationRequest {
  export type AsObject = {
    codeBar: string,
    attId: string,
    warehourseId: string,
    userId: string,
    warehouseId: string,
  }
}

export class GetLocationByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetLocationByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationByIdRequest): GetLocationByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetLocationByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationByIdRequest;
  static deserializeBinaryFromReader(message: GetLocationByIdRequest, reader: jspb.BinaryReader): GetLocationByIdRequest;
}

export namespace GetLocationByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class CheckPutAwayManuallyRequest extends jspb.Message {
  getBarCode(): string;
  setBarCode(value: string): CheckPutAwayManuallyRequest;

  getUserId(): string;
  setUserId(value: string): CheckPutAwayManuallyRequest;

  getAttProductionIdList(): Array<string>;
  setAttProductionIdList(value: Array<string>): CheckPutAwayManuallyRequest;
  clearAttProductionIdList(): CheckPutAwayManuallyRequest;
  addAttProductionId(value: string, index?: number): CheckPutAwayManuallyRequest;

  getCheckType(): number;
  setCheckType(value: number): CheckPutAwayManuallyRequest;

  getEntryDate(): number;
  setEntryDate(value: number): CheckPutAwayManuallyRequest;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): CheckPutAwayManuallyRequest;

  getIsAnomaly(): boolean;
  setIsAnomaly(value: boolean): CheckPutAwayManuallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPutAwayManuallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPutAwayManuallyRequest): CheckPutAwayManuallyRequest.AsObject;
  static serializeBinaryToWriter(message: CheckPutAwayManuallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPutAwayManuallyRequest;
  static deserializeBinaryFromReader(message: CheckPutAwayManuallyRequest, reader: jspb.BinaryReader): CheckPutAwayManuallyRequest;
}

export namespace CheckPutAwayManuallyRequest {
  export type AsObject = {
    barCode: string,
    userId: string,
    attProductionIdList: Array<string>,
    checkType: number,
    entryDate: number,
    isAuto: boolean,
    isAnomaly: boolean,
  }
}

export class CheckPutAwayManuallyResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): CheckPutAwayManuallyResponse;

  getLocationId(): string;
  setLocationId(value: string): CheckPutAwayManuallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPutAwayManuallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPutAwayManuallyResponse): CheckPutAwayManuallyResponse.AsObject;
  static serializeBinaryToWriter(message: CheckPutAwayManuallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPutAwayManuallyResponse;
  static deserializeBinaryFromReader(message: CheckPutAwayManuallyResponse, reader: jspb.BinaryReader): CheckPutAwayManuallyResponse;
}

export namespace CheckPutAwayManuallyResponse {
  export type AsObject = {
    messageerror: string,
    locationId: string,
  }
}

export class CheckPutAwayLocationRequest extends jspb.Message {
  getEntryList(): Array<proto_reserve_reserve_pb.Reserve>;
  setEntryList(value: Array<proto_reserve_reserve_pb.Reserve>): CheckPutAwayLocationRequest;
  clearEntryList(): CheckPutAwayLocationRequest;
  addEntry(value?: proto_reserve_reserve_pb.Reserve, index?: number): proto_reserve_reserve_pb.Reserve;

  getAttfilepathsList(): Array<string>;
  setAttfilepathsList(value: Array<string>): CheckPutAwayLocationRequest;
  clearAttfilepathsList(): CheckPutAwayLocationRequest;
  addAttfilepaths(value: string, index?: number): CheckPutAwayLocationRequest;

  getLocationInfo(): CheckPutAwayLocationInfo | undefined;
  setLocationInfo(value?: CheckPutAwayLocationInfo): CheckPutAwayLocationRequest;
  hasLocationInfo(): boolean;
  clearLocationInfo(): CheckPutAwayLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPutAwayLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPutAwayLocationRequest): CheckPutAwayLocationRequest.AsObject;
  static serializeBinaryToWriter(message: CheckPutAwayLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPutAwayLocationRequest;
  static deserializeBinaryFromReader(message: CheckPutAwayLocationRequest, reader: jspb.BinaryReader): CheckPutAwayLocationRequest;
}

export namespace CheckPutAwayLocationRequest {
  export type AsObject = {
    entryList: Array<proto_reserve_reserve_pb.Reserve.AsObject>,
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

export class CheckPutAwayLocationResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): CheckPutAwayLocationResponse;

  getLocationId(): string;
  setLocationId(value: string): CheckPutAwayLocationResponse;

  getLocation(): LocationDTO | undefined;
  setLocation(value?: LocationDTO): CheckPutAwayLocationResponse;
  hasLocation(): boolean;
  clearLocation(): CheckPutAwayLocationResponse;

  getEntryList(): Array<proto_reserve_reserve_pb.Reserve>;
  setEntryList(value: Array<proto_reserve_reserve_pb.Reserve>): CheckPutAwayLocationResponse;
  clearEntryList(): CheckPutAwayLocationResponse;
  addEntry(value?: proto_reserve_reserve_pb.Reserve, index?: number): proto_reserve_reserve_pb.Reserve;

  getDataerror(): string;
  setDataerror(value: string): CheckPutAwayLocationResponse;

  getIsAnomaly(): boolean;
  setIsAnomaly(value: boolean): CheckPutAwayLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPutAwayLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPutAwayLocationResponse): CheckPutAwayLocationResponse.AsObject;
  static serializeBinaryToWriter(message: CheckPutAwayLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPutAwayLocationResponse;
  static deserializeBinaryFromReader(message: CheckPutAwayLocationResponse, reader: jspb.BinaryReader): CheckPutAwayLocationResponse;
}

export namespace CheckPutAwayLocationResponse {
  export type AsObject = {
    messageerror: string,
    locationId: string,
    location?: LocationDTO.AsObject,
    entryList: Array<proto_reserve_reserve_pb.Reserve.AsObject>,
    dataerror: string,
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

export class CheckPreparationLocationRequest extends jspb.Message {
  getBarCode(): string;
  setBarCode(value: string): CheckPreparationLocationRequest;

  getUserId(): string;
  setUserId(value: string): CheckPreparationLocationRequest;

  getArticleId(): string;
  setArticleId(value: string): CheckPreparationLocationRequest;

  getMissionId(): string;
  setMissionId(value: string): CheckPreparationLocationRequest;

  getSscc(): string;
  setSscc(value: string): CheckPreparationLocationRequest;

  getReused(): boolean;
  setReused(value: boolean): CheckPreparationLocationRequest;

  getSsccHost(): string;
  setSsccHost(value: string): CheckPreparationLocationRequest;

  getQuantity(): number;
  setQuantity(value: number): CheckPreparationLocationRequest;

  getIsAcceptOverHeight(): boolean;
  setIsAcceptOverHeight(value: boolean): CheckPreparationLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPreparationLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPreparationLocationRequest): CheckPreparationLocationRequest.AsObject;
  static serializeBinaryToWriter(message: CheckPreparationLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPreparationLocationRequest;
  static deserializeBinaryFromReader(message: CheckPreparationLocationRequest, reader: jspb.BinaryReader): CheckPreparationLocationRequest;
}

export namespace CheckPreparationLocationRequest {
  export type AsObject = {
    barCode: string,
    userId: string,
    articleId: string,
    missionId: string,
    sscc: string,
    reused: boolean,
    ssccHost: string,
    quantity: number,
    isAcceptOverHeight: boolean,
  }
}

export class CheckPreparationLocationResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): CheckPreparationLocationResponse;

  getLocationId(): string;
  setLocationId(value: string): CheckPreparationLocationResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): CheckPreparationLocationResponse;

  getIsScanNext(): boolean;
  setIsScanNext(value: boolean): CheckPreparationLocationResponse;

  getIsLastMission(): boolean;
  setIsLastMission(value: boolean): CheckPreparationLocationResponse;

  getIsFirstMissionInDay(): boolean;
  setIsFirstMissionInDay(value: boolean): CheckPreparationLocationResponse;

  getComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticle>;
  setComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticle>): CheckPreparationLocationResponse;
  clearComArticleList(): CheckPreparationLocationResponse;
  addComArticle(value?: proto_comarticle_comarticle_pb.ComArticle, index?: number): proto_comarticle_comarticle_pb.ComArticle;

  getLocation(): proto_attendu_attendu_pb.LocationDTO | undefined;
  setLocation(value?: proto_attendu_attendu_pb.LocationDTO): CheckPreparationLocationResponse;
  hasLocation(): boolean;
  clearLocation(): CheckPreparationLocationResponse;

  getIsOverHeight(): boolean;
  setIsOverHeight(value: boolean): CheckPreparationLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPreparationLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPreparationLocationResponse): CheckPreparationLocationResponse.AsObject;
  static serializeBinaryToWriter(message: CheckPreparationLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPreparationLocationResponse;
  static deserializeBinaryFromReader(message: CheckPreparationLocationResponse, reader: jspb.BinaryReader): CheckPreparationLocationResponse;
}

export namespace CheckPreparationLocationResponse {
  export type AsObject = {
    messageerror: string,
    locationId: string,
    isValid: boolean,
    isScanNext: boolean,
    isLastMission: boolean,
    isFirstMissionInDay: boolean,
    comArticleList: Array<proto_comarticle_comarticle_pb.ComArticle.AsObject>,
    location?: proto_attendu_attendu_pb.LocationDTO.AsObject,
    isOverHeight: boolean,
  }
}

export class CheckMovementLocationRequest extends jspb.Message {
  getBarCode(): string;
  setBarCode(value: string): CheckMovementLocationRequest;

  getUserId(): string;
  setUserId(value: string): CheckMovementLocationRequest;

  getSscc(): string;
  setSscc(value: string): CheckMovementLocationRequest;

  getMissionId(): string;
  setMissionId(value: string): CheckMovementLocationRequest;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): CheckMovementLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMovementLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMovementLocationRequest): CheckMovementLocationRequest.AsObject;
  static serializeBinaryToWriter(message: CheckMovementLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMovementLocationRequest;
  static deserializeBinaryFromReader(message: CheckMovementLocationRequest, reader: jspb.BinaryReader): CheckMovementLocationRequest;
}

export namespace CheckMovementLocationRequest {
  export type AsObject = {
    barCode: string,
    userId: string,
    sscc: string,
    missionId: string,
    isAuto: boolean,
  }
}

export class CheckMovementLocationResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): CheckMovementLocationResponse;

  getLocationId(): string;
  setLocationId(value: string): CheckMovementLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMovementLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMovementLocationResponse): CheckMovementLocationResponse.AsObject;
  static serializeBinaryToWriter(message: CheckMovementLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMovementLocationResponse;
  static deserializeBinaryFromReader(message: CheckMovementLocationResponse, reader: jspb.BinaryReader): CheckMovementLocationResponse;
}

export namespace CheckMovementLocationResponse {
  export type AsObject = {
    messageError: string,
    locationId: string,
  }
}

export class CheckReapproRequest extends jspb.Message {
  getBarCode(): string;
  setBarCode(value: string): CheckReapproRequest;

  getUserId(): string;
  setUserId(value: string): CheckReapproRequest;

  getSscc(): string;
  setSscc(value: string): CheckReapproRequest;

  getMissionId(): string;
  setMissionId(value: string): CheckReapproRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckReapproRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckReapproRequest): CheckReapproRequest.AsObject;
  static serializeBinaryToWriter(message: CheckReapproRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckReapproRequest;
  static deserializeBinaryFromReader(message: CheckReapproRequest, reader: jspb.BinaryReader): CheckReapproRequest;
}

export namespace CheckReapproRequest {
  export type AsObject = {
    barCode: string,
    userId: string,
    sscc: string,
    missionId: string,
  }
}

export class CheckReapproResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): CheckReapproResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): CheckReapproResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckReapproResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckReapproResponse): CheckReapproResponse.AsObject;
  static serializeBinaryToWriter(message: CheckReapproResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckReapproResponse;
  static deserializeBinaryFromReader(message: CheckReapproResponse, reader: jspb.BinaryReader): CheckReapproResponse;
}

export namespace CheckReapproResponse {
  export type AsObject = {
    messageerror: string,
    isValid: boolean,
  }
}

export class SuggestLocationRequest extends jspb.Message {
  getSsccsList(): Array<string>;
  setSsccsList(value: Array<string>): SuggestLocationRequest;
  clearSsccsList(): SuggestLocationRequest;
  addSsccs(value: string, index?: number): SuggestLocationRequest;

  getRefuseLocId(): string;
  setRefuseLocId(value: string): SuggestLocationRequest;

  getIsRefresh(): boolean;
  setIsRefresh(value: boolean): SuggestLocationRequest;

  getIsBlockSuggest(): boolean;
  setIsBlockSuggest(value: boolean): SuggestLocationRequest;

  getIsAnomaly(): boolean;
  setIsAnomaly(value: boolean): SuggestLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestLocationRequest): SuggestLocationRequest.AsObject;
  static serializeBinaryToWriter(message: SuggestLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestLocationRequest;
  static deserializeBinaryFromReader(message: SuggestLocationRequest, reader: jspb.BinaryReader): SuggestLocationRequest;
}

export namespace SuggestLocationRequest {
  export type AsObject = {
    ssccsList: Array<string>,
    refuseLocId: string,
    isRefresh: boolean,
    isBlockSuggest: boolean,
    isAnomaly: boolean,
  }
}

export class SuggestLocationResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): SuggestLocationResponse;

  getLocationId(): string;
  setLocationId(value: string): SuggestLocationResponse;

  getCodeBar(): string;
  setCodeBar(value: string): SuggestLocationResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): SuggestLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestLocationResponse): SuggestLocationResponse.AsObject;
  static serializeBinaryToWriter(message: SuggestLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestLocationResponse;
  static deserializeBinaryFromReader(message: SuggestLocationResponse, reader: jspb.BinaryReader): SuggestLocationResponse;
}

export namespace SuggestLocationResponse {
  export type AsObject = {
    messageerror: string,
    locationId: string,
    codeBar: string,
    isValid: boolean,
  }
}

export class LocationMovement extends jspb.Message {
  getId(): string;
  setId(value: string): LocationMovement;

  getName(): string;
  setName(value: string): LocationMovement;

  getStorageType(): string;
  setStorageType(value: string): LocationMovement;

  getStorageFunc(): string;
  setStorageFunc(value: string): LocationMovement;

  getZoneId(): string;
  setZoneId(value: string): LocationMovement;

  getAisle(): string;
  setAisle(value: string): LocationMovement;

  getBay(): string;
  setBay(value: string): LocationMovement;

  getWidth(): number;
  setWidth(value: number): LocationMovement;

  getHeight(): number;
  setHeight(value: number): LocationMovement;

  getLength(): number;
  setLength(value: number): LocationMovement;

  getEntryBlock(): string;
  setEntryBlock(value: string): LocationMovement;

  getConditionement(): string;
  setConditionement(value: string): LocationMovement;

  getMaxHeight(): number;
  setMaxHeight(value: number): LocationMovement;

  getMaxWeight(): number;
  setMaxWeight(value: number): LocationMovement;

  getMinHeight(): number;
  setMinHeight(value: number): LocationMovement;

  getLevel(): number;
  setLevel(value: number): LocationMovement;

  getDebut(): number;
  setDebut(value: number): LocationMovement;

  getFin(): number;
  setFin(value: number): LocationMovement;

  getLocationType(): string;
  setLocationType(value: string): LocationMovement;

  getCode(): string;
  setCode(value: string): LocationMovement;

  getParentId(): string;
  setParentId(value: string): LocationMovement;

  getZoneCode(): string;
  setZoneCode(value: string): LocationMovement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationMovement.AsObject;
  static toObject(includeInstance: boolean, msg: LocationMovement): LocationMovement.AsObject;
  static serializeBinaryToWriter(message: LocationMovement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationMovement;
  static deserializeBinaryFromReader(message: LocationMovement, reader: jspb.BinaryReader): LocationMovement;
}

export namespace LocationMovement {
  export type AsObject = {
    id: string,
    name: string,
    storageType: string,
    storageFunc: string,
    zoneId: string,
    aisle: string,
    bay: string,
    width: number,
    height: number,
    length: number,
    entryBlock: string,
    conditionement: string,
    maxHeight: number,
    maxWeight: number,
    minHeight: number,
    level: number,
    debut: number,
    fin: number,
    locationType: string,
    code: string,
    parentId: string,
    zoneCode: string,
  }
}

export class GetListLocationForMovementRequest extends jspb.Message {
  getStockId(): string;
  setStockId(value: string): GetListLocationForMovementRequest;

  getSscc(): string;
  setSscc(value: string): GetListLocationForMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListLocationForMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListLocationForMovementRequest): GetListLocationForMovementRequest.AsObject;
  static serializeBinaryToWriter(message: GetListLocationForMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListLocationForMovementRequest;
  static deserializeBinaryFromReader(message: GetListLocationForMovementRequest, reader: jspb.BinaryReader): GetListLocationForMovementRequest;
}

export namespace GetListLocationForMovementRequest {
  export type AsObject = {
    stockId: string,
    sscc: string,
  }
}

export class GetListLocationForMovementResponse extends jspb.Message {
  getLocationInfoList(): Array<LocationMovement>;
  setLocationInfoList(value: Array<LocationMovement>): GetListLocationForMovementResponse;
  clearLocationInfoList(): GetListLocationForMovementResponse;
  addLocationInfo(value?: LocationMovement, index?: number): LocationMovement;

  getMessageError(): string;
  setMessageError(value: string): GetListLocationForMovementResponse;

  getStatus(): string;
  setStatus(value: string): GetListLocationForMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListLocationForMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListLocationForMovementResponse): GetListLocationForMovementResponse.AsObject;
  static serializeBinaryToWriter(message: GetListLocationForMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListLocationForMovementResponse;
  static deserializeBinaryFromReader(message: GetListLocationForMovementResponse, reader: jspb.BinaryReader): GetListLocationForMovementResponse;
}

export namespace GetListLocationForMovementResponse {
  export type AsObject = {
    locationInfoList: Array<LocationMovement.AsObject>,
    messageError: string,
    status: string,
  }
}

export class ValidLocationForMovementRequest extends jspb.Message {
  getStockId(): string;
  setStockId(value: string): ValidLocationForMovementRequest;

  getSscc(): string;
  setSscc(value: string): ValidLocationForMovementRequest;

  getDestinationLocationId(): string;
  setDestinationLocationId(value: string): ValidLocationForMovementRequest;

  getBarCode(): string;
  setBarCode(value: string): ValidLocationForMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidLocationForMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidLocationForMovementRequest): ValidLocationForMovementRequest.AsObject;
  static serializeBinaryToWriter(message: ValidLocationForMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidLocationForMovementRequest;
  static deserializeBinaryFromReader(message: ValidLocationForMovementRequest, reader: jspb.BinaryReader): ValidLocationForMovementRequest;
}

export namespace ValidLocationForMovementRequest {
  export type AsObject = {
    stockId: string,
    sscc: string,
    destinationLocationId: string,
    barCode: string,
  }
}

export class ValidLocationForMovementResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): ValidLocationForMovementResponse;

  getLocationId(): string;
  setLocationId(value: string): ValidLocationForMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidLocationForMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidLocationForMovementResponse): ValidLocationForMovementResponse.AsObject;
  static serializeBinaryToWriter(message: ValidLocationForMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidLocationForMovementResponse;
  static deserializeBinaryFromReader(message: ValidLocationForMovementResponse, reader: jspb.BinaryReader): ValidLocationForMovementResponse;
}

export namespace ValidLocationForMovementResponse {
  export type AsObject = {
    messageError: string,
    locationId: string,
  }
}

export class CheckCanDeleteLocationByIdRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): CheckCanDeleteLocationByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCanDeleteLocationByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCanDeleteLocationByIdRequest): CheckCanDeleteLocationByIdRequest.AsObject;
  static serializeBinaryToWriter(message: CheckCanDeleteLocationByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCanDeleteLocationByIdRequest;
  static deserializeBinaryFromReader(message: CheckCanDeleteLocationByIdRequest, reader: jspb.BinaryReader): CheckCanDeleteLocationByIdRequest;
}

export namespace CheckCanDeleteLocationByIdRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class CheckCanDeleteLocationByIdResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): CheckCanDeleteLocationByIdResponse;

  getLocationId(): string;
  setLocationId(value: string): CheckCanDeleteLocationByIdResponse;

  getIsUsed(): boolean;
  setIsUsed(value: boolean): CheckCanDeleteLocationByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCanDeleteLocationByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCanDeleteLocationByIdResponse): CheckCanDeleteLocationByIdResponse.AsObject;
  static serializeBinaryToWriter(message: CheckCanDeleteLocationByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCanDeleteLocationByIdResponse;
  static deserializeBinaryFromReader(message: CheckCanDeleteLocationByIdResponse, reader: jspb.BinaryReader): CheckCanDeleteLocationByIdResponse;
}

export namespace CheckCanDeleteLocationByIdResponse {
  export type AsObject = {
    messageError: string,
    locationId: string,
    isUsed: boolean,
  }
}

export class ResetMovementRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): ResetMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMovementRequest): ResetMovementRequest.AsObject;
  static serializeBinaryToWriter(message: ResetMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMovementRequest;
  static deserializeBinaryFromReader(message: ResetMovementRequest, reader: jspb.BinaryReader): ResetMovementRequest;
}

export namespace ResetMovementRequest {
  export type AsObject = {
    sscc: string,
  }
}

export class ResetMovementResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): ResetMovementResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): ResetMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMovementResponse): ResetMovementResponse.AsObject;
  static serializeBinaryToWriter(message: ResetMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMovementResponse;
  static deserializeBinaryFromReader(message: ResetMovementResponse, reader: jspb.BinaryReader): ResetMovementResponse;
}

export namespace ResetMovementResponse {
  export type AsObject = {
    messageerror: string,
    isValid: boolean,
  }
}

