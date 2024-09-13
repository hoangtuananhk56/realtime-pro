import * as jspb from 'google-protobuf'

import * as proto_conditionnement_conditionnement_pb from '../../proto/conditionnement/conditionnement_pb'; // proto import: "proto/conditionnement/conditionnement.proto"
import * as proto_specificites_specificites_pb from '../../proto/specificites/specificites_pb'; // proto import: "proto/specificites/specificites.proto"
import * as proto_lotreference_lotreference_pb from '../../proto/lotreference/lotreference_pb'; // proto import: "proto/lotreference/lotreference.proto"
import * as proto_stock_stock_pb from '../../proto/stock/stock_pb'; // proto import: "proto/stock/stock.proto"
import * as proto_export_export_pb from '../../proto/export/export_pb'; // proto import: "proto/export/export.proto"


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

  getLotReferenceList(): Array<proto_lotreference_lotreference_pb.LotReference>;
  setLotReferenceList(value: Array<proto_lotreference_lotreference_pb.LotReference>): Reference;
  clearLotReferenceList(): Reference;
  addLotReference(value?: proto_lotreference_lotreference_pb.LotReference, index?: number): proto_lotreference_lotreference_pb.LotReference;

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
    lotReferenceList: Array<proto_lotreference_lotreference_pb.LotReference.AsObject>,
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

export class Photo extends jspb.Message {
  getPhoto(): string;
  setPhoto(value: string): Photo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Photo.AsObject;
  static toObject(includeInstance: boolean, msg: Photo): Photo.AsObject;
  static serializeBinaryToWriter(message: Photo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Photo;
  static deserializeBinaryFromReader(message: Photo, reader: jspb.BinaryReader): Photo;
}

export namespace Photo {
  export type AsObject = {
    photo: string,
  }
}

export class CreateReferenceRequest extends jspb.Message {
  getEntry(): Reference | undefined;
  setEntry(value?: Reference): CreateReferenceRequest;
  hasEntry(): boolean;
  clearEntry(): CreateReferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReferenceRequest): CreateReferenceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReferenceRequest;
  static deserializeBinaryFromReader(message: CreateReferenceRequest, reader: jspb.BinaryReader): CreateReferenceRequest;
}

export namespace CreateReferenceRequest {
  export type AsObject = {
    entry?: Reference.AsObject,
  }
}

export class GetByNumRequest extends jspb.Message {
  getNom(): string;
  setNom(value: string): GetByNumRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetByNumRequest;

  getClientId(): string;
  setClientId(value: string): GetByNumRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByNumRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByNumRequest): GetByNumRequest.AsObject;
  static serializeBinaryToWriter(message: GetByNumRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByNumRequest;
  static deserializeBinaryFromReader(message: GetByNumRequest, reader: jspb.BinaryReader): GetByNumRequest;
}

export namespace GetByNumRequest {
  export type AsObject = {
    nom: string,
    clientCodeNom: string,
    clientId: string,
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

export class GetByDigit extends jspb.Message {
  getData(): string;
  setData(value: string): GetByDigit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByDigit.AsObject;
  static toObject(includeInstance: boolean, msg: GetByDigit): GetByDigit.AsObject;
  static serializeBinaryToWriter(message: GetByDigit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByDigit;
  static deserializeBinaryFromReader(message: GetByDigit, reader: jspb.BinaryReader): GetByDigit;
}

export namespace GetByDigit {
  export type AsObject = {
    data: string,
  }
}

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetAllRequest;

  getUserId(): string;
  setUserId(value: string): GetAllRequest;

  getRole(): string;
  setRole(value: string): GetAllRequest;

  getClientId(): string;
  setClientId(value: string): GetAllRequest;

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
    clientCodeNom: string,
    userId: string,
    role: string,
    clientId: string,
  }
}

export class CreateReferenceResponse extends jspb.Message {
  getEntry(): Reference | undefined;
  setEntry(value?: Reference): CreateReferenceResponse;
  hasEntry(): boolean;
  clearEntry(): CreateReferenceResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CreateReferenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReferenceResponse): CreateReferenceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReferenceResponse;
  static deserializeBinaryFromReader(message: CreateReferenceResponse, reader: jspb.BinaryReader): CreateReferenceResponse;
}

export namespace CreateReferenceResponse {
  export type AsObject = {
    entry?: Reference.AsObject,
    messageerror: string,
  }
}

export class CheckExistRefFourRequest extends jspb.Message {
  getClientCodeNom(): string;
  setClientCodeNom(value: string): CheckExistRefFourRequest;

  getFournisserId(): string;
  setFournisserId(value: string): CheckExistRefFourRequest;

  getReferenceFournisser(): string;
  setReferenceFournisser(value: string): CheckExistRefFourRequest;

  getClientId(): string;
  setClientId(value: string): CheckExistRefFourRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckExistRefFourRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckExistRefFourRequest): CheckExistRefFourRequest.AsObject;
  static serializeBinaryToWriter(message: CheckExistRefFourRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckExistRefFourRequest;
  static deserializeBinaryFromReader(message: CheckExistRefFourRequest, reader: jspb.BinaryReader): CheckExistRefFourRequest;
}

export namespace CheckExistRefFourRequest {
  export type AsObject = {
    clientCodeNom: string,
    fournisserId: string,
    referenceFournisser: string,
    clientId: string,
  }
}

export class GetByNomRefDigitRequest extends jspb.Message {
  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetByNomRefDigitRequest;

  getFournisserId(): string;
  setFournisserId(value: string): GetByNomRefDigitRequest;

  getNom(): string;
  setNom(value: string): GetByNomRefDigitRequest;

  getClientId(): string;
  setClientId(value: string): GetByNomRefDigitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByNomRefDigitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByNomRefDigitRequest): GetByNomRefDigitRequest.AsObject;
  static serializeBinaryToWriter(message: GetByNomRefDigitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByNomRefDigitRequest;
  static deserializeBinaryFromReader(message: GetByNomRefDigitRequest, reader: jspb.BinaryReader): GetByNomRefDigitRequest;
}

export namespace GetByNomRefDigitRequest {
  export type AsObject = {
    clientCodeNom: string,
    fournisserId: string,
    nom: string,
    clientId: string,
  }
}

export class CheckExistRefFourResponse extends jspb.Message {
  getEntry(): RefFournissers | undefined;
  setEntry(value?: RefFournissers): CheckExistRefFourResponse;
  hasEntry(): boolean;
  clearEntry(): CheckExistRefFourResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CheckExistRefFourResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckExistRefFourResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckExistRefFourResponse): CheckExistRefFourResponse.AsObject;
  static serializeBinaryToWriter(message: CheckExistRefFourResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckExistRefFourResponse;
  static deserializeBinaryFromReader(message: CheckExistRefFourResponse, reader: jspb.BinaryReader): CheckExistRefFourResponse;
}

export namespace CheckExistRefFourResponse {
  export type AsObject = {
    entry?: RefFournissers.AsObject,
    messageerror: string,
  }
}

export class GetByRefFourDitgitResponse extends jspb.Message {
  getEntryList(): Array<RefFournissers>;
  setEntryList(value: Array<RefFournissers>): GetByRefFourDitgitResponse;
  clearEntryList(): GetByRefFourDitgitResponse;
  addEntry(value?: RefFournissers, index?: number): RefFournissers;

  getMessageerror(): string;
  setMessageerror(value: string): GetByRefFourDitgitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByRefFourDitgitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByRefFourDitgitResponse): GetByRefFourDitgitResponse.AsObject;
  static serializeBinaryToWriter(message: GetByRefFourDitgitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByRefFourDitgitResponse;
  static deserializeBinaryFromReader(message: GetByRefFourDitgitResponse, reader: jspb.BinaryReader): GetByRefFourDitgitResponse;
}

export namespace GetByRefFourDitgitResponse {
  export type AsObject = {
    entryList: Array<RefFournissers.AsObject>,
    messageerror: string,
  }
}

export class GetRefFourByNomRequest extends jspb.Message {
  getRefNom(): string;
  setRefNom(value: string): GetRefFourByNomRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetRefFourByNomRequest;

  getFourId(): string;
  setFourId(value: string): GetRefFourByNomRequest;

  getClientId(): string;
  setClientId(value: string): GetRefFourByNomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRefFourByNomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRefFourByNomRequest): GetRefFourByNomRequest.AsObject;
  static serializeBinaryToWriter(message: GetRefFourByNomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRefFourByNomRequest;
  static deserializeBinaryFromReader(message: GetRefFourByNomRequest, reader: jspb.BinaryReader): GetRefFourByNomRequest;
}

export namespace GetRefFourByNomRequest {
  export type AsObject = {
    refNom: string,
    clientCodeNom: string,
    fourId: string,
    clientId: string,
  }
}

export class ValidateRefFourRequest extends jspb.Message {
  getRefNom(): string;
  setRefNom(value: string): ValidateRefFourRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ValidateRefFourRequest;

  getFourId(): string;
  setFourId(value: string): ValidateRefFourRequest;

  getBlockRelation(): boolean;
  setBlockRelation(value: boolean): ValidateRefFourRequest;

  getReferenceFournisser(): string;
  setReferenceFournisser(value: string): ValidateRefFourRequest;

  getClientId(): string;
  setClientId(value: string): ValidateRefFourRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateRefFourRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateRefFourRequest): ValidateRefFourRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateRefFourRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateRefFourRequest;
  static deserializeBinaryFromReader(message: ValidateRefFourRequest, reader: jspb.BinaryReader): ValidateRefFourRequest;
}

export namespace ValidateRefFourRequest {
  export type AsObject = {
    refNom: string,
    clientCodeNom: string,
    fourId: string,
    blockRelation: boolean,
    referenceFournisser: string,
    clientId: string,
  }
}

export class ValidateRefFourReponse extends jspb.Message {
  getEntry(): RefFournissers | undefined;
  setEntry(value?: RefFournissers): ValidateRefFourReponse;
  hasEntry(): boolean;
  clearEntry(): ValidateRefFourReponse;

  getMessageerror(): string;
  setMessageerror(value: string): ValidateRefFourReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateRefFourReponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateRefFourReponse): ValidateRefFourReponse.AsObject;
  static serializeBinaryToWriter(message: ValidateRefFourReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateRefFourReponse;
  static deserializeBinaryFromReader(message: ValidateRefFourReponse, reader: jspb.BinaryReader): ValidateRefFourReponse;
}

export namespace ValidateRefFourReponse {
  export type AsObject = {
    entry?: RefFournissers.AsObject,
    messageerror: string,
  }
}

export class DeleteRefFourRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRefFourRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRefFourRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRefFourRequest): DeleteRefFourRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRefFourRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRefFourRequest;
  static deserializeBinaryFromReader(message: DeleteRefFourRequest, reader: jspb.BinaryReader): DeleteRefFourRequest;
}

export namespace DeleteRefFourRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRefFourReponse extends jspb.Message {
  getEntry(): RefFournissers | undefined;
  setEntry(value?: RefFournissers): DeleteRefFourReponse;
  hasEntry(): boolean;
  clearEntry(): DeleteRefFourReponse;

  getMessageerror(): string;
  setMessageerror(value: string): DeleteRefFourReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRefFourReponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRefFourReponse): DeleteRefFourReponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRefFourReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRefFourReponse;
  static deserializeBinaryFromReader(message: DeleteRefFourReponse, reader: jspb.BinaryReader): DeleteRefFourReponse;
}

export namespace DeleteRefFourReponse {
  export type AsObject = {
    entry?: RefFournissers.AsObject,
    messageerror: string,
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

export class RefFourCreateRequest extends jspb.Message {
  getReffourarrayList(): Array<RefFournissers>;
  setReffourarrayList(value: Array<RefFournissers>): RefFourCreateRequest;
  clearReffourarrayList(): RefFourCreateRequest;
  addReffourarray(value?: RefFournissers, index?: number): RefFournissers;

  getAttendu(): AttenduForRefFourCreate | undefined;
  setAttendu(value?: AttenduForRefFourCreate): RefFourCreateRequest;
  hasAttendu(): boolean;
  clearAttendu(): RefFourCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefFourCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefFourCreateRequest): RefFourCreateRequest.AsObject;
  static serializeBinaryToWriter(message: RefFourCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefFourCreateRequest;
  static deserializeBinaryFromReader(message: RefFourCreateRequest, reader: jspb.BinaryReader): RefFourCreateRequest;
}

export namespace RefFourCreateRequest {
  export type AsObject = {
    reffourarrayList: Array<RefFournissers.AsObject>,
    attendu?: AttenduForRefFourCreate.AsObject,
  }
}

export class RefFourCreateResponse extends jspb.Message {
  getEntryList(): Array<RefFournissers>;
  setEntryList(value: Array<RefFournissers>): RefFourCreateResponse;
  clearEntryList(): RefFourCreateResponse;
  addEntry(value?: RefFournissers, index?: number): RefFournissers;

  getMessageerror(): string;
  setMessageerror(value: string): RefFourCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefFourCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefFourCreateResponse): RefFourCreateResponse.AsObject;
  static serializeBinaryToWriter(message: RefFourCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefFourCreateResponse;
  static deserializeBinaryFromReader(message: RefFourCreateResponse, reader: jspb.BinaryReader): RefFourCreateResponse;
}

export namespace RefFourCreateResponse {
  export type AsObject = {
    entryList: Array<RefFournissers.AsObject>,
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

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Reference>;
  setEntryList(value: Array<Reference>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Reference, index?: number): Reference;

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
    entryList: Array<Reference.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class ValidDeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ValidDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidDeleteRequest): ValidDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: ValidDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidDeleteRequest;
  static deserializeBinaryFromReader(message: ValidDeleteRequest, reader: jspb.BinaryReader): ValidDeleteRequest;
}

export namespace ValidDeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class ValidDeleteResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): ValidDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidDeleteResponse): ValidDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: ValidDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidDeleteResponse;
  static deserializeBinaryFromReader(message: ValidDeleteResponse, reader: jspb.BinaryReader): ValidDeleteResponse;
}

export namespace ValidDeleteResponse {
  export type AsObject = {
    status: boolean,
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

export class UpdateReferenceRequest extends jspb.Message {
  getEntry(): Reference | undefined;
  setEntry(value?: Reference): UpdateReferenceRequest;
  hasEntry(): boolean;
  clearEntry(): UpdateReferenceRequest;

  getRefFourDelete(): DeleteByIds | undefined;
  setRefFourDelete(value?: DeleteByIds): UpdateReferenceRequest;
  hasRefFourDelete(): boolean;
  clearRefFourDelete(): UpdateReferenceRequest;

  getConditionnementDelete(): DeleteByIds | undefined;
  setConditionnementDelete(value?: DeleteByIds): UpdateReferenceRequest;
  hasConditionnementDelete(): boolean;
  clearConditionnementDelete(): UpdateReferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReferenceRequest): UpdateReferenceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReferenceRequest;
  static deserializeBinaryFromReader(message: UpdateReferenceRequest, reader: jspb.BinaryReader): UpdateReferenceRequest;
}

export namespace UpdateReferenceRequest {
  export type AsObject = {
    entry?: Reference.AsObject,
    refFourDelete?: DeleteByIds.AsObject,
    conditionnementDelete?: DeleteByIds.AsObject,
  }
}

export class UpdateReferenceResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): UpdateReferenceResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateReferenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReferenceResponse): UpdateReferenceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReferenceResponse;
  static deserializeBinaryFromReader(message: UpdateReferenceResponse, reader: jspb.BinaryReader): UpdateReferenceResponse;
}

export namespace UpdateReferenceResponse {
  export type AsObject = {
    status: boolean,
    messageError: string,
  }
}

export class DeleteRefByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRefByIdRequest;

  getModificationerId(): string;
  setModificationerId(value: string): DeleteRefByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRefByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRefByIdRequest): DeleteRefByIdRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRefByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRefByIdRequest;
  static deserializeBinaryFromReader(message: DeleteRefByIdRequest, reader: jspb.BinaryReader): DeleteRefByIdRequest;
}

export namespace DeleteRefByIdRequest {
  export type AsObject = {
    id: string,
    modificationerId: string,
  }
}

export class DeleteRefByIdResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): DeleteRefByIdResponse;

  getMessageError(): string;
  setMessageError(value: string): DeleteRefByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRefByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRefByIdResponse): DeleteRefByIdResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRefByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRefByIdResponse;
  static deserializeBinaryFromReader(message: DeleteRefByIdResponse, reader: jspb.BinaryReader): DeleteRefByIdResponse;
}

export namespace DeleteRefByIdResponse {
  export type AsObject = {
    status: boolean,
    messageError: string,
  }
}

export class GetAllReferenceRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): GetAllReferenceRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetAllReferenceRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetAllReferenceRequest;

  getLimit(): number;
  setLimit(value: number): GetAllReferenceRequest;

  getOffset(): number;
  setOffset(value: number): GetAllReferenceRequest;

  getBl(): string;
  setBl(value: string): GetAllReferenceRequest;

  getDescription(): string;
  setDescription(value: string): GetAllReferenceRequest;

  getSupplier(): string;
  setSupplier(value: string): GetAllReferenceRequest;

  getType(): string;
  setType(value: string): GetAllReferenceRequest;

  getMouvement(): string;
  setMouvement(value: string): GetAllReferenceRequest;

  getEta(): string;
  setEta(value: string): GetAllReferenceRequest;

  getChrono(): string;
  setChrono(value: string): GetAllReferenceRequest;

  getDebut(): string;
  setDebut(value: string): GetAllReferenceRequest;

  getFin(): string;
  setFin(value: string): GetAllReferenceRequest;

  getStatus(): string;
  setStatus(value: string): GetAllReferenceRequest;

  getSscc(): string;
  setSscc(value: string): GetAllReferenceRequest;

  getLot(): string;
  setLot(value: string): GetAllReferenceRequest;

  getCdn(): string;
  setCdn(value: string): GetAllReferenceRequest;

  getZone(): string;
  setZone(value: string): GetAllReferenceRequest;

  getAisle(): string;
  setAisle(value: string): GetAllReferenceRequest;

  getBay(): string;
  setBay(value: string): GetAllReferenceRequest;

  getLevel(): string;
  setLevel(value: string): GetAllReferenceRequest;

  getTypeCdn(): string;
  setTypeCdn(value: string): GetAllReferenceRequest;

  getEmplacementsVide(): boolean;
  setEmplacementsVide(value: boolean): GetAllReferenceRequest;

  getProductNumber(): string;
  setProductNumber(value: string): GetAllReferenceRequest;

  getSort(): string;
  setSort(value: string): GetAllReferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllReferenceRequest): GetAllReferenceRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllReferenceRequest;
  static deserializeBinaryFromReader(message: GetAllReferenceRequest, reader: jspb.BinaryReader): GetAllReferenceRequest;
}

export namespace GetAllReferenceRequest {
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
    status: string,
    sscc: string,
    lot: string,
    cdn: string,
    zone: string,
    aisle: string,
    bay: string,
    level: string,
    typeCdn: string,
    emplacementsVide: boolean,
    productNumber: string,
    sort: string,
  }
}

export class CheckExistEanVarianteForConditonnametRequest extends jspb.Message {
  getEan(): string;
  setEan(value: string): CheckExistEanVarianteForConditonnametRequest;

  getVariante(): string;
  setVariante(value: string): CheckExistEanVarianteForConditonnametRequest;

  getId(): string;
  setId(value: string): CheckExistEanVarianteForConditonnametRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckExistEanVarianteForConditonnametRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckExistEanVarianteForConditonnametRequest): CheckExistEanVarianteForConditonnametRequest.AsObject;
  static serializeBinaryToWriter(message: CheckExistEanVarianteForConditonnametRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckExistEanVarianteForConditonnametRequest;
  static deserializeBinaryFromReader(message: CheckExistEanVarianteForConditonnametRequest, reader: jspb.BinaryReader): CheckExistEanVarianteForConditonnametRequest;
}

export namespace CheckExistEanVarianteForConditonnametRequest {
  export type AsObject = {
    ean: string,
    variante: string,
    id: string,
  }
}

export class CheckExistEanVarianteForConditonnametResponse extends jspb.Message {
  getEntry(): proto_conditionnement_conditionnement_pb.Conditionnement | undefined;
  setEntry(value?: proto_conditionnement_conditionnement_pb.Conditionnement): CheckExistEanVarianteForConditonnametResponse;
  hasEntry(): boolean;
  clearEntry(): CheckExistEanVarianteForConditonnametResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CheckExistEanVarianteForConditonnametResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckExistEanVarianteForConditonnametResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckExistEanVarianteForConditonnametResponse): CheckExistEanVarianteForConditonnametResponse.AsObject;
  static serializeBinaryToWriter(message: CheckExistEanVarianteForConditonnametResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckExistEanVarianteForConditonnametResponse;
  static deserializeBinaryFromReader(message: CheckExistEanVarianteForConditonnametResponse, reader: jspb.BinaryReader): CheckExistEanVarianteForConditonnametResponse;
}

export namespace CheckExistEanVarianteForConditonnametResponse {
  export type AsObject = {
    entry?: proto_conditionnement_conditionnement_pb.Conditionnement.AsObject,
    messageerror: string,
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

export class RefHistory extends jspb.Message {
  getId(): string;
  setId(value: string): RefHistory;

  getCreatedAt(): number;
  setCreatedAt(value: number): RefHistory;

  getMovementType(): string;
  setMovementType(value: string): RefHistory;

  getMovementState(): string;
  setMovementState(value: string): RefHistory;

  getCode(): string;
  setCode(value: string): RefHistory;

  getObjectType(): string;
  setObjectType(value: string): RefHistory;

  getObjectId(): string;
  setObjectId(value: string): RefHistory;

  getObjectNumber(): string;
  setObjectNumber(value: string): RefHistory;

  getDescription(): string;
  setDescription(value: string): RefHistory;

  getUserId(): string;
  setUserId(value: string): RefHistory;

  getUserName(): string;
  setUserName(value: string): RefHistory;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): RefHistory;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): RefHistory;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): RefHistory;

  getChrono(): string;
  setChrono(value: string): RefHistory;

  getAction(): string;
  setAction(value: string): RefHistory;

  getEventType(): string;
  setEventType(value: string): RefHistory;

  getChangesList(): Array<HistoryChange>;
  setChangesList(value: Array<HistoryChange>): RefHistory;
  clearChangesList(): RefHistory;
  addChanges(value?: HistoryChange, index?: number): HistoryChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefHistory.AsObject;
  static toObject(includeInstance: boolean, msg: RefHistory): RefHistory.AsObject;
  static serializeBinaryToWriter(message: RefHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefHistory;
  static deserializeBinaryFromReader(message: RefHistory, reader: jspb.BinaryReader): RefHistory;
}

export namespace RefHistory {
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

export class GetHistoryByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetHistoryByIdRequest;

  getLimit(): number;
  setLimit(value: number): GetHistoryByIdRequest;

  getOffset(): number;
  setOffset(value: number): GetHistoryByIdRequest;

  getFrom(): number;
  setFrom(value: number): GetHistoryByIdRequest;

  getTo(): number;
  setTo(value: number): GetHistoryByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryByIdRequest): GetHistoryByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoryByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryByIdRequest;
  static deserializeBinaryFromReader(message: GetHistoryByIdRequest, reader: jspb.BinaryReader): GetHistoryByIdRequest;
}

export namespace GetHistoryByIdRequest {
  export type AsObject = {
    id: string,
    limit: number,
    offset: number,
    from: number,
    to: number,
  }
}

export class GetHistoryByIdResponse extends jspb.Message {
  getEntryList(): Array<RefHistory>;
  setEntryList(value: Array<RefHistory>): GetHistoryByIdResponse;
  clearEntryList(): GetHistoryByIdResponse;
  addEntry(value?: RefHistory, index?: number): RefHistory;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetHistoryByIdResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetHistoryByIdResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetHistoryByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryByIdResponse): GetHistoryByIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoryByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryByIdResponse;
  static deserializeBinaryFromReader(message: GetHistoryByIdResponse, reader: jspb.BinaryReader): GetHistoryByIdResponse;
}

export namespace GetHistoryByIdResponse {
  export type AsObject = {
    entryList: Array<RefHistory.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
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

export class UpdateBlockLotRequest extends jspb.Message {
  getRefrenceId(): string;
  setRefrenceId(value: string): UpdateBlockLotRequest;

  getLotBlockStatus(): boolean;
  setLotBlockStatus(value: boolean): UpdateBlockLotRequest;

  getMotif(): string;
  setMotif(value: string): UpdateBlockLotRequest;

  getOrigine(): string;
  setOrigine(value: string): UpdateBlockLotRequest;

  getCompanyId(): string;
  setCompanyId(value: string): UpdateBlockLotRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UpdateBlockLotRequest;

  getClientId(): string;
  setClientId(value: string): UpdateBlockLotRequest;

  getLot(): string;
  setLot(value: string): UpdateBlockLotRequest;

  getUsercode(): string;
  setUsercode(value: string): UpdateBlockLotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockLotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockLotRequest): UpdateBlockLotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockLotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockLotRequest;
  static deserializeBinaryFromReader(message: UpdateBlockLotRequest, reader: jspb.BinaryReader): UpdateBlockLotRequest;
}

export namespace UpdateBlockLotRequest {
  export type AsObject = {
    refrenceId: string,
    lotBlockStatus: boolean,
    motif: string,
    origine: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
    lot: string,
    usercode: string,
  }
}

export class UpdateBlockLotResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UpdateBlockLotResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateBlockLotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlockLotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlockLotResponse): UpdateBlockLotResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBlockLotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlockLotResponse;
  static deserializeBinaryFromReader(message: UpdateBlockLotResponse, reader: jspb.BinaryReader): UpdateBlockLotResponse;
}

export namespace UpdateBlockLotResponse {
  export type AsObject = {
    status: string,
    messageError: string,
  }
}

