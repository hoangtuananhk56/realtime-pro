import * as jspb from 'google-protobuf'



export class Client extends jspb.Message {
  getId(): string;
  setId(value: string): Client;

  getCreatedAt(): number;
  setCreatedAt(value: number): Client;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Client;

  getNom(): string;
  setNom(value: string): Client;

  getAdresse(): string;
  setAdresse(value: string): Client;

  getTel(): string;
  setTel(value: string): Client;

  getFax(): string;
  setFax(value: string): Client;

  getDetail(): string;
  setDetail(value: string): Client;

  getContact(): string;
  setContact(value: string): Client;

  getCode(): string;
  setCode(value: string): Client;

  getCurrentSsccValue(): number;
  setCurrentSsccValue(value: number): Client;

  getPreCode(): string;
  setPreCode(value: string): Client;

  getCodeNom(): string;
  setCodeNom(value: string): Client;

  getRupture(): boolean;
  setRupture(value: boolean): Client;

  getVariantes(): boolean;
  setVariantes(value: boolean): Client;

  getFifo(): boolean;
  setFifo(value: boolean): Client;

  getFefo(): boolean;
  setFefo(value: boolean): Client;

  getTypesCdn(): boolean;
  setTypesCdn(value: boolean): Client;

  getAlerteDluo(): number;
  setAlerteDluo(value: number): Client;

  getClientCompanyList(): Array<ClientCompany>;
  setClientCompanyList(value: Array<ClientCompany>): Client;
  clearClientCompanyList(): Client;
  addClientCompany(value?: ClientCompany, index?: number): ClientCompany;

  getWarehouseClientList(): Array<WarehouseClient>;
  setWarehouseClientList(value: Array<WarehouseClient>): Client;
  clearWarehouseClientList(): Client;
  addWarehouseClient(value?: WarehouseClient, index?: number): WarehouseClient;

  getClientWarehouseCompanyList(): Array<ClientWarehouseCompany>;
  setClientWarehouseCompanyList(value: Array<ClientWarehouseCompany>): Client;
  clearClientWarehouseCompanyList(): Client;
  addClientWarehouseCompany(value?: ClientWarehouseCompany, index?: number): ClientWarehouseCompany;

  getEmail(): string;
  setEmail(value: string): Client;

  getMoisDluoActivate(): boolean;
  setMoisDluoActivate(value: boolean): Client;

  getMoisDluoInput(): number;
  setMoisDluoInput(value: number): Client;

  getMultiBl(): boolean;
  setMultiBl(value: boolean): Client;

  getEtiquettes(): boolean;
  setEtiquettes(value: boolean): Client;

  getSupports(): boolean;
  setSupports(value: boolean): Client;

  getSauvegardeSupport(): boolean;
  setSauvegardeSupport(value: boolean): Client;

  getSupportReception(): boolean;
  setSupportReception(value: boolean): Client;

  getReapproPartiel(): boolean;
  setReapproPartiel(value: boolean): Client;

  getRespectHauteurPalette(): boolean;
  setRespectHauteurPalette(value: boolean): Client;

  getIsDel(): boolean;
  setIsDel(value: boolean): Client;

  getClientWarehouseCompanyOrgList(): Array<ClientWarehouseCompanyOrg>;
  setClientWarehouseCompanyOrgList(value: Array<ClientWarehouseCompanyOrg>): Client;
  clearClientWarehouseCompanyOrgList(): Client;
  addClientWarehouseCompanyOrg(value?: ClientWarehouseCompanyOrg, index?: number): ClientWarehouseCompanyOrg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Client.AsObject;
  static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
  static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Client;
  static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    nom: string,
    adresse: string,
    tel: string,
    fax: string,
    detail: string,
    contact: string,
    code: string,
    currentSsccValue: number,
    preCode: string,
    codeNom: string,
    rupture: boolean,
    variantes: boolean,
    fifo: boolean,
    fefo: boolean,
    typesCdn: boolean,
    alerteDluo: number,
    clientCompanyList: Array<ClientCompany.AsObject>,
    warehouseClientList: Array<WarehouseClient.AsObject>,
    clientWarehouseCompanyList: Array<ClientWarehouseCompany.AsObject>,
    email: string,
    moisDluoActivate: boolean,
    moisDluoInput: number,
    multiBl: boolean,
    etiquettes: boolean,
    supports: boolean,
    sauvegardeSupport: boolean,
    supportReception: boolean,
    reapproPartiel: boolean,
    respectHauteurPalette: boolean,
    isDel: boolean,
    clientWarehouseCompanyOrgList: Array<ClientWarehouseCompanyOrg.AsObject>,
  }
}

export class ClientCompany extends jspb.Message {
  getCreateAt(): number;
  setCreateAt(value: number): ClientCompany;

  getUpdateAt(): number;
  setUpdateAt(value: number): ClientCompany;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientCompany;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ClientCompany;

  getClientId(): string;
  setClientId(value: string): ClientCompany;

  getCompanyId(): string;
  setCompanyId(value: string): ClientCompany;

  getId(): string;
  setId(value: string): ClientCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCompany.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCompany): ClientCompany.AsObject;
  static serializeBinaryToWriter(message: ClientCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCompany;
  static deserializeBinaryFromReader(message: ClientCompany, reader: jspb.BinaryReader): ClientCompany;
}

export namespace ClientCompany {
  export type AsObject = {
    createAt: number,
    updateAt: number,
    clientCodeNom: string,
    companyCodeNom: string,
    clientId: string,
    companyId: string,
    id: string,
  }
}

export class WarehouseClient extends jspb.Message {
  getCreateAt(): number;
  setCreateAt(value: number): WarehouseClient;

  getUpdateAt(): number;
  setUpdateAt(value: number): WarehouseClient;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): WarehouseClient;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseClient;

  getClientId(): string;
  setClientId(value: string): WarehouseClient;

  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseClient;

  getId(): string;
  setId(value: string): WarehouseClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseClient.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseClient): WarehouseClient.AsObject;
  static serializeBinaryToWriter(message: WarehouseClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseClient;
  static deserializeBinaryFromReader(message: WarehouseClient, reader: jspb.BinaryReader): WarehouseClient;
}

export namespace WarehouseClient {
  export type AsObject = {
    createAt: number,
    updateAt: number,
    clientCodeNom: string,
    warehouseCodeNom: string,
    clientId: string,
    warehouseId: string,
    id: string,
  }
}

export class WarehouseCompany extends jspb.Message {
  getCreateAt(): number;
  setCreateAt(value: number): WarehouseCompany;

  getUpdateAt(): number;
  setUpdateAt(value: number): WarehouseCompany;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseCompany;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): WarehouseCompany;

  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseCompany;

  getCompanyId(): string;
  setCompanyId(value: string): WarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseCompany.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseCompany): WarehouseCompany.AsObject;
  static serializeBinaryToWriter(message: WarehouseCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseCompany;
  static deserializeBinaryFromReader(message: WarehouseCompany, reader: jspb.BinaryReader): WarehouseCompany;
}

export namespace WarehouseCompany {
  export type AsObject = {
    createAt: number,
    updateAt: number,
    warehouseCodeNom: string,
    companyCodeNom: string,
    warehouseId: string,
    companyId: string,
  }
}

export class ClientWarehouseCompany extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ClientWarehouseCompany;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ClientWarehouseCompany;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientWarehouseCompany;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): ClientWarehouseCompany;

  getClientId(): string;
  setClientId(value: string): ClientWarehouseCompany;

  getId(): string;
  setId(value: string): ClientWarehouseCompany;

  getCompanyId(): string;
  setCompanyId(value: string): ClientWarehouseCompany;

  getWarehouseId(): string;
  setWarehouseId(value: string): ClientWarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientWarehouseCompany.AsObject;
  static toObject(includeInstance: boolean, msg: ClientWarehouseCompany): ClientWarehouseCompany.AsObject;
  static serializeBinaryToWriter(message: ClientWarehouseCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientWarehouseCompany;
  static deserializeBinaryFromReader(message: ClientWarehouseCompany, reader: jspb.BinaryReader): ClientWarehouseCompany;
}

export namespace ClientWarehouseCompany {
  export type AsObject = {
    userId: string,
    companyCodeNom: string,
    clientCodeNom: string,
    warehouseCodeNom: string,
    clientId: string,
    id: string,
    companyId: string,
    warehouseId: string,
  }
}

export class ClientWarehouseCompanyOrg extends jspb.Message {
  getId(): string;
  setId(value: string): ClientWarehouseCompanyOrg;

  getClientId(): string;
  setClientId(value: string): ClientWarehouseCompanyOrg;

  getCompanyId(): string;
  setCompanyId(value: string): ClientWarehouseCompanyOrg;

  getWarehouseId(): string;
  setWarehouseId(value: string): ClientWarehouseCompanyOrg;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientWarehouseCompanyOrg;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ClientWarehouseCompanyOrg;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): ClientWarehouseCompanyOrg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientWarehouseCompanyOrg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientWarehouseCompanyOrg): ClientWarehouseCompanyOrg.AsObject;
  static serializeBinaryToWriter(message: ClientWarehouseCompanyOrg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientWarehouseCompanyOrg;
  static deserializeBinaryFromReader(message: ClientWarehouseCompanyOrg, reader: jspb.BinaryReader): ClientWarehouseCompanyOrg;
}

export namespace ClientWarehouseCompanyOrg {
  export type AsObject = {
    id: string,
    clientId: string,
    companyId: string,
    warehouseId: string,
    clientCodeNom: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
  }
}

