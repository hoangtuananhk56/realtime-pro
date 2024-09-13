import * as jspb from 'google-protobuf'

import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"
import * as proto_stock_stock_pb from '../../proto/stock/stock_pb'; // proto import: "proto/stock/stock.proto"


export class SSCC extends jspb.Message {
  getId(): string;
  setId(value: string): SSCC;

  getCreateAt(): number;
  setCreateAt(value: number): SSCC;

  getUpdateAt(): number;
  setUpdateAt(value: number): SSCC;

  getNum(): string;
  setNum(value: string): SSCC;

  getCodeStatus(): string;
  setCodeStatus(value: string): SSCC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCC.AsObject;
  static toObject(includeInstance: boolean, msg: SSCC): SSCC.AsObject;
  static serializeBinaryToWriter(message: SSCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCC;
  static deserializeBinaryFromReader(message: SSCC, reader: jspb.BinaryReader): SSCC;
}

export namespace SSCC {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    num: string,
    codeStatus: string,
  }
}

export class SSCCNumber extends jspb.Message {
  getNum(): string;
  setNum(value: string): SSCCNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCNumber.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCNumber): SSCCNumber.AsObject;
  static serializeBinaryToWriter(message: SSCCNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCNumber;
  static deserializeBinaryFromReader(message: SSCCNumber, reader: jspb.BinaryReader): SSCCNumber;
}

export namespace SSCCNumber {
  export type AsObject = {
    num: string,
  }
}

export class SSCCResponse extends jspb.Message {
  getEntry(): SSCC | undefined;
  setEntry(value?: SSCC): SSCCResponse;
  hasEntry(): boolean;
  clearEntry(): SSCCResponse;

  getMessageerror(): string;
  setMessageerror(value: string): SSCCResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCResponse): SSCCResponse.AsObject;
  static serializeBinaryToWriter(message: SSCCResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCResponse;
  static deserializeBinaryFromReader(message: SSCCResponse, reader: jspb.BinaryReader): SSCCResponse;
}

export namespace SSCCResponse {
  export type AsObject = {
    entry?: SSCC.AsObject,
    messageerror: string,
  }
}

export class SSCCGeneratorRequest extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): SSCCGeneratorRequest;

  getClientid(): string;
  setClientid(value: string): SSCCGeneratorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCGeneratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCGeneratorRequest): SSCCGeneratorRequest.AsObject;
  static serializeBinaryToWriter(message: SSCCGeneratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCGeneratorRequest;
  static deserializeBinaryFromReader(message: SSCCGeneratorRequest, reader: jspb.BinaryReader): SSCCGeneratorRequest;
}

export namespace SSCCGeneratorRequest {
  export type AsObject = {
    quantity: number,
    clientid: string,
  }
}

export class SSCCGeneratorRespponse extends jspb.Message {
  getSsccCodesList(): Array<string>;
  setSsccCodesList(value: Array<string>): SSCCGeneratorRespponse;
  clearSsccCodesList(): SSCCGeneratorRespponse;
  addSsccCodes(value: string, index?: number): SSCCGeneratorRespponse;

  getMessageerror(): string;
  setMessageerror(value: string): SSCCGeneratorRespponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCGeneratorRespponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCGeneratorRespponse): SSCCGeneratorRespponse.AsObject;
  static serializeBinaryToWriter(message: SSCCGeneratorRespponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCGeneratorRespponse;
  static deserializeBinaryFromReader(message: SSCCGeneratorRespponse, reader: jspb.BinaryReader): SSCCGeneratorRespponse;
}

export namespace SSCCGeneratorRespponse {
  export type AsObject = {
    ssccCodesList: Array<string>,
    messageerror: string,
  }
}

export class SSCCLocationCheckRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): SSCCLocationCheckRequest;

  getUserId(): string;
  setUserId(value: string): SSCCLocationCheckRequest;

  getArticleId(): string;
  setArticleId(value: string): SSCCLocationCheckRequest;

  getMissionId(): string;
  setMissionId(value: string): SSCCLocationCheckRequest;

  getQuantity(): number;
  setQuantity(value: number): SSCCLocationCheckRequest;

  getSsccHost(): string;
  setSsccHost(value: string): SSCCLocationCheckRequest;

  getIsAcceptOverHeight(): boolean;
  setIsAcceptOverHeight(value: boolean): SSCCLocationCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCLocationCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCLocationCheckRequest): SSCCLocationCheckRequest.AsObject;
  static serializeBinaryToWriter(message: SSCCLocationCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCLocationCheckRequest;
  static deserializeBinaryFromReader(message: SSCCLocationCheckRequest, reader: jspb.BinaryReader): SSCCLocationCheckRequest;
}

export namespace SSCCLocationCheckRequest {
  export type AsObject = {
    sscc: string,
    userId: string,
    articleId: string,
    missionId: string,
    quantity: number,
    ssccHost: string,
    isAcceptOverHeight: boolean,
  }
}

export class SSCCLocationCheckResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): SSCCLocationCheckResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): SSCCLocationCheckResponse;

  getLocationId(): string;
  setLocationId(value: string): SSCCLocationCheckResponse;

  getIsFirstScanned(): boolean;
  setIsFirstScanned(value: boolean): SSCCLocationCheckResponse;

  getIsScanNext(): boolean;
  setIsScanNext(value: boolean): SSCCLocationCheckResponse;

  getIsLastMission(): boolean;
  setIsLastMission(value: boolean): SSCCLocationCheckResponse;

  getIsFirstMissionInDay(): boolean;
  setIsFirstMissionInDay(value: boolean): SSCCLocationCheckResponse;

  getComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticle>;
  setComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticle>): SSCCLocationCheckResponse;
  clearComArticleList(): SSCCLocationCheckResponse;
  addComArticle(value?: proto_comarticle_comarticle_pb.ComArticle, index?: number): proto_comarticle_comarticle_pb.ComArticle;

  getRecommendQte(): number;
  setRecommendQte(value: number): SSCCLocationCheckResponse;

  getIsOverHeight(): boolean;
  setIsOverHeight(value: boolean): SSCCLocationCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCLocationCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCLocationCheckResponse): SSCCLocationCheckResponse.AsObject;
  static serializeBinaryToWriter(message: SSCCLocationCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCLocationCheckResponse;
  static deserializeBinaryFromReader(message: SSCCLocationCheckResponse, reader: jspb.BinaryReader): SSCCLocationCheckResponse;
}

export namespace SSCCLocationCheckResponse {
  export type AsObject = {
    messageError: string,
    isValid: boolean,
    locationId: string,
    isFirstScanned: boolean,
    isScanNext: boolean,
    isLastMission: boolean,
    isFirstMissionInDay: boolean,
    comArticleList: Array<proto_comarticle_comarticle_pb.ComArticle.AsObject>,
    recommendQte: number,
    isOverHeight: boolean,
  }
}

export class SSCCMovementCheckRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): SSCCMovementCheckRequest;

  getMissionId(): string;
  setMissionId(value: string): SSCCMovementCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCMovementCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCMovementCheckRequest): SSCCMovementCheckRequest.AsObject;
  static serializeBinaryToWriter(message: SSCCMovementCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCMovementCheckRequest;
  static deserializeBinaryFromReader(message: SSCCMovementCheckRequest, reader: jspb.BinaryReader): SSCCMovementCheckRequest;
}

export namespace SSCCMovementCheckRequest {
  export type AsObject = {
    sscc: string,
    missionId: string,
  }
}

export class SSCCMovementCheckResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): SSCCMovementCheckResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): SSCCMovementCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCMovementCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCMovementCheckResponse): SSCCMovementCheckResponse.AsObject;
  static serializeBinaryToWriter(message: SSCCMovementCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCMovementCheckResponse;
  static deserializeBinaryFromReader(message: SSCCMovementCheckResponse, reader: jspb.BinaryReader): SSCCMovementCheckResponse;
}

export namespace SSCCMovementCheckResponse {
  export type AsObject = {
    messageError: string,
    isValid: boolean,
  }
}

export class SSCCLoadingCheckRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): SSCCLoadingCheckRequest;

  getUserId(): string;
  setUserId(value: string): SSCCLoadingCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCLoadingCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCLoadingCheckRequest): SSCCLoadingCheckRequest.AsObject;
  static serializeBinaryToWriter(message: SSCCLoadingCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCLoadingCheckRequest;
  static deserializeBinaryFromReader(message: SSCCLoadingCheckRequest, reader: jspb.BinaryReader): SSCCLoadingCheckRequest;
}

export namespace SSCCLoadingCheckRequest {
  export type AsObject = {
    sscc: string,
    userId: string,
  }
}

export class SSCCLoadingCheckResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): SSCCLoadingCheckResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): SSCCLoadingCheckResponse;

  getIsMissionEnded(): boolean;
  setIsMissionEnded(value: boolean): SSCCLoadingCheckResponse;

  getIsNeedReleased(): boolean;
  setIsNeedReleased(value: boolean): SSCCLoadingCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCLoadingCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCLoadingCheckResponse): SSCCLoadingCheckResponse.AsObject;
  static serializeBinaryToWriter(message: SSCCLoadingCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCLoadingCheckResponse;
  static deserializeBinaryFromReader(message: SSCCLoadingCheckResponse, reader: jspb.BinaryReader): SSCCLoadingCheckResponse;
}

export namespace SSCCLoadingCheckResponse {
  export type AsObject = {
    messageError: string,
    isValid: boolean,
    isMissionEnded: boolean,
    isNeedReleased: boolean,
  }
}

export class SSCCRegCheckRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): SSCCRegCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCRegCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCRegCheckRequest): SSCCRegCheckRequest.AsObject;
  static serializeBinaryToWriter(message: SSCCRegCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCRegCheckRequest;
  static deserializeBinaryFromReader(message: SSCCRegCheckRequest, reader: jspb.BinaryReader): SSCCRegCheckRequest;
}

export namespace SSCCRegCheckRequest {
  export type AsObject = {
    sscc: string,
  }
}

export class SSCCRegCheckResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): SSCCRegCheckResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): SSCCRegCheckResponse;

  getStock(): proto_stock_stock_pb.Stock | undefined;
  setStock(value?: proto_stock_stock_pb.Stock): SSCCRegCheckResponse;
  hasStock(): boolean;
  clearStock(): SSCCRegCheckResponse;

  getAttFournisseur(): AttFournisseur | undefined;
  setAttFournisseur(value?: AttFournisseur): SSCCRegCheckResponse;
  hasAttFournisseur(): boolean;
  clearAttFournisseur(): SSCCRegCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCRegCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCRegCheckResponse): SSCCRegCheckResponse.AsObject;
  static serializeBinaryToWriter(message: SSCCRegCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCRegCheckResponse;
  static deserializeBinaryFromReader(message: SSCCRegCheckResponse, reader: jspb.BinaryReader): SSCCRegCheckResponse;
}

export namespace SSCCRegCheckResponse {
  export type AsObject = {
    messageError: string,
    isValid: boolean,
    stock?: proto_stock_stock_pb.Stock.AsObject,
    attFournisseur?: AttFournisseur.AsObject,
  }
}

export class AttFournisseur extends jspb.Message {
  getId(): string;
  setId(value: string): AttFournisseur;

  getCreateAt(): number;
  setCreateAt(value: number): AttFournisseur;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttFournisseur;

  getCodeNom(): string;
  setCodeNom(value: string): AttFournisseur;

  getAddresse(): string;
  setAddresse(value: string): AttFournisseur;

  getCodePostal(): string;
  setCodePostal(value: string): AttFournisseur;

  getVille(): string;
  setVille(value: string): AttFournisseur;

  getPays(): string;
  setPays(value: string): AttFournisseur;

  getIso(): string;
  setIso(value: string): AttFournisseur;

  getComplement(): string;
  setComplement(value: string): AttFournisseur;

  getContact(): string;
  setContact(value: string): AttFournisseur;

  getTel(): string;
  setTel(value: string): AttFournisseur;

  getMobile(): string;
  setMobile(value: string): AttFournisseur;

  getEmail(): string;
  setEmail(value: string): AttFournisseur;

  getAttenduId(): string;
  setAttenduId(value: string): AttFournisseur;

  getGln(): string;
  setGln(value: string): AttFournisseur;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttFournisseur.AsObject;
  static toObject(includeInstance: boolean, msg: AttFournisseur): AttFournisseur.AsObject;
  static serializeBinaryToWriter(message: AttFournisseur, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttFournisseur;
  static deserializeBinaryFromReader(message: AttFournisseur, reader: jspb.BinaryReader): AttFournisseur;
}

export namespace AttFournisseur {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    codeNom: string,
    addresse: string,
    codePostal: string,
    ville: string,
    pays: string,
    iso: string,
    complement: string,
    contact: string,
    tel: string,
    mobile: string,
    email: string,
    attenduId: string,
    gln: string,
  }
}

export class SSCCReapproCheckRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): SSCCReapproCheckRequest;

  getMissionId(): string;
  setMissionId(value: string): SSCCReapproCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCReapproCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCReapproCheckRequest): SSCCReapproCheckRequest.AsObject;
  static serializeBinaryToWriter(message: SSCCReapproCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCReapproCheckRequest;
  static deserializeBinaryFromReader(message: SSCCReapproCheckRequest, reader: jspb.BinaryReader): SSCCReapproCheckRequest;
}

export namespace SSCCReapproCheckRequest {
  export type AsObject = {
    sscc: string,
    missionId: string,
  }
}

export class SSCCReapproCheckResponse extends jspb.Message {
  getMessageError(): string;
  setMessageError(value: string): SSCCReapproCheckResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): SSCCReapproCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCReapproCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCReapproCheckResponse): SSCCReapproCheckResponse.AsObject;
  static serializeBinaryToWriter(message: SSCCReapproCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCReapproCheckResponse;
  static deserializeBinaryFromReader(message: SSCCReapproCheckResponse, reader: jspb.BinaryReader): SSCCReapproCheckResponse;
}

export namespace SSCCReapproCheckResponse {
  export type AsObject = {
    messageError: string,
    isValid: boolean,
  }
}

export class FindSsccInStockRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): FindSsccInStockRequest;

  getReferenceId(): string;
  setReferenceId(value: string): FindSsccInStockRequest;

  getCompanyId(): string;
  setCompanyId(value: string): FindSsccInStockRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): FindSsccInStockRequest;

  getClientId(): string;
  setClientId(value: string): FindSsccInStockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSsccInStockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindSsccInStockRequest): FindSsccInStockRequest.AsObject;
  static serializeBinaryToWriter(message: FindSsccInStockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSsccInStockRequest;
  static deserializeBinaryFromReader(message: FindSsccInStockRequest, reader: jspb.BinaryReader): FindSsccInStockRequest;
}

export namespace FindSsccInStockRequest {
  export type AsObject = {
    sscc: string,
    referenceId: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class FindSsccInStockResponse extends jspb.Message {
  getEntryList(): Array<proto_stock_stock_pb.Stock>;
  setEntryList(value: Array<proto_stock_stock_pb.Stock>): FindSsccInStockResponse;
  clearEntryList(): FindSsccInStockResponse;
  addEntry(value?: proto_stock_stock_pb.Stock, index?: number): proto_stock_stock_pb.Stock;

  getMessageerror(): string;
  setMessageerror(value: string): FindSsccInStockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSsccInStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindSsccInStockResponse): FindSsccInStockResponse.AsObject;
  static serializeBinaryToWriter(message: FindSsccInStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSsccInStockResponse;
  static deserializeBinaryFromReader(message: FindSsccInStockResponse, reader: jspb.BinaryReader): FindSsccInStockResponse;
}

export namespace FindSsccInStockResponse {
  export type AsObject = {
    entryList: Array<proto_stock_stock_pb.Stock.AsObject>,
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

export class SSCCHistory extends jspb.Message {
  getId(): string;
  setId(value: string): SSCCHistory;

  getCreatedAt(): number;
  setCreatedAt(value: number): SSCCHistory;

  getMovementType(): string;
  setMovementType(value: string): SSCCHistory;

  getMovementState(): string;
  setMovementState(value: string): SSCCHistory;

  getObjectType(): string;
  setObjectType(value: string): SSCCHistory;

  getObjectId(): string;
  setObjectId(value: string): SSCCHistory;

  getCode(): string;
  setCode(value: string): SSCCHistory;

  getDescription(): string;
  setDescription(value: string): SSCCHistory;

  getUserId(): string;
  setUserId(value: string): SSCCHistory;

  getSscc(): string;
  setSscc(value: string): SSCCHistory;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): SSCCHistory;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): SSCCHistory;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): SSCCHistory;

  getChrono(): string;
  setChrono(value: string): SSCCHistory;

  getAction(): string;
  setAction(value: string): SSCCHistory;

  getLocationAddress(): string;
  setLocationAddress(value: string): SSCCHistory;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): SSCCHistory;

  getLibelle(): string;
  setLibelle(value: string): SSCCHistory;

  getEventType(): string;
  setEventType(value: string): SSCCHistory;

  getUserName(): string;
  setUserName(value: string): SSCCHistory;

  getObjectNumber(): string;
  setObjectNumber(value: string): SSCCHistory;

  getQte(): number;
  setQte(value: number): SSCCHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSCCHistory.AsObject;
  static toObject(includeInstance: boolean, msg: SSCCHistory): SSCCHistory.AsObject;
  static serializeBinaryToWriter(message: SSCCHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSCCHistory;
  static deserializeBinaryFromReader(message: SSCCHistory, reader: jspb.BinaryReader): SSCCHistory;
}

export namespace SSCCHistory {
  export type AsObject = {
    id: string,
    createdAt: number,
    movementType: string,
    movementState: string,
    objectType: string,
    objectId: string,
    code: string,
    description: string,
    userId: string,
    sscc: string,
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    chrono: string,
    action: string,
    locationAddress: string,
    referenceNumber: string,
    libelle: string,
    eventType: string,
    userName: string,
    objectNumber: string,
    qte: number,
  }
}

export class GetHistoryBySSCCNumberRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): GetHistoryBySSCCNumberRequest;

  getLimit(): number;
  setLimit(value: number): GetHistoryBySSCCNumberRequest;

  getOffset(): number;
  setOffset(value: number): GetHistoryBySSCCNumberRequest;

  getFrom(): number;
  setFrom(value: number): GetHistoryBySSCCNumberRequest;

  getTo(): number;
  setTo(value: number): GetHistoryBySSCCNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryBySSCCNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryBySSCCNumberRequest): GetHistoryBySSCCNumberRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoryBySSCCNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryBySSCCNumberRequest;
  static deserializeBinaryFromReader(message: GetHistoryBySSCCNumberRequest, reader: jspb.BinaryReader): GetHistoryBySSCCNumberRequest;
}

export namespace GetHistoryBySSCCNumberRequest {
  export type AsObject = {
    sscc: string,
    limit: number,
    offset: number,
    from: number,
    to: number,
  }
}

export class GetHistoryBySSCCNumberResponse extends jspb.Message {
  getEntryList(): Array<SSCCHistory>;
  setEntryList(value: Array<SSCCHistory>): GetHistoryBySSCCNumberResponse;
  clearEntryList(): GetHistoryBySSCCNumberResponse;
  addEntry(value?: SSCCHistory, index?: number): SSCCHistory;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetHistoryBySSCCNumberResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetHistoryBySSCCNumberResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetHistoryBySSCCNumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryBySSCCNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryBySSCCNumberResponse): GetHistoryBySSCCNumberResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoryBySSCCNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryBySSCCNumberResponse;
  static deserializeBinaryFromReader(message: GetHistoryBySSCCNumberResponse, reader: jspb.BinaryReader): GetHistoryBySSCCNumberResponse;
}

export namespace GetHistoryBySSCCNumberResponse {
  export type AsObject = {
    entryList: Array<SSCCHistory.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

