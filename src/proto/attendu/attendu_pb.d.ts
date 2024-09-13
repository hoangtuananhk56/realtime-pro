import * as jspb from 'google-protobuf'

import * as proto_conditionnement_conditionnement_pb from '../../proto/conditionnement/conditionnement_pb'; // proto import: "proto/conditionnement/conditionnement.proto"
import * as proto_destinataire_destinataire_pb from '../../proto/destinataire/destinataire_pb'; // proto import: "proto/destinataire/destinataire.proto"
import * as proto_transporteur_transporteur_pb from '../../proto/transporteur/transporteur_pb'; // proto import: "proto/transporteur/transporteur.proto"
import * as proto_user_user_pb from '../../proto/user/user_pb'; // proto import: "proto/user/user.proto"
import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"
import * as proto_stock_stock_pb from '../../proto/stock/stock_pb'; // proto import: "proto/stock/stock.proto"
import * as proto_sscc_sscc_pb from '../../proto/sscc/sscc_pb'; // proto import: "proto/sscc/sscc.proto"
import * as proto_commande_commande_pb from '../../proto/commande/commande_pb'; // proto import: "proto/commande/commande.proto"
import * as proto_reference_reference_pb from '../../proto/reference/reference_pb'; // proto import: "proto/reference/reference.proto"
import * as proto_export_export_pb from '../../proto/export/export_pb'; // proto import: "proto/export/export.proto"


export class Attendu extends jspb.Message {
  getId(): string;
  setId(value: string): Attendu;

  getCreateAt(): number;
  setCreateAt(value: number): Attendu;

  getUpdateAt(): number;
  setUpdateAt(value: number): Attendu;

  getBl(): string;
  setBl(value: string): Attendu;

  getCommande(): number;
  setCommande(value: number): Attendu;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): Attendu;

  getNumberOfFournisseur(): string;
  setNumberOfFournisseur(value: string): Attendu;

  getLivraison(): number;
  setLivraison(value: number): Attendu;

  getPriorite(): number;
  setPriorite(value: number): Attendu;

  getQteTotal(): number;
  setQteTotal(value: number): Attendu;

  getSousQteTotal(): number;
  setSousQteTotal(value: number): Attendu;

  getAttProductionList(): Array<AttProduction>;
  setAttProductionList(value: Array<AttProduction>): Attendu;
  clearAttProductionList(): Attendu;
  addAttProduction(value?: AttProduction, index?: number): AttProduction;

  getAttCommentaire(): AttCommentaire | undefined;
  setAttCommentaire(value?: AttCommentaire): Attendu;
  hasAttCommentaire(): boolean;
  clearAttCommentaire(): Attendu;

  getAttFournisseur(): AttFournisseur | undefined;
  setAttFournisseur(value?: AttFournisseur): Attendu;
  hasAttFournisseur(): boolean;
  clearAttFournisseur(): Attendu;

  getAttFileList(): Array<AttFile>;
  setAttFileList(value: Array<AttFile>): Attendu;
  clearAttFileList(): Attendu;
  addAttFile(value?: AttFile, index?: number): AttFile;

  getFournisseurId(): string;
  setFournisseurId(value: string): Attendu;

  getIsVal(): boolean;
  setIsVal(value: boolean): Attendu;

  getNoCommande(): string;
  setNoCommande(value: string): Attendu;

  getStatus(): string;
  setStatus(value: string): Attendu;

  getPhotos(): number;
  setPhotos(value: number): Attendu;

  getLocationId(): string;
  setLocationId(value: string): Attendu;

  getAssigneeId(): string;
  setAssigneeId(value: string): Attendu;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): Attendu;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): Attendu;

  getCreatedBy(): string;
  setCreatedBy(value: string): Attendu;

  getModificationBy(): string;
  setModificationBy(value: string): Attendu;

  getValidationBy(): string;
  setValidationBy(value: string): Attendu;

  getValidationTime(): number;
  setValidationTime(value: number): Attendu;

  getModificationerId(): string;
  setModificationerId(value: string): Attendu;

  getManagerBy(): string;
  setManagerBy(value: string): Attendu;

  getManagerId(): string;
  setManagerId(value: string): Attendu;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): Attendu;

  getType(): string;
  setType(value: string): Attendu;

  getMouvement(): string;
  setMouvement(value: string): Attendu;

  getEta(): string;
  setEta(value: string): Attendu;

  getRecType(): number;
  setRecType(value: number): Attendu;

  getMouvementsList(): Array<string>;
  setMouvementsList(value: Array<string>): Attendu;
  clearMouvementsList(): Attendu;
  addMouvements(value: string, index?: number): Attendu;

  getEtasList(): Array<string>;
  setEtasList(value: Array<string>): Attendu;
  clearEtasList(): Attendu;
  addEtas(value: string, index?: number): Attendu;

  getStatusesList(): Array<string>;
  setStatusesList(value: Array<string>): Attendu;
  clearStatusesList(): Attendu;
  addStatuses(value: string, index?: number): Attendu;

  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): Attendu;
  clearTypesList(): Attendu;
  addTypes(value: string, index?: number): Attendu;

  getTypeCdnList(): Array<number>;
  setTypeCdnList(value: Array<number>): Attendu;
  clearTypeCdnList(): Attendu;
  addTypeCdn(value: number, index?: number): Attendu;

  getQuantite(): number;
  setQuantite(value: number): Attendu;

  getSousQte(): number;
  setSousQte(value: number): Attendu;

  getTotalPieses(): number;
  setTotalPieses(value: number): Attendu;

  getChrono(): string;
  setChrono(value: string): Attendu;

  getClientId(): string;
  setClientId(value: string): Attendu;

  getCompanyId(): string;
  setCompanyId(value: string): Attendu;

  getWarehouseId(): string;
  setWarehouseId(value: string): Attendu;

  getMissionsList(): Array<MissionDTO>;
  setMissionsList(value: Array<MissionDTO>): Attendu;
  clearMissionsList(): Attendu;
  addMissions(value?: MissionDTO, index?: number): MissionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attendu.AsObject;
  static toObject(includeInstance: boolean, msg: Attendu): Attendu.AsObject;
  static serializeBinaryToWriter(message: Attendu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attendu;
  static deserializeBinaryFromReader(message: Attendu, reader: jspb.BinaryReader): Attendu;
}

export namespace Attendu {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    bl: string,
    commande: number,
    clientCodeNom: string,
    numberOfFournisseur: string,
    livraison: number,
    priorite: number,
    qteTotal: number,
    sousQteTotal: number,
    attProductionList: Array<AttProduction.AsObject>,
    attCommentaire?: AttCommentaire.AsObject,
    attFournisseur?: AttFournisseur.AsObject,
    attFileList: Array<AttFile.AsObject>,
    fournisseurId: string,
    isVal: boolean,
    noCommande: string,
    status: string,
    photos: number,
    locationId: string,
    assigneeId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    createdBy: string,
    modificationBy: string,
    validationBy: string,
    validationTime: number,
    modificationerId: string,
    managerBy: string,
    managerId: string,
    assigneeBy: string,
    type: string,
    mouvement: string,
    eta: string,
    recType: number,
    mouvementsList: Array<string>,
    etasList: Array<string>,
    statusesList: Array<string>,
    typesList: Array<string>,
    typeCdnList: Array<number>,
    quantite: number,
    sousQte: number,
    totalPieses: number,
    chrono: string,
    clientId: string,
    companyId: string,
    warehouseId: string,
    missionsList: Array<MissionDTO.AsObject>,
  }
}

export class MissionDTO extends jspb.Message {
  getId(): string;
  setId(value: string): MissionDTO;

  getCreateAt(): number;
  setCreateAt(value: number): MissionDTO;

  getUpdateAt(): number;
  setUpdateAt(value: number): MissionDTO;

  getBl(): string;
  setBl(value: string): MissionDTO;

  getCommande(): number;
  setCommande(value: number): MissionDTO;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): MissionDTO;

  getNumberOfFournisseur(): string;
  setNumberOfFournisseur(value: string): MissionDTO;

  getLivraison(): number;
  setLivraison(value: number): MissionDTO;

  getPriorite(): number;
  setPriorite(value: number): MissionDTO;

  getQteTotal(): number;
  setQteTotal(value: number): MissionDTO;

  getSousQteTotal(): number;
  setSousQteTotal(value: number): MissionDTO;

  getAttProductionList(): Array<AttProduction>;
  setAttProductionList(value: Array<AttProduction>): MissionDTO;
  clearAttProductionList(): MissionDTO;
  addAttProduction(value?: AttProduction, index?: number): AttProduction;

  getAttCommentaire(): AttCommentaire | undefined;
  setAttCommentaire(value?: AttCommentaire): MissionDTO;
  hasAttCommentaire(): boolean;
  clearAttCommentaire(): MissionDTO;

  getAttFournisseur(): AttFournisseur | undefined;
  setAttFournisseur(value?: AttFournisseur): MissionDTO;
  hasAttFournisseur(): boolean;
  clearAttFournisseur(): MissionDTO;

  getAttFileList(): Array<AttFile>;
  setAttFileList(value: Array<AttFile>): MissionDTO;
  clearAttFileList(): MissionDTO;
  addAttFile(value?: AttFile, index?: number): AttFile;

  getFournisseurId(): string;
  setFournisseurId(value: string): MissionDTO;

  getIsVal(): boolean;
  setIsVal(value: boolean): MissionDTO;

  getNoCommande(): string;
  setNoCommande(value: string): MissionDTO;

  getStatus(): string;
  setStatus(value: string): MissionDTO;

  getPhotos(): number;
  setPhotos(value: number): MissionDTO;

  getLocationId(): string;
  setLocationId(value: string): MissionDTO;

  getAssigneeId(): string;
  setAssigneeId(value: string): MissionDTO;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): MissionDTO;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): MissionDTO;

  getCreatedBy(): string;
  setCreatedBy(value: string): MissionDTO;

  getModificationBy(): string;
  setModificationBy(value: string): MissionDTO;

  getValidationBy(): string;
  setValidationBy(value: string): MissionDTO;

  getValidationTime(): number;
  setValidationTime(value: number): MissionDTO;

  getModificationerId(): string;
  setModificationerId(value: string): MissionDTO;

  getManagerBy(): string;
  setManagerBy(value: string): MissionDTO;

  getManagerId(): string;
  setManagerId(value: string): MissionDTO;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): MissionDTO;

  getNom(): string;
  setNom(value: string): MissionDTO;

  getNomClient(): string;
  setNomClient(value: string): MissionDTO;

  getComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticle>;
  setComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticle>): MissionDTO;
  clearComArticleList(): MissionDTO;
  addComArticle(value?: proto_comarticle_comarticle_pb.ComArticle, index?: number): proto_comarticle_comarticle_pb.ComArticle;

  getComPreparation(): proto_commande_commande_pb.ComComment | undefined;
  setComPreparation(value?: proto_commande_commande_pb.ComComment): MissionDTO;
  hasComPreparation(): boolean;
  clearComPreparation(): MissionDTO;

  getComLivraison(): proto_commande_commande_pb.ComComment | undefined;
  setComLivraison(value?: proto_commande_commande_pb.ComComment): MissionDTO;
  hasComLivraison(): boolean;
  clearComLivraison(): MissionDTO;

  getDestinataireId(): string;
  setDestinataireId(value: string): MissionDTO;

  getDestinataire(): proto_destinataire_destinataire_pb.Destinataire | undefined;
  setDestinataire(value?: proto_destinataire_destinataire_pb.Destinataire): MissionDTO;
  hasDestinataire(): boolean;
  clearDestinataire(): MissionDTO;

  getDesAddresseId(): string;
  setDesAddresseId(value: string): MissionDTO;

  getDesAddresse(): proto_destinataire_destinataire_pb.DesAddresse | undefined;
  setDesAddresse(value?: proto_destinataire_destinataire_pb.DesAddresse): MissionDTO;
  hasDesAddresse(): boolean;
  clearDesAddresse(): MissionDTO;

  getDesContactId(): string;
  setDesContactId(value: string): MissionDTO;

  getDesContact(): proto_destinataire_destinataire_pb.DesContact | undefined;
  setDesContact(value?: proto_destinataire_destinataire_pb.DesContact): MissionDTO;
  hasDesContact(): boolean;
  clearDesContact(): MissionDTO;

  getTransporteurId(): string;
  setTransporteurId(value: string): MissionDTO;

  getTransporteur(): proto_transporteur_transporteur_pb.Transporteur | undefined;
  setTransporteur(value?: proto_transporteur_transporteur_pb.Transporteur): MissionDTO;
  hasTransporteur(): boolean;
  clearTransporteur(): MissionDTO;

  getTranAddresseId(): string;
  setTranAddresseId(value: string): MissionDTO;

  getTranAddresse(): proto_transporteur_transporteur_pb.TranAddresse | undefined;
  setTranAddresse(value?: proto_transporteur_transporteur_pb.TranAddresse): MissionDTO;
  hasTranAddresse(): boolean;
  clearTranAddresse(): MissionDTO;

  getTranContactId(): string;
  setTranContactId(value: string): MissionDTO;

  getTranContact(): proto_transporteur_transporteur_pb.TranContact | undefined;
  setTranContact(value?: proto_transporteur_transporteur_pb.TranContact): MissionDTO;
  hasTranContact(): boolean;
  clearTranContact(): MissionDTO;

  getRelayDetail(): string;
  setRelayDetail(value: string): MissionDTO;

  getLivraisonAt(): number;
  setLivraisonAt(value: number): MissionDTO;

  getChargementAt(): number;
  setChargementAt(value: number): MissionDTO;

  getImperatif(): boolean;
  setImperatif(value: boolean): MissionDTO;

  getComFileList(): Array<proto_commande_commande_pb.ComFile>;
  setComFileList(value: Array<proto_commande_commande_pb.ComFile>): MissionDTO;
  clearComFileList(): MissionDTO;
  addComFile(value?: proto_commande_commande_pb.ComFile, index?: number): proto_commande_commande_pb.ComFile;

  getStatusCode(): string;
  setStatusCode(value: string): MissionDTO;

  getMissionType(): number;
  setMissionType(value: number): MissionDTO;

  getLoadingComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticle>;
  setLoadingComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticle>): MissionDTO;
  clearLoadingComArticleList(): MissionDTO;
  addLoadingComArticle(value?: proto_comarticle_comarticle_pb.ComArticle, index?: number): proto_comarticle_comarticle_pb.ComArticle;

  getLocation(): LocationDTO | undefined;
  setLocation(value?: LocationDTO): MissionDTO;
  hasLocation(): boolean;
  clearLocation(): MissionDTO;

  getStockLocation(): LocationDTO | undefined;
  setStockLocation(value?: LocationDTO): MissionDTO;
  hasStockLocation(): boolean;
  clearStockLocation(): MissionDTO;

  getRecType(): number;
  setRecType(value: number): MissionDTO;

  getSscc(): string;
  setSscc(value: string): MissionDTO;

  getInfo(): string;
  setInfo(value: string): MissionDTO;

  getClientMultiBl(): boolean;
  setClientMultiBl(value: boolean): MissionDTO;

  getClientId(): string;
  setClientId(value: string): MissionDTO;

  getCompanyId(): string;
  setCompanyId(value: string): MissionDTO;

  getWarehouseId(): string;
  setWarehouseId(value: string): MissionDTO;

  getLotBlockSsccList(): Array<string>;
  setLotBlockSsccList(value: Array<string>): MissionDTO;
  clearLotBlockSsccList(): MissionDTO;
  addLotBlockSscc(value: string, index?: number): MissionDTO;

  getUploadedPhotoCount(): number;
  setUploadedPhotoCount(value: number): MissionDTO;

  getExecutionDate(): number;
  setExecutionDate(value: number): MissionDTO;

  getAssignmentDate(): number;
  setAssignmentDate(value: number): MissionDTO;

  getExpectedDate(): number;
  setExpectedDate(value: number): MissionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MissionDTO): MissionDTO.AsObject;
  static serializeBinaryToWriter(message: MissionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionDTO;
  static deserializeBinaryFromReader(message: MissionDTO, reader: jspb.BinaryReader): MissionDTO;
}

export namespace MissionDTO {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    bl: string,
    commande: number,
    clientCodeNom: string,
    numberOfFournisseur: string,
    livraison: number,
    priorite: number,
    qteTotal: number,
    sousQteTotal: number,
    attProductionList: Array<AttProduction.AsObject>,
    attCommentaire?: AttCommentaire.AsObject,
    attFournisseur?: AttFournisseur.AsObject,
    attFileList: Array<AttFile.AsObject>,
    fournisseurId: string,
    isVal: boolean,
    noCommande: string,
    status: string,
    photos: number,
    locationId: string,
    assigneeId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    createdBy: string,
    modificationBy: string,
    validationBy: string,
    validationTime: number,
    modificationerId: string,
    managerBy: string,
    managerId: string,
    assigneeBy: string,
    nom: string,
    nomClient: string,
    comArticleList: Array<proto_comarticle_comarticle_pb.ComArticle.AsObject>,
    comPreparation?: proto_commande_commande_pb.ComComment.AsObject,
    comLivraison?: proto_commande_commande_pb.ComComment.AsObject,
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
    comFileList: Array<proto_commande_commande_pb.ComFile.AsObject>,
    statusCode: string,
    missionType: number,
    loadingComArticleList: Array<proto_comarticle_comarticle_pb.ComArticle.AsObject>,
    location?: LocationDTO.AsObject,
    stockLocation?: LocationDTO.AsObject,
    recType: number,
    sscc: string,
    info: string,
    clientMultiBl: boolean,
    clientId: string,
    companyId: string,
    warehouseId: string,
    lotBlockSsccList: Array<string>,
    uploadedPhotoCount: number,
    executionDate: number,
    assignmentDate: number,
    expectedDate: number,
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

  getZone(): ZoneDTO | undefined;
  setZone(value?: ZoneDTO): LocationDTO;
  hasZone(): boolean;
  clearZone(): LocationDTO;

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
    zone?: ZoneDTO.AsObject,
  }
}

export class ZoneDTO extends jspb.Message {
  getId(): string;
  setId(value: string): ZoneDTO;

  getName(): string;
  setName(value: string): ZoneDTO;

  getCode(): string;
  setCode(value: string): ZoneDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneDTO): ZoneDTO.AsObject;
  static serializeBinaryToWriter(message: ZoneDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneDTO;
  static deserializeBinaryFromReader(message: ZoneDTO, reader: jspb.BinaryReader): ZoneDTO;
}

export namespace ZoneDTO {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
  }
}

export class AttFile extends jspb.Message {
  getId(): string;
  setId(value: string): AttFile;

  getCreateAt(): number;
  setCreateAt(value: number): AttFile;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttFile;

  getName(): string;
  setName(value: string): AttFile;

  getAttenduId(): string;
  setAttenduId(value: string): AttFile;

  getDescription(): string;
  setDescription(value: string): AttFile;

  getPath(): string;
  setPath(value: string): AttFile;

  getSource(): string;
  setSource(value: string): AttFile;

  getSscc(): string;
  setSscc(value: string): AttFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttFile.AsObject;
  static toObject(includeInstance: boolean, msg: AttFile): AttFile.AsObject;
  static serializeBinaryToWriter(message: AttFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttFile;
  static deserializeBinaryFromReader(message: AttFile, reader: jspb.BinaryReader): AttFile;
}

export namespace AttFile {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    attenduId: string,
    description: string,
    path: string,
    source: string,
    sscc: string,
  }
}

export class AttCommentaire extends jspb.Message {
  getId(): string;
  setId(value: string): AttCommentaire;

  getCreateAt(): number;
  setCreateAt(value: number): AttCommentaire;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttCommentaire;

  getContent(): string;
  setContent(value: string): AttCommentaire;

  getAttenduId(): string;
  setAttenduId(value: string): AttCommentaire;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttCommentaire.AsObject;
  static toObject(includeInstance: boolean, msg: AttCommentaire): AttCommentaire.AsObject;
  static serializeBinaryToWriter(message: AttCommentaire, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttCommentaire;
  static deserializeBinaryFromReader(message: AttCommentaire, reader: jspb.BinaryReader): AttCommentaire;
}

export namespace AttCommentaire {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    content: string,
    attenduId: string,
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

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): AttProduction;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): AttProduction;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): AttProduction;

  getSsccOb(): proto_sscc_sscc_pb.SSCC | undefined;
  setSsccOb(value?: proto_sscc_sscc_pb.SSCC): AttProduction;
  hasSsccOb(): boolean;
  clearSsccOb(): AttProduction;

  getGenBarCodePdf(): string;
  setGenBarCodePdf(value: string): AttProduction;

  getDluoFormat(): string;
  setDluoFormat(value: string): AttProduction;

  getLocation(): LocationDTO | undefined;
  setLocation(value?: LocationDTO): AttProduction;
  hasLocation(): boolean;
  clearLocation(): AttProduction;

  getLocationId(): string;
  setLocationId(value: string): AttProduction;

  getType(): string;
  setType(value: string): AttProduction;

  getMouvement(): string;
  setMouvement(value: string): AttProduction;

  getEta(): string;
  setEta(value: string): AttProduction;

  getChrono(): string;
  setChrono(value: string): AttProduction;

  getReferenceProduct(): proto_reference_reference_pb.ReferenceProduct | undefined;
  setReferenceProduct(value?: proto_reference_reference_pb.ReferenceProduct): AttProduction;
  hasReferenceProduct(): boolean;
  clearReferenceProduct(): AttProduction;

  getIsStandard(): boolean;
  setIsStandard(value: boolean): AttProduction;

  getCompanyId(): string;
  setCompanyId(value: string): AttProduction;

  getWarehouseId(): string;
  setWarehouseId(value: string): AttProduction;

  getClientId(): string;
  setClientId(value: string): AttProduction;

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
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    ssccOb?: proto_sscc_sscc_pb.SSCC.AsObject,
    genBarCodePdf: string,
    dluoFormat: string,
    location?: LocationDTO.AsObject,
    locationId: string,
    type: string,
    mouvement: string,
    eta: string,
    chrono: string,
    referenceProduct?: proto_reference_reference_pb.ReferenceProduct.AsObject,
    isStandard: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

export class AttenduRequest extends jspb.Message {
  getAttenduentry(): Attendu | undefined;
  setAttenduentry(value?: Attendu): AttenduRequest;
  hasAttenduentry(): boolean;
  clearAttenduentry(): AttenduRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttenduRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttenduRequest): AttenduRequest.AsObject;
  static serializeBinaryToWriter(message: AttenduRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttenduRequest;
  static deserializeBinaryFromReader(message: AttenduRequest, reader: jspb.BinaryReader): AttenduRequest;
}

export namespace AttenduRequest {
  export type AsObject = {
    attenduentry?: Attendu.AsObject,
  }
}

export class UpdateAttenduRequest extends jspb.Message {
  getAttenduentry(): Attendu | undefined;
  setAttenduentry(value?: Attendu): UpdateAttenduRequest;
  hasAttenduentry(): boolean;
  clearAttenduentry(): UpdateAttenduRequest;

  getRealtimeObject(): string;
  setRealtimeObject(value: string): UpdateAttenduRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttenduRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttenduRequest): UpdateAttenduRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAttenduRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttenduRequest;
  static deserializeBinaryFromReader(message: UpdateAttenduRequest, reader: jspb.BinaryReader): UpdateAttenduRequest;
}

export namespace UpdateAttenduRequest {
  export type AsObject = {
    attenduentry?: Attendu.AsObject,
    realtimeObject: string,
  }
}

export class AttenduResponse extends jspb.Message {
  getEntry(): Attendu | undefined;
  setEntry(value?: Attendu): AttenduResponse;
  hasEntry(): boolean;
  clearEntry(): AttenduResponse;

  getMessageerror(): string;
  setMessageerror(value: string): AttenduResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttenduResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttenduResponse): AttenduResponse.AsObject;
  static serializeBinaryToWriter(message: AttenduResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttenduResponse;
  static deserializeBinaryFromReader(message: AttenduResponse, reader: jspb.BinaryReader): AttenduResponse;
}

export namespace AttenduResponse {
  export type AsObject = {
    entry?: Attendu.AsObject,
    messageerror: string,
  }
}

export class GetMissionResponse extends jspb.Message {
  getEntry(): Attendu | undefined;
  setEntry(value?: Attendu): GetMissionResponse;
  hasEntry(): boolean;
  clearEntry(): GetMissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetMissionResponse;

  getCount(): number;
  setCount(value: number): GetMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionResponse): GetMissionResponse.AsObject;
  static serializeBinaryToWriter(message: GetMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionResponse;
  static deserializeBinaryFromReader(message: GetMissionResponse, reader: jspb.BinaryReader): GetMissionResponse;
}

export namespace GetMissionResponse {
  export type AsObject = {
    entry?: Attendu.AsObject,
    messageerror: string,
    count: number,
  }
}

export class GetMissionImportantResponse extends jspb.Message {
  getAttendu(): Attendu | undefined;
  setAttendu(value?: Attendu): GetMissionImportantResponse;
  hasAttendu(): boolean;
  clearAttendu(): GetMissionImportantResponse;

  getCommande(): proto_commande_commande_pb.Commande | undefined;
  setCommande(value?: proto_commande_commande_pb.Commande): GetMissionImportantResponse;
  hasCommande(): boolean;
  clearCommande(): GetMissionImportantResponse;

  getType(): number;
  setType(value: number): GetMissionImportantResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetMissionImportantResponse;

  getCount(): number;
  setCount(value: number): GetMissionImportantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionImportantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionImportantResponse): GetMissionImportantResponse.AsObject;
  static serializeBinaryToWriter(message: GetMissionImportantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionImportantResponse;
  static deserializeBinaryFromReader(message: GetMissionImportantResponse, reader: jspb.BinaryReader): GetMissionImportantResponse;
}

export namespace GetMissionImportantResponse {
  export type AsObject = {
    attendu?: Attendu.AsObject,
    commande?: proto_commande_commande_pb.Commande.AsObject,
    type: number,
    messageerror: string,
    count: number,
  }
}

export class GetByIdAttenduRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetByIdAttenduRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByIdAttenduRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByIdAttenduRequest): GetByIdAttenduRequest.AsObject;
  static serializeBinaryToWriter(message: GetByIdAttenduRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByIdAttenduRequest;
  static deserializeBinaryFromReader(message: GetByIdAttenduRequest, reader: jspb.BinaryReader): GetByIdAttenduRequest;
}

export namespace GetByIdAttenduRequest {
  export type AsObject = {
    id: string,
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

  getBl(): string;
  setBl(value: string): GetAllRequest;

  getDescription(): string;
  setDescription(value: string): GetAllRequest;

  getSupplier(): string;
  setSupplier(value: string): GetAllRequest;

  getType(): string;
  setType(value: string): GetAllRequest;

  getMouvement(): string;
  setMouvement(value: string): GetAllRequest;

  getEta(): string;
  setEta(value: string): GetAllRequest;

  getChrono(): string;
  setChrono(value: string): GetAllRequest;

  getStartDate(): string;
  setStartDate(value: string): GetAllRequest;

  getEndDate(): string;
  setEndDate(value: string): GetAllRequest;

  getProduct(): string;
  setProduct(value: string): GetAllRequest;

  getStatus(): string;
  setStatus(value: string): GetAllRequest;

  getPalette(): string;
  setPalette(value: string): GetAllRequest;

  getLot(): string;
  setLot(value: string): GetAllRequest;

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
    bl: string,
    description: string,
    supplier: string,
    type: string,
    mouvement: string,
    eta: string,
    chrono: string,
    startDate: string,
    endDate: string,
    product: string,
    status: string,
    palette: string,
    lot: string,
    sort: string,
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Attendu>;
  setEntryList(value: Array<Attendu>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Attendu, index?: number): Attendu;

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
    entryList: Array<Attendu.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class DeleteFileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileRequest): DeleteFileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileRequest;
  static deserializeBinaryFromReader(message: DeleteFileRequest, reader: jspb.BinaryReader): DeleteFileRequest;
}

export namespace DeleteFileRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFilesInAtt extends jspb.Message {
  getAttId(): string;
  setAttId(value: string): GetFilesInAtt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesInAtt.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesInAtt): GetFilesInAtt.AsObject;
  static serializeBinaryToWriter(message: GetFilesInAtt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesInAtt;
  static deserializeBinaryFromReader(message: GetFilesInAtt, reader: jspb.BinaryReader): GetFilesInAtt;
}

export namespace GetFilesInAtt {
  export type AsObject = {
    attId: string,
  }
}

export class GetFileByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetFileByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileByIdRequest): GetFileByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetFileByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileByIdRequest;
  static deserializeBinaryFromReader(message: GetFileByIdRequest, reader: jspb.BinaryReader): GetFileByIdRequest;
}

export namespace GetFileByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFileByNameRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetFileByNameRequest;

  getAttId(): string;
  setAttId(value: string): GetFileByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileByNameRequest): GetFileByNameRequest.AsObject;
  static serializeBinaryToWriter(message: GetFileByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileByNameRequest;
  static deserializeBinaryFromReader(message: GetFileByNameRequest, reader: jspb.BinaryReader): GetFileByNameRequest;
}

export namespace GetFileByNameRequest {
  export type AsObject = {
    id: string,
    attId: string,
  }
}

export class UploadNewFileRequest extends jspb.Message {
  getFile(): AttFile | undefined;
  setFile(value?: AttFile): UploadNewFileRequest;
  hasFile(): boolean;
  clearFile(): UploadNewFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadNewFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadNewFileRequest): UploadNewFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadNewFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadNewFileRequest;
  static deserializeBinaryFromReader(message: UploadNewFileRequest, reader: jspb.BinaryReader): UploadNewFileRequest;
}

export namespace UploadNewFileRequest {
  export type AsObject = {
    file?: AttFile.AsObject,
  }
}

export class UploadMultiFileRequest extends jspb.Message {
  getFilesList(): Array<AttFile>;
  setFilesList(value: Array<AttFile>): UploadMultiFileRequest;
  clearFilesList(): UploadMultiFileRequest;
  addFiles(value?: AttFile, index?: number): AttFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMultiFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMultiFileRequest): UploadMultiFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadMultiFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMultiFileRequest;
  static deserializeBinaryFromReader(message: UploadMultiFileRequest, reader: jspb.BinaryReader): UploadMultiFileRequest;
}

export namespace UploadMultiFileRequest {
  export type AsObject = {
    filesList: Array<AttFile.AsObject>,
  }
}

export class GetFilesInAttReponse extends jspb.Message {
  getEntryList(): Array<AttFile>;
  setEntryList(value: Array<AttFile>): GetFilesInAttReponse;
  clearEntryList(): GetFilesInAttReponse;
  addEntry(value?: AttFile, index?: number): AttFile;

  getMessageerror(): string;
  setMessageerror(value: string): GetFilesInAttReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesInAttReponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesInAttReponse): GetFilesInAttReponse.AsObject;
  static serializeBinaryToWriter(message: GetFilesInAttReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesInAttReponse;
  static deserializeBinaryFromReader(message: GetFilesInAttReponse, reader: jspb.BinaryReader): GetFilesInAttReponse;
}

export namespace GetFilesInAttReponse {
  export type AsObject = {
    entryList: Array<AttFile.AsObject>,
    messageerror: string,
  }
}

export class UploadMultiFileResponse extends jspb.Message {
  getEntryList(): Array<AttFile>;
  setEntryList(value: Array<AttFile>): UploadMultiFileResponse;
  clearEntryList(): UploadMultiFileResponse;
  addEntry(value?: AttFile, index?: number): AttFile;

  getMessageerror(): string;
  setMessageerror(value: string): UploadMultiFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMultiFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMultiFileResponse): UploadMultiFileResponse.AsObject;
  static serializeBinaryToWriter(message: UploadMultiFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMultiFileResponse;
  static deserializeBinaryFromReader(message: UploadMultiFileResponse, reader: jspb.BinaryReader): UploadMultiFileResponse;
}

export namespace UploadMultiFileResponse {
  export type AsObject = {
    entryList: Array<AttFile.AsObject>,
    messageerror: string,
  }
}

export class AttFileReponse extends jspb.Message {
  getEntry(): AttFile | undefined;
  setEntry(value?: AttFile): AttFileReponse;
  hasEntry(): boolean;
  clearEntry(): AttFileReponse;

  getMessageerror(): string;
  setMessageerror(value: string): AttFileReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttFileReponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttFileReponse): AttFileReponse.AsObject;
  static serializeBinaryToWriter(message: AttFileReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttFileReponse;
  static deserializeBinaryFromReader(message: AttFileReponse, reader: jspb.BinaryReader): AttFileReponse;
}

export namespace AttFileReponse {
  export type AsObject = {
    entry?: AttFile.AsObject,
    messageerror: string,
  }
}

export class GetMissionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionRequest): GetMissionRequest.AsObject;
  static serializeBinaryToWriter(message: GetMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionRequest;
  static deserializeBinaryFromReader(message: GetMissionRequest, reader: jspb.BinaryReader): GetMissionRequest;
}

export namespace GetMissionRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetMissionImportantRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetMissionImportantRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetMissionImportantRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetMissionImportantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionImportantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionImportantRequest): GetMissionImportantRequest.AsObject;
  static serializeBinaryToWriter(message: GetMissionImportantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionImportantRequest;
  static deserializeBinaryFromReader(message: GetMissionImportantRequest, reader: jspb.BinaryReader): GetMissionImportantRequest;
}

export namespace GetMissionImportantRequest {
  export type AsObject = {
    userId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
  }
}

export class ValidMissionRequest extends jspb.Message {
  getAttNom(): string;
  setAttNom(value: string): ValidMissionRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ValidMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidMissionRequest): ValidMissionRequest.AsObject;
  static serializeBinaryToWriter(message: ValidMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidMissionRequest;
  static deserializeBinaryFromReader(message: ValidMissionRequest, reader: jspb.BinaryReader): ValidMissionRequest;
}

export namespace ValidMissionRequest {
  export type AsObject = {
    attNom: string,
    clientCodeNom: string,
  }
}

export class ValidMissionResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ValidMissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): ValidMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidMissionResponse): ValidMissionResponse.AsObject;
  static serializeBinaryToWriter(message: ValidMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidMissionResponse;
  static deserializeBinaryFromReader(message: ValidMissionResponse, reader: jspb.BinaryReader): ValidMissionResponse;
}

export namespace ValidMissionResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

export class UpdateMissionLocationRequest extends jspb.Message {
  getAttId(): string;
  setAttId(value: string): UpdateMissionLocationRequest;

  getWarehourseCodeNom(): string;
  setWarehourseCodeNom(value: string): UpdateMissionLocationRequest;

  getCodeBar(): string;
  setCodeBar(value: string): UpdateMissionLocationRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UpdateMissionLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMissionLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMissionLocationRequest): UpdateMissionLocationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMissionLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMissionLocationRequest;
  static deserializeBinaryFromReader(message: UpdateMissionLocationRequest, reader: jspb.BinaryReader): UpdateMissionLocationRequest;
}

export namespace UpdateMissionLocationRequest {
  export type AsObject = {
    attId: string,
    warehourseCodeNom: string,
    codeBar: string,
    warehouseId: string,
  }
}

export class UpdateMissionLocationResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateMissionLocationResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateMissionLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMissionLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMissionLocationResponse): UpdateMissionLocationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMissionLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMissionLocationResponse;
  static deserializeBinaryFromReader(message: UpdateMissionLocationResponse, reader: jspb.BinaryReader): UpdateMissionLocationResponse;
}

export namespace UpdateMissionLocationResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

export class UpdateMissionArticleRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMissionArticleRequest;

  getDluo(): number;
  setDluo(value: number): UpdateMissionArticleRequest;

  getDlc(): number;
  setDlc(value: number): UpdateMissionArticleRequest;

  getManufactureDate(): number;
  setManufactureDate(value: number): UpdateMissionArticleRequest;

  getLot(): string;
  setLot(value: string): UpdateMissionArticleRequest;

  getQuantity(): number;
  setQuantity(value: number): UpdateMissionArticleRequest;

  getVariante(): string;
  setVariante(value: string): UpdateMissionArticleRequest;

  getIsUpdateScan(): boolean;
  setIsUpdateScan(value: boolean): UpdateMissionArticleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMissionArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMissionArticleRequest): UpdateMissionArticleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMissionArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMissionArticleRequest;
  static deserializeBinaryFromReader(message: UpdateMissionArticleRequest, reader: jspb.BinaryReader): UpdateMissionArticleRequest;
}

export namespace UpdateMissionArticleRequest {
  export type AsObject = {
    id: string,
    dluo: number,
    dlc: number,
    manufactureDate: number,
    lot: string,
    quantity: number,
    variante: string,
    isUpdateScan: boolean,
  }
}

export class UpdateMissionArticleResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateMissionArticleResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateMissionArticleResponse;

  getBlock(): boolean;
  setBlock(value: boolean): UpdateMissionArticleResponse;

  getIsScanNext(): boolean;
  setIsScanNext(value: boolean): UpdateMissionArticleResponse;

  getIsValid(): boolean;
  setIsValid(value: boolean): UpdateMissionArticleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMissionArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMissionArticleResponse): UpdateMissionArticleResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMissionArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMissionArticleResponse;
  static deserializeBinaryFromReader(message: UpdateMissionArticleResponse, reader: jspb.BinaryReader): UpdateMissionArticleResponse;
}

export namespace UpdateMissionArticleResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
    block: boolean,
    isScanNext: boolean,
    isValid: boolean,
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

  getDisputes(): number;
  setDisputes(value: number): GetDashboardInformationResponse;

  getReceptionInprogress(): number;
  setReceptionInprogress(value: number): GetDashboardInformationResponse;

  getReceptionProcessed(): number;
  setReceptionProcessed(value: number): GetDashboardInformationResponse;

  getAverageReceptionTime(): number;
  setAverageReceptionTime(value: number): GetDashboardInformationResponse;

  getPlacementsInStockInprogress(): number;
  setPlacementsInStockInprogress(value: number): GetDashboardInformationResponse;

  getPlacementsInStockProcessed(): number;
  setPlacementsInStockProcessed(value: number): GetDashboardInformationResponse;

  getAverageTimeToStock(): number;
  setAverageTimeToStock(value: number): GetDashboardInformationResponse;

  getAffectedStaff(): number;
  setAffectedStaff(value: number): GetDashboardInformationResponse;

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
    disputes: number,
    receptionInprogress: number,
    receptionProcessed: number,
    averageReceptionTime: number,
    placementsInStockInprogress: number,
    placementsInStockProcessed: number,
    averageTimeToStock: number,
    affectedStaff: number,
    stickChartList: Array<DashboardChart.AsObject>,
    pieChartList: Array<DashboardChart.AsObject>,
  }
}

export class GetMissionByStatusRequest extends jspb.Message {
  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetMissionByStatusRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetMissionByStatusRequest;

  getStatus(): string;
  setStatus(value: string): GetMissionByStatusRequest;

  getPaging(): number;
  setPaging(value: number): GetMissionByStatusRequest;

  getPagesize(): number;
  setPagesize(value: number): GetMissionByStatusRequest;

  getNom(): string;
  setNom(value: string): GetMissionByStatusRequest;

  getClientCodeNomList(): Array<string>;
  setClientCodeNomList(value: Array<string>): GetMissionByStatusRequest;
  clearClientCodeNomList(): GetMissionByStatusRequest;
  addClientCodeNom(value: string, index?: number): GetMissionByStatusRequest;

  getMissionTypeList(): Array<number>;
  setMissionTypeList(value: Array<number>): GetMissionByStatusRequest;
  clearMissionTypeList(): GetMissionByStatusRequest;
  addMissionType(value: number, index?: number): GetMissionByStatusRequest;

  getUserId(): string;
  setUserId(value: string): GetMissionByStatusRequest;

  getDeliveryDate(): number;
  setDeliveryDate(value: number): GetMissionByStatusRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetMissionByStatusRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetMissionByStatusRequest;

  getClientIdList(): Array<string>;
  setClientIdList(value: Array<string>): GetMissionByStatusRequest;
  clearClientIdList(): GetMissionByStatusRequest;
  addClientId(value: string, index?: number): GetMissionByStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionByStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionByStatusRequest): GetMissionByStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetMissionByStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionByStatusRequest;
  static deserializeBinaryFromReader(message: GetMissionByStatusRequest, reader: jspb.BinaryReader): GetMissionByStatusRequest;
}

export namespace GetMissionByStatusRequest {
  export type AsObject = {
    companyCodeNom: string,
    warehouseCodeNom: string,
    status: string,
    paging: number,
    pagesize: number,
    nom: string,
    clientCodeNomList: Array<string>,
    missionTypeList: Array<number>,
    userId: string,
    deliveryDate: number,
    companyId: string,
    warehouseId: string,
    clientIdList: Array<string>,
  }
}

export class GetMissionDetailRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetMissionDetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionDetailRequest): GetMissionDetailRequest.AsObject;
  static serializeBinaryToWriter(message: GetMissionDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionDetailRequest;
  static deserializeBinaryFromReader(message: GetMissionDetailRequest, reader: jspb.BinaryReader): GetMissionDetailRequest;
}

export namespace GetMissionDetailRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMissionDetailResponse extends jspb.Message {
  getMission(): MissionDTO | undefined;
  setMission(value?: MissionDTO): GetMissionDetailResponse;
  hasMission(): boolean;
  clearMission(): GetMissionDetailResponse;

  getUsr(): proto_user_user_pb.User | undefined;
  setUsr(value?: proto_user_user_pb.User): GetMissionDetailResponse;
  hasUsr(): boolean;
  clearUsr(): GetMissionDetailResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetMissionDetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionDetailResponse): GetMissionDetailResponse.AsObject;
  static serializeBinaryToWriter(message: GetMissionDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionDetailResponse;
  static deserializeBinaryFromReader(message: GetMissionDetailResponse, reader: jspb.BinaryReader): GetMissionDetailResponse;
}

export namespace GetMissionDetailResponse {
  export type AsObject = {
    mission?: MissionDTO.AsObject,
    usr?: proto_user_user_pb.User.AsObject,
    messageerror: string,
  }
}

export class UpdateMissionStatusRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMissionStatusRequest;

  getUserId(): string;
  setUserId(value: string): UpdateMissionStatusRequest;

  getStatus(): string;
  setStatus(value: string): UpdateMissionStatusRequest;

  getType(): number;
  setType(value: number): UpdateMissionStatusRequest;

  getManagerId(): string;
  setManagerId(value: string): UpdateMissionStatusRequest;

  getSscc(): string;
  setSscc(value: string): UpdateMissionStatusRequest;

  getReason(): string;
  setReason(value: string): UpdateMissionStatusRequest;

  getReasonNote(): string;
  setReasonNote(value: string): UpdateMissionStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMissionStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMissionStatusRequest): UpdateMissionStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMissionStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMissionStatusRequest;
  static deserializeBinaryFromReader(message: UpdateMissionStatusRequest, reader: jspb.BinaryReader): UpdateMissionStatusRequest;
}

export namespace UpdateMissionStatusRequest {
  export type AsObject = {
    id: string,
    userId: string,
    status: string,
    type: number,
    managerId: string,
    sscc: string,
    reason: string,
    reasonNote: string,
  }
}

export class UpdateMissionStatusResponse extends jspb.Message {
  getEntry(): Attendu | undefined;
  setEntry(value?: Attendu): UpdateMissionStatusResponse;
  hasEntry(): boolean;
  clearEntry(): UpdateMissionStatusResponse;

  getEntryCmd(): proto_commande_commande_pb.Commande | undefined;
  setEntryCmd(value?: proto_commande_commande_pb.Commande): UpdateMissionStatusResponse;
  hasEntryCmd(): boolean;
  clearEntryCmd(): UpdateMissionStatusResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdateMissionStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMissionStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMissionStatusResponse): UpdateMissionStatusResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMissionStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMissionStatusResponse;
  static deserializeBinaryFromReader(message: UpdateMissionStatusResponse, reader: jspb.BinaryReader): UpdateMissionStatusResponse;
}

export namespace UpdateMissionStatusResponse {
  export type AsObject = {
    entry?: Attendu.AsObject,
    entryCmd?: proto_commande_commande_pb.Commande.AsObject,
    messageerror: string,
  }
}

export class MissionPayload extends jspb.Message {
  getMission(): MissionDTO | undefined;
  setMission(value?: MissionDTO): MissionPayload;
  hasMission(): boolean;
  clearMission(): MissionPayload;

  getUsr(): proto_user_user_pb.User | undefined;
  setUsr(value?: proto_user_user_pb.User): MissionPayload;
  hasUsr(): boolean;
  clearUsr(): MissionPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MissionPayload): MissionPayload.AsObject;
  static serializeBinaryToWriter(message: MissionPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionPayload;
  static deserializeBinaryFromReader(message: MissionPayload, reader: jspb.BinaryReader): MissionPayload;
}

export namespace MissionPayload {
  export type AsObject = {
    mission?: MissionDTO.AsObject,
    usr?: proto_user_user_pb.User.AsObject,
  }
}

export class MissionPayloadResponse extends jspb.Message {
  getEntryList(): Array<MissionPayload>;
  setEntryList(value: Array<MissionPayload>): MissionPayloadResponse;
  clearEntryList(): MissionPayloadResponse;
  addEntry(value?: MissionPayload, index?: number): MissionPayload;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): MissionPayloadResponse;
  hasMetadata(): boolean;
  clearMetadata(): MissionPayloadResponse;

  getMessageerror(): string;
  setMessageerror(value: string): MissionPayloadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionPayloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MissionPayloadResponse): MissionPayloadResponse.AsObject;
  static serializeBinaryToWriter(message: MissionPayloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionPayloadResponse;
  static deserializeBinaryFromReader(message: MissionPayloadResponse, reader: jspb.BinaryReader): MissionPayloadResponse;
}

export namespace MissionPayloadResponse {
  export type AsObject = {
    entryList: Array<MissionPayload.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class MissionImportantResponse extends jspb.Message {
  getEntry(): MissionDTO | undefined;
  setEntry(value?: MissionDTO): MissionImportantResponse;
  hasEntry(): boolean;
  clearEntry(): MissionImportantResponse;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): MissionImportantResponse;
  hasMetadata(): boolean;
  clearMetadata(): MissionImportantResponse;

  getMessageerror(): string;
  setMessageerror(value: string): MissionImportantResponse;

  getCount(): number;
  setCount(value: number): MissionImportantResponse;

  getUsr(): proto_user_user_pb.User | undefined;
  setUsr(value?: proto_user_user_pb.User): MissionImportantResponse;
  hasUsr(): boolean;
  clearUsr(): MissionImportantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionImportantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MissionImportantResponse): MissionImportantResponse.AsObject;
  static serializeBinaryToWriter(message: MissionImportantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionImportantResponse;
  static deserializeBinaryFromReader(message: MissionImportantResponse, reader: jspb.BinaryReader): MissionImportantResponse;
}

export namespace MissionImportantResponse {
  export type AsObject = {
    entry?: MissionDTO.AsObject,
    metadata?: MetaData.AsObject,
    messageerror: string,
    count: number,
    usr?: proto_user_user_pb.User.AsObject,
  }
}

export class MissionImpotant extends jspb.Message {
  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): MissionImpotant;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): MissionImpotant;

  getCompanyId(): string;
  setCompanyId(value: string): MissionImpotant;

  getWarehouseId(): string;
  setWarehouseId(value: string): MissionImpotant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionImpotant.AsObject;
  static toObject(includeInstance: boolean, msg: MissionImpotant): MissionImpotant.AsObject;
  static serializeBinaryToWriter(message: MissionImpotant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionImpotant;
  static deserializeBinaryFromReader(message: MissionImpotant, reader: jspb.BinaryReader): MissionImpotant;
}

export namespace MissionImpotant {
  export type AsObject = {
    companyCodeNom: string,
    warehouseCodeNom: string,
    companyId: string,
    warehouseId: string,
  }
}

export class MissionImportantArrayRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): MissionImportantArrayRequest;

  getMission(): MissionImpotant | undefined;
  setMission(value?: MissionImpotant): MissionImportantArrayRequest;
  hasMission(): boolean;
  clearMission(): MissionImportantArrayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionImportantArrayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionImportantArrayRequest): MissionImportantArrayRequest.AsObject;
  static serializeBinaryToWriter(message: MissionImportantArrayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionImportantArrayRequest;
  static deserializeBinaryFromReader(message: MissionImportantArrayRequest, reader: jspb.BinaryReader): MissionImportantArrayRequest;
}

export namespace MissionImportantArrayRequest {
  export type AsObject = {
    userId: string,
    mission?: MissionImpotant.AsObject,
  }
}

export class GetAllAttenduStockRequest extends jspb.Message {
  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetAllAttenduStockRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetAllAttenduStockRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetAllAttenduStockRequest;

  getLimit(): number;
  setLimit(value: number): GetAllAttenduStockRequest;

  getOffset(): number;
  setOffset(value: number): GetAllAttenduStockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAttenduStockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAttenduStockRequest): GetAllAttenduStockRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllAttenduStockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAttenduStockRequest;
  static deserializeBinaryFromReader(message: GetAllAttenduStockRequest, reader: jspb.BinaryReader): GetAllAttenduStockRequest;
}

export namespace GetAllAttenduStockRequest {
  export type AsObject = {
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    limit: number,
    offset: number,
  }
}

export class GetAllAttenduStockResponse extends jspb.Message {
  getEntryList(): Array<AttProduction>;
  setEntryList(value: Array<AttProduction>): GetAllAttenduStockResponse;
  clearEntryList(): GetAllAttenduStockResponse;
  addEntry(value?: AttProduction, index?: number): AttProduction;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetAllAttenduStockResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetAllAttenduStockResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllAttenduStockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAttenduStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAttenduStockResponse): GetAllAttenduStockResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllAttenduStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAttenduStockResponse;
  static deserializeBinaryFromReader(message: GetAllAttenduStockResponse, reader: jspb.BinaryReader): GetAllAttenduStockResponse;
}

export namespace GetAllAttenduStockResponse {
  export type AsObject = {
    entryList: Array<AttProduction.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class GetAttProBySSCCRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): GetAttProBySSCCRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetAttProBySSCCRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetAttProBySSCCRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetAttProBySSCCRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttProBySSCCRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttProBySSCCRequest): GetAttProBySSCCRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttProBySSCCRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttProBySSCCRequest;
  static deserializeBinaryFromReader(message: GetAttProBySSCCRequest, reader: jspb.BinaryReader): GetAttProBySSCCRequest;
}

export namespace GetAttProBySSCCRequest {
  export type AsObject = {
    sscc: string,
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
  }
}

export class GetAttProBySSCCReponse extends jspb.Message {
  getEntry(): proto_stock_stock_pb.AttProduction | undefined;
  setEntry(value?: proto_stock_stock_pb.AttProduction): GetAttProBySSCCReponse;
  hasEntry(): boolean;
  clearEntry(): GetAttProBySSCCReponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetAttProBySSCCReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttProBySSCCReponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttProBySSCCReponse): GetAttProBySSCCReponse.AsObject;
  static serializeBinaryToWriter(message: GetAttProBySSCCReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttProBySSCCReponse;
  static deserializeBinaryFromReader(message: GetAttProBySSCCReponse, reader: jspb.BinaryReader): GetAttProBySSCCReponse;
}

export namespace GetAttProBySSCCReponse {
  export type AsObject = {
    entry?: proto_stock_stock_pb.AttProduction.AsObject,
    messageerror: string,
  }
}

export class PrintAttProductionInforRequest extends jspb.Message {
  getAttProductionId(): string;
  setAttProductionId(value: string): PrintAttProductionInforRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintAttProductionInforRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrintAttProductionInforRequest): PrintAttProductionInforRequest.AsObject;
  static serializeBinaryToWriter(message: PrintAttProductionInforRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintAttProductionInforRequest;
  static deserializeBinaryFromReader(message: PrintAttProductionInforRequest, reader: jspb.BinaryReader): PrintAttProductionInforRequest;
}

export namespace PrintAttProductionInforRequest {
  export type AsObject = {
    attProductionId: string,
  }
}

export class PrintAttProductionInforResponse extends jspb.Message {
  getClientName(): string;
  setClientName(value: string): PrintAttProductionInforResponse;

  getReferenceNumber(): string;
  setReferenceNumber(value: string): PrintAttProductionInforResponse;

  getPoidsBrut(): number;
  setPoidsBrut(value: number): PrintAttProductionInforResponse;

  getPoidsAdd(): number;
  setPoidsAdd(value: number): PrintAttProductionInforResponse;

  getSsccNumber(): string;
  setSsccNumber(value: string): PrintAttProductionInforResponse;

  getNoCodebarre(): string;
  setNoCodebarre(value: string): PrintAttProductionInforResponse;

  getQtyN1(): number;
  setQtyN1(value: number): PrintAttProductionInforResponse;

  getCouche(): string;
  setCouche(value: string): PrintAttProductionInforResponse;

  getVariante(): string;
  setVariante(value: string): PrintAttProductionInforResponse;

  getQtyN(): number;
  setQtyN(value: number): PrintAttProductionInforResponse;

  getLibelleLong(): string;
  setLibelleLong(value: string): PrintAttProductionInforResponse;

  getLot(): string;
  setLot(value: string): PrintAttProductionInforResponse;

  getDluo(): number;
  setDluo(value: number): PrintAttProductionInforResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintAttProductionInforResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrintAttProductionInforResponse): PrintAttProductionInforResponse.AsObject;
  static serializeBinaryToWriter(message: PrintAttProductionInforResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintAttProductionInforResponse;
  static deserializeBinaryFromReader(message: PrintAttProductionInforResponse, reader: jspb.BinaryReader): PrintAttProductionInforResponse;
}

export namespace PrintAttProductionInforResponse {
  export type AsObject = {
    clientName: string,
    referenceNumber: string,
    poidsBrut: number,
    poidsAdd: number,
    ssccNumber: string,
    noCodebarre: string,
    qtyN1: number,
    couche: string,
    variante: string,
    qtyN: number,
    libelleLong: string,
    lot: string,
    dluo: number,
  }
}

export class AttProductionInforResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): AttProductionInforResponse;

  getMessageerror(): string;
  setMessageerror(value: string): AttProductionInforResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttProductionInforResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttProductionInforResponse): AttProductionInforResponse.AsObject;
  static serializeBinaryToWriter(message: AttProductionInforResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttProductionInforResponse;
  static deserializeBinaryFromReader(message: AttProductionInforResponse, reader: jspb.BinaryReader): AttProductionInforResponse;
}

export namespace AttProductionInforResponse {
  export type AsObject = {
    path: string,
    messageerror: string,
  }
}

export class DeleteByIdAttenduRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteByIdAttenduRequest;

  getModificationerId(): string;
  setModificationerId(value: string): DeleteByIdAttenduRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteByIdAttenduRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteByIdAttenduRequest): DeleteByIdAttenduRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteByIdAttenduRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteByIdAttenduRequest;
  static deserializeBinaryFromReader(message: DeleteByIdAttenduRequest, reader: jspb.BinaryReader): DeleteByIdAttenduRequest;
}

export namespace DeleteByIdAttenduRequest {
  export type AsObject = {
    id: string,
    modificationerId: string,
  }
}

export class HistoryMetaData extends jspb.Message {
  getCount(): number;
  setCount(value: number): HistoryMetaData;

  getOffset(): number;
  setOffset(value: number): HistoryMetaData;

  getLimit(): number;
  setLimit(value: number): HistoryMetaData;

  getTotal(): number;
  setTotal(value: number): HistoryMetaData;

  getCountHistory(): number;
  setCountHistory(value: number): HistoryMetaData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryMetaData.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryMetaData): HistoryMetaData.AsObject;
  static serializeBinaryToWriter(message: HistoryMetaData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryMetaData;
  static deserializeBinaryFromReader(message: HistoryMetaData, reader: jspb.BinaryReader): HistoryMetaData;
}

export namespace HistoryMetaData {
  export type AsObject = {
    count: number,
    offset: number,
    limit: number,
    total: number,
    countHistory: number,
  }
}

export class HistoryChange extends jspb.Message {
  getEventType(): string;
  setEventType(value: string): HistoryChange;

  getField(): string;
  setField(value: string): HistoryChange;

  getValue(): string;
  setValue(value: string): HistoryChange;

  getOldValue(): string;
  setOldValue(value: string): HistoryChange;

  getNewValue(): string;
  setNewValue(value: string): HistoryChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryChange.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryChange): HistoryChange.AsObject;
  static serializeBinaryToWriter(message: HistoryChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryChange;
  static deserializeBinaryFromReader(message: HistoryChange, reader: jspb.BinaryReader): HistoryChange;
}

export namespace HistoryChange {
  export type AsObject = {
    eventType: string,
    field: string,
    value: string,
    oldValue: string,
    newValue: string,
  }
}

export class AttenduHistory extends jspb.Message {
  getId(): string;
  setId(value: string): AttenduHistory;

  getCreatedAt(): number;
  setCreatedAt(value: number): AttenduHistory;

  getMovementType(): string;
  setMovementType(value: string): AttenduHistory;

  getMovementState(): string;
  setMovementState(value: string): AttenduHistory;

  getCode(): string;
  setCode(value: string): AttenduHistory;

  getObjectType(): string;
  setObjectType(value: string): AttenduHistory;

  getObjectId(): string;
  setObjectId(value: string): AttenduHistory;

  getObjectNumber(): string;
  setObjectNumber(value: string): AttenduHistory;

  getDescription(): string;
  setDescription(value: string): AttenduHistory;

  getUserId(): string;
  setUserId(value: string): AttenduHistory;

  getUserName(): string;
  setUserName(value: string): AttenduHistory;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): AttenduHistory;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): AttenduHistory;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): AttenduHistory;

  getChrono(): string;
  setChrono(value: string): AttenduHistory;

  getAction(): string;
  setAction(value: string): AttenduHistory;

  getEventType(): string;
  setEventType(value: string): AttenduHistory;

  getChangesList(): Array<HistoryChange>;
  setChangesList(value: Array<HistoryChange>): AttenduHistory;
  clearChangesList(): AttenduHistory;
  addChanges(value?: HistoryChange, index?: number): HistoryChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttenduHistory.AsObject;
  static toObject(includeInstance: boolean, msg: AttenduHistory): AttenduHistory.AsObject;
  static serializeBinaryToWriter(message: AttenduHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttenduHistory;
  static deserializeBinaryFromReader(message: AttenduHistory, reader: jspb.BinaryReader): AttenduHistory;
}

export namespace AttenduHistory {
  export type AsObject = {
    id: string,
    createdAt: number,
    movementType: string,
    movementState: string,
    code: string,
    objectType: string,
    objectId: string,
    objectNumber: string,
    description: string,
    userId: string,
    userName: string,
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    chrono: string,
    action: string,
    eventType: string,
    changesList: Array<HistoryChange.AsObject>,
  }
}

export class GetHistoryByAttenduIdRequest extends jspb.Message {
  getAttenduId(): string;
  setAttenduId(value: string): GetHistoryByAttenduIdRequest;

  getLimit(): number;
  setLimit(value: number): GetHistoryByAttenduIdRequest;

  getOffset(): number;
  setOffset(value: number): GetHistoryByAttenduIdRequest;

  getFrom(): number;
  setFrom(value: number): GetHistoryByAttenduIdRequest;

  getTo(): number;
  setTo(value: number): GetHistoryByAttenduIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryByAttenduIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryByAttenduIdRequest): GetHistoryByAttenduIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoryByAttenduIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryByAttenduIdRequest;
  static deserializeBinaryFromReader(message: GetHistoryByAttenduIdRequest, reader: jspb.BinaryReader): GetHistoryByAttenduIdRequest;
}

export namespace GetHistoryByAttenduIdRequest {
  export type AsObject = {
    attenduId: string,
    limit: number,
    offset: number,
    from: number,
    to: number,
  }
}

export class GetHistoryByAttenduIdResponse extends jspb.Message {
  getEntryList(): Array<AttenduHistory>;
  setEntryList(value: Array<AttenduHistory>): GetHistoryByAttenduIdResponse;
  clearEntryList(): GetHistoryByAttenduIdResponse;
  addEntry(value?: AttenduHistory, index?: number): AttenduHistory;

  getMetadata(): HistoryMetaData | undefined;
  setMetadata(value?: HistoryMetaData): GetHistoryByAttenduIdResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetHistoryByAttenduIdResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetHistoryByAttenduIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryByAttenduIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryByAttenduIdResponse): GetHistoryByAttenduIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoryByAttenduIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryByAttenduIdResponse;
  static deserializeBinaryFromReader(message: GetHistoryByAttenduIdResponse, reader: jspb.BinaryReader): GetHistoryByAttenduIdResponse;
}

export namespace GetHistoryByAttenduIdResponse {
  export type AsObject = {
    entryList: Array<AttenduHistory.AsObject>,
    metadata?: HistoryMetaData.AsObject,
    messageerror: string,
  }
}

export class AttProductionListRequest extends jspb.Message {
  getAttProductionIdsList(): Array<string>;
  setAttProductionIdsList(value: Array<string>): AttProductionListRequest;
  clearAttProductionIdsList(): AttProductionListRequest;
  addAttProductionIds(value: string, index?: number): AttProductionListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttProductionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttProductionListRequest): AttProductionListRequest.AsObject;
  static serializeBinaryToWriter(message: AttProductionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttProductionListRequest;
  static deserializeBinaryFromReader(message: AttProductionListRequest, reader: jspb.BinaryReader): AttProductionListRequest;
}

export namespace AttProductionListRequest {
  export type AsObject = {
    attProductionIdsList: Array<string>,
  }
}

export class AttProductionListResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): AttProductionListResponse;

  getMessageerror(): string;
  setMessageerror(value: string): AttProductionListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttProductionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttProductionListResponse): AttProductionListResponse.AsObject;
  static serializeBinaryToWriter(message: AttProductionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttProductionListResponse;
  static deserializeBinaryFromReader(message: AttProductionListResponse, reader: jspb.BinaryReader): AttProductionListResponse;
}

export namespace AttProductionListResponse {
  export type AsObject = {
    path: string,
    messageerror: string,
  }
}

export class RealtimeAttendu extends jspb.Message {
  getAttendu(): Attendu | undefined;
  setAttendu(value?: Attendu): RealtimeAttendu;
  hasAttendu(): boolean;
  clearAttendu(): RealtimeAttendu;

  getRealtimeObject(): string;
  setRealtimeObject(value: string): RealtimeAttendu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealtimeAttendu.AsObject;
  static toObject(includeInstance: boolean, msg: RealtimeAttendu): RealtimeAttendu.AsObject;
  static serializeBinaryToWriter(message: RealtimeAttendu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealtimeAttendu;
  static deserializeBinaryFromReader(message: RealtimeAttendu, reader: jspb.BinaryReader): RealtimeAttendu;
}

export namespace RealtimeAttendu {
  export type AsObject = {
    attendu?: Attendu.AsObject,
    realtimeObject: string,
  }
}

