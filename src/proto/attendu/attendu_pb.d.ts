import * as jspb from 'google-protobuf'

import * as proto_conditionnement_conditionnement_pb from '../../proto/conditionnement/conditionnement_pb'; // proto import: "proto/conditionnement/conditionnement.proto"
import * as proto_sscc_sscc_pb from '../../proto/sscc/sscc_pb'; // proto import: "proto/sscc/sscc.proto"
import * as proto_reference_reference_pb from '../../proto/reference/reference_pb'; // proto import: "proto/reference/reference.proto"


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

