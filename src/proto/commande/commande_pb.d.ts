import * as jspb from 'google-protobuf'

import * as proto_destinataire_destinataire_pb from '../../proto/destinataire/destinataire_pb'; // proto import: "proto/destinataire/destinataire.proto"
import * as proto_transporteur_transporteur_pb from '../../proto/transporteur/transporteur_pb'; // proto import: "proto/transporteur/transporteur.proto"
import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"


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

