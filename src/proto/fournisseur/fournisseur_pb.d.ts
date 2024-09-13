import * as jspb from 'google-protobuf'



export class ClientFournisseur extends jspb.Message {
  getId(): string;
  setId(value: string): ClientFournisseur;

  getCreateAt(): number;
  setCreateAt(value: number): ClientFournisseur;

  getUpdateAt(): number;
  setUpdateAt(value: number): ClientFournisseur;

  getFournisseurCode(): string;
  setFournisseurCode(value: string): ClientFournisseur;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientFournisseur;

  getClientId(): string;
  setClientId(value: string): ClientFournisseur;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientFournisseur.AsObject;
  static toObject(includeInstance: boolean, msg: ClientFournisseur): ClientFournisseur.AsObject;
  static serializeBinaryToWriter(message: ClientFournisseur, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientFournisseur;
  static deserializeBinaryFromReader(message: ClientFournisseur, reader: jspb.BinaryReader): ClientFournisseur;
}

export namespace ClientFournisseur {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    fournisseurCode: string,
    clientCodeNom: string,
    clientId: string,
  }
}

export class Fournisseur extends jspb.Message {
  getId(): string;
  setId(value: string): Fournisseur;

  getCreateAt(): number;
  setCreateAt(value: number): Fournisseur;

  getUpdateAt(): number;
  setUpdateAt(value: number): Fournisseur;

  getNom(): string;
  setNom(value: string): Fournisseur;

  getAddresseList(): Array<FouAddresse>;
  setAddresseList(value: Array<FouAddresse>): Fournisseur;
  clearAddresseList(): Fournisseur;
  addAddresse(value?: FouAddresse, index?: number): FouAddresse;

  getContactList(): Array<FouContact>;
  setContactList(value: Array<FouContact>): Fournisseur;
  clearContactList(): Fournisseur;
  addContact(value?: FouContact, index?: number): FouContact;

  getCode(): string;
  setCode(value: string): Fournisseur;

  getClientFournisseurList(): Array<ClientFournisseur>;
  setClientFournisseurList(value: Array<ClientFournisseur>): Fournisseur;
  clearClientFournisseurList(): Fournisseur;
  addClientFournisseur(value?: ClientFournisseur, index?: number): ClientFournisseur;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fournisseur.AsObject;
  static toObject(includeInstance: boolean, msg: Fournisseur): Fournisseur.AsObject;
  static serializeBinaryToWriter(message: Fournisseur, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fournisseur;
  static deserializeBinaryFromReader(message: Fournisseur, reader: jspb.BinaryReader): Fournisseur;
}

export namespace Fournisseur {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    nom: string,
    addresseList: Array<FouAddresse.AsObject>,
    contactList: Array<FouContact.AsObject>,
    code: string,
    clientFournisseurList: Array<ClientFournisseur.AsObject>,
  }
}

export class FouAddresse extends jspb.Message {
  getId(): string;
  setId(value: string): FouAddresse;

  getCreateAt(): number;
  setCreateAt(value: number): FouAddresse;

  getUpdateAt(): number;
  setUpdateAt(value: number): FouAddresse;

  getAddresse(): string;
  setAddresse(value: string): FouAddresse;

  getCodePostal(): string;
  setCodePostal(value: string): FouAddresse;

  getVille(): string;
  setVille(value: string): FouAddresse;

  getPays(): string;
  setPays(value: string): FouAddresse;

  getGln(): string;
  setGln(value: string): FouAddresse;

  getFournisseurId(): string;
  setFournisseurId(value: string): FouAddresse;

  getComplement(): string;
  setComplement(value: string): FouAddresse;

  getIso(): string;
  setIso(value: string): FouAddresse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FouAddresse.AsObject;
  static toObject(includeInstance: boolean, msg: FouAddresse): FouAddresse.AsObject;
  static serializeBinaryToWriter(message: FouAddresse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FouAddresse;
  static deserializeBinaryFromReader(message: FouAddresse, reader: jspb.BinaryReader): FouAddresse;
}

export namespace FouAddresse {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    addresse: string,
    codePostal: string,
    ville: string,
    pays: string,
    gln: string,
    fournisseurId: string,
    complement: string,
    iso: string,
  }
}

export class FouContact extends jspb.Message {
  getId(): string;
  setId(value: string): FouContact;

  getCreateAt(): number;
  setCreateAt(value: number): FouContact;

  getUpdateAt(): number;
  setUpdateAt(value: number): FouContact;

  getNom(): string;
  setNom(value: string): FouContact;

  getTel(): string;
  setTel(value: string): FouContact;

  getMobile(): string;
  setMobile(value: string): FouContact;

  getEmail(): string;
  setEmail(value: string): FouContact;

  getFournisseurId(): string;
  setFournisseurId(value: string): FouContact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FouContact.AsObject;
  static toObject(includeInstance: boolean, msg: FouContact): FouContact.AsObject;
  static serializeBinaryToWriter(message: FouContact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FouContact;
  static deserializeBinaryFromReader(message: FouContact, reader: jspb.BinaryReader): FouContact;
}

export namespace FouContact {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    nom: string,
    tel: string,
    mobile: string,
    email: string,
    fournisseurId: string,
  }
}

export class GetByIdElementRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetByIdElementRequest;

  getIdContact(): string;
  setIdContact(value: string): GetByIdElementRequest;

  getIdAddress(): string;
  setIdAddress(value: string): GetByIdElementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByIdElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByIdElementRequest): GetByIdElementRequest.AsObject;
  static serializeBinaryToWriter(message: GetByIdElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByIdElementRequest;
  static deserializeBinaryFromReader(message: GetByIdElementRequest, reader: jspb.BinaryReader): GetByIdElementRequest;
}

export namespace GetByIdElementRequest {
  export type AsObject = {
    id: string,
    idContact: string,
    idAddress: string,
  }
}

export class CreateRequest extends jspb.Message {
  getEntry(): Fournisseur | undefined;
  setEntry(value?: Fournisseur): CreateRequest;
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
    entry?: Fournisseur.AsObject,
  }
}

export class GetByCodeRequest extends jspb.Message {
  getData(): string;
  setData(value: string): GetByCodeRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetByCodeRequest;

  getClientId(): string;
  setClientId(value: string): GetByCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByCodeRequest): GetByCodeRequest.AsObject;
  static serializeBinaryToWriter(message: GetByCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByCodeRequest;
  static deserializeBinaryFromReader(message: GetByCodeRequest, reader: jspb.BinaryReader): GetByCodeRequest;
}

export namespace GetByCodeRequest {
  export type AsObject = {
    data: string,
    clientCodeNom: string,
    clientId: string,
  }
}

export class GetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllRequest;
  static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
  export type AsObject = {
  }
}

export class FournisseursResponse extends jspb.Message {
  getEntryList(): Array<Fournisseur>;
  setEntryList(value: Array<Fournisseur>): FournisseursResponse;
  clearEntryList(): FournisseursResponse;
  addEntry(value?: Fournisseur, index?: number): Fournisseur;

  getMessageerror(): string;
  setMessageerror(value: string): FournisseursResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FournisseursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FournisseursResponse): FournisseursResponse.AsObject;
  static serializeBinaryToWriter(message: FournisseursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FournisseursResponse;
  static deserializeBinaryFromReader(message: FournisseursResponse, reader: jspb.BinaryReader): FournisseursResponse;
}

export namespace FournisseursResponse {
  export type AsObject = {
    entryList: Array<Fournisseur.AsObject>,
    messageerror: string,
  }
}

export class IdRefRequest extends jspb.Message {
  getId(): string;
  setId(value: string): IdRefRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRefRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRefRequest): IdRefRequest.AsObject;
  static serializeBinaryToWriter(message: IdRefRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRefRequest;
  static deserializeBinaryFromReader(message: IdRefRequest, reader: jspb.BinaryReader): IdRefRequest;
}

export namespace IdRefRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetByIdsRefRequest extends jspb.Message {
  getIdsrefList(): Array<IdRefRequest>;
  setIdsrefList(value: Array<IdRefRequest>): GetByIdsRefRequest;
  clearIdsrefList(): GetByIdsRefRequest;
  addIdsref(value?: IdRefRequest, index?: number): IdRefRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByIdsRefRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByIdsRefRequest): GetByIdsRefRequest.AsObject;
  static serializeBinaryToWriter(message: GetByIdsRefRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByIdsRefRequest;
  static deserializeBinaryFromReader(message: GetByIdsRefRequest, reader: jspb.BinaryReader): GetByIdsRefRequest;
}

export namespace GetByIdsRefRequest {
  export type AsObject = {
    idsrefList: Array<IdRefRequest.AsObject>,
  }
}

export class CreateResponse extends jspb.Message {
  getEntry(): Fournisseur | undefined;
  setEntry(value?: Fournisseur): CreateResponse;
  hasEntry(): boolean;
  clearEntry(): CreateResponse;

  getMessageerror(): string;
  setMessageerror(value: string): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    entry?: Fournisseur.AsObject,
    messageerror: string,
  }
}

export class GetByNameOrCodeRequest extends jspb.Message {
  getData(): string;
  setData(value: string): GetByNameOrCodeRequest;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): GetByNameOrCodeRequest;

  getClientId(): string;
  setClientId(value: string): GetByNameOrCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByNameOrCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByNameOrCodeRequest): GetByNameOrCodeRequest.AsObject;
  static serializeBinaryToWriter(message: GetByNameOrCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByNameOrCodeRequest;
  static deserializeBinaryFromReader(message: GetByNameOrCodeRequest, reader: jspb.BinaryReader): GetByNameOrCodeRequest;
}

export namespace GetByNameOrCodeRequest {
  export type AsObject = {
    data: string,
    clientCodeNom: string,
    clientId: string,
  }
}

