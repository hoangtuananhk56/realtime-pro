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

  getConfigLot(): proto_lotreference_lotreference_pb.LotReference | undefined;
  setConfigLot(value?: proto_lotreference_lotreference_pb.LotReference): StockSsccInfo;
  hasConfigLot(): boolean;
  clearConfigLot(): StockSsccInfo;

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
    configLot?: proto_lotreference_lotreference_pb.LotReference.AsObject,
    updatedEntryTime: number,
    storageFunc: string,
    isSkipBlockLot: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
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

