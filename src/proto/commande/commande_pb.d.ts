import * as jspb from 'google-protobuf'

import * as proto_destinataire_destinataire_pb from '../../proto/destinataire/destinataire_pb'; // proto import: "proto/destinataire/destinataire.proto"
import * as proto_history_history_pb from '../../proto/history/history_pb'; // proto import: "proto/history/history.proto"
import * as proto_transporteur_transporteur_pb from '../../proto/transporteur/transporteur_pb'; // proto import: "proto/transporteur/transporteur.proto"
import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"
import * as proto_mission_mission_pb from '../../proto/mission/mission_pb'; // proto import: "proto/mission/mission.proto"
import * as proto_export_export_pb from '../../proto/export/export_pb'; // proto import: "proto/export/export.proto"


export class Commande extends jspb.Message {
  getId(): string;
  setId(value: string): Commande;

  getCreatedAt(): number;
  setCreatedAt(value: number): Commande;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Commande;

  getNom(): string;
  setNom(value: string): Commande;

  getNomClient(): string;
  setNomClient(value: string): Commande;

  getPhotos(): number;
  setPhotos(value: number): Commande;

  getPriorite(): number;
  setPriorite(value: number): Commande;

  getComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticle>;
  setComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticle>): Commande;
  clearComArticleList(): Commande;
  addComArticle(value?: proto_comarticle_comarticle_pb.ComArticle, index?: number): proto_comarticle_comarticle_pb.ComArticle;

  getComPreparation(): ComComment | undefined;
  setComPreparation(value?: ComComment): Commande;
  hasComPreparation(): boolean;
  clearComPreparation(): Commande;

  getComLivraison(): ComComment | undefined;
  setComLivraison(value?: ComComment): Commande;
  hasComLivraison(): boolean;
  clearComLivraison(): Commande;

  getQteTotal(): number;
  setQteTotal(value: number): Commande;

  getSousQteTotal(): number;
  setSousQteTotal(value: number): Commande;

  getDestinataireId(): string;
  setDestinataireId(value: string): Commande;

  getDestinataire(): proto_destinataire_destinataire_pb.Destinataire | undefined;
  setDestinataire(value?: proto_destinataire_destinataire_pb.Destinataire): Commande;
  hasDestinataire(): boolean;
  clearDestinataire(): Commande;

  getDesAddresseId(): string;
  setDesAddresseId(value: string): Commande;

  getDesAddresse(): proto_destinataire_destinataire_pb.DesAddresse | undefined;
  setDesAddresse(value?: proto_destinataire_destinataire_pb.DesAddresse): Commande;
  hasDesAddresse(): boolean;
  clearDesAddresse(): Commande;

  getDesContactId(): string;
  setDesContactId(value: string): Commande;

  getDesContact(): proto_destinataire_destinataire_pb.DesContact | undefined;
  setDesContact(value?: proto_destinataire_destinataire_pb.DesContact): Commande;
  hasDesContact(): boolean;
  clearDesContact(): Commande;

  getTransporteurId(): string;
  setTransporteurId(value: string): Commande;

  getTransporteur(): proto_transporteur_transporteur_pb.Transporteur | undefined;
  setTransporteur(value?: proto_transporteur_transporteur_pb.Transporteur): Commande;
  hasTransporteur(): boolean;
  clearTransporteur(): Commande;

  getTranAddresseId(): string;
  setTranAddresseId(value: string): Commande;

  getTranAddresse(): proto_transporteur_transporteur_pb.TranAddresse | undefined;
  setTranAddresse(value?: proto_transporteur_transporteur_pb.TranAddresse): Commande;
  hasTranAddresse(): boolean;
  clearTranAddresse(): Commande;

  getTranContactId(): string;
  setTranContactId(value: string): Commande;

  getTranContact(): proto_transporteur_transporteur_pb.TranContact | undefined;
  setTranContact(value?: proto_transporteur_transporteur_pb.TranContact): Commande;
  hasTranContact(): boolean;
  clearTranContact(): Commande;

  getRelayDetail(): string;
  setRelayDetail(value: string): Commande;

  getLivraisonAt(): number;
  setLivraisonAt(value: number): Commande;

  getChargementAt(): number;
  setChargementAt(value: number): Commande;

  getImperatif(): boolean;
  setImperatif(value: boolean): Commande;

  getCompanyId(): string;
  setCompanyId(value: string): Commande;

  getWarehouseId(): string;
  setWarehouseId(value: string): Commande;

  getClientId(): string;
  setClientId(value: string): Commande;

  getCreatedBy(): string;
  setCreatedBy(value: string): Commande;

  getCreaterId(): string;
  setCreaterId(value: string): Commande;

  getModificationBy(): string;
  setModificationBy(value: string): Commande;

  getModificationerId(): string;
  setModificationerId(value: string): Commande;

  getValidationBy(): string;
  setValidationBy(value: string): Commande;

  getValidationerId(): string;
  setValidationerId(value: string): Commande;

  getValidationAt(): number;
  setValidationAt(value: number): Commande;

  getComFileList(): Array<ComFile>;
  setComFileList(value: Array<ComFile>): Commande;
  clearComFileList(): Commande;
  addComFile(value?: ComFile, index?: number): ComFile;

  getStatusCode(): string;
  setStatusCode(value: string): Commande;

  getAssigneeId(): string;
  setAssigneeId(value: string): Commande;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): Commande;

  getForceDlou(): boolean;
  setForceDlou(value: boolean): Commande;

  getMissionList(): Array<MissionInfo>;
  setMissionList(value: Array<MissionInfo>): Commande;
  clearMissionList(): Commande;
  addMission(value?: MissionInfo, index?: number): MissionInfo;

  getCanceledAt(): number;
  setCanceledAt(value: number): Commande;

  getScene(): string;
  setScene(value: string): Commande;

  getActiveLot(): boolean;
  setActiveLot(value: boolean): Commande;

  getClientOb(): ClientCommande | undefined;
  setClientOb(value?: ClientCommande): Commande;
  hasClientOb(): boolean;
  clearClientOb(): Commande;

  getValidTimes(): number;
  setValidTimes(value: number): Commande;

  getType(): string;
  setType(value: string): Commande;

  getMouvement(): string;
  setMouvement(value: string): Commande;

  getEta(): string;
  setEta(value: string): Commande;

  getSsccBlockList(): Array<string>;
  setSsccBlockList(value: Array<string>): Commande;
  clearSsccBlockList(): Commande;
  addSsccBlock(value: string, index?: number): Commande;

  getEtasList(): Array<string>;
  setEtasList(value: Array<string>): Commande;
  clearEtasList(): Commande;
  addEtas(value: string, index?: number): Commande;

  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): Commande;
  clearTypesList(): Commande;
  addTypes(value: string, index?: number): Commande;

  getStatusesList(): Array<string>;
  setStatusesList(value: Array<string>): Commande;
  clearStatusesList(): Commande;
  addStatuses(value: string, index?: number): Commande;

  getQuantite(): number;
  setQuantite(value: number): Commande;

  getSousQte(): number;
  setSousQte(value: number): Commande;

  getTotalPieses(): number;
  setTotalPieses(value: number): Commande;

  getChrono(): string;
  setChrono(value: string): Commande;

  getLoadingValidationTime(): number;
  setLoadingValidationTime(value: number): Commande;

  getLoadingValidationBy(): string;
  setLoadingValidationBy(value: string): Commande;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Commande.AsObject;
  static toObject(includeInstance: boolean, msg: Commande): Commande.AsObject;
  static serializeBinaryToWriter(message: Commande, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Commande;
  static deserializeBinaryFromReader(message: Commande, reader: jspb.BinaryReader): Commande;
}

export namespace Commande {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    nom: string,
    nomClient: string,
    photos: number,
    priorite: number,
    comArticleList: Array<proto_comarticle_comarticle_pb.ComArticle.AsObject>,
    comPreparation?: ComComment.AsObject,
    comLivraison?: ComComment.AsObject,
    qteTotal: number,
    sousQteTotal: number,
    destinataireId: string,
    destinataire?: proto_destinataire_destinataire_pb.Destinataire.AsObject,
    desAddresseId: string,
    desAddresse?: proto_destinataire_destinataire_pb.DesAddresse.AsObject,
    desContactId: string,
    desContact?: proto_destinataire_destinataire_pb.DesContact.AsObject,
    transporteurId: string,
    transporteur?: proto_transporteur_transporteur_pb.Transporteur.AsObject,
    tranAddresseId: string,
    tranAddresse?: proto_transporteur_transporteur_pb.TranAddresse.AsObject,
    tranContactId: string,
    tranContact?: proto_transporteur_transporteur_pb.TranContact.AsObject,
    relayDetail: string,
    livraisonAt: number,
    chargementAt: number,
    imperatif: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
    createdBy: string,
    createrId: string,
    modificationBy: string,
    modificationerId: string,
    validationBy: string,
    validationerId: string,
    validationAt: number,
    comFileList: Array<ComFile.AsObject>,
    statusCode: string,
    assigneeId: string,
    assigneeBy: string,
    forceDlou: boolean,
    missionList: Array<MissionInfo.AsObject>,
    canceledAt: number,
    scene: string,
    activeLot: boolean,
    clientOb?: ClientCommande.AsObject,
    validTimes: number,
    type: string,
    mouvement: string,
    eta: string,
    ssccBlockList: Array<string>,
    etasList: Array<string>,
    typesList: Array<string>,
    statusesList: Array<string>,
    quantite: number,
    sousQte: number,
    totalPieses: number,
    chrono: string,
    loadingValidationTime: number,
    loadingValidationBy: string,
  }
}

export class MissionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): MissionInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): MissionInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): MissionInfo;

  getParentId(): string;
  setParentId(value: string): MissionInfo;

  getModificationBy(): string;
  setModificationBy(value: string): MissionInfo;

  getModificationerId(): string;
  setModificationerId(value: string): MissionInfo;

  getValidationBy(): string;
  setValidationBy(value: string): MissionInfo;

  getValidationerId(): string;
  setValidationerId(value: string): MissionInfo;

  getValidationTime(): number;
  setValidationTime(value: number): MissionInfo;

  getManagerId(): string;
  setManagerId(value: string): MissionInfo;

  getManagerBy(): string;
  setManagerBy(value: string): MissionInfo;

  getAssigneeId(): string;
  setAssigneeId(value: string): MissionInfo;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): MissionInfo;

  getStatusCode(): string;
  setStatusCode(value: string): MissionInfo;

  getLoadingBl(): string;
  setLoadingBl(value: string): MissionInfo;

  getPriorite(): number;
  setPriorite(value: number): MissionInfo;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): MissionInfo;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): MissionInfo;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): MissionInfo;

  getNom(): string;
  setNom(value: string): MissionInfo;

  getMissionType(): number;
  setMissionType(value: number): MissionInfo;

  getTruckNumber(): string;
  setTruckNumber(value: string): MissionInfo;

  getSscc(): string;
  setSscc(value: string): MissionInfo;

  getCompanyId(): string;
  setCompanyId(value: string): MissionInfo;

  getWarehouseId(): string;
  setWarehouseId(value: string): MissionInfo;

  getClientId(): string;
  setClientId(value: string): MissionInfo;

  getMissionFilesList(): Array<MissionFileInfo>;
  setMissionFilesList(value: Array<MissionFileInfo>): MissionInfo;
  clearMissionFilesList(): MissionInfo;
  addMissionFiles(value?: MissionFileInfo, index?: number): MissionFileInfo;

  getExecutionDate(): number;
  setExecutionDate(value: number): MissionInfo;

  getAssignmentDate(): number;
  setAssignmentDate(value: number): MissionInfo;

  getExpectedDate(): number;
  setExpectedDate(value: number): MissionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MissionInfo): MissionInfo.AsObject;
  static serializeBinaryToWriter(message: MissionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionInfo;
  static deserializeBinaryFromReader(message: MissionInfo, reader: jspb.BinaryReader): MissionInfo;
}

export namespace MissionInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    parentId: string,
    modificationBy: string,
    modificationerId: string,
    validationBy: string,
    validationerId: string,
    validationTime: number,
    managerId: string,
    managerBy: string,
    assigneeId: string,
    assigneeBy: string,
    statusCode: string,
    loadingBl: string,
    priorite: number,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    nom: string,
    missionType: number,
    truckNumber: string,
    sscc: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
    missionFilesList: Array<MissionFileInfo.AsObject>,
    executionDate: number,
    assignmentDate: number,
    expectedDate: number,
  }
}

export class MissionFileInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): MissionFileInfo;

  getName(): string;
  setName(value: string): MissionFileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MissionFileInfo): MissionFileInfo.AsObject;
  static serializeBinaryToWriter(message: MissionFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionFileInfo;
  static deserializeBinaryFromReader(message: MissionFileInfo, reader: jspb.BinaryReader): MissionFileInfo;
}

export namespace MissionFileInfo {
  export type AsObject = {
    path: string,
    name: string,
  }
}

export class ClientCommande extends jspb.Message {
  getNom(): string;
  setNom(value: string): ClientCommande;

  getCode(): string;
  setCode(value: string): ClientCommande;

  getCodeNom(): string;
  setCodeNom(value: string): ClientCommande;

  getFifo(): boolean;
  setFifo(value: boolean): ClientCommande;

  getFefo(): boolean;
  setFefo(value: boolean): ClientCommande;

  getMoisDluoInput(): number;
  setMoisDluoInput(value: number): ClientCommande;

  getMoisDluoActivate(): boolean;
  setMoisDluoActivate(value: boolean): ClientCommande;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCommande.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCommande): ClientCommande.AsObject;
  static serializeBinaryToWriter(message: ClientCommande, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCommande;
  static deserializeBinaryFromReader(message: ClientCommande, reader: jspb.BinaryReader): ClientCommande;
}

export namespace ClientCommande {
  export type AsObject = {
    nom: string,
    code: string,
    codeNom: string,
    fifo: boolean,
    fefo: boolean,
    moisDluoInput: number,
    moisDluoActivate: boolean,
  }
}

export class ComComment extends jspb.Message {
  getId(): string;
  setId(value: string): ComComment;

  getCreatedAt(): number;
  setCreatedAt(value: number): ComComment;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ComComment;

  getCommandeId(): string;
  setCommandeId(value: string): ComComment;

  getComment(): string;
  setComment(value: string): ComComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComComment.AsObject;
  static toObject(includeInstance: boolean, msg: ComComment): ComComment.AsObject;
  static serializeBinaryToWriter(message: ComComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComComment;
  static deserializeBinaryFromReader(message: ComComment, reader: jspb.BinaryReader): ComComment;
}

export namespace ComComment {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    commandeId: string,
    comment: string,
  }
}

export class ComFile extends jspb.Message {
  getId(): string;
  setId(value: string): ComFile;

  getCreatedAt(): number;
  setCreatedAt(value: number): ComFile;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ComFile;

  getName(): string;
  setName(value: string): ComFile;

  getCommandeId(): string;
  setCommandeId(value: string): ComFile;

  getDescription(): string;
  setDescription(value: string): ComFile;

  getPath(): string;
  setPath(value: string): ComFile;

  getSource(): string;
  setSource(value: string): ComFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComFile.AsObject;
  static toObject(includeInstance: boolean, msg: ComFile): ComFile.AsObject;
  static serializeBinaryToWriter(message: ComFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComFile;
  static deserializeBinaryFromReader(message: ComFile, reader: jspb.BinaryReader): ComFile;
}

export namespace ComFile {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    name: string,
    commandeId: string,
    description: string,
    path: string,
    source: string,
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
  getEntry(): Commande | undefined;
  setEntry(value?: Commande): CreateRequest;
  hasEntry(): boolean;
  clearEntry(): CreateRequest;

  getCacheStatus(): boolean;
  setCacheStatus(value: boolean): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    entry?: Commande.AsObject,
    cacheStatus: boolean,
  }
}

export class DeleteByIds extends jspb.Message {
  getIdList(): Array<string>;
  setIdList(value: Array<string>): DeleteByIds;
  clearIdList(): DeleteByIds;
  addId(value: string, index?: number): DeleteByIds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteByIds.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteByIds): DeleteByIds.AsObject;
  static serializeBinaryToWriter(message: DeleteByIds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteByIds;
  static deserializeBinaryFromReader(message: DeleteByIds, reader: jspb.BinaryReader): DeleteByIds;
}

export namespace DeleteByIds {
  export type AsObject = {
    idList: Array<string>,
  }
}

export class UpdateRequest extends jspb.Message {
  getEntry(): Commande | undefined;
  setEntry(value?: Commande): UpdateRequest;
  hasEntry(): boolean;
  clearEntry(): UpdateRequest;

  getDetailsDelete(): DeleteByIds | undefined;
  setDetailsDelete(value?: DeleteByIds): UpdateRequest;
  hasDetailsDelete(): boolean;
  clearDetailsDelete(): UpdateRequest;

  getFilesDelete(): DeleteByIds | undefined;
  setFilesDelete(value?: DeleteByIds): UpdateRequest;
  hasFilesDelete(): boolean;
  clearFilesDelete(): UpdateRequest;

  getCacheStatus(): boolean;
  setCacheStatus(value: boolean): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    entry?: Commande.AsObject,
    detailsDelete?: DeleteByIds.AsObject,
    filesDelete?: DeleteByIds.AsObject,
    cacheStatus: boolean,
  }
}

export class GetByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByIdRequest): GetByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByIdRequest;
  static deserializeBinaryFromReader(message: GetByIdRequest, reader: jspb.BinaryReader): GetByIdRequest;
}

export namespace GetByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class Response extends jspb.Message {
  getEntry(): Commande | undefined;
  setEntry(value?: Commande): Response;
  hasEntry(): boolean;
  clearEntry(): Response;

  getMessageerror(): string;
  setMessageerror(value: string): Response;

  getStatus(): string;
  setStatus(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    entry?: Commande.AsObject,
    messageerror: string,
    status: string,
  }
}

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

  getClientId(): string;
  setClientId(value: string): GetAllRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetAllRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetAllRequest;

  getUserId(): string;
  setUserId(value: string): GetAllRequest;

  getRole(): string;
  setRole(value: string): GetAllRequest;

  getAddressee(): string;
  setAddressee(value: string): GetAllRequest;
  hasAddressee(): boolean;
  clearAddressee(): GetAllRequest;

  getDescription(): string;
  setDescription(value: string): GetAllRequest;
  hasDescription(): boolean;
  clearDescription(): GetAllRequest;

  getBl(): string;
  setBl(value: string): GetAllRequest;

  getTransporter(): string;
  setTransporter(value: string): GetAllRequest;

  getType(): string;
  setType(value: string): GetAllRequest;

  getMouvement(): string;
  setMouvement(value: string): GetAllRequest;

  getEta(): string;
  setEta(value: string): GetAllRequest;

  getChrono(): string;
  setChrono(value: string): GetAllRequest;

  getDebut(): string;
  setDebut(value: string): GetAllRequest;

  getFin(): string;
  setFin(value: string): GetAllRequest;

  getProduct(): string;
  setProduct(value: string): GetAllRequest;

  getStatus(): string;
  setStatus(value: string): GetAllRequest;

  getSscc(): string;
  setSscc(value: string): GetAllRequest;

  getLot(): string;
  setLot(value: string): GetAllRequest;

  getCdn(): string;
  setCdn(value: string): GetAllRequest;

  getZone(): string;
  setZone(value: string): GetAllRequest;

  getAisle(): string;
  setAisle(value: string): GetAllRequest;

  getBay(): string;
  setBay(value: string): GetAllRequest;

  getLevel(): string;
  setLevel(value: string): GetAllRequest;

  getTypeCdn(): string;
  setTypeCdn(value: string): GetAllRequest;

  getNom(): string;
  setNom(value: string): GetAllRequest;

  getSort(): string;
  setSort(value: string): GetAllRequest;

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
    clientId: string,
    warehouseId: string,
    companyId: string,
    userId: string,
    role: string,
    addressee?: string,
    description?: string,
    bl: string,
    transporter: string,
    type: string,
    mouvement: string,
    eta: string,
    chrono: string,
    debut: string,
    fin: string,
    product: string,
    status: string,
    sscc: string,
    lot: string,
    cdn: string,
    zone: string,
    aisle: string,
    bay: string,
    level: string,
    typeCdn: string,
    nom: string,
    sort: string,
  }

  export enum AddresseeCase { 
    _ADDRESSEE_NOT_SET = 0,
    ADDRESSEE = 8,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 9,
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Commande>;
  setEntryList(value: Array<Commande>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Commande, index?: number): Commande;

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
    entryList: Array<Commande.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class IdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): IdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
  static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRequest;
  static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
  export type AsObject = {
    id: string,
  }
}

export class DelFileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DelFileRequest;

  getUserId(): string;
  setUserId(value: string): DelFileRequest;

  getUserRole(): string;
  setUserRole(value: string): DelFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelFileRequest): DelFileRequest.AsObject;
  static serializeBinaryToWriter(message: DelFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelFileRequest;
  static deserializeBinaryFromReader(message: DelFileRequest, reader: jspb.BinaryReader): DelFileRequest;
}

export namespace DelFileRequest {
  export type AsObject = {
    id: string,
    userId: string,
    userRole: string,
  }
}

export class DeleteResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): DeleteResponse;

  getMessageerror(): string;
  setMessageerror(value: string): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

export class UpdateResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateResponse;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
    updatedAt: number,
  }
}

export class ValidComResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ValidComResponse;

  getMessageerror(): string;
  setMessageerror(value: string): ValidComResponse;

  getEntry(): Commande | undefined;
  setEntry(value?: Commande): ValidComResponse;
  hasEntry(): boolean;
  clearEntry(): ValidComResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidComResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidComResponse): ValidComResponse.AsObject;
  static serializeBinaryToWriter(message: ValidComResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidComResponse;
  static deserializeBinaryFromReader(message: ValidComResponse, reader: jspb.BinaryReader): ValidComResponse;
}

export namespace ValidComResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
    entry?: Commande.AsObject,
  }
}

export class CreateAutoFileResponse extends jspb.Message {
  getEntry(): ComFile | undefined;
  setEntry(value?: ComFile): CreateAutoFileResponse;
  hasEntry(): boolean;
  clearEntry(): CreateAutoFileResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CreateAutoFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAutoFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAutoFileResponse): CreateAutoFileResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAutoFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAutoFileResponse;
  static deserializeBinaryFromReader(message: CreateAutoFileResponse, reader: jspb.BinaryReader): CreateAutoFileResponse;
}

export namespace CreateAutoFileResponse {
  export type AsObject = {
    entry?: ComFile.AsObject,
    messageerror: string,
  }
}

export class UpdateActiveLotRequest extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): UpdateActiveLotRequest;

  getCommandeId(): string;
  setCommandeId(value: string): UpdateActiveLotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActiveLotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActiveLotRequest): UpdateActiveLotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateActiveLotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActiveLotRequest;
  static deserializeBinaryFromReader(message: UpdateActiveLotRequest, reader: jspb.BinaryReader): UpdateActiveLotRequest;
}

export namespace UpdateActiveLotRequest {
  export type AsObject = {
    status: boolean,
    commandeId: string,
  }
}

export class UpdateActiveLotResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateActiveLotResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateActiveLotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActiveLotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActiveLotResponse): UpdateActiveLotResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateActiveLotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActiveLotResponse;
  static deserializeBinaryFromReader(message: UpdateActiveLotResponse, reader: jspb.BinaryReader): UpdateActiveLotResponse;
}

export namespace UpdateActiveLotResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

export class RaportFile extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): RaportFile;

  getCommandeId(): string;
  setCommandeId(value: string): RaportFile;

  getCommandeNom(): string;
  setCommandeNom(value: string): RaportFile;

  getDescription(): string;
  setDescription(value: string): RaportFile;

  getPreparationArrayList(): Array<PreparationItem>;
  setPreparationArrayList(value: Array<PreparationItem>): RaportFile;
  clearPreparationArrayList(): RaportFile;
  addPreparationArray(value?: PreparationItem, index?: number): PreparationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RaportFile.AsObject;
  static toObject(includeInstance: boolean, msg: RaportFile): RaportFile.AsObject;
  static serializeBinaryToWriter(message: RaportFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RaportFile;
  static deserializeBinaryFromReader(message: RaportFile, reader: jspb.BinaryReader): RaportFile;
}

export namespace RaportFile {
  export type AsObject = {
    index: string,
    commandeId: string,
    commandeNom: string,
    description: string,
    preparationArrayList: Array<PreparationItem.AsObject>,
  }
}

export class PreparationItem extends jspb.Message {
  getNbl(): string;
  setNbl(value: string): PreparationItem;

  getReferenceName(): string;
  setReferenceName(value: string): PreparationItem;

  getLot(): string;
  setLot(value: string): PreparationItem;

  getSscc(): string;
  setSscc(value: string): PreparationItem;

  getDluo(): string;
  setDluo(value: string): PreparationItem;

  getMotif(): string;
  setMotif(value: string): PreparationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreparationItem.AsObject;
  static toObject(includeInstance: boolean, msg: PreparationItem): PreparationItem.AsObject;
  static serializeBinaryToWriter(message: PreparationItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreparationItem;
  static deserializeBinaryFromReader(message: PreparationItem, reader: jspb.BinaryReader): PreparationItem;
}

export namespace PreparationItem {
  export type AsObject = {
    nbl: string,
    referenceName: string,
    lot: string,
    sscc: string,
    dluo: string,
    motif: string,
  }
}

export class UploadResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): UploadResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
  static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadResponse;
  static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
  export type AsObject = {
    url: string,
    messageerror: string,
  }
}

export class DePrelevement extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): DePrelevement;

  getCommandeId(): string;
  setCommandeId(value: string): DePrelevement;

  getBl(): string;
  setBl(value: string): DePrelevement;

  getDate(): string;
  setDate(value: string): DePrelevement;

  getHour(): string;
  setHour(value: string): DePrelevement;

  getCommentaire(): string;
  setCommentaire(value: string): DePrelevement;

  getClient(): string;
  setClient(value: string): DePrelevement;

  getDescription(): string;
  setDescription(value: string): DePrelevement;

  getCommandeNom(): string;
  setCommandeNom(value: string): DePrelevement;

  getPreparationArrayList(): Array<DePrelevementItem>;
  setPreparationArrayList(value: Array<DePrelevementItem>): DePrelevement;
  clearPreparationArrayList(): DePrelevement;
  addPreparationArray(value?: DePrelevementItem, index?: number): DePrelevementItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DePrelevement.AsObject;
  static toObject(includeInstance: boolean, msg: DePrelevement): DePrelevement.AsObject;
  static serializeBinaryToWriter(message: DePrelevement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DePrelevement;
  static deserializeBinaryFromReader(message: DePrelevement, reader: jspb.BinaryReader): DePrelevement;
}

export namespace DePrelevement {
  export type AsObject = {
    index: string,
    commandeId: string,
    bl: string,
    date: string,
    hour: string,
    commentaire: string,
    client: string,
    description: string,
    commandeNom: string,
    preparationArrayList: Array<DePrelevementItem.AsObject>,
  }
}

export class DePrelevementItem extends jspb.Message {
  getReferenceName(): string;
  setReferenceName(value: string): DePrelevementItem;

  getLot(): string;
  setLot(value: string): DePrelevementItem;

  getDluo(): string;
  setDluo(value: string): DePrelevementItem;

  getSscc(): string;
  setSscc(value: string): DePrelevementItem;

  getQuantite(): string;
  setQuantite(value: string): DePrelevementItem;

  getTotal(): string;
  setTotal(value: string): DePrelevementItem;

  getZone(): string;
  setZone(value: string): DePrelevementItem;

  getAllee(): string;
  setAllee(value: string): DePrelevementItem;

  getTravee(): string;
  setTravee(value: string): DePrelevementItem;

  getNiveau(): string;
  setNiveau(value: string): DePrelevementItem;

  getPosition(): string;
  setPosition(value: string): DePrelevementItem;

  getNote(): string;
  setNote(value: string): DePrelevementItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DePrelevementItem.AsObject;
  static toObject(includeInstance: boolean, msg: DePrelevementItem): DePrelevementItem.AsObject;
  static serializeBinaryToWriter(message: DePrelevementItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DePrelevementItem;
  static deserializeBinaryFromReader(message: DePrelevementItem, reader: jspb.BinaryReader): DePrelevementItem;
}

export namespace DePrelevementItem {
  export type AsObject = {
    referenceName: string,
    lot: string,
    dluo: string,
    sscc: string,
    quantite: string,
    total: string,
    zone: string,
    allee: string,
    travee: string,
    niveau: string,
    position: string,
    note: string,
  }
}

export class CheckLastestRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CheckLastestRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CheckLastestRequest;

  getCacheStatus(): boolean;
  setCacheStatus(value: boolean): CheckLastestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckLastestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckLastestRequest): CheckLastestRequest.AsObject;
  static serializeBinaryToWriter(message: CheckLastestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckLastestRequest;
  static deserializeBinaryFromReader(message: CheckLastestRequest, reader: jspb.BinaryReader): CheckLastestRequest;
}

export namespace CheckLastestRequest {
  export type AsObject = {
    id: string,
    updatedAt: number,
    cacheStatus: boolean,
  }
}

export class CheckLastestResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): CheckLastestResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CheckLastestResponse;

  getResult(): boolean;
  setResult(value: boolean): CheckLastestResponse;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CheckLastestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckLastestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckLastestResponse): CheckLastestResponse.AsObject;
  static serializeBinaryToWriter(message: CheckLastestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckLastestResponse;
  static deserializeBinaryFromReader(message: CheckLastestResponse, reader: jspb.BinaryReader): CheckLastestResponse;
}

export namespace CheckLastestResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
    result: boolean,
    updatedAt: number,
  }
}

export class CommandeTable extends jspb.Message {
  getId(): string;
  setId(value: string): CommandeTable;

  getCreatedAt(): number;
  setCreatedAt(value: number): CommandeTable;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CommandeTable;

  getNom(): string;
  setNom(value: string): CommandeTable;

  getNomClient(): string;
  setNomClient(value: string): CommandeTable;

  getPhotos(): number;
  setPhotos(value: number): CommandeTable;

  getPriorite(): number;
  setPriorite(value: number): CommandeTable;

  getQteTotal(): number;
  setQteTotal(value: number): CommandeTable;

  getSousQteTotal(): number;
  setSousQteTotal(value: number): CommandeTable;

  getDestinataireId(): string;
  setDestinataireId(value: string): CommandeTable;

  getDesAddresseId(): string;
  setDesAddresseId(value: string): CommandeTable;

  getDesContactId(): string;
  setDesContactId(value: string): CommandeTable;

  getTransporteurId(): string;
  setTransporteurId(value: string): CommandeTable;

  getTranAddresseId(): string;
  setTranAddresseId(value: string): CommandeTable;

  getTranContactId(): string;
  setTranContactId(value: string): CommandeTable;

  getRelayDetail(): string;
  setRelayDetail(value: string): CommandeTable;

  getLivraisonAt(): number;
  setLivraisonAt(value: number): CommandeTable;

  getChargementAt(): number;
  setChargementAt(value: number): CommandeTable;

  getImperatif(): boolean;
  setImperatif(value: boolean): CommandeTable;

  getCompanyId(): string;
  setCompanyId(value: string): CommandeTable;

  getWarehouseId(): string;
  setWarehouseId(value: string): CommandeTable;

  getClientId(): string;
  setClientId(value: string): CommandeTable;

  getCreatedBy(): string;
  setCreatedBy(value: string): CommandeTable;

  getCreaterId(): string;
  setCreaterId(value: string): CommandeTable;

  getModificationBy(): string;
  setModificationBy(value: string): CommandeTable;

  getModificationerId(): string;
  setModificationerId(value: string): CommandeTable;

  getValidationBy(): string;
  setValidationBy(value: string): CommandeTable;

  getValidationerId(): string;
  setValidationerId(value: string): CommandeTable;

  getValidationAt(): number;
  setValidationAt(value: number): CommandeTable;

  getComFileList(): Array<ComFile>;
  setComFileList(value: Array<ComFile>): CommandeTable;
  clearComFileList(): CommandeTable;
  addComFile(value?: ComFile, index?: number): ComFile;

  getStatusCode(): string;
  setStatusCode(value: string): CommandeTable;

  getAssigneeId(): string;
  setAssigneeId(value: string): CommandeTable;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): CommandeTable;

  getForceDlou(): boolean;
  setForceDlou(value: boolean): CommandeTable;

  getCanceledAt(): number;
  setCanceledAt(value: number): CommandeTable;

  getScene(): string;
  setScene(value: string): CommandeTable;

  getActiveLot(): boolean;
  setActiveLot(value: boolean): CommandeTable;

  getValidTimes(): number;
  setValidTimes(value: number): CommandeTable;

  getType(): string;
  setType(value: string): CommandeTable;

  getMouvement(): string;
  setMouvement(value: string): CommandeTable;

  getEta(): string;
  setEta(value: string): CommandeTable;

  getMissionList(): Array<proto_mission_mission_pb.Mission>;
  setMissionList(value: Array<proto_mission_mission_pb.Mission>): CommandeTable;
  clearMissionList(): CommandeTable;
  addMission(value?: proto_mission_mission_pb.Mission, index?: number): proto_mission_mission_pb.Mission;

  getSsccBlockList(): Array<string>;
  setSsccBlockList(value: Array<string>): CommandeTable;
  clearSsccBlockList(): CommandeTable;
  addSsccBlock(value: string, index?: number): CommandeTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandeTable.AsObject;
  static toObject(includeInstance: boolean, msg: CommandeTable): CommandeTable.AsObject;
  static serializeBinaryToWriter(message: CommandeTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandeTable;
  static deserializeBinaryFromReader(message: CommandeTable, reader: jspb.BinaryReader): CommandeTable;
}

export namespace CommandeTable {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    nom: string,
    nomClient: string,
    photos: number,
    priorite: number,
    qteTotal: number,
    sousQteTotal: number,
    destinataireId: string,
    desAddresseId: string,
    desContactId: string,
    transporteurId: string,
    tranAddresseId: string,
    tranContactId: string,
    relayDetail: string,
    livraisonAt: number,
    chargementAt: number,
    imperatif: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
    createdBy: string,
    createrId: string,
    modificationBy: string,
    modificationerId: string,
    validationBy: string,
    validationerId: string,
    validationAt: number,
    comFileList: Array<ComFile.AsObject>,
    statusCode: string,
    assigneeId: string,
    assigneeBy: string,
    forceDlou: boolean,
    canceledAt: number,
    scene: string,
    activeLot: boolean,
    validTimes: number,
    type: string,
    mouvement: string,
    eta: string,
    missionList: Array<proto_mission_mission_pb.Mission.AsObject>,
    ssccBlockList: Array<string>,
  }
}

export class SenOnMissionRequest extends jspb.Message {
  getEntry(): CommandeTable | undefined;
  setEntry(value?: CommandeTable): SenOnMissionRequest;
  hasEntry(): boolean;
  clearEntry(): SenOnMissionRequest;

  getCacheStatus(): boolean;
  setCacheStatus(value: boolean): SenOnMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SenOnMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SenOnMissionRequest): SenOnMissionRequest.AsObject;
  static serializeBinaryToWriter(message: SenOnMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SenOnMissionRequest;
  static deserializeBinaryFromReader(message: SenOnMissionRequest, reader: jspb.BinaryReader): SenOnMissionRequest;
}

export namespace SenOnMissionRequest {
  export type AsObject = {
    entry?: CommandeTable.AsObject,
    cacheStatus: boolean,
  }
}

export class SenOnMissionResponse extends jspb.Message {
  getEntry(): CommandeTable | undefined;
  setEntry(value?: CommandeTable): SenOnMissionResponse;
  hasEntry(): boolean;
  clearEntry(): SenOnMissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): SenOnMissionResponse;

  getStatus(): string;
  setStatus(value: string): SenOnMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SenOnMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SenOnMissionResponse): SenOnMissionResponse.AsObject;
  static serializeBinaryToWriter(message: SenOnMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SenOnMissionResponse;
  static deserializeBinaryFromReader(message: SenOnMissionResponse, reader: jspb.BinaryReader): SenOnMissionResponse;
}

export namespace SenOnMissionResponse {
  export type AsObject = {
    entry?: CommandeTable.AsObject,
    messageerror: string,
    status: string,
  }
}

export class CancelRequest extends jspb.Message {
  getEntry(): CommandeTable | undefined;
  setEntry(value?: CommandeTable): CancelRequest;
  hasEntry(): boolean;
  clearEntry(): CancelRequest;

  getCacheStatus(): boolean;
  setCacheStatus(value: boolean): CancelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
    entry?: CommandeTable.AsObject,
    cacheStatus: boolean,
  }
}

export class CancelResponse extends jspb.Message {
  getEntry(): CommandeTable | undefined;
  setEntry(value?: CommandeTable): CancelResponse;
  hasEntry(): boolean;
  clearEntry(): CancelResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CancelResponse;

  getStatus(): string;
  setStatus(value: string): CancelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponse): CancelResponse.AsObject;
  static serializeBinaryToWriter(message: CancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponse;
  static deserializeBinaryFromReader(message: CancelResponse, reader: jspb.BinaryReader): CancelResponse;
}

export namespace CancelResponse {
  export type AsObject = {
    entry?: CommandeTable.AsObject,
    messageerror: string,
    status: string,
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

  getTotal(): number;
  setTotal(value: number): GetDashboardInformationResponse;

  getItems(): number;
  setItems(value: number): GetDashboardInformationResponse;

  getItemsCdn(): number;
  setItemsCdn(value: number): GetDashboardInformationResponse;

  getReferecence(): number;
  setReferecence(value: number): GetDashboardInformationResponse;

  getLoadItem(): number;
  setLoadItem(value: number): GetDashboardInformationResponse;

  getTraitedItem(): number;
  setTraitedItem(value: number): GetDashboardInformationResponse;

  getAveragePreparationTime(): number;
  setAveragePreparationTime(value: number): GetDashboardInformationResponse;

  getLoadingNow(): number;
  setLoadingNow(value: number): GetDashboardInformationResponse;

  getLoadingFinish(): number;
  setLoadingFinish(value: number): GetDashboardInformationResponse;

  getAverageLoadingTime(): number;
  setAverageLoadingTime(value: number): GetDashboardInformationResponse;

  getAffectedStaff(): number;
  setAffectedStaff(value: number): GetDashboardInformationResponse;

  getTypeOfConditionnementList(): Array<TypeOfConditionnementItem>;
  setTypeOfConditionnementList(value: Array<TypeOfConditionnementItem>): GetDashboardInformationResponse;
  clearTypeOfConditionnementList(): GetDashboardInformationResponse;
  addTypeOfConditionnement(value?: TypeOfConditionnementItem, index?: number): TypeOfConditionnementItem;

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
    total: number,
    items: number,
    itemsCdn: number,
    referecence: number,
    loadItem: number,
    traitedItem: number,
    averagePreparationTime: number,
    loadingNow: number,
    loadingFinish: number,
    averageLoadingTime: number,
    affectedStaff: number,
    typeOfConditionnementList: Array<TypeOfConditionnementItem.AsObject>,
    stickChartList: Array<DashboardChart.AsObject>,
    pieChartList: Array<DashboardChart.AsObject>,
  }
}

export class CommandeDocCreate extends jspb.Message {
  getId(): string;
  setId(value: string): CommandeDocCreate;

  getNom(): string;
  setNom(value: string): CommandeDocCreate;

  getNomClient(): string;
  setNomClient(value: string): CommandeDocCreate;

  getPhotos(): number;
  setPhotos(value: number): CommandeDocCreate;

  getPriorite(): number;
  setPriorite(value: number): CommandeDocCreate;

  getComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticleCreate>;
  setComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticleCreate>): CommandeDocCreate;
  clearComArticleList(): CommandeDocCreate;
  addComArticle(value?: proto_comarticle_comarticle_pb.ComArticleCreate, index?: number): proto_comarticle_comarticle_pb.ComArticleCreate;

  getComPreparation(): ComComment | undefined;
  setComPreparation(value?: ComComment): CommandeDocCreate;
  hasComPreparation(): boolean;
  clearComPreparation(): CommandeDocCreate;

  getComLivraison(): ComComment | undefined;
  setComLivraison(value?: ComComment): CommandeDocCreate;
  hasComLivraison(): boolean;
  clearComLivraison(): CommandeDocCreate;

  getQteTotal(): number;
  setQteTotal(value: number): CommandeDocCreate;

  getSousQteTotal(): number;
  setSousQteTotal(value: number): CommandeDocCreate;

  getDestinataireId(): string;
  setDestinataireId(value: string): CommandeDocCreate;

  getDesAddresseId(): string;
  setDesAddresseId(value: string): CommandeDocCreate;

  getDesContactId(): string;
  setDesContactId(value: string): CommandeDocCreate;

  getTransporteurId(): string;
  setTransporteurId(value: string): CommandeDocCreate;

  getTranAddresseId(): string;
  setTranAddresseId(value: string): CommandeDocCreate;

  getTranContactId(): string;
  setTranContactId(value: string): CommandeDocCreate;

  getRelayDetail(): string;
  setRelayDetail(value: string): CommandeDocCreate;

  getLivraisonAt(): number;
  setLivraisonAt(value: number): CommandeDocCreate;

  getChargementAt(): number;
  setChargementAt(value: number): CommandeDocCreate;

  getImperatif(): boolean;
  setImperatif(value: boolean): CommandeDocCreate;

  getCompanyId(): string;
  setCompanyId(value: string): CommandeDocCreate;

  getWarehouseId(): string;
  setWarehouseId(value: string): CommandeDocCreate;

  getClientId(): string;
  setClientId(value: string): CommandeDocCreate;

  getCreatedBy(): string;
  setCreatedBy(value: string): CommandeDocCreate;

  getCreaterId(): string;
  setCreaterId(value: string): CommandeDocCreate;

  getStatusCode(): string;
  setStatusCode(value: string): CommandeDocCreate;

  getForceDlou(): boolean;
  setForceDlou(value: boolean): CommandeDocCreate;

  getScene(): string;
  setScene(value: string): CommandeDocCreate;

  getActiveLot(): boolean;
  setActiveLot(value: boolean): CommandeDocCreate;

  getValidTimes(): number;
  setValidTimes(value: number): CommandeDocCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandeDocCreate.AsObject;
  static toObject(includeInstance: boolean, msg: CommandeDocCreate): CommandeDocCreate.AsObject;
  static serializeBinaryToWriter(message: CommandeDocCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandeDocCreate;
  static deserializeBinaryFromReader(message: CommandeDocCreate, reader: jspb.BinaryReader): CommandeDocCreate;
}

export namespace CommandeDocCreate {
  export type AsObject = {
    id: string,
    nom: string,
    nomClient: string,
    photos: number,
    priorite: number,
    comArticleList: Array<proto_comarticle_comarticle_pb.ComArticleCreate.AsObject>,
    comPreparation?: ComComment.AsObject,
    comLivraison?: ComComment.AsObject,
    qteTotal: number,
    sousQteTotal: number,
    destinataireId: string,
    desAddresseId: string,
    desContactId: string,
    transporteurId: string,
    tranAddresseId: string,
    tranContactId: string,
    relayDetail: string,
    livraisonAt: number,
    chargementAt: number,
    imperatif: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
    createdBy: string,
    createrId: string,
    statusCode: string,
    forceDlou: boolean,
    scene: string,
    activeLot: boolean,
    validTimes: number,
  }
}

export class UpdateRequestDoc extends jspb.Message {
  getEntry(): CommandeDocCreate | undefined;
  setEntry(value?: CommandeDocCreate): UpdateRequestDoc;
  hasEntry(): boolean;
  clearEntry(): UpdateRequestDoc;

  getDetailsDelete(): DeleteByIds | undefined;
  setDetailsDelete(value?: DeleteByIds): UpdateRequestDoc;
  hasDetailsDelete(): boolean;
  clearDetailsDelete(): UpdateRequestDoc;

  getFilesDelete(): DeleteByIds | undefined;
  setFilesDelete(value?: DeleteByIds): UpdateRequestDoc;
  hasFilesDelete(): boolean;
  clearFilesDelete(): UpdateRequestDoc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequestDoc.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequestDoc): UpdateRequestDoc.AsObject;
  static serializeBinaryToWriter(message: UpdateRequestDoc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequestDoc;
  static deserializeBinaryFromReader(message: UpdateRequestDoc, reader: jspb.BinaryReader): UpdateRequestDoc;
}

export namespace UpdateRequestDoc {
  export type AsObject = {
    entry?: CommandeDocCreate.AsObject,
    detailsDelete?: DeleteByIds.AsObject,
    filesDelete?: DeleteByIds.AsObject,
  }
}

export class CancelRequestDoc extends jspb.Message {
  getEntry(): CommandeTable | undefined;
  setEntry(value?: CommandeTable): CancelRequestDoc;
  hasEntry(): boolean;
  clearEntry(): CancelRequestDoc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequestDoc.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequestDoc): CancelRequestDoc.AsObject;
  static serializeBinaryToWriter(message: CancelRequestDoc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequestDoc;
  static deserializeBinaryFromReader(message: CancelRequestDoc, reader: jspb.BinaryReader): CancelRequestDoc;
}

export namespace CancelRequestDoc {
  export type AsObject = {
    entry?: CommandeTable.AsObject,
  }
}

export class CheckLastestRequestGenApiDoc extends jspb.Message {
  getId(): string;
  setId(value: string): CheckLastestRequestGenApiDoc;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CheckLastestRequestGenApiDoc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckLastestRequestGenApiDoc.AsObject;
  static toObject(includeInstance: boolean, msg: CheckLastestRequestGenApiDoc): CheckLastestRequestGenApiDoc.AsObject;
  static serializeBinaryToWriter(message: CheckLastestRequestGenApiDoc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckLastestRequestGenApiDoc;
  static deserializeBinaryFromReader(message: CheckLastestRequestGenApiDoc, reader: jspb.BinaryReader): CheckLastestRequestGenApiDoc;
}

export namespace CheckLastestRequestGenApiDoc {
  export type AsObject = {
    id: string,
    updatedAt: number,
  }
}

export class GetCommandeHistoryByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCommandeHistoryByIdRequest;

  getLimit(): number;
  setLimit(value: number): GetCommandeHistoryByIdRequest;

  getOffset(): number;
  setOffset(value: number): GetCommandeHistoryByIdRequest;

  getStartDate(): number;
  setStartDate(value: number): GetCommandeHistoryByIdRequest;

  getEndDate(): number;
  setEndDate(value: number): GetCommandeHistoryByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommandeHistoryByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommandeHistoryByIdRequest): GetCommandeHistoryByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommandeHistoryByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommandeHistoryByIdRequest;
  static deserializeBinaryFromReader(message: GetCommandeHistoryByIdRequest, reader: jspb.BinaryReader): GetCommandeHistoryByIdRequest;
}

export namespace GetCommandeHistoryByIdRequest {
  export type AsObject = {
    id: string,
    limit: number,
    offset: number,
    startDate: number,
    endDate: number,
  }
}

export class ResponseHistory extends jspb.Message {
  getEntryList(): Array<proto_history_history_pb.History>;
  setEntryList(value: Array<proto_history_history_pb.History>): ResponseHistory;
  clearEntryList(): ResponseHistory;
  addEntry(value?: proto_history_history_pb.History, index?: number): proto_history_history_pb.History;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): ResponseHistory;
  hasMetadata(): boolean;
  clearMetadata(): ResponseHistory;

  getMessageerror(): string;
  setMessageerror(value: string): ResponseHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseHistory): ResponseHistory.AsObject;
  static serializeBinaryToWriter(message: ResponseHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseHistory;
  static deserializeBinaryFromReader(message: ResponseHistory, reader: jspb.BinaryReader): ResponseHistory;
}

export namespace ResponseHistory {
  export type AsObject = {
    entryList: Array<proto_history_history_pb.History.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

