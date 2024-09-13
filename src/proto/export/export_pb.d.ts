import * as jspb from 'google-protobuf'



export class ExportAllReferencesRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ExportAllReferencesRequest;

  getCompanyId(): string;
  setCompanyId(value: string): ExportAllReferencesRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): ExportAllReferencesRequest;

  getBl(): string;
  setBl(value: string): ExportAllReferencesRequest;

  getDescription(): string;
  setDescription(value: string): ExportAllReferencesRequest;

  getSupplier(): string;
  setSupplier(value: string): ExportAllReferencesRequest;

  getType(): string;
  setType(value: string): ExportAllReferencesRequest;

  getMouvement(): string;
  setMouvement(value: string): ExportAllReferencesRequest;

  getEta(): string;
  setEta(value: string): ExportAllReferencesRequest;

  getChrono(): string;
  setChrono(value: string): ExportAllReferencesRequest;

  getDebut(): string;
  setDebut(value: string): ExportAllReferencesRequest;

  getFin(): string;
  setFin(value: string): ExportAllReferencesRequest;

  getStatus(): string;
  setStatus(value: string): ExportAllReferencesRequest;

  getSscc(): string;
  setSscc(value: string): ExportAllReferencesRequest;

  getLot(): string;
  setLot(value: string): ExportAllReferencesRequest;

  getCdn(): string;
  setCdn(value: string): ExportAllReferencesRequest;

  getZone(): string;
  setZone(value: string): ExportAllReferencesRequest;

  getAisle(): string;
  setAisle(value: string): ExportAllReferencesRequest;

  getBay(): string;
  setBay(value: string): ExportAllReferencesRequest;

  getLevel(): string;
  setLevel(value: string): ExportAllReferencesRequest;

  getTypeCdn(): string;
  setTypeCdn(value: string): ExportAllReferencesRequest;

  getEmplacementsVide(): boolean;
  setEmplacementsVide(value: boolean): ExportAllReferencesRequest;

  getProductNumber(): string;
  setProductNumber(value: string): ExportAllReferencesRequest;

  getSort(): string;
  setSort(value: string): ExportAllReferencesRequest;

  getUserCode(): string;
  setUserCode(value: string): ExportAllReferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAllReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAllReferencesRequest): ExportAllReferencesRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAllReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAllReferencesRequest;
  static deserializeBinaryFromReader(message: ExportAllReferencesRequest, reader: jspb.BinaryReader): ExportAllReferencesRequest;
}

export namespace ExportAllReferencesRequest {
  export type AsObject = {
    clientId: string,
    companyId: string,
    warehouseId: string,
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
    userCode: string,
  }
}

export class ExportAllAttenduRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ExportAllAttenduRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): ExportAllAttenduRequest;

  getCompanyId(): string;
  setCompanyId(value: string): ExportAllAttenduRequest;

  getUserId(): string;
  setUserId(value: string): ExportAllAttenduRequest;

  getRole(): string;
  setRole(value: string): ExportAllAttenduRequest;

  getBl(): string;
  setBl(value: string): ExportAllAttenduRequest;

  getDescription(): string;
  setDescription(value: string): ExportAllAttenduRequest;

  getSupplier(): string;
  setSupplier(value: string): ExportAllAttenduRequest;

  getType(): string;
  setType(value: string): ExportAllAttenduRequest;

  getMouvement(): string;
  setMouvement(value: string): ExportAllAttenduRequest;

  getEta(): string;
  setEta(value: string): ExportAllAttenduRequest;

  getChrono(): string;
  setChrono(value: string): ExportAllAttenduRequest;

  getStartDate(): string;
  setStartDate(value: string): ExportAllAttenduRequest;

  getEndDate(): string;
  setEndDate(value: string): ExportAllAttenduRequest;

  getProduct(): string;
  setProduct(value: string): ExportAllAttenduRequest;

  getStatus(): string;
  setStatus(value: string): ExportAllAttenduRequest;

  getPalette(): string;
  setPalette(value: string): ExportAllAttenduRequest;

  getLot(): string;
  setLot(value: string): ExportAllAttenduRequest;

  getSort(): string;
  setSort(value: string): ExportAllAttenduRequest;

  getUserCode(): string;
  setUserCode(value: string): ExportAllAttenduRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAllAttenduRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAllAttenduRequest): ExportAllAttenduRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAllAttenduRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAllAttenduRequest;
  static deserializeBinaryFromReader(message: ExportAllAttenduRequest, reader: jspb.BinaryReader): ExportAllAttenduRequest;
}

export namespace ExportAllAttenduRequest {
  export type AsObject = {
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
    userCode: string,
  }
}

export class ExportAllCommandeRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ExportAllCommandeRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): ExportAllCommandeRequest;

  getCompanyId(): string;
  setCompanyId(value: string): ExportAllCommandeRequest;

  getUserId(): string;
  setUserId(value: string): ExportAllCommandeRequest;

  getRole(): string;
  setRole(value: string): ExportAllCommandeRequest;

  getAddressee(): string;
  setAddressee(value: string): ExportAllCommandeRequest;
  hasAddressee(): boolean;
  clearAddressee(): ExportAllCommandeRequest;

  getDescription(): string;
  setDescription(value: string): ExportAllCommandeRequest;
  hasDescription(): boolean;
  clearDescription(): ExportAllCommandeRequest;

  getBl(): string;
  setBl(value: string): ExportAllCommandeRequest;

  getTransporter(): string;
  setTransporter(value: string): ExportAllCommandeRequest;

  getType(): string;
  setType(value: string): ExportAllCommandeRequest;

  getMouvement(): string;
  setMouvement(value: string): ExportAllCommandeRequest;

  getEta(): string;
  setEta(value: string): ExportAllCommandeRequest;

  getChrono(): string;
  setChrono(value: string): ExportAllCommandeRequest;

  getDebut(): string;
  setDebut(value: string): ExportAllCommandeRequest;

  getFin(): string;
  setFin(value: string): ExportAllCommandeRequest;

  getProduct(): string;
  setProduct(value: string): ExportAllCommandeRequest;

  getStatus(): string;
  setStatus(value: string): ExportAllCommandeRequest;

  getSscc(): string;
  setSscc(value: string): ExportAllCommandeRequest;

  getLot(): string;
  setLot(value: string): ExportAllCommandeRequest;

  getCdn(): string;
  setCdn(value: string): ExportAllCommandeRequest;

  getZone(): string;
  setZone(value: string): ExportAllCommandeRequest;

  getAisle(): string;
  setAisle(value: string): ExportAllCommandeRequest;

  getBay(): string;
  setBay(value: string): ExportAllCommandeRequest;

  getLevel(): string;
  setLevel(value: string): ExportAllCommandeRequest;

  getTypeCdn(): string;
  setTypeCdn(value: string): ExportAllCommandeRequest;

  getNom(): string;
  setNom(value: string): ExportAllCommandeRequest;

  getSort(): string;
  setSort(value: string): ExportAllCommandeRequest;

  getUserCode(): string;
  setUserCode(value: string): ExportAllCommandeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAllCommandeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAllCommandeRequest): ExportAllCommandeRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAllCommandeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAllCommandeRequest;
  static deserializeBinaryFromReader(message: ExportAllCommandeRequest, reader: jspb.BinaryReader): ExportAllCommandeRequest;
}

export namespace ExportAllCommandeRequest {
  export type AsObject = {
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
    userCode: string,
  }

  export enum AddresseeCase { 
    _ADDRESSEE_NOT_SET = 0,
    ADDRESSEE = 6,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 7,
  }
}

export class ExportResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ExportResponse;

  getMessageerror(): string;
  setMessageerror(value: string): ExportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportResponse): ExportResponse.AsObject;
  static serializeBinaryToWriter(message: ExportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportResponse;
  static deserializeBinaryFromReader(message: ExportResponse, reader: jspb.BinaryReader): ExportResponse;
}

export namespace ExportResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

