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

