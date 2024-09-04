import * as jspb from 'google-protobuf'

import * as proto_conditionnement_conditionnement_pb from '../../proto/conditionnement/conditionnement_pb'; // proto import: "proto/conditionnement/conditionnement.proto"
import * as proto_specificites_specificites_pb from '../../proto/specificites/specificites_pb'; // proto import: "proto/specificites/specificites.proto"
import * as proto_lotreference_lotreference_pb from '../../proto/lotreference/lotreference_pb'; // proto import: "proto/lotreference/lotreference.proto"
import * as proto_stock_stock_pb from '../../proto/stock/stock_pb'; // proto import: "proto/stock/stock.proto"


export class Reference extends jspb.Message {
  getId(): string;
  setId(value: string): Reference;

  getCreateAt(): number;
  setCreateAt(value: number): Reference;

  getUpdateAt(): number;
  setUpdateAt(value: number): Reference;

  getNom(): string;
  setNom(value: string): Reference;

  getLibelleLong(): string;
  setLibelleLong(value: string): Reference;

  getLanguaLibelle(): string;
  setLanguaLibelle(value: string): Reference;

  getLibelleCourt(): string;
  setLibelleCourt(value: string): Reference;

  getMarque(): string;
  setMarque(value: string): Reference;

  getOrigine(): string;
  setOrigine(value: string): Reference;

  getFamille(): string;
  setFamille(value: string): Reference;

  getSousFamille(): string;
  setSousFamille(value: string): Reference;

  getPhoto(): string;
  setPhoto(value: string): Reference;

  getQteVariable(): boolean;
  setQteVariable(value: boolean): Reference;

  getDluo(): boolean;
  setDluo(value: boolean): Reference;

  getDluoValue(): number;
  setDluoValue(value: number): Reference;

  getDlv(): boolean;
  setDlv(value: boolean): Reference;

  getDlvValue(): number;
  setDlvValue(value: number): Reference;

  getGestion(): boolean;
  setGestion(value: boolean): Reference;

  getBlocageEntree(): boolean;
  setBlocageEntree(value: boolean): Reference;

  getBlocageSortie(): boolean;
  setBlocageSortie(value: boolean): Reference;

  getVariante(): boolean;
  setVariante(value: boolean): Reference;

  getAlerteStock(): number;
  setAlerteStock(value: number): Reference;

  getNiveauAlerte(): string;
  setNiveauAlerte(value: string): Reference;

  getConditionnementList(): Array<proto_conditionnement_conditionnement_pb.Conditionnement>;
  setConditionnementList(value: Array<proto_conditionnement_conditionnement_pb.Conditionnement>): Reference;
  clearConditionnementList(): Reference;
  addConditionnement(value?: proto_conditionnement_conditionnement_pb.Conditionnement, index?: number): proto_conditionnement_conditionnement_pb.Conditionnement;

  getIcpeList(): Array<ICPE>;
  setIcpeList(value: Array<ICPE>): Reference;
  clearIcpeList(): Reference;
  addIcpe(value?: ICPE, index?: number): ICPE;

  getMatieresdangereusesList(): Array<Matieresdangereuses>;
  setMatieresdangereusesList(value: Array<Matieresdangereuses>): Reference;
  clearMatieresdangereusesList(): Reference;
  addMatieresdangereuses(value?: Matieresdangereuses, index?: number): Matieresdangereuses;

  getRefFournissersList(): Array<RefFournissers>;
  setRefFournissersList(value: Array<RefFournissers>): Reference;
  clearRefFournissersList(): Reference;
  addRefFournissers(value?: RefFournissers, index?: number): RefFournissers;

  getSpecificites(): proto_specificites_specificites_pb.Specificites | undefined;
  setSpecificites(value?: proto_specificites_specificites_pb.Specificites): Reference;
  hasSpecificites(): boolean;
  clearSpecificites(): Reference;

  getRefCharement(): Comment | undefined;
  setRefCharement(value?: Comment): Reference;
  hasRefCharement(): boolean;
  clearRefCharement(): Reference;

  getRefLivraison(): Comment | undefined;
  setRefLivraison(value?: Comment): Reference;
  hasRefLivraison(): boolean;
  clearRefLivraison(): Reference;

  getRefReception(): Comment | undefined;
  setRefReception(value?: Comment): Reference;
  hasRefReception(): boolean;
  clearRefReception(): Reference;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): Reference;

  getDlc(): boolean;
  setDlc(value: boolean): Reference;

  getDlcValue(): number;
  setDlcValue(value: number): Reference;

  getBlockDel(): boolean;
  setBlockDel(value: boolean): Reference;

  getStockList(): Array<proto_stock_stock_pb.Stock>;
  setStockList(value: Array<proto_stock_stock_pb.Stock>): Reference;
  clearStockList(): Reference;
  addStock(value?: proto_stock_stock_pb.Stock, index?: number): proto_stock_stock_pb.Stock;

  getChrono(): string;
  setChrono(value: string): Reference;

  getCreatedBy(): string;
  setCreatedBy(value: string): Reference;

  getCreaterId(): string;
  setCreaterId(value: string): Reference;

  getModificationBy(): string;
  setModificationBy(value: string): Reference;

  getModificationerId(): string;
  setModificationerId(value: string): Reference;

  getMouvementsList(): Array<string>;
  setMouvementsList(value: Array<string>): Reference;
  clearMouvementsList(): Reference;
  addMouvements(value: string, index?: number): Reference;

  getEtasList(): Array<string>;
  setEtasList(value: Array<string>): Reference;
  clearEtasList(): Reference;
  addEtas(value: string, index?: number): Reference;

  getStatusesList(): Array<string>;
  setStatusesList(value: Array<string>): Reference;
  clearStatusesList(): Reference;
  addStatuses(value: string, index?: number): Reference;

  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): Reference;
  clearTypesList(): Reference;
  addTypes(value: string, index?: number): Reference;

  getCdnsList(): Array<string>;
  setCdnsList(value: Array<string>): Reference;
  clearCdnsList(): Reference;
  addCdns(value: string, index?: number): Reference;

  getTypeCdnsList(): Array<number>;
  setTypeCdnsList(value: Array<number>): Reference;
  clearTypeCdnsList(): Reference;
  addTypeCdns(value: number, index?: number): Reference;

  getNiveausList(): Array<number>;
  setNiveausList(value: Array<number>): Reference;
  clearNiveausList(): Reference;
  addNiveaus(value: number, index?: number): Reference;

  getQuantite(): number;
  setQuantite(value: number): Reference;

  getSousQte(): number;
  setSousQte(value: number): Reference;

  getTotalPieses(): number;
  setTotalPieses(value: number): Reference;

  getPreBlockStatus(): string;
  setPreBlockStatus(value: string): Reference;

  getConfigLotList(): Array<proto_lotreference_lotreference_pb.LotReference>;
  setConfigLotList(value: Array<proto_lotreference_lotreference_pb.LotReference>): Reference;
  clearConfigLotList(): Reference;
  addConfigLot(value?: proto_lotreference_lotreference_pb.LotReference, index?: number): proto_lotreference_lotreference_pb.LotReference;

  getClientId(): string;
  setClientId(value: string): Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    nom: string,
    libelleLong: string,
    languaLibelle: string,
    libelleCourt: string,
    marque: string,
    origine: string,
    famille: string,
    sousFamille: string,
    photo: string,
    qteVariable: boolean,
    dluo: boolean,
    dluoValue: number,
    dlv: boolean,
    dlvValue: number,
    gestion: boolean,
    blocageEntree: boolean,
    blocageSortie: boolean,
    variante: boolean,
    alerteStock: number,
    niveauAlerte: string,
    conditionnementList: Array<proto_conditionnement_conditionnement_pb.Conditionnement.AsObject>,
    icpeList: Array<ICPE.AsObject>,
    matieresdangereusesList: Array<Matieresdangereuses.AsObject>,
    refFournissersList: Array<RefFournissers.AsObject>,
    specificites?: proto_specificites_specificites_pb.Specificites.AsObject,
    refCharement?: Comment.AsObject,
    refLivraison?: Comment.AsObject,
    refReception?: Comment.AsObject,
    clientCodeNom: string,
    dlc: boolean,
    dlcValue: number,
    blockDel: boolean,
    stockList: Array<proto_stock_stock_pb.Stock.AsObject>,
    chrono: string,
    createdBy: string,
    createrId: string,
    modificationBy: string,
    modificationerId: string,
    mouvementsList: Array<string>,
    etasList: Array<string>,
    statusesList: Array<string>,
    typesList: Array<string>,
    cdnsList: Array<string>,
    typeCdnsList: Array<number>,
    niveausList: Array<number>,
    quantite: number,
    sousQte: number,
    totalPieses: number,
    preBlockStatus: string,
    configLotList: Array<proto_lotreference_lotreference_pb.LotReference.AsObject>,
    clientId: string,
  }
}

export class Comment extends jspb.Message {
  getId(): string;
  setId(value: string): Comment;

  getCreateAt(): number;
  setCreateAt(value: number): Comment;

  getUpdateAt(): number;
  setUpdateAt(value: number): Comment;

  getReferenceId(): string;
  setReferenceId(value: string): Comment;

  getComment(): string;
  setComment(value: string): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    referenceId: string,
    comment: string,
  }
}

export class RefFournissers extends jspb.Message {
  getId(): string;
  setId(value: string): RefFournissers;

  getCreateAt(): number;
  setCreateAt(value: number): RefFournissers;

  getUpdateAt(): number;
  setUpdateAt(value: number): RefFournissers;

  getReferenceFournisser(): string;
  setReferenceFournisser(value: string): RefFournissers;

  getRefNom(): string;
  setRefNom(value: string): RefFournissers;

  getFournisserId(): string;
  setFournisserId(value: string): RefFournissers;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): RefFournissers;

  getBlocageEntree(): boolean;
  setBlocageEntree(value: boolean): RefFournissers;

  getAttEnable(): boolean;
  setAttEnable(value: boolean): RefFournissers;

  getBlockDel(): boolean;
  setBlockDel(value: boolean): RefFournissers;

  getReferenceId(): string;
  setReferenceId(value: string): RefFournissers;

  getClientId(): string;
  setClientId(value: string): RefFournissers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefFournissers.AsObject;
  static toObject(includeInstance: boolean, msg: RefFournissers): RefFournissers.AsObject;
  static serializeBinaryToWriter(message: RefFournissers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefFournissers;
  static deserializeBinaryFromReader(message: RefFournissers, reader: jspb.BinaryReader): RefFournissers;
}

export namespace RefFournissers {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    referenceFournisser: string,
    refNom: string,
    fournisserId: string,
    clientCodeNom: string,
    blocageEntree: boolean,
    attEnable: boolean,
    blockDel: boolean,
    referenceId: string,
    clientId: string,
  }
}

export class Matieresdangereuses extends jspb.Message {
  getId(): string;
  setId(value: string): Matieresdangereuses;

  getCreateAt(): number;
  setCreateAt(value: number): Matieresdangereuses;

  getUpdateAt(): number;
  setUpdateAt(value: number): Matieresdangereuses;

  getCode(): string;
  setCode(value: string): Matieresdangereuses;

  getDescription(): string;
  setDescription(value: string): Matieresdangereuses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Matieresdangereuses.AsObject;
  static toObject(includeInstance: boolean, msg: Matieresdangereuses): Matieresdangereuses.AsObject;
  static serializeBinaryToWriter(message: Matieresdangereuses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Matieresdangereuses;
  static deserializeBinaryFromReader(message: Matieresdangereuses, reader: jspb.BinaryReader): Matieresdangereuses;
}

export namespace Matieresdangereuses {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    code: string,
    description: string,
  }
}

export class ICPE extends jspb.Message {
  getId(): string;
  setId(value: string): ICPE;

  getCreateAt(): number;
  setCreateAt(value: number): ICPE;

  getUpdateAt(): number;
  setUpdateAt(value: number): ICPE;

  getCode(): string;
  setCode(value: string): ICPE;

  getDescription(): string;
  setDescription(value: string): ICPE;

  getQteNv1(): number;
  setQteNv1(value: number): ICPE;

  getQteTotalRef(): number;
  setQteTotalRef(value: number): ICPE;

  getQteTotalCode(): number;
  setQteTotalCode(value: number): ICPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICPE.AsObject;
  static toObject(includeInstance: boolean, msg: ICPE): ICPE.AsObject;
  static serializeBinaryToWriter(message: ICPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICPE;
  static deserializeBinaryFromReader(message: ICPE, reader: jspb.BinaryReader): ICPE;
}

export namespace ICPE {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    code: string,
    description: string,
    qteNv1: number,
    qteTotalRef: number,
    qteTotalCode: number,
  }
}

export class AttenduForRefFourCreate extends jspb.Message {
  getId(): string;
  setId(value: string): AttenduForRefFourCreate;

  getBl(): string;
  setBl(value: string): AttenduForRefFourCreate;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): AttenduForRefFourCreate;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): AttenduForRefFourCreate;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): AttenduForRefFourCreate;

  getModificationerId(): string;
  setModificationerId(value: string): AttenduForRefFourCreate;

  getClientId(): string;
  setClientId(value: string): AttenduForRefFourCreate;

  getWarehouseId(): string;
  setWarehouseId(value: string): AttenduForRefFourCreate;

  getCompanyId(): string;
  setCompanyId(value: string): AttenduForRefFourCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttenduForRefFourCreate.AsObject;
  static toObject(includeInstance: boolean, msg: AttenduForRefFourCreate): AttenduForRefFourCreate.AsObject;
  static serializeBinaryToWriter(message: AttenduForRefFourCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttenduForRefFourCreate;
  static deserializeBinaryFromReader(message: AttenduForRefFourCreate, reader: jspb.BinaryReader): AttenduForRefFourCreate;
}

export namespace AttenduForRefFourCreate {
  export type AsObject = {
    id: string,
    bl: string,
    clientCodeNom: string,
    warehouseCodeNom: string,
    companyCodeNom: string,
    modificationerId: string,
    clientId: string,
    warehouseId: string,
    companyId: string,
  }
}

export class ReferenceProduct extends jspb.Message {
  getId(): string;
  setId(value: string): ReferenceProduct;

  getBlocageEntree(): boolean;
  setBlocageEntree(value: boolean): ReferenceProduct;

  getBlocageSortie(): boolean;
  setBlocageSortie(value: boolean): ReferenceProduct;

  getPreBlockStatus(): string;
  setPreBlockStatus(value: string): ReferenceProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceProduct.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceProduct): ReferenceProduct.AsObject;
  static serializeBinaryToWriter(message: ReferenceProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceProduct;
  static deserializeBinaryFromReader(message: ReferenceProduct, reader: jspb.BinaryReader): ReferenceProduct;
}

export namespace ReferenceProduct {
  export type AsObject = {
    id: string,
    blocageEntree: boolean,
    blocageSortie: boolean,
    preBlockStatus: string,
  }
}

