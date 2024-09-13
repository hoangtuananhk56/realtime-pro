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
  hasRupture(): boolean;
  clearRupture(): Client;

  getVariantes(): boolean;
  setVariantes(value: boolean): Client;
  hasVariantes(): boolean;
  clearVariantes(): Client;

  getFifo(): boolean;
  setFifo(value: boolean): Client;
  hasFifo(): boolean;
  clearFifo(): Client;

  getFefo(): boolean;
  setFefo(value: boolean): Client;
  hasFefo(): boolean;
  clearFefo(): Client;

  getTypesCdn(): boolean;
  setTypesCdn(value: boolean): Client;
  hasTypesCdn(): boolean;
  clearTypesCdn(): Client;

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
  hasMoisDluoActivate(): boolean;
  clearMoisDluoActivate(): Client;

  getMoisDluoInput(): number;
  setMoisDluoInput(value: number): Client;

  getMultiBl(): boolean;
  setMultiBl(value: boolean): Client;
  hasMultiBl(): boolean;
  clearMultiBl(): Client;

  getEtiquettes(): boolean;
  setEtiquettes(value: boolean): Client;
  hasEtiquettes(): boolean;
  clearEtiquettes(): Client;

  getSupports(): boolean;
  setSupports(value: boolean): Client;
  hasSupports(): boolean;
  clearSupports(): Client;

  getSauvegardeSupport(): boolean;
  setSauvegardeSupport(value: boolean): Client;
  hasSauvegardeSupport(): boolean;
  clearSauvegardeSupport(): Client;

  getSupportReception(): boolean;
  setSupportReception(value: boolean): Client;
  hasSupportReception(): boolean;
  clearSupportReception(): Client;

  getReapproPartiel(): boolean;
  setReapproPartiel(value: boolean): Client;
  hasReapproPartiel(): boolean;
  clearReapproPartiel(): Client;

  getRespectHauteurPalette(): boolean;
  setRespectHauteurPalette(value: boolean): Client;
  hasRespectHauteurPalette(): boolean;
  clearRespectHauteurPalette(): Client;

  getIsDel(): boolean;
  setIsDel(value: boolean): Client;
  hasIsDel(): boolean;
  clearIsDel(): Client;

  getClientWarehouseCompanyOrgList(): Array<ClientWarehouseCompanyOrg>;
  setClientWarehouseCompanyOrgList(value: Array<ClientWarehouseCompanyOrg>): Client;
  clearClientWarehouseCompanyOrgList(): Client;
  addClientWarehouseCompanyOrg(value?: ClientWarehouseCompanyOrg, index?: number): ClientWarehouseCompanyOrg;

  getPriorityPicking(): boolean;
  setPriorityPicking(value: boolean): Client;
  hasPriorityPicking(): boolean;
  clearPriorityPicking(): Client;

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
    rupture?: boolean,
    variantes?: boolean,
    fifo?: boolean,
    fefo?: boolean,
    typesCdn?: boolean,
    alerteDluo: number,
    clientCompanyList: Array<ClientCompany.AsObject>,
    warehouseClientList: Array<WarehouseClient.AsObject>,
    clientWarehouseCompanyList: Array<ClientWarehouseCompany.AsObject>,
    email: string,
    moisDluoActivate?: boolean,
    moisDluoInput: number,
    multiBl?: boolean,
    etiquettes?: boolean,
    supports?: boolean,
    sauvegardeSupport?: boolean,
    supportReception?: boolean,
    reapproPartiel?: boolean,
    respectHauteurPalette?: boolean,
    isDel?: boolean,
    clientWarehouseCompanyOrgList: Array<ClientWarehouseCompanyOrg.AsObject>,
    priorityPicking?: boolean,
  }

  export enum RuptureCase { 
    _RUPTURE_NOT_SET = 0,
    RUPTURE = 14,
  }

  export enum VariantesCase { 
    _VARIANTES_NOT_SET = 0,
    VARIANTES = 15,
  }

  export enum FifoCase { 
    _FIFO_NOT_SET = 0,
    FIFO = 16,
  }

  export enum FefoCase { 
    _FEFO_NOT_SET = 0,
    FEFO = 17,
  }

  export enum TypesCdnCase { 
    _TYPES_CDN_NOT_SET = 0,
    TYPES_CDN = 18,
  }

  export enum MoisDluoActivateCase { 
    _MOIS_DLUO_ACTIVATE_NOT_SET = 0,
    MOIS_DLUO_ACTIVATE = 24,
  }

  export enum MultiBlCase { 
    _MULTI_BL_NOT_SET = 0,
    MULTI_BL = 26,
  }

  export enum EtiquettesCase { 
    _ETIQUETTES_NOT_SET = 0,
    ETIQUETTES = 27,
  }

  export enum SupportsCase { 
    _SUPPORTS_NOT_SET = 0,
    SUPPORTS = 28,
  }

  export enum SauvegardeSupportCase { 
    _SAUVEGARDE_SUPPORT_NOT_SET = 0,
    SAUVEGARDE_SUPPORT = 29,
  }

  export enum SupportReceptionCase { 
    _SUPPORT_RECEPTION_NOT_SET = 0,
    SUPPORT_RECEPTION = 30,
  }

  export enum ReapproPartielCase { 
    _REAPPRO_PARTIEL_NOT_SET = 0,
    REAPPRO_PARTIEL = 31,
  }

  export enum RespectHauteurPaletteCase { 
    _RESPECT_HAUTEUR_PALETTE_NOT_SET = 0,
    RESPECT_HAUTEUR_PALETTE = 32,
  }

  export enum IsDelCase { 
    _IS_DEL_NOT_SET = 0,
    IS_DEL = 33,
  }

  export enum PriorityPickingCase { 
    _PRIORITY_PICKING_NOT_SET = 0,
    PRIORITY_PICKING = 35,
  }
}

export class ClientSwag extends jspb.Message {
  getNom(): string;
  setNom(value: string): ClientSwag;

  getAdresse(): string;
  setAdresse(value: string): ClientSwag;

  getTel(): string;
  setTel(value: string): ClientSwag;

  getFax(): string;
  setFax(value: string): ClientSwag;

  getDetail(): string;
  setDetail(value: string): ClientSwag;

  getContact(): string;
  setContact(value: string): ClientSwag;

  getCode(): string;
  setCode(value: string): ClientSwag;

  getCurrentSsccValue(): number;
  setCurrentSsccValue(value: number): ClientSwag;

  getPreCode(): string;
  setPreCode(value: string): ClientSwag;

  getCodeNom(): string;
  setCodeNom(value: string): ClientSwag;

  getRupture(): boolean;
  setRupture(value: boolean): ClientSwag;

  getVariantes(): boolean;
  setVariantes(value: boolean): ClientSwag;

  getFifo(): boolean;
  setFifo(value: boolean): ClientSwag;

  getFefo(): boolean;
  setFefo(value: boolean): ClientSwag;

  getTypesCdn(): boolean;
  setTypesCdn(value: boolean): ClientSwag;

  getAlerteDluo(): number;
  setAlerteDluo(value: number): ClientSwag;

  getClientCompanyList(): Array<ClientCompany>;
  setClientCompanyList(value: Array<ClientCompany>): ClientSwag;
  clearClientCompanyList(): ClientSwag;
  addClientCompany(value?: ClientCompany, index?: number): ClientCompany;

  getWarehouseClientList(): Array<WarehouseClient>;
  setWarehouseClientList(value: Array<WarehouseClient>): ClientSwag;
  clearWarehouseClientList(): ClientSwag;
  addWarehouseClient(value?: WarehouseClient, index?: number): WarehouseClient;

  getMoisDluoActivate(): boolean;
  setMoisDluoActivate(value: boolean): ClientSwag;

  getMoisDluoInput(): number;
  setMoisDluoInput(value: number): ClientSwag;

  getMultiBl(): boolean;
  setMultiBl(value: boolean): ClientSwag;

  getEtiquettes(): boolean;
  setEtiquettes(value: boolean): ClientSwag;

  getSupports(): boolean;
  setSupports(value: boolean): ClientSwag;

  getSauvegardeSupport(): boolean;
  setSauvegardeSupport(value: boolean): ClientSwag;

  getSupportReception(): boolean;
  setSupportReception(value: boolean): ClientSwag;

  getReapproPartiel(): boolean;
  setReapproPartiel(value: boolean): ClientSwag;

  getRespectHauteurPalette(): boolean;
  setRespectHauteurPalette(value: boolean): ClientSwag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientSwag.AsObject;
  static toObject(includeInstance: boolean, msg: ClientSwag): ClientSwag.AsObject;
  static serializeBinaryToWriter(message: ClientSwag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientSwag;
  static deserializeBinaryFromReader(message: ClientSwag, reader: jspb.BinaryReader): ClientSwag;
}

export namespace ClientSwag {
  export type AsObject = {
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
    moisDluoActivate: boolean,
    moisDluoInput: number,
    multiBl: boolean,
    etiquettes: boolean,
    supports: boolean,
    sauvegardeSupport: boolean,
    supportReception: boolean,
    reapproPartiel: boolean,
    respectHauteurPalette: boolean,
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

  getCompanyCodeNom(): number;
  setCompanyCodeNom(value: number): ClientWarehouseCompany;

  getClientCodeNom(): number;
  setClientCodeNom(value: number): ClientWarehouseCompany;

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
    companyCodeNom: number,
    clientCodeNom: number,
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

export class CreateRequest extends jspb.Message {
  getEntry(): Client | undefined;
  setEntry(value?: Client): CreateRequest;
  hasEntry(): boolean;
  clearEntry(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    entry?: Client.AsObject,
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

export class GetByCodeNomRequest extends jspb.Message {
  getCodeNom(): string;
  setCodeNom(value: string): GetByCodeNomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByCodeNomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByCodeNomRequest): GetByCodeNomRequest.AsObject;
  static serializeBinaryToWriter(message: GetByCodeNomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByCodeNomRequest;
  static deserializeBinaryFromReader(message: GetByCodeNomRequest, reader: jspb.BinaryReader): GetByCodeNomRequest;
}

export namespace GetByCodeNomRequest {
  export type AsObject = {
    codeNom: string,
  }
}

export class Response extends jspb.Message {
  getEntry(): Client | undefined;
  setEntry(value?: Client): Response;
  hasEntry(): boolean;
  clearEntry(): Response;

  getMessageerror(): string;
  setMessageerror(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    entry?: Client.AsObject,
    messageerror: string,
  }
}

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

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
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Client>;
  setEntryList(value: Array<Client>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Client, index?: number): Client;

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
    entryList: Array<Client.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class GetCompanyForCreateRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetCompanyForCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyForCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyForCreateRequest): GetCompanyForCreateRequest.AsObject;
  static serializeBinaryToWriter(message: GetCompanyForCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyForCreateRequest;
  static deserializeBinaryFromReader(message: GetCompanyForCreateRequest, reader: jspb.BinaryReader): GetCompanyForCreateRequest;
}

export namespace GetCompanyForCreateRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetCompanyForCreateResponse extends jspb.Message {
  getEntryList(): Array<WarehouseCompany>;
  setEntryList(value: Array<WarehouseCompany>): GetCompanyForCreateResponse;
  clearEntryList(): GetCompanyForCreateResponse;
  addEntry(value?: WarehouseCompany, index?: number): WarehouseCompany;

  getMessageerror(): string;
  setMessageerror(value: string): GetCompanyForCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyForCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyForCreateResponse): GetCompanyForCreateResponse.AsObject;
  static serializeBinaryToWriter(message: GetCompanyForCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyForCreateResponse;
  static deserializeBinaryFromReader(message: GetCompanyForCreateResponse, reader: jspb.BinaryReader): GetCompanyForCreateResponse;
}

export namespace GetCompanyForCreateResponse {
  export type AsObject = {
    entryList: Array<WarehouseCompany.AsObject>,
    messageerror: string,
  }
}

export class GetAllClientRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllClientRequest;

  getOffset(): number;
  setOffset(value: number): GetAllClientRequest;

  getRole(): string;
  setRole(value: string): GetAllClientRequest;

  getUserId(): string;
  setUserId(value: string): GetAllClientRequest;

  getArraypayloadList(): Array<CompanyWarehouseArrayPayload>;
  setArraypayloadList(value: Array<CompanyWarehouseArrayPayload>): GetAllClientRequest;
  clearArraypayloadList(): GetAllClientRequest;
  addArraypayload(value?: CompanyWarehouseArrayPayload, index?: number): CompanyWarehouseArrayPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllClientRequest): GetAllClientRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllClientRequest;
  static deserializeBinaryFromReader(message: GetAllClientRequest, reader: jspb.BinaryReader): GetAllClientRequest;
}

export namespace GetAllClientRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    role: string,
    userId: string,
    arraypayloadList: Array<CompanyWarehouseArrayPayload.AsObject>,
  }
}

export class CompanyWarehouseArrayPayload extends jspb.Message {
  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): CompanyWarehouseArrayPayload;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): CompanyWarehouseArrayPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyWarehouseArrayPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyWarehouseArrayPayload): CompanyWarehouseArrayPayload.AsObject;
  static serializeBinaryToWriter(message: CompanyWarehouseArrayPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyWarehouseArrayPayload;
  static deserializeBinaryFromReader(message: CompanyWarehouseArrayPayload, reader: jspb.BinaryReader): CompanyWarehouseArrayPayload;
}

export namespace CompanyWarehouseArrayPayload {
  export type AsObject = {
    companyCodeNom: string,
    warehouseCodeNom: string,
  }
}

export class CommonItemResponse extends jspb.Message {
  getCodeNom(): string;
  setCodeNom(value: string): CommonItemResponse;

  getId(): string;
  setId(value: string): CommonItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonItemResponse): CommonItemResponse.AsObject;
  static serializeBinaryToWriter(message: CommonItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonItemResponse;
  static deserializeBinaryFromReader(message: CommonItemResponse, reader: jspb.BinaryReader): CommonItemResponse;
}

export namespace CommonItemResponse {
  export type AsObject = {
    codeNom: string,
    id: string,
  }
}

export class ClientArrayResponse extends jspb.Message {
  getEntryList(): Array<UserSettingRespponse>;
  setEntryList(value: Array<UserSettingRespponse>): ClientArrayResponse;
  clearEntryList(): ClientArrayResponse;
  addEntry(value?: UserSettingRespponse, index?: number): UserSettingRespponse;

  getMessageerror(): string;
  setMessageerror(value: string): ClientArrayResponse;

  getMetaData(): MetaData | undefined;
  setMetaData(value?: MetaData): ClientArrayResponse;
  hasMetaData(): boolean;
  clearMetaData(): ClientArrayResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientArrayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClientArrayResponse): ClientArrayResponse.AsObject;
  static serializeBinaryToWriter(message: ClientArrayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientArrayResponse;
  static deserializeBinaryFromReader(message: ClientArrayResponse, reader: jspb.BinaryReader): ClientArrayResponse;
}

export namespace ClientArrayResponse {
  export type AsObject = {
    entryList: Array<UserSettingRespponse.AsObject>,
    messageerror: string,
    metaData?: MetaData.AsObject,
  }
}

export class UserSettingRespponse extends jspb.Message {
  getClient(): CommonItemResponse | undefined;
  setClient(value?: CommonItemResponse): UserSettingRespponse;
  hasClient(): boolean;
  clearClient(): UserSettingRespponse;

  getCompany(): CommonItemResponse | undefined;
  setCompany(value?: CommonItemResponse): UserSettingRespponse;
  hasCompany(): boolean;
  clearCompany(): UserSettingRespponse;

  getWarehouse(): CommonItemResponse | undefined;
  setWarehouse(value?: CommonItemResponse): UserSettingRespponse;
  hasWarehouse(): boolean;
  clearWarehouse(): UserSettingRespponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSettingRespponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserSettingRespponse): UserSettingRespponse.AsObject;
  static serializeBinaryToWriter(message: UserSettingRespponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSettingRespponse;
  static deserializeBinaryFromReader(message: UserSettingRespponse, reader: jspb.BinaryReader): UserSettingRespponse;
}

export namespace UserSettingRespponse {
  export type AsObject = {
    client?: CommonItemResponse.AsObject,
    company?: CommonItemResponse.AsObject,
    warehouse?: CommonItemResponse.AsObject,
  }
}

export class GetAllCompanyWarehouseRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllCompanyWarehouseRequest;

  getOffset(): number;
  setOffset(value: number): GetAllCompanyWarehouseRequest;

  getRole(): string;
  setRole(value: string): GetAllCompanyWarehouseRequest;

  getUserId(): string;
  setUserId(value: string): GetAllCompanyWarehouseRequest;

  getArraypayloadList(): Array<string>;
  setArraypayloadList(value: Array<string>): GetAllCompanyWarehouseRequest;
  clearArraypayloadList(): GetAllCompanyWarehouseRequest;
  addArraypayload(value: string, index?: number): GetAllCompanyWarehouseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompanyWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompanyWarehouseRequest): GetAllCompanyWarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllCompanyWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompanyWarehouseRequest;
  static deserializeBinaryFromReader(message: GetAllCompanyWarehouseRequest, reader: jspb.BinaryReader): GetAllCompanyWarehouseRequest;
}

export namespace GetAllCompanyWarehouseRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    role: string,
    userId: string,
    arraypayloadList: Array<string>,
  }
}

export class GetByContentRequest extends jspb.Message {
  getPaging(): number;
  setPaging(value: number): GetByContentRequest;

  getPageSize(): number;
  setPageSize(value: number): GetByContentRequest;

  getContent(): string;
  setContent(value: string): GetByContentRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetByContentRequest;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetByContentRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetByContentRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetByContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByContentRequest): GetByContentRequest.AsObject;
  static serializeBinaryToWriter(message: GetByContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByContentRequest;
  static deserializeBinaryFromReader(message: GetByContentRequest, reader: jspb.BinaryReader): GetByContentRequest;
}

export namespace GetByContentRequest {
  export type AsObject = {
    paging: number,
    pageSize: number,
    content: string,
    warehouseCodeNom: string,
    companyCodeNom: string,
    warehouseId: string,
    companyId: string,
  }
}

export class ClientMinimalDetail extends jspb.Message {
  getId(): string;
  setId(value: string): ClientMinimalDetail;

  getCodeNom(): string;
  setCodeNom(value: string): ClientMinimalDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMinimalDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMinimalDetail): ClientMinimalDetail.AsObject;
  static serializeBinaryToWriter(message: ClientMinimalDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMinimalDetail;
  static deserializeBinaryFromReader(message: ClientMinimalDetail, reader: jspb.BinaryReader): ClientMinimalDetail;
}

export namespace ClientMinimalDetail {
  export type AsObject = {
    id: string,
    codeNom: string,
  }
}

export class GetByContentResponse extends jspb.Message {
  getClientCodeNomsList(): Array<string>;
  setClientCodeNomsList(value: Array<string>): GetByContentResponse;
  clearClientCodeNomsList(): GetByContentResponse;
  addClientCodeNoms(value: string, index?: number): GetByContentResponse;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetByContentResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetByContentResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetByContentResponse;

  getClientIdsList(): Array<string>;
  setClientIdsList(value: Array<string>): GetByContentResponse;
  clearClientIdsList(): GetByContentResponse;
  addClientIds(value: string, index?: number): GetByContentResponse;

  getClientList(): Array<ClientMinimalDetail>;
  setClientList(value: Array<ClientMinimalDetail>): GetByContentResponse;
  clearClientList(): GetByContentResponse;
  addClient(value?: ClientMinimalDetail, index?: number): ClientMinimalDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByContentResponse): GetByContentResponse.AsObject;
  static serializeBinaryToWriter(message: GetByContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByContentResponse;
  static deserializeBinaryFromReader(message: GetByContentResponse, reader: jspb.BinaryReader): GetByContentResponse;
}

export namespace GetByContentResponse {
  export type AsObject = {
    clientCodeNomsList: Array<string>,
    metadata?: MetaData.AsObject,
    messageerror: string,
    clientIdsList: Array<string>,
    clientList: Array<ClientMinimalDetail.AsObject>,
  }
}

export class ListClientByCompanyIdsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListClientByCompanyIdsRequest;

  getPage(): number;
  setPage(value: number): ListClientByCompanyIdsRequest;

  getCompanyIdsList(): Array<string>;
  setCompanyIdsList(value: Array<string>): ListClientByCompanyIdsRequest;
  clearCompanyIdsList(): ListClientByCompanyIdsRequest;
  addCompanyIds(value: string, index?: number): ListClientByCompanyIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientByCompanyIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientByCompanyIdsRequest): ListClientByCompanyIdsRequest.AsObject;
  static serializeBinaryToWriter(message: ListClientByCompanyIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientByCompanyIdsRequest;
  static deserializeBinaryFromReader(message: ListClientByCompanyIdsRequest, reader: jspb.BinaryReader): ListClientByCompanyIdsRequest;
}

export namespace ListClientByCompanyIdsRequest {
  export type AsObject = {
    limit: number,
    page: number,
    companyIdsList: Array<string>,
  }
}

export class ClientInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ClientInfo;

  getCodeNom(): string;
  setCodeNom(value: string): ClientInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfo): ClientInfo.AsObject;
  static serializeBinaryToWriter(message: ClientInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfo;
  static deserializeBinaryFromReader(message: ClientInfo, reader: jspb.BinaryReader): ClientInfo;
}

export namespace ClientInfo {
  export type AsObject = {
    id: string,
    codeNom: string,
  }
}

export class ListClientByCompanyIdsResponse extends jspb.Message {
  getListList(): Array<ClientInfo>;
  setListList(value: Array<ClientInfo>): ListClientByCompanyIdsResponse;
  clearListList(): ListClientByCompanyIdsResponse;
  addList(value?: ClientInfo, index?: number): ClientInfo;

  getMessageerror(): string;
  setMessageerror(value: string): ListClientByCompanyIdsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientByCompanyIdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientByCompanyIdsResponse): ListClientByCompanyIdsResponse.AsObject;
  static serializeBinaryToWriter(message: ListClientByCompanyIdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientByCompanyIdsResponse;
  static deserializeBinaryFromReader(message: ListClientByCompanyIdsResponse, reader: jspb.BinaryReader): ListClientByCompanyIdsResponse;
}

export namespace ListClientByCompanyIdsResponse {
  export type AsObject = {
    listList: Array<ClientInfo.AsObject>,
    messageerror: string,
  }
}

export class UpdateOneRequest extends jspb.Message {
  getClient(): Client | undefined;
  setClient(value?: Client): UpdateOneRequest;
  hasClient(): boolean;
  clearClient(): UpdateOneRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): UpdateOneRequest;
  clearIdsList(): UpdateOneRequest;
  addIds(value: string, index?: number): UpdateOneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOneRequest): UpdateOneRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOneRequest;
  static deserializeBinaryFromReader(message: UpdateOneRequest, reader: jspb.BinaryReader): UpdateOneRequest;
}

export namespace UpdateOneRequest {
  export type AsObject = {
    client?: Client.AsObject,
    idsList: Array<string>,
  }
}

export class UpdateResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): UpdateResponse;

  getStatus(): string;
  setStatus(value: string): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    messageerror: string,
    status: string,
  }
}

export class DeleteOneRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteOneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOneRequest): DeleteOneRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOneRequest;
  static deserializeBinaryFromReader(message: DeleteOneRequest, reader: jspb.BinaryReader): DeleteOneRequest;
}

export namespace DeleteOneRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteManyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteManyRequest;
  clearIdsList(): DeleteManyRequest;
  addIds(value: string, index?: number): DeleteManyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteManyRequest): DeleteManyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteManyRequest;
  static deserializeBinaryFromReader(message: DeleteManyRequest, reader: jspb.BinaryReader): DeleteManyRequest;
}

export namespace DeleteManyRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class DeleteResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): DeleteResponse;

  getStatus(): string;
  setStatus(value: string): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    messageerror: string,
    status: string,
  }
}

