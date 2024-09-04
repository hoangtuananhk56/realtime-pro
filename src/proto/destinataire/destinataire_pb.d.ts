import * as jspb from 'google-protobuf'



export class ClientDestinataire extends jspb.Message {
  getId(): string;
  setId(value: string): ClientDestinataire;

  getCreateAt(): number;
  setCreateAt(value: number): ClientDestinataire;

  getUpdateAt(): number;
  setUpdateAt(value: number): ClientDestinataire;

  getDestinataireCode(): string;
  setDestinataireCode(value: string): ClientDestinataire;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientDestinataire;

  getClientId(): string;
  setClientId(value: string): ClientDestinataire;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientDestinataire.AsObject;
  static toObject(includeInstance: boolean, msg: ClientDestinataire): ClientDestinataire.AsObject;
  static serializeBinaryToWriter(message: ClientDestinataire, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientDestinataire;
  static deserializeBinaryFromReader(message: ClientDestinataire, reader: jspb.BinaryReader): ClientDestinataire;
}

export namespace ClientDestinataire {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    destinataireCode: string,
    clientCodeNom: string,
    clientId: string,
  }
}

export class Destinataire extends jspb.Message {
  getId(): string;
  setId(value: string): Destinataire;

  getCreatedAt(): number;
  setCreatedAt(value: number): Destinataire;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Destinataire;

  getNom(): string;
  setNom(value: string): Destinataire;

  getAddresseList(): Array<DesAddresse>;
  setAddresseList(value: Array<DesAddresse>): Destinataire;
  clearAddresseList(): Destinataire;
  addAddresse(value?: DesAddresse, index?: number): DesAddresse;

  getContactList(): Array<DesContact>;
  setContactList(value: Array<DesContact>): Destinataire;
  clearContactList(): Destinataire;
  addContact(value?: DesContact, index?: number): DesContact;

  getCode(): string;
  setCode(value: string): Destinataire;

  getNomRetourDate(): boolean;
  setNomRetourDate(value: boolean): Destinataire;

  getClientDestinataireList(): Array<ClientDestinataire>;
  setClientDestinataireList(value: Array<ClientDestinataire>): Destinataire;
  clearClientDestinataireList(): Destinataire;
  addClientDestinataire(value?: ClientDestinataire, index?: number): ClientDestinataire;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Destinataire.AsObject;
  static toObject(includeInstance: boolean, msg: Destinataire): Destinataire.AsObject;
  static serializeBinaryToWriter(message: Destinataire, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Destinataire;
  static deserializeBinaryFromReader(message: Destinataire, reader: jspb.BinaryReader): Destinataire;
}

export namespace Destinataire {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    nom: string,
    addresseList: Array<DesAddresse.AsObject>,
    contactList: Array<DesContact.AsObject>,
    code: string,
    nomRetourDate: boolean,
    clientDestinataireList: Array<ClientDestinataire.AsObject>,
  }
}

export class DesAddresse extends jspb.Message {
  getId(): string;
  setId(value: string): DesAddresse;

  getCreatedAt(): number;
  setCreatedAt(value: number): DesAddresse;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): DesAddresse;

  getAddresse(): string;
  setAddresse(value: string): DesAddresse;

  getCodePostal(): string;
  setCodePostal(value: string): DesAddresse;

  getVille(): string;
  setVille(value: string): DesAddresse;

  getPays(): string;
  setPays(value: string): DesAddresse;

  getGln(): string;
  setGln(value: string): DesAddresse;

  getDestinataireId(): string;
  setDestinataireId(value: string): DesAddresse;

  getComplement(): string;
  setComplement(value: string): DesAddresse;

  getIso(): string;
  setIso(value: string): DesAddresse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DesAddresse.AsObject;
  static toObject(includeInstance: boolean, msg: DesAddresse): DesAddresse.AsObject;
  static serializeBinaryToWriter(message: DesAddresse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DesAddresse;
  static deserializeBinaryFromReader(message: DesAddresse, reader: jspb.BinaryReader): DesAddresse;
}

export namespace DesAddresse {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    addresse: string,
    codePostal: string,
    ville: string,
    pays: string,
    gln: string,
    destinataireId: string,
    complement: string,
    iso: string,
  }
}

export class DesContact extends jspb.Message {
  getId(): string;
  setId(value: string): DesContact;

  getCreatedAt(): number;
  setCreatedAt(value: number): DesContact;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): DesContact;

  getNom(): string;
  setNom(value: string): DesContact;

  getTel(): string;
  setTel(value: string): DesContact;

  getMobile(): string;
  setMobile(value: string): DesContact;

  getEmail(): string;
  setEmail(value: string): DesContact;

  getDestinataireId(): string;
  setDestinataireId(value: string): DesContact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DesContact.AsObject;
  static toObject(includeInstance: boolean, msg: DesContact): DesContact.AsObject;
  static serializeBinaryToWriter(message: DesContact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DesContact;
  static deserializeBinaryFromReader(message: DesContact, reader: jspb.BinaryReader): DesContact;
}

export namespace DesContact {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    nom: string,
    tel: string,
    mobile: string,
    email: string,
    destinataireId: string,
  }
}

