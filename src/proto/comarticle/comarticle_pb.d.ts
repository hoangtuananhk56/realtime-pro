import * as jspb from 'google-protobuf'

import * as proto_stock_stock_pb from '../../proto/stock/stock_pb'; // proto import: "proto/stock/stock.proto"
import * as proto_reference_reference_pb from '../../proto/reference/reference_pb'; // proto import: "proto/reference/reference.proto"
import * as proto_conditionnement_conditionnement_pb from '../../proto/conditionnement/conditionnement_pb'; // proto import: "proto/conditionnement/conditionnement.proto"


export class ComArticle extends jspb.Message {
  getId(): string;
  setId(value: string): ComArticle;

  getCreatedAt(): number;
  setCreatedAt(value: number): ComArticle;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ComArticle;

  getLot(): string;
  setLot(value: string): ComArticle;

  getComment(): string;
  setComment(value: string): ComArticle;

  getQuantite(): number;
  setQuantite(value: number): ComArticle;

  getStatut(): string;
  setStatut(value: string): ComArticle;

  getCommandeId(): string;
  setCommandeId(value: string): ComArticle;

  getLibelle(): string;
  setLibelle(value: string): ComArticle;

  getConditionementId(): string;
  setConditionementId(value: string): ComArticle;

  getConditionnement(): proto_conditionnement_conditionnement_pb.Conditionnement | undefined;
  setConditionnement(value?: proto_conditionnement_conditionnement_pb.Conditionnement): ComArticle;
  hasConditionnement(): boolean;
  clearConditionnement(): ComArticle;

  getReferenceId(): string;
  setReferenceId(value: string): ComArticle;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): ComArticle;

  getReference(): proto_reference_reference_pb.Reference | undefined;
  setReference(value?: proto_reference_reference_pb.Reference): ComArticle;
  hasReference(): boolean;
  clearReference(): ComArticle;

  getStatusCode(): string;
  setStatusCode(value: string): ComArticle;

  getStockId(): string;
  setStockId(value: string): ComArticle;

  getStock(): proto_stock_stock_pb.Stock | undefined;
  setStock(value?: proto_stock_stock_pb.Stock): ComArticle;
  hasStock(): boolean;
  clearStock(): ComArticle;

  getCreatedBy(): string;
  setCreatedBy(value: string): ComArticle;

  getCreaterId(): string;
  setCreaterId(value: string): ComArticle;

  getModificationBy(): string;
  setModificationBy(value: string): ComArticle;

  getModificationerId(): string;
  setModificationerId(value: string): ComArticle;

  getValidationBy(): string;
  setValidationBy(value: string): ComArticle;

  getValidationerId(): string;
  setValidationerId(value: string): ComArticle;

  getValidationAt(): number;
  setValidationAt(value: number): ComArticle;

  getSscc(): string;
  setSscc(value: string): ComArticle;

  getTotalPieses(): number;
  setTotalPieses(value: number): ComArticle;

  getSousQte(): number;
  setSousQte(value: number): ComArticle;

  getDluo(): number;
  setDluo(value: number): ComArticle;

  getVolumeQte(): number;
  setVolumeQte(value: number): ComArticle;

  getVolumeSousqte(): number;
  setVolumeSousqte(value: number): ComArticle;

  getPoidsQte(): number;
  setPoidsQte(value: number): ComArticle;

  getPoidsSousqte(): number;
  setPoidsSousqte(value: number): ComArticle;

  getSource(): string;
  setSource(value: string): ComArticle;

  getErrorDetails(): string;
  setErrorDetails(value: string): ComArticle;

  getIsManualLot(): boolean;
  setIsManualLot(value: boolean): ComArticle;

  getIsManualSscc(): boolean;
  setIsManualSscc(value: boolean): ComArticle;

  getIsManualDluo(): boolean;
  setIsManualDluo(value: boolean): ComArticle;

  getManquants(): number;
  setManquants(value: number): ComArticle;

  getQteConfirmee(): number;
  setQteConfirmee(value: number): ComArticle;

  getMotif(): string;
  setMotif(value: string): ComArticle;

  getDescription(): string;
  setDescription(value: string): ComArticle;

  getPreStatus(): string;
  setPreStatus(value: string): ComArticle;

  getLocationId(): string;
  setLocationId(value: string): ComArticle;

  getParentArticleId(): string;
  setParentArticleId(value: string): ComArticle;

  getRefBlock(): boolean;
  setRefBlock(value: boolean): ComArticle;

  getMissionId(): string;
  setMissionId(value: string): ComArticle;

  getIsColor(): boolean;
  setIsColor(value: boolean): ComArticle;

  getLoadingMissionId(): string;
  setLoadingMissionId(value: string): ComArticle;

  getActiveLot(): boolean;
  setActiveLot(value: boolean): ComArticle;

  getRupturesCheckLot(): number;
  setRupturesCheckLot(value: number): ComArticle;

  getSsccMotifList(): Array<string>;
  setSsccMotifList(value: Array<string>): ComArticle;
  clearSsccMotifList(): ComArticle;
  addSsccMotif(value: string, index?: number): ComArticle;

  getCompanyId(): string;
  setCompanyId(value: string): ComArticle;

  getWarehouseId(): string;
  setWarehouseId(value: string): ComArticle;

  getClientId(): string;
  setClientId(value: string): ComArticle;

  getCommandeCreatedAt(): number;
  setCommandeCreatedAt(value: number): ComArticle;

  getInfoAction(): string;
  setInfoAction(value: string): ComArticle;

  getReapproMissionId(): string;
  setReapproMissionId(value: string): ComArticle;

  getConditionementLevel(): number;
  setConditionementLevel(value: number): ComArticle;

  getType(): string;
  setType(value: string): ComArticle;

  getMouvement(): string;
  setMouvement(value: string): ComArticle;

  getEta(): string;
  setEta(value: string): ComArticle;

  getChrono(): string;
  setChrono(value: string): ComArticle;

  getReferenceProduct(): proto_reference_reference_pb.ReferenceProduct | undefined;
  setReferenceProduct(value?: proto_reference_reference_pb.ReferenceProduct): ComArticle;
  hasReferenceProduct(): boolean;
  clearReferenceProduct(): ComArticle;

  getRapStatus(): string;
  setRapStatus(value: string): ComArticle;

  getLoadingValidationAt(): number;
  setLoadingValidationAt(value: number): ComArticle;

  getLoadingValidationBy(): string;
  setLoadingValidationBy(value: string): ComArticle;

  getPrevSscc(): string;
  setPrevSscc(value: string): ComArticle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComArticle.AsObject;
  static toObject(includeInstance: boolean, msg: ComArticle): ComArticle.AsObject;
  static serializeBinaryToWriter(message: ComArticle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComArticle;
  static deserializeBinaryFromReader(message: ComArticle, reader: jspb.BinaryReader): ComArticle;
}

export namespace ComArticle {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    lot: string,
    comment: string,
    quantite: number,
    statut: string,
    commandeId: string,
    libelle: string,
    conditionementId: string,
    conditionnement?: proto_conditionnement_conditionnement_pb.Conditionnement.AsObject,
    referenceId: string,
    referenceNumber: string,
    reference?: proto_reference_reference_pb.Reference.AsObject,
    statusCode: string,
    stockId: string,
    stock?: proto_stock_stock_pb.Stock.AsObject,
    createdBy: string,
    createrId: string,
    modificationBy: string,
    modificationerId: string,
    validationBy: string,
    validationerId: string,
    validationAt: number,
    sscc: string,
    totalPieses: number,
    sousQte: number,
    dluo: number,
    volumeQte: number,
    volumeSousqte: number,
    poidsQte: number,
    poidsSousqte: number,
    source: string,
    errorDetails: string,
    isManualLot: boolean,
    isManualSscc: boolean,
    isManualDluo: boolean,
    manquants: number,
    qteConfirmee: number,
    motif: string,
    description: string,
    preStatus: string,
    locationId: string,
    parentArticleId: string,
    refBlock: boolean,
    missionId: string,
    isColor: boolean,
    loadingMissionId: string,
    activeLot: boolean,
    rupturesCheckLot: number,
    ssccMotifList: Array<string>,
    companyId: string,
    warehouseId: string,
    clientId: string,
    commandeCreatedAt: number,
    infoAction: string,
    reapproMissionId: string,
    conditionementLevel: number,
    type: string,
    mouvement: string,
    eta: string,
    chrono: string,
    referenceProduct?: proto_reference_reference_pb.ReferenceProduct.AsObject,
    rapStatus: string,
    loadingValidationAt: number,
    loadingValidationBy: string,
    prevSscc: string,
  }
}

