import * as jspb from 'google-protobuf'

import * as proto_conditionnement_conditionnement_pb from '../../proto/conditionnement/conditionnement_pb'; // proto import: "proto/conditionnement/conditionnement.proto"
import * as proto_lotreference_lotreference_pb from '../../proto/lotreference/lotreference_pb'; // proto import: "proto/lotreference/lotreference.proto"


export class Stock extends jspb.Message {
  getId(): string;
  setId(value: string): Stock;

  getCreateAt(): number;
  setCreateAt(value: number): Stock;

  getUpdateAt(): number;
  setUpdateAt(value: number): Stock;

  getReferenceId(): string;
  setReferenceId(value: string): Stock;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): Stock;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): Stock;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): Stock;

  getQuantite(): number;
  setQuantite(value: number): Stock;

  getSousQte(): number;
  setSousQte(value: number): Stock;

  getTotalPieses(): number;
  setTotalPieses(value: number): Stock;

  getSousFamille(): string;
  setSousFamille(value: string): Stock;

  getAttenduId(): string;
  setAttenduId(value: string): Stock;

  getStatus(): string;
  setStatus(value: string): Stock;

  getCurLocationId(): string;
  setCurLocationId(value: string): Stock;

  getCurZoneId(): string;
  setCurZoneId(value: string): Stock;

  getCurLocationCode(): string;
  setCurLocationCode(value: string): Stock;

  getCurLocationAisle(): string;
  setCurLocationAisle(value: string): Stock;

  getCurLocationBay(): string;
  setCurLocationBay(value: string): Stock;

  getCurZoneCode(): string;
  setCurZoneCode(value: string): Stock;

  getPreLocationId(): string;
  setPreLocationId(value: string): Stock;

  getPreLocationCode(): string;
  setPreLocationCode(value: string): Stock;

  getPreZoneId(): string;
  setPreZoneId(value: string): Stock;

  getPreLocationAisle(): string;
  setPreLocationAisle(value: string): Stock;

  getPreLocationBay(): string;
  setPreLocationBay(value: string): Stock;

  getPreZoneCode(): string;
  setPreZoneCode(value: string): Stock;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): Stock;

  getFabricationAt(): number;
  setFabricationAt(value: number): Stock;

  getAttProduction(): AttProduction | undefined;
  setAttProduction(value?: AttProduction): Stock;
  hasAttProduction(): boolean;
  clearAttProduction(): Stock;

  getCreationBy(): string;
  setCreationBy(value: string): Stock;

  getCreationerId(): string;
  setCreationerId(value: string): Stock;

  getModificationBy(): string;
  setModificationBy(value: string): Stock;

  getModificationAt(): number;
  setModificationAt(value: number): Stock;

  getModifierId(): string;
  setModifierId(value: string): Stock;

  getValidationAt(): number;
  setValidationAt(value: number): Stock;

  getValidationBy(): string;
  setValidationBy(value: string): Stock;

  getValidationerId(): string;
  setValidationerId(value: string): Stock;

  getLiberationAt(): number;
  setLiberationAt(value: number): Stock;

  getLiberationBy(): string;
  setLiberationBy(value: string): Stock;

  getLiberationerId(): string;
  setLiberationerId(value: string): Stock;

  getCurLevel(): number;
  setCurLevel(value: number): Stock;

  getPreLevel(): number;
  setPreLevel(value: number): Stock;

  getCurPoidsNet(): number;
  setCurPoidsNet(value: number): Stock;

  getCurPoidsBrut(): number;
  setCurPoidsBrut(value: number): Stock;

  getCurHeight(): number;
  setCurHeight(value: number): Stock;

  getCurVolume(): number;
  setCurVolume(value: number): Stock;

  getParentId(): string;
  setParentId(value: string): Stock;

  getNumberOfFree(): number;
  setNumberOfFree(value: number): Stock;

  getReapproStatus(): string;
  setReapproStatus(value: string): Stock;

  getConditionementId(): string;
  setConditionementId(value: string): Stock;

  getConditionementLevel(): number;
  setConditionementLevel(value: number): Stock;

  getIsStandard(): boolean;
  setIsStandard(value: boolean): Stock;

  getConditionnement(): proto_conditionnement_conditionnement_pb.Conditionnement | undefined;
  setConditionnement(value?: proto_conditionnement_conditionnement_pb.Conditionnement): Stock;
  hasConditionnement(): boolean;
  clearConditionnement(): Stock;

  getType(): string;
  setType(value: string): Stock;

  getMouvement(): string;
  setMouvement(value: string): Stock;

  getEta(): string;
  setEta(value: string): Stock;

  getCreatedAt(): number;
  setCreatedAt(value: number): Stock;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Stock;

  getSscc(): string;
  setSscc(value: string): Stock;

  getComArticleList(): Array<ComArticleOb>;
  setComArticleList(value: Array<ComArticleOb>): Stock;
  clearComArticleList(): Stock;
  addComArticle(value?: ComArticleOb, index?: number): ComArticleOb;

  getAttendu(): AttenduOb | undefined;
  setAttendu(value?: AttenduOb): Stock;
  hasAttendu(): boolean;
  clearAttendu(): Stock;

  getChrono(): string;
  setChrono(value: string): Stock;

  getLoadingBl(): string;
  setLoadingBl(value: string): Stock;

  getParent(): ParentOb | undefined;
  setParent(value?: ParentOb): Stock;
  hasParent(): boolean;
  clearParent(): Stock;

  getSsccUnlockAt(): number;
  setSsccUnlockAt(value: number): Stock;

  getSsccLockAt(): number;
  setSsccLockAt(value: number): Stock;

  getSsccBlock(): boolean;
  setSsccBlock(value: boolean): Stock;

  getPreSsccBlock(): boolean;
  setPreSsccBlock(value: boolean): Stock;

  getIsSkipBlockLot(): boolean;
  setIsSkipBlockLot(value: boolean): Stock;

  getUpdatedEntryTime(): number;
  setUpdatedEntryTime(value: number): Stock;

  getOrigine(): string;
  setOrigine(value: string): Stock;

  getCreationAt(): number;
  setCreationAt(value: number): Stock;

  getLocation(): LocationOb | undefined;
  setLocation(value?: LocationOb): Stock;
  hasLocation(): boolean;
  clearLocation(): Stock;

  getCompanyId(): string;
  setCompanyId(value: string): Stock;

  getWarehouseId(): string;
  setWarehouseId(value: string): Stock;

  getClientId(): string;
  setClientId(value: string): Stock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stock.AsObject;
  static toObject(includeInstance: boolean, msg: Stock): Stock.AsObject;
  static serializeBinaryToWriter(message: Stock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stock;
  static deserializeBinaryFromReader(message: Stock, reader: jspb.BinaryReader): Stock;
}

export namespace Stock {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    referenceId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    quantite: number,
    sousQte: number,
    totalPieses: number,
    sousFamille: string,
    attenduId: string,
    status: string,
    curLocationId: string,
    curZoneId: string,
    curLocationCode: string,
    curLocationAisle: string,
    curLocationBay: string,
    curZoneCode: string,
    preLocationId: string,
    preLocationCode: string,
    preZoneId: string,
    preLocationAisle: string,
    preLocationBay: string,
    preZoneCode: string,
    referenceNumber: string,
    fabricationAt: number,
    attProduction?: AttProduction.AsObject,
    creationBy: string,
    creationerId: string,
    modificationBy: string,
    modificationAt: number,
    modifierId: string,
    validationAt: number,
    validationBy: string,
    validationerId: string,
    liberationAt: number,
    liberationBy: string,
    liberationerId: string,
    curLevel: number,
    preLevel: number,
    curPoidsNet: number,
    curPoidsBrut: number,
    curHeight: number,
    curVolume: number,
    parentId: string,
    numberOfFree: number,
    reapproStatus: string,
    conditionementId: string,
    conditionementLevel: number,
    isStandard: boolean,
    conditionnement?: proto_conditionnement_conditionnement_pb.Conditionnement.AsObject,
    type: string,
    mouvement: string,
    eta: string,
    createdAt: number,
    updatedAt: number,
    sscc: string,
    comArticleList: Array<ComArticleOb.AsObject>,
    attendu?: AttenduOb.AsObject,
    chrono: string,
    loadingBl: string,
    parent?: ParentOb.AsObject,
    ssccUnlockAt: number,
    ssccLockAt: number,
    ssccBlock: boolean,
    preSsccBlock: boolean,
    isSkipBlockLot: boolean,
    updatedEntryTime: number,
    origine: string,
    creationAt: number,
    location?: LocationOb.AsObject,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class LocationOb extends jspb.Message {
  getId(): string;
  setId(value: string): LocationOb;

  getPrevEntryBlock(): string;
  setPrevEntryBlock(value: string): LocationOb;

  getEntryBlock(): string;
  setEntryBlock(value: string): LocationOb;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationOb.AsObject;
  static toObject(includeInstance: boolean, msg: LocationOb): LocationOb.AsObject;
  static serializeBinaryToWriter(message: LocationOb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationOb;
  static deserializeBinaryFromReader(message: LocationOb, reader: jspb.BinaryReader): LocationOb;
}

export namespace LocationOb {
  export type AsObject = {
    id: string,
    prevEntryBlock: string,
    entryBlock: string,
  }
}

export class StockSsccInfo extends jspb.Message {
  getId(): string;
  setId(value: string): StockSsccInfo;

  getReferenceId(): string;
  setReferenceId(value: string): StockSsccInfo;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): StockSsccInfo;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): StockSsccInfo;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): StockSsccInfo;

  getQuantite(): number;
  setQuantite(value: number): StockSsccInfo;

  getSousQte(): number;
  setSousQte(value: number): StockSsccInfo;

  getTotalPieses(): number;
  setTotalPieses(value: number): StockSsccInfo;

  getSousFamille(): string;
  setSousFamille(value: string): StockSsccInfo;

  getAttenduId(): string;
  setAttenduId(value: string): StockSsccInfo;

  getStatus(): string;
  setStatus(value: string): StockSsccInfo;

  getCurLocationId(): string;
  setCurLocationId(value: string): StockSsccInfo;

  getCurZoneId(): string;
  setCurZoneId(value: string): StockSsccInfo;

  getCurLocationCode(): string;
  setCurLocationCode(value: string): StockSsccInfo;

  getCurLocationAisle(): string;
  setCurLocationAisle(value: string): StockSsccInfo;

  getCurLocationBay(): string;
  setCurLocationBay(value: string): StockSsccInfo;

  getCurZoneCode(): string;
  setCurZoneCode(value: string): StockSsccInfo;

  getPreLocationId(): string;
  setPreLocationId(value: string): StockSsccInfo;

  getPreLocationCode(): string;
  setPreLocationCode(value: string): StockSsccInfo;

  getPreZoneId(): string;
  setPreZoneId(value: string): StockSsccInfo;

  getPreLocationAisle(): string;
  setPreLocationAisle(value: string): StockSsccInfo;

  getPreLocationBay(): string;
  setPreLocationBay(value: string): StockSsccInfo;

  getPreZoneCode(): string;
  setPreZoneCode(value: string): StockSsccInfo;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): StockSsccInfo;

  getFabricationAt(): number;
  setFabricationAt(value: number): StockSsccInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): StockSsccInfo;

  getCreaterId(): string;
  setCreaterId(value: string): StockSsccInfo;

  getModificationBy(): string;
  setModificationBy(value: string): StockSsccInfo;

  getModificationAt(): number;
  setModificationAt(value: number): StockSsccInfo;

  getModifierId(): string;
  setModifierId(value: string): StockSsccInfo;

  getValidationAt(): number;
  setValidationAt(value: number): StockSsccInfo;

  getValidationBy(): string;
  setValidationBy(value: string): StockSsccInfo;

  getValidationerId(): string;
  setValidationerId(value: string): StockSsccInfo;

  getLiberationAt(): number;
  setLiberationAt(value: number): StockSsccInfo;

  getLiberationBy(): string;
  setLiberationBy(value: string): StockSsccInfo;

  getLiberationerId(): string;
  setLiberationerId(value: string): StockSsccInfo;

  getCurLevel(): number;
  setCurLevel(value: number): StockSsccInfo;

  getPreLevel(): number;
  setPreLevel(value: number): StockSsccInfo;

  getCurPoidsNet(): number;
  setCurPoidsNet(value: number): StockSsccInfo;

  getCurPoidsBrut(): number;
  setCurPoidsBrut(value: number): StockSsccInfo;

  getCurHeight(): number;
  setCurHeight(value: number): StockSsccInfo;

  getCurVolume(): number;
  setCurVolume(value: number): StockSsccInfo;

  getParentId(): string;
  setParentId(value: string): StockSsccInfo;

  getNumberOfFree(): number;
  setNumberOfFree(value: number): StockSsccInfo;

  getReapproStatus(): string;
  setReapproStatus(value: string): StockSsccInfo;

  getConditionementId(): string;
  setConditionementId(value: string): StockSsccInfo;

  getConditionementLevel(): number;
  setConditionementLevel(value: number): StockSsccInfo;

  getIsStandard(): boolean;
  setIsStandard(value: boolean): StockSsccInfo;

  getEntryDate(): number;
  setEntryDate(value: number): StockSsccInfo;

  getType(): string;
  setType(value: string): StockSsccInfo;

  getMouvement(): string;
  setMouvement(value: string): StockSsccInfo;

  getEta(): string;
  setEta(value: string): StockSsccInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): StockSsccInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): StockSsccInfo;

  getSscc(): string;
  setSscc(value: string): StockSsccInfo;

  getChrono(): string;
  setChrono(value: string): StockSsccInfo;

  getLoadingBl(): string;
  setLoadingBl(value: string): StockSsccInfo;

  getSsccUnlockAt(): number;
  setSsccUnlockAt(value: number): StockSsccInfo;

  getSsccLockAt(): number;
  setSsccLockAt(value: number): StockSsccInfo;

  getSsccBlock(): boolean;
  setSsccBlock(value: boolean): StockSsccInfo;

  getPreSsccBlock(): boolean;
  setPreSsccBlock(value: boolean): StockSsccInfo;

  getDluo(): number;
  setDluo(value: number): StockSsccInfo;

  getDlc(): boolean;
  setDlc(value: boolean): StockSsccInfo;

  getDlcValue(): number;
  setDlcValue(value: number): StockSsccInfo;

  getDlv(): boolean;
  setDlv(value: boolean): StockSsccInfo;

  getDlvValue(): number;
  setDlvValue(value: number): StockSsccInfo;

  getGestion(): boolean;
  setGestion(value: boolean): StockSsccInfo;

  getBlocageEntree(): boolean;
  setBlocageEntree(value: boolean): StockSsccInfo;

  getBlocageSortie(): boolean;
  setBlocageSortie(value: boolean): StockSsccInfo;

  getLivraisonAt(): number;
  setLivraisonAt(value: number): StockSsccInfo;

  getChargementAt(): number;
  setChargementAt(value: number): StockSsccInfo;

  getEntryBlock(): string;
  setEntryBlock(value: string): StockSsccInfo;

  getLoadingValidationAt(): number;
  setLoadingValidationAt(value: number): StockSsccInfo;

  getLot(): string;
  setLot(value: string): StockSsccInfo;

  getMotif(): string;
  setMotif(value: string): StockSsccInfo;

  getOrigine(): string;
  setOrigine(value: string): StockSsccInfo;

  getLocationType(): string;
  setLocationType(value: string): StockSsccInfo;

  getStorageType(): string;
  setStorageType(value: string): StockSsccInfo;

  getLotReference(): proto_lotreference_lotreference_pb.LotReference | undefined;
  setLotReference(value?: proto_lotreference_lotreference_pb.LotReference): StockSsccInfo;
  hasLotReference(): boolean;
  clearLotReference(): StockSsccInfo;

  getUpdatedEntryTime(): number;
  setUpdatedEntryTime(value: number): StockSsccInfo;

  getStorageFunc(): string;
  setStorageFunc(value: string): StockSsccInfo;

  getIsSkipBlockLot(): boolean;
  setIsSkipBlockLot(value: boolean): StockSsccInfo;

  getCompanyId(): string;
  setCompanyId(value: string): StockSsccInfo;

  getWarehouseId(): string;
  setWarehouseId(value: string): StockSsccInfo;

  getClientId(): string;
  setClientId(value: string): StockSsccInfo;

  getPreBlockRefStatus(): string;
  setPreBlockRefStatus(value: string): StockSsccInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockSsccInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StockSsccInfo): StockSsccInfo.AsObject;
  static serializeBinaryToWriter(message: StockSsccInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockSsccInfo;
  static deserializeBinaryFromReader(message: StockSsccInfo, reader: jspb.BinaryReader): StockSsccInfo;
}

export namespace StockSsccInfo {
  export type AsObject = {
    id: string,
    referenceId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    quantite: number,
    sousQte: number,
    totalPieses: number,
    sousFamille: string,
    attenduId: string,
    status: string,
    curLocationId: string,
    curZoneId: string,
    curLocationCode: string,
    curLocationAisle: string,
    curLocationBay: string,
    curZoneCode: string,
    preLocationId: string,
    preLocationCode: string,
    preZoneId: string,
    preLocationAisle: string,
    preLocationBay: string,
    preZoneCode: string,
    referenceNumber: string,
    fabricationAt: number,
    createdBy: string,
    createrId: string,
    modificationBy: string,
    modificationAt: number,
    modifierId: string,
    validationAt: number,
    validationBy: string,
    validationerId: string,
    liberationAt: number,
    liberationBy: string,
    liberationerId: string,
    curLevel: number,
    preLevel: number,
    curPoidsNet: number,
    curPoidsBrut: number,
    curHeight: number,
    curVolume: number,
    parentId: string,
    numberOfFree: number,
    reapproStatus: string,
    conditionementId: string,
    conditionementLevel: number,
    isStandard: boolean,
    entryDate: number,
    type: string,
    mouvement: string,
    eta: string,
    createdAt: number,
    updatedAt: number,
    sscc: string,
    chrono: string,
    loadingBl: string,
    ssccUnlockAt: number,
    ssccLockAt: number,
    ssccBlock: boolean,
    preSsccBlock: boolean,
    dluo: number,
    dlc: boolean,
    dlcValue: number,
    dlv: boolean,
    dlvValue: number,
    gestion: boolean,
    blocageEntree: boolean,
    blocageSortie: boolean,
    livraisonAt: number,
    chargementAt: number,
    entryBlock: string,
    loadingValidationAt: number,
    lot: string,
    motif: string,
    origine: string,
    locationType: string,
    storageType: string,
    lotReference?: proto_lotreference_lotreference_pb.LotReference.AsObject,
    updatedEntryTime: number,
    storageFunc: string,
    isSkipBlockLot: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
    preBlockRefStatus: string,
  }
}

export class ParentOb extends jspb.Message {
  getId(): string;
  setId(value: string): ParentOb;

  getCreateAt(): number;
  setCreateAt(value: number): ParentOb;

  getUpdateAt(): number;
  setUpdateAt(value: number): ParentOb;

  getAttenduId(): string;
  setAttenduId(value: string): ParentOb;

  getAttendu(): AttenduOb | undefined;
  setAttendu(value?: AttenduOb): ParentOb;
  hasAttendu(): boolean;
  clearAttendu(): ParentOb;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentOb.AsObject;
  static toObject(includeInstance: boolean, msg: ParentOb): ParentOb.AsObject;
  static serializeBinaryToWriter(message: ParentOb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentOb;
  static deserializeBinaryFromReader(message: ParentOb, reader: jspb.BinaryReader): ParentOb;
}

export namespace ParentOb {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    attenduId: string,
    attendu?: AttenduOb.AsObject,
  }
}

export class ComArticleOb extends jspb.Message {
  getId(): string;
  setId(value: string): ComArticleOb;

  getCreateAt(): number;
  setCreateAt(value: number): ComArticleOb;

  getUpdateAt(): number;
  setUpdateAt(value: number): ComArticleOb;

  getLot(): string;
  setLot(value: string): ComArticleOb;

  getDluo(): number;
  setDluo(value: number): ComArticleOb;

  getStockId(): string;
  setStockId(value: string): ComArticleOb;

  getLoadingValidationAt(): number;
  setLoadingValidationAt(value: number): ComArticleOb;

  getLoadingValidationBy(): string;
  setLoadingValidationBy(value: string): ComArticleOb;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComArticleOb.AsObject;
  static toObject(includeInstance: boolean, msg: ComArticleOb): ComArticleOb.AsObject;
  static serializeBinaryToWriter(message: ComArticleOb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComArticleOb;
  static deserializeBinaryFromReader(message: ComArticleOb, reader: jspb.BinaryReader): ComArticleOb;
}

export namespace ComArticleOb {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    lot: string,
    dluo: number,
    stockId: string,
    loadingValidationAt: number,
    loadingValidationBy: string,
  }
}

export class AttenduOb extends jspb.Message {
  getId(): string;
  setId(value: string): AttenduOb;

  getCreateAt(): number;
  setCreateAt(value: number): AttenduOb;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttenduOb;

  getBl(): string;
  setBl(value: string): AttenduOb;

  getStockId(): string;
  setStockId(value: string): AttenduOb;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttenduOb.AsObject;
  static toObject(includeInstance: boolean, msg: AttenduOb): AttenduOb.AsObject;
  static serializeBinaryToWriter(message: AttenduOb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttenduOb;
  static deserializeBinaryFromReader(message: AttenduOb, reader: jspb.BinaryReader): AttenduOb;
}

export namespace AttenduOb {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    bl: string,
    stockId: string,
  }
}

export class AttProduction extends jspb.Message {
  getId(): string;
  setId(value: string): AttProduction;

  getCreateAt(): number;
  setCreateAt(value: number): AttProduction;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttProduction;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): AttProduction;

  getRefFournisseurNumber(): string;
  setRefFournisseurNumber(value: string): AttProduction;

  getLibelle(): string;
  setLibelle(value: string): AttProduction;

  getLot(): string;
  setLot(value: string): AttProduction;

  getSscc(): string;
  setSscc(value: string): AttProduction;

  getDluo(): number;
  setDluo(value: number): AttProduction;

  getQuantite(): number;
  setQuantite(value: number): AttProduction;

  getSousQte(): number;
  setSousQte(value: number): AttProduction;

  getTotalPieses(): number;
  setTotalPieses(value: number): AttProduction;

  getConditionement(): string;
  setConditionement(value: string): AttProduction;

  getAttenduId(): string;
  setAttenduId(value: string): AttProduction;

  getVolumeQte(): number;
  setVolumeQte(value: number): AttProduction;

  getPoidsQte(): number;
  setPoidsQte(value: number): AttProduction;

  getVolumeSousqte(): number;
  setVolumeSousqte(value: number): AttProduction;

  getPoidsSousqte(): number;
  setPoidsSousqte(value: number): AttProduction;

  getConditionementId(): string;
  setConditionementId(value: string): AttProduction;

  getRefFournisserId(): string;
  setRefFournisserId(value: string): AttProduction;

  getConditionnement(): proto_conditionnement_conditionnement_pb.Conditionnement | undefined;
  setConditionnement(value?: proto_conditionnement_conditionnement_pb.Conditionnement): AttProduction;
  hasConditionnement(): boolean;
  clearConditionnement(): AttProduction;

  getLotTmp(): string;
  setLotTmp(value: string): AttProduction;

  getDluoTmp(): number;
  setDluoTmp(value: number): AttProduction;

  getDluoDuration(): number;
  setDluoDuration(value: number): AttProduction;

  getIsScan(): boolean;
  setIsScan(value: boolean): AttProduction;

  getReferenceId(): string;
  setReferenceId(value: string): AttProduction;

  getRefBlock(): boolean;
  setRefBlock(value: boolean): AttProduction;

  getRefChange(): boolean;
  setRefChange(value: boolean): AttProduction;

  getValidationBy(): string;
  setValidationBy(value: string): AttProduction;

  getValidationTime(): number;
  setValidationTime(value: number): AttProduction;

  getAttBl(): string;
  setAttBl(value: string): AttProduction;

  getStatus(): string;
  setStatus(value: string): AttProduction;

  getValidationerId(): string;
  setValidationerId(value: string): AttProduction;

  getChrono(): string;
  setChrono(value: string): AttProduction;

  getType(): string;
  setType(value: string): AttProduction;

  getMouvement(): string;
  setMouvement(value: string): AttProduction;

  getEta(): string;
  setEta(value: string): AttProduction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttProduction.AsObject;
  static toObject(includeInstance: boolean, msg: AttProduction): AttProduction.AsObject;
  static serializeBinaryToWriter(message: AttProduction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttProduction;
  static deserializeBinaryFromReader(message: AttProduction, reader: jspb.BinaryReader): AttProduction;
}

export namespace AttProduction {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    referenceNumber: string,
    refFournisseurNumber: string,
    libelle: string,
    lot: string,
    sscc: string,
    dluo: number,
    quantite: number,
    sousQte: number,
    totalPieses: number,
    conditionement: string,
    attenduId: string,
    volumeQte: number,
    poidsQte: number,
    volumeSousqte: number,
    poidsSousqte: number,
    conditionementId: string,
    refFournisserId: string,
    conditionnement?: proto_conditionnement_conditionnement_pb.Conditionnement.AsObject,
    lotTmp: string,
    dluoTmp: number,
    dluoDuration: number,
    isScan: boolean,
    referenceId: string,
    refBlock: boolean,
    refChange: boolean,
    validationBy: string,
    validationTime: number,
    attBl: string,
    status: string,
    validationerId: string,
    chrono: string,
    type: string,
    mouvement: string,
    eta: string,
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

export class GetAllStockRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetAllStockRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetAllStockRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetAllStockRequest;

  getLimit(): number;
  setLimit(value: number): GetAllStockRequest;

  getOffset(): number;
  setOffset(value: number): GetAllStockRequest;

  getBl(): string;
  setBl(value: string): GetAllStockRequest;

  getDescription(): string;
  setDescription(value: string): GetAllStockRequest;

  getSupplier(): string;
  setSupplier(value: string): GetAllStockRequest;

  getType(): string;
  setType(value: string): GetAllStockRequest;

  getMouvement(): string;
  setMouvement(value: string): GetAllStockRequest;

  getEta(): string;
  setEta(value: string): GetAllStockRequest;

  getChrono(): string;
  setChrono(value: string): GetAllStockRequest;

  getDebut(): string;
  setDebut(value: string): GetAllStockRequest;

  getFin(): string;
  setFin(value: string): GetAllStockRequest;

  getStatut(): string;
  setStatut(value: string): GetAllStockRequest;

  getSscc(): number;
  setSscc(value: number): GetAllStockRequest;

  getLot(): string;
  setLot(value: string): GetAllStockRequest;

  getCdn(): string;
  setCdn(value: string): GetAllStockRequest;

  getZone(): string;
  setZone(value: string): GetAllStockRequest;

  getAisle(): string;
  setAisle(value: string): GetAllStockRequest;

  getBay(): string;
  setBay(value: string): GetAllStockRequest;

  getLevel(): string;
  setLevel(value: string): GetAllStockRequest;

  getTypeCdn(): string;
  setTypeCdn(value: string): GetAllStockRequest;

  getEmplacementsVide(): boolean;
  setEmplacementsVide(value: boolean): GetAllStockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStockRequest): GetAllStockRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllStockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStockRequest;
  static deserializeBinaryFromReader(message: GetAllStockRequest, reader: jspb.BinaryReader): GetAllStockRequest;
}

export namespace GetAllStockRequest {
  export type AsObject = {
    clientId: string,
    companyId: string,
    warehouseId: string,
    limit: number,
    offset: number,
    bl: string,
    description: string,
    supplier: string,
    type: string,
    mouvement: string,
    eta: string,
    chrono: string,
    debut: string,
    fin: string,
    statut: string,
    sscc: number,
    lot: string,
    cdn: string,
    zone: string,
    aisle: string,
    bay: string,
    level: string,
    typeCdn: string,
    emplacementsVide: boolean,
  }
}

export class GetAllStockResponse extends jspb.Message {
  getEntryList(): Array<Stock>;
  setEntryList(value: Array<Stock>): GetAllStockResponse;
  clearEntryList(): GetAllStockResponse;
  addEntry(value?: Stock, index?: number): Stock;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetAllStockResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetAllStockResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllStockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStockResponse): GetAllStockResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStockResponse;
  static deserializeBinaryFromReader(message: GetAllStockResponse, reader: jspb.BinaryReader): GetAllStockResponse;
}

export namespace GetAllStockResponse {
  export type AsObject = {
    entryList: Array<Stock.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class LoadMoreRequest extends jspb.Message {
  getClientCodeNom(): string;
  setClientCodeNom(value: string): LoadMoreRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): LoadMoreRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): LoadMoreRequest;

  getLimit(): number;
  setLimit(value: number): LoadMoreRequest;

  getOffset(): number;
  setOffset(value: number): LoadMoreRequest;

  getId(): string;
  setId(value: string): LoadMoreRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadMoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadMoreRequest): LoadMoreRequest.AsObject;
  static serializeBinaryToWriter(message: LoadMoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadMoreRequest;
  static deserializeBinaryFromReader(message: LoadMoreRequest, reader: jspb.BinaryReader): LoadMoreRequest;
}

export namespace LoadMoreRequest {
  export type AsObject = {
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    limit: number,
    offset: number,
    id: string,
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

  getUserIdList(): Array<string>;
  setUserIdList(value: Array<string>): GetDashboardInformationRequest;
  clearUserIdList(): GetDashboardInformationRequest;
  addUserId(value: string, index?: number): GetDashboardInformationRequest;

  getReferenceList(): Array<string>;
  setReferenceList(value: Array<string>): GetDashboardInformationRequest;
  clearReferenceList(): GetDashboardInformationRequest;
  addReference(value: string, index?: number): GetDashboardInformationRequest;

  getMemberList(): Array<string>;
  setMemberList(value: Array<string>): GetDashboardInformationRequest;
  clearMemberList(): GetDashboardInformationRequest;
  addMember(value: string, index?: number): GetDashboardInformationRequest;

  getStartDate(): string;
  setStartDate(value: string): GetDashboardInformationRequest;

  getEndDate(): string;
  setEndDate(value: string): GetDashboardInformationRequest;

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
    userIdList: Array<string>,
    referenceList: Array<string>,
    memberList: Array<string>,
    startDate: string,
    endDate: string,
  }
}

export class TypeOfConditionnementItem extends jspb.Message {
  getLevel(): string;
  setLevel(value: string): TypeOfConditionnementItem;

  getPercent(): number;
  setPercent(value: number): TypeOfConditionnementItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeOfConditionnementItem.AsObject;
  static toObject(includeInstance: boolean, msg: TypeOfConditionnementItem): TypeOfConditionnementItem.AsObject;
  static serializeBinaryToWriter(message: TypeOfConditionnementItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeOfConditionnementItem;
  static deserializeBinaryFromReader(message: TypeOfConditionnementItem, reader: jspb.BinaryReader): TypeOfConditionnementItem;
}

export namespace TypeOfConditionnementItem {
  export type AsObject = {
    level: string,
    percent: number,
  }
}

export class DashboardChart extends jspb.Message {
  getDate(): string;
  setDate(value: string): DashboardChart;

  getName(): string;
  setName(value: string): DashboardChart;

  getValue(): number;
  setValue(value: number): DashboardChart;

  getPercent(): number;
  setPercent(value: number): DashboardChart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardChart.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardChart): DashboardChart.AsObject;
  static serializeBinaryToWriter(message: DashboardChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardChart;
  static deserializeBinaryFromReader(message: DashboardChart, reader: jspb.BinaryReader): DashboardChart;
}

export namespace DashboardChart {
  export type AsObject = {
    date: string,
    name: string,
    value: number,
    percent: number,
  }
}

export class GetDashboardInformationResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): GetDashboardInformationResponse;

  getReferecence(): number;
  setReferecence(value: number): GetDashboardInformationResponse;

  getItems(): number;
  setItems(value: number): GetDashboardInformationResponse;

  getItemsCdn(): number;
  setItemsCdn(value: number): GetDashboardInformationResponse;

  getBlockedItems(): number;
  setBlockedItems(value: number): GetDashboardInformationResponse;

  getReservedItems(): number;
  setReservedItems(value: number): GetDashboardInformationResponse;

  getMovementsInprogress(): number;
  setMovementsInprogress(value: number): GetDashboardInformationResponse;

  getMovementsProcessed(): number;
  setMovementsProcessed(value: number): GetDashboardInformationResponse;

  getRegularizationsInprogress(): number;
  setRegularizationsInprogress(value: number): GetDashboardInformationResponse;

  getRegularizationsProcessed(): number;
  setRegularizationsProcessed(value: number): GetDashboardInformationResponse;

  getAffectedStaff(): number;
  setAffectedStaff(value: number): GetDashboardInformationResponse;

  getTypeOfConditionnementList(): Array<TypeOfConditionnementItem>;
  setTypeOfConditionnementList(value: Array<TypeOfConditionnementItem>): GetDashboardInformationResponse;
  clearTypeOfConditionnementList(): GetDashboardInformationResponse;
  addTypeOfConditionnement(value?: TypeOfConditionnementItem, index?: number): TypeOfConditionnementItem;

  getUnavailable(): number;
  setUnavailable(value: number): GetDashboardInformationResponse;

  getAvailable(): number;
  setAvailable(value: number): GetDashboardInformationResponse;

  getStickChartList(): Array<DashboardChart>;
  setStickChartList(value: Array<DashboardChart>): GetDashboardInformationResponse;
  clearStickChartList(): GetDashboardInformationResponse;
  addStickChart(value?: DashboardChart, index?: number): DashboardChart;

  getPieChartList(): Array<DashboardChart>;
  setPieChartList(value: Array<DashboardChart>): GetDashboardInformationResponse;
  clearPieChartList(): GetDashboardInformationResponse;
  addPieChart(value?: DashboardChart, index?: number): DashboardChart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardInformationResponse): GetDashboardInformationResponse.AsObject;
  static serializeBinaryToWriter(message: GetDashboardInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardInformationResponse;
  static deserializeBinaryFromReader(message: GetDashboardInformationResponse, reader: jspb.BinaryReader): GetDashboardInformationResponse;
}

export namespace GetDashboardInformationResponse {
  export type AsObject = {
    messageerror: string,
    referecence: number,
    items: number,
    itemsCdn: number,
    blockedItems: number,
    reservedItems: number,
    movementsInprogress: number,
    movementsProcessed: number,
    regularizationsInprogress: number,
    regularizationsProcessed: number,
    affectedStaff: number,
    typeOfConditionnementList: Array<TypeOfConditionnementItem.AsObject>,
    unavailable: number,
    available: number,
    stickChartList: Array<DashboardChart.AsObject>,
    pieChartList: Array<DashboardChart.AsObject>,
  }
}

export class GetStockInfoBySsccRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetStockInfoBySsccRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetStockInfoBySsccRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetStockInfoBySsccRequest;

  getSscc(): string;
  setSscc(value: string): GetStockInfoBySsccRequest;

  getReferenceId(): string;
  setReferenceId(value: string): GetStockInfoBySsccRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStockInfoBySsccRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStockInfoBySsccRequest): GetStockInfoBySsccRequest.AsObject;
  static serializeBinaryToWriter(message: GetStockInfoBySsccRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStockInfoBySsccRequest;
  static deserializeBinaryFromReader(message: GetStockInfoBySsccRequest, reader: jspb.BinaryReader): GetStockInfoBySsccRequest;
}

export namespace GetStockInfoBySsccRequest {
  export type AsObject = {
    clientId: string,
    companyId: string,
    warehouseId: string,
    sscc: string,
    referenceId: string,
  }
}

export class GetStockInfoBySsccResponse extends jspb.Message {
  getEntry(): StockSsccInfo | undefined;
  setEntry(value?: StockSsccInfo): GetStockInfoBySsccResponse;
  hasEntry(): boolean;
  clearEntry(): GetStockInfoBySsccResponse;

  getMessageError(): string;
  setMessageError(value: string): GetStockInfoBySsccResponse;

  getStatus(): string;
  setStatus(value: string): GetStockInfoBySsccResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStockInfoBySsccResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStockInfoBySsccResponse): GetStockInfoBySsccResponse.AsObject;
  static serializeBinaryToWriter(message: GetStockInfoBySsccResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStockInfoBySsccResponse;
  static deserializeBinaryFromReader(message: GetStockInfoBySsccResponse, reader: jspb.BinaryReader): GetStockInfoBySsccResponse;
}

export namespace GetStockInfoBySsccResponse {
  export type AsObject = {
    entry?: StockSsccInfo.AsObject,
    messageError: string,
    status: string,
  }
}

export class GetListSsccByLotRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetListSsccByLotRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetListSsccByLotRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetListSsccByLotRequest;

  getReferenceId(): string;
  setReferenceId(value: string): GetListSsccByLotRequest;

  getLot(): string;
  setLot(value: string): GetListSsccByLotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListSsccByLotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListSsccByLotRequest): GetListSsccByLotRequest.AsObject;
  static serializeBinaryToWriter(message: GetListSsccByLotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListSsccByLotRequest;
  static deserializeBinaryFromReader(message: GetListSsccByLotRequest, reader: jspb.BinaryReader): GetListSsccByLotRequest;
}

export namespace GetListSsccByLotRequest {
  export type AsObject = {
    clientId: string,
    companyId: string,
    warehouseId: string,
    referenceId: string,
    lot: string,
  }
}

export class GetListSsccByLotResponse extends jspb.Message {
  getEntryList(): Array<GetListSsccByLotResponse.SsccInfo>;
  setEntryList(value: Array<GetListSsccByLotResponse.SsccInfo>): GetListSsccByLotResponse;
  clearEntryList(): GetListSsccByLotResponse;
  addEntry(value?: GetListSsccByLotResponse.SsccInfo, index?: number): GetListSsccByLotResponse.SsccInfo;

  getMessageError(): string;
  setMessageError(value: string): GetListSsccByLotResponse;

  getStatus(): string;
  setStatus(value: string): GetListSsccByLotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListSsccByLotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListSsccByLotResponse): GetListSsccByLotResponse.AsObject;
  static serializeBinaryToWriter(message: GetListSsccByLotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListSsccByLotResponse;
  static deserializeBinaryFromReader(message: GetListSsccByLotResponse, reader: jspb.BinaryReader): GetListSsccByLotResponse;
}

export namespace GetListSsccByLotResponse {
  export type AsObject = {
    entryList: Array<GetListSsccByLotResponse.SsccInfo.AsObject>,
    messageError: string,
    status: string,
  }

  export class SsccInfo extends jspb.Message {
    getStockId(): string;
    setStockId(value: string): SsccInfo;

    getSscc(): string;
    setSscc(value: string): SsccInfo;

    getIsSkipBlockLot(): boolean;
    setIsSkipBlockLot(value: boolean): SsccInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SsccInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SsccInfo): SsccInfo.AsObject;
    static serializeBinaryToWriter(message: SsccInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SsccInfo;
    static deserializeBinaryFromReader(message: SsccInfo, reader: jspb.BinaryReader): SsccInfo;
  }

  export namespace SsccInfo {
    export type AsObject = {
      stockId: string,
      sscc: string,
      isSkipBlockLot: boolean,
    }
  }

}

export class GetListSsccByLotV2Request extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetListSsccByLotV2Request;

  getCompanyId(): string;
  setCompanyId(value: string): GetListSsccByLotV2Request;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetListSsccByLotV2Request;

  getReferenceId(): string;
  setReferenceId(value: string): GetListSsccByLotV2Request;

  getLot(): string;
  setLot(value: string): GetListSsccByLotV2Request;

  getSsccOrigin(): string;
  setSsccOrigin(value: string): GetListSsccByLotV2Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListSsccByLotV2Request.AsObject;
  static toObject(includeInstance: boolean, msg: GetListSsccByLotV2Request): GetListSsccByLotV2Request.AsObject;
  static serializeBinaryToWriter(message: GetListSsccByLotV2Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListSsccByLotV2Request;
  static deserializeBinaryFromReader(message: GetListSsccByLotV2Request, reader: jspb.BinaryReader): GetListSsccByLotV2Request;
}

export namespace GetListSsccByLotV2Request {
  export type AsObject = {
    clientId: string,
    companyId: string,
    warehouseId: string,
    referenceId: string,
    lot: string,
    ssccOrigin: string,
  }
}

export class GetListSsccByLotV2Response extends jspb.Message {
  getEntryList(): Array<GetListSsccByLotV2Response.SsccInfo>;
  setEntryList(value: Array<GetListSsccByLotV2Response.SsccInfo>): GetListSsccByLotV2Response;
  clearEntryList(): GetListSsccByLotV2Response;
  addEntry(value?: GetListSsccByLotV2Response.SsccInfo, index?: number): GetListSsccByLotV2Response.SsccInfo;

  getMessageError(): string;
  setMessageError(value: string): GetListSsccByLotV2Response;

  getStatus(): string;
  setStatus(value: string): GetListSsccByLotV2Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListSsccByLotV2Response.AsObject;
  static toObject(includeInstance: boolean, msg: GetListSsccByLotV2Response): GetListSsccByLotV2Response.AsObject;
  static serializeBinaryToWriter(message: GetListSsccByLotV2Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListSsccByLotV2Response;
  static deserializeBinaryFromReader(message: GetListSsccByLotV2Response, reader: jspb.BinaryReader): GetListSsccByLotV2Response;
}

export namespace GetListSsccByLotV2Response {
  export type AsObject = {
    entryList: Array<GetListSsccByLotV2Response.SsccInfo.AsObject>,
    messageError: string,
    status: string,
  }

  export class SsccInfo extends jspb.Message {
    getStockId(): string;
    setStockId(value: string): SsccInfo;

    getSscc(): string;
    setSscc(value: string): SsccInfo;

    getSsccBlock(): boolean;
    setSsccBlock(value: boolean): SsccInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SsccInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SsccInfo): SsccInfo.AsObject;
    static serializeBinaryToWriter(message: SsccInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SsccInfo;
    static deserializeBinaryFromReader(message: SsccInfo, reader: jspb.BinaryReader): SsccInfo;
  }

  export namespace SsccInfo {
    export type AsObject = {
      stockId: string,
      sscc: string,
      ssccBlock: boolean,
    }
  }

}

export class UpdateBlockListLotSsccByStockIdRequest extends jspb.Message {
  getStockIdBlockList(): Array<string>;
  setStockIdBlockList(value: Array<string>): UpdateBlockListLotSsccByStockIdRequest;
  clearStockIdBlockList(): UpdateBlockListLotSsccByStockIdRequest;
  addStockIdBlock(value: string, index?: number): UpdateBlockListLotSsccByStockIdRequest;

  getStockIdUnblockList(): Array<string>;
  setStockIdUnblockList(value: Array<string>): UpdateBlockListLotSsccByStockIdRequest;
  clearStockIdUnblockList(): UpdateBlockListLotSsccByStockIdRequest;
  addStockIdUnblock(value: string, index?: number): UpdateBlockListLotSsccByStockIdRequest;

  getMotif(): string;
  setMotif(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getOrigine(): string;
  setOrigine(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getClientId(): string;
  setClientId(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getCompanyId(): string;
  setCompanyId(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getReferenceId(): string;
  setReferenceId(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getLot(): string;
  setLot(value: string): UpdateBlockListLotSsccByStockIdRequest;

  getLotBlock(): boolean;
  setLotBlock(value: boolean): UpdateBlockListLotSsccByStockIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockListLotSsccByStockIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockListLotSsccByStockIdRequest): UpdateBlockListLotSsccByStockIdRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockListLotSsccByStockIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockListLotSsccByStockIdRequest;
  static deserializeBinaryFromReader(message: UpdateBlockListLotSsccByStockIdRequest, reader: jspb.BinaryReader): UpdateBlockListLotSsccByStockIdRequest;
}

export namespace UpdateBlockListLotSsccByStockIdRequest {
  export type AsObject = {
    stockIdBlockList: Array<string>,
    stockIdUnblockList: Array<string>,
    motif: string,
    origine: string,
    clientId: string,
    companyId: string,
    warehouseId: string,
    referenceId: string,
    lot: string,
    lotBlock: boolean,
  }
}

export class UpdateBlockListLotSsccByStockIdResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateBlockListLotSsccByStockIdResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateBlockListLotSsccByStockIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockListLotSsccByStockIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockListLotSsccByStockIdResponse): UpdateBlockListLotSsccByStockIdResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockListLotSsccByStockIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockListLotSsccByStockIdResponse;
  static deserializeBinaryFromReader(message: UpdateBlockListLotSsccByStockIdResponse, reader: jspb.BinaryReader): UpdateBlockListLotSsccByStockIdResponse;
}

export namespace UpdateBlockListLotSsccByStockIdResponse {
  export type AsObject = {
    status: string,
    messageError: string,
  }
}

export class UpdateBlockSsccByStockIdRequest extends jspb.Message {
  getStockId(): string;
  setStockId(value: string): UpdateBlockSsccByStockIdRequest;

  getSsccBlockStatus(): boolean;
  setSsccBlockStatus(value: boolean): UpdateBlockSsccByStockIdRequest;

  getMotif(): string;
  setMotif(value: string): UpdateBlockSsccByStockIdRequest;

  getOrigine(): string;
  setOrigine(value: string): UpdateBlockSsccByStockIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockSsccByStockIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockSsccByStockIdRequest): UpdateBlockSsccByStockIdRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockSsccByStockIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockSsccByStockIdRequest;
  static deserializeBinaryFromReader(message: UpdateBlockSsccByStockIdRequest, reader: jspb.BinaryReader): UpdateBlockSsccByStockIdRequest;
}

export namespace UpdateBlockSsccByStockIdRequest {
  export type AsObject = {
    stockId: string,
    ssccBlockStatus: boolean,
    motif: string,
    origine: string,
  }
}

export class UpdateBlockSsccByStockIdResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateBlockSsccByStockIdResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateBlockSsccByStockIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockSsccByStockIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockSsccByStockIdResponse): UpdateBlockSsccByStockIdResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockSsccByStockIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockSsccByStockIdResponse;
  static deserializeBinaryFromReader(message: UpdateBlockSsccByStockIdResponse, reader: jspb.BinaryReader): UpdateBlockSsccByStockIdResponse;
}

export namespace UpdateBlockSsccByStockIdResponse {
  export type AsObject = {
    status: string,
    messageError: string,
  }
}

export class GetEmplacementPopupInfoRequest extends jspb.Message {
  getStockId(): string;
  setStockId(value: string): GetEmplacementPopupInfoRequest;

  getSscc(): string;
  setSscc(value: string): GetEmplacementPopupInfoRequest;

  getConditionementLevel(): number;
  setConditionementLevel(value: number): GetEmplacementPopupInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmplacementPopupInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmplacementPopupInfoRequest): GetEmplacementPopupInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEmplacementPopupInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmplacementPopupInfoRequest;
  static deserializeBinaryFromReader(message: GetEmplacementPopupInfoRequest, reader: jspb.BinaryReader): GetEmplacementPopupInfoRequest;
}

export namespace GetEmplacementPopupInfoRequest {
  export type AsObject = {
    stockId: string,
    sscc: string,
    conditionementLevel: number,
  }
}

export class GetEmplacementPopupInfoResponse extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): GetEmplacementPopupInfoResponse;

  getPreWarehouseCodeNom(): string;
  setPreWarehouseCodeNom(value: string): GetEmplacementPopupInfoResponse;

  getPreZoneCode(): string;
  setPreZoneCode(value: string): GetEmplacementPopupInfoResponse;

  getPreLocationAisle(): string;
  setPreLocationAisle(value: string): GetEmplacementPopupInfoResponse;

  getPreLocationBay(): string;
  setPreLocationBay(value: string): GetEmplacementPopupInfoResponse;

  getPreLevel(): number;
  setPreLevel(value: number): GetEmplacementPopupInfoResponse;

  getPrePositionCode(): string;
  setPrePositionCode(value: string): GetEmplacementPopupInfoResponse;

  getPreTotalPiece(): number;
  setPreTotalPiece(value: number): GetEmplacementPopupInfoResponse;

  getCurWarehouseCodeNom(): string;
  setCurWarehouseCodeNom(value: string): GetEmplacementPopupInfoResponse;

  getCurZoneCode(): string;
  setCurZoneCode(value: string): GetEmplacementPopupInfoResponse;

  getCurLocationAisle(): string;
  setCurLocationAisle(value: string): GetEmplacementPopupInfoResponse;

  getCurLocationBay(): string;
  setCurLocationBay(value: string): GetEmplacementPopupInfoResponse;

  getCurLevel(): number;
  setCurLevel(value: number): GetEmplacementPopupInfoResponse;

  getCurPositionCode(): string;
  setCurPositionCode(value: string): GetEmplacementPopupInfoResponse;

  getCurTotalPiece(): number;
  setCurTotalPiece(value: number): GetEmplacementPopupInfoResponse;

  getCurIsVisibleLevel(): boolean;
  setCurIsVisibleLevel(value: boolean): GetEmplacementPopupInfoResponse;

  getCurIsVisiblePosition(): boolean;
  setCurIsVisiblePosition(value: boolean): GetEmplacementPopupInfoResponse;

  getPreIsVisibleLevel(): boolean;
  setPreIsVisibleLevel(value: boolean): GetEmplacementPopupInfoResponse;

  getPreIsVisiblePosition(): boolean;
  setPreIsVisiblePosition(value: boolean): GetEmplacementPopupInfoResponse;

  getMessageError(): string;
  setMessageError(value: string): GetEmplacementPopupInfoResponse;

  getCanMovement(): boolean;
  setCanMovement(value: boolean): GetEmplacementPopupInfoResponse;

  getEntryBlock(): string;
  setEntryBlock(value: string): GetEmplacementPopupInfoResponse;

  getIsFinishMovementMission(): boolean;
  setIsFinishMovementMission(value: boolean): GetEmplacementPopupInfoResponse;

  getDestinationCodebar(): string;
  setDestinationCodebar(value: string): GetEmplacementPopupInfoResponse;

  getPriorite(): number;
  setPriorite(value: number): GetEmplacementPopupInfoResponse;

  getLocationId(): string;
  setLocationId(value: string): GetEmplacementPopupInfoResponse;

  getStorageType(): string;
  setStorageType(value: string): GetEmplacementPopupInfoResponse;

  getUpdatedEntryTime(): number;
  setUpdatedEntryTime(value: number): GetEmplacementPopupInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmplacementPopupInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmplacementPopupInfoResponse): GetEmplacementPopupInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEmplacementPopupInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmplacementPopupInfoResponse;
  static deserializeBinaryFromReader(message: GetEmplacementPopupInfoResponse, reader: jspb.BinaryReader): GetEmplacementPopupInfoResponse;
}

export namespace GetEmplacementPopupInfoResponse {
  export type AsObject = {
    sscc: string,
    preWarehouseCodeNom: string,
    preZoneCode: string,
    preLocationAisle: string,
    preLocationBay: string,
    preLevel: number,
    prePositionCode: string,
    preTotalPiece: number,
    curWarehouseCodeNom: string,
    curZoneCode: string,
    curLocationAisle: string,
    curLocationBay: string,
    curLevel: number,
    curPositionCode: string,
    curTotalPiece: number,
    curIsVisibleLevel: boolean,
    curIsVisiblePosition: boolean,
    preIsVisibleLevel: boolean,
    preIsVisiblePosition: boolean,
    messageError: string,
    canMovement: boolean,
    entryBlock: string,
    isFinishMovementMission: boolean,
    destinationCodebar: string,
    priorite: number,
    locationId: string,
    storageType: string,
    updatedEntryTime: number,
  }
}

export class UpdateBlockLotRequest extends jspb.Message {
  getStockIdBlockList(): Array<string>;
  setStockIdBlockList(value: Array<string>): UpdateBlockLotRequest;
  clearStockIdBlockList(): UpdateBlockLotRequest;
  addStockIdBlock(value: string, index?: number): UpdateBlockLotRequest;

  getStockIdUnblockList(): Array<string>;
  setStockIdUnblockList(value: Array<string>): UpdateBlockLotRequest;
  clearStockIdUnblockList(): UpdateBlockLotRequest;
  addStockIdUnblock(value: string, index?: number): UpdateBlockLotRequest;

  getMotif(): string;
  setMotif(value: string): UpdateBlockLotRequest;

  getOrigine(): string;
  setOrigine(value: string): UpdateBlockLotRequest;

  getClientId(): string;
  setClientId(value: string): UpdateBlockLotRequest;

  getCompanyId(): string;
  setCompanyId(value: string): UpdateBlockLotRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UpdateBlockLotRequest;

  getReferenceId(): string;
  setReferenceId(value: string): UpdateBlockLotRequest;

  getLot(): string;
  setLot(value: string): UpdateBlockLotRequest;

  getLotBlock(): boolean;
  setLotBlock(value: boolean): UpdateBlockLotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockLotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockLotRequest): UpdateBlockLotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockLotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockLotRequest;
  static deserializeBinaryFromReader(message: UpdateBlockLotRequest, reader: jspb.BinaryReader): UpdateBlockLotRequest;
}

export namespace UpdateBlockLotRequest {
  export type AsObject = {
    stockIdBlockList: Array<string>,
    stockIdUnblockList: Array<string>,
    motif: string,
    origine: string,
    clientId: string,
    companyId: string,
    warehouseId: string,
    referenceId: string,
    lot: string,
    lotBlock: boolean,
  }
}

export class UpdateBlockListSsccByStockIdRequest extends jspb.Message {
  getStockIdBlockList(): Array<string>;
  setStockIdBlockList(value: Array<string>): UpdateBlockListSsccByStockIdRequest;
  clearStockIdBlockList(): UpdateBlockListSsccByStockIdRequest;
  addStockIdBlock(value: string, index?: number): UpdateBlockListSsccByStockIdRequest;

  getStockIdUnblockList(): Array<string>;
  setStockIdUnblockList(value: Array<string>): UpdateBlockListSsccByStockIdRequest;
  clearStockIdUnblockList(): UpdateBlockListSsccByStockIdRequest;
  addStockIdUnblock(value: string, index?: number): UpdateBlockListSsccByStockIdRequest;

  getMotif(): string;
  setMotif(value: string): UpdateBlockListSsccByStockIdRequest;

  getOrigine(): string;
  setOrigine(value: string): UpdateBlockListSsccByStockIdRequest;

  getClientId(): string;
  setClientId(value: string): UpdateBlockListSsccByStockIdRequest;

  getCompanyId(): string;
  setCompanyId(value: string): UpdateBlockListSsccByStockIdRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UpdateBlockListSsccByStockIdRequest;

  getReferenceId(): string;
  setReferenceId(value: string): UpdateBlockListSsccByStockIdRequest;

  getSsccBlockStatus(): boolean;
  setSsccBlockStatus(value: boolean): UpdateBlockListSsccByStockIdRequest;

  getOriginStockId(): string;
  setOriginStockId(value: string): UpdateBlockListSsccByStockIdRequest;

  getUsercode(): string;
  setUsercode(value: string): UpdateBlockListSsccByStockIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockListSsccByStockIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockListSsccByStockIdRequest): UpdateBlockListSsccByStockIdRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockListSsccByStockIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockListSsccByStockIdRequest;
  static deserializeBinaryFromReader(message: UpdateBlockListSsccByStockIdRequest, reader: jspb.BinaryReader): UpdateBlockListSsccByStockIdRequest;
}

export namespace UpdateBlockListSsccByStockIdRequest {
  export type AsObject = {
    stockIdBlockList: Array<string>,
    stockIdUnblockList: Array<string>,
    motif: string,
    origine: string,
    clientId: string,
    companyId: string,
    warehouseId: string,
    referenceId: string,
    ssccBlockStatus: boolean,
    originStockId: string,
    usercode: string,
  }
}

export class UpdateBlockListSsccByStockIdResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateBlockListSsccByStockIdResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateBlockListSsccByStockIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockListSsccByStockIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockListSsccByStockIdResponse): UpdateBlockListSsccByStockIdResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockListSsccByStockIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockListSsccByStockIdResponse;
  static deserializeBinaryFromReader(message: UpdateBlockListSsccByStockIdResponse, reader: jspb.BinaryReader): UpdateBlockListSsccByStockIdResponse;
}

export namespace UpdateBlockListSsccByStockIdResponse {
  export type AsObject = {
    status: string,
    messageError: string,
  }
}

