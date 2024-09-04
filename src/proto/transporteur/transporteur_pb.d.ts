import * as jspb from 'google-protobuf'



export class ClientTransporteur extends jspb.Message {
  getId(): string;
  setId(value: string): ClientTransporteur;

  getCreateAt(): number;
  setCreateAt(value: number): ClientTransporteur;

  getUpdateAt(): number;
  setUpdateAt(value: number): ClientTransporteur;

  getTransporteurCode(): string;
  setTransporteurCode(value: string): ClientTransporteur;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ClientTransporteur;

  getClientId(): string;
  setClientId(value: string): ClientTransporteur;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientTransporteur.AsObject;
  static toObject(includeInstance: boolean, msg: ClientTransporteur): ClientTransporteur.AsObject;
  static serializeBinaryToWriter(message: ClientTransporteur, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientTransporteur;
  static deserializeBinaryFromReader(message: ClientTransporteur, reader: jspb.BinaryReader): ClientTransporteur;
}

export namespace ClientTransporteur {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    transporteurCode: string,
    clientCodeNom: string,
    clientId: string,
  }
}

export class Transporteur extends jspb.Message {
  getId(): string;
  setId(value: string): Transporteur;

  getCreateAt(): number;
  setCreateAt(value: number): Transporteur;

  getUpdateAt(): number;
  setUpdateAt(value: number): Transporteur;

  getNom(): string;
  setNom(value: string): Transporteur;

  getAddresseList(): Array<TranAddresse>;
  setAddresseList(value: Array<TranAddresse>): Transporteur;
  clearAddresseList(): Transporteur;
  addAddresse(value?: TranAddresse, index?: number): TranAddresse;

  getContactList(): Array<TranContact>;
  setContactList(value: Array<TranContact>): Transporteur;
  clearContactList(): Transporteur;
  addContact(value?: TranContact, index?: number): TranContact;

  getCode(): string;
  setCode(value: string): Transporteur;

  getRelay(): boolean;
  setRelay(value: boolean): Transporteur;

  getSaisirCamion(): boolean;
  setSaisirCamion(value: boolean): Transporteur;

  getClientTransporteurList(): Array<ClientTransporteur>;
  setClientTransporteurList(value: Array<ClientTransporteur>): Transporteur;
  clearClientTransporteurList(): Transporteur;
  addClientTransporteur(value?: ClientTransporteur, index?: number): ClientTransporteur;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transporteur.AsObject;
  static toObject(includeInstance: boolean, msg: Transporteur): Transporteur.AsObject;
  static serializeBinaryToWriter(message: Transporteur, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transporteur;
  static deserializeBinaryFromReader(message: Transporteur, reader: jspb.BinaryReader): Transporteur;
}

export namespace Transporteur {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    nom: string,
    addresseList: Array<TranAddresse.AsObject>,
    contactList: Array<TranContact.AsObject>,
    code: string,
    relay: boolean,
    saisirCamion: boolean,
    clientTransporteurList: Array<ClientTransporteur.AsObject>,
  }
}

export class TranAddresse extends jspb.Message {
  getId(): string;
  setId(value: string): TranAddresse;

  getCreateAt(): number;
  setCreateAt(value: number): TranAddresse;

  getUpdateAt(): number;
  setUpdateAt(value: number): TranAddresse;

  getAddresse(): string;
  setAddresse(value: string): TranAddresse;

  getCodePostal(): string;
  setCodePostal(value: string): TranAddresse;

  getVille(): string;
  setVille(value: string): TranAddresse;

  getPays(): string;
  setPays(value: string): TranAddresse;

  getGln(): string;
  setGln(value: string): TranAddresse;

  getTransporteurId(): string;
  setTransporteurId(value: string): TranAddresse;

  getComplement(): string;
  setComplement(value: string): TranAddresse;

  getIso(): string;
  setIso(value: string): TranAddresse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranAddresse.AsObject;
  static toObject(includeInstance: boolean, msg: TranAddresse): TranAddresse.AsObject;
  static serializeBinaryToWriter(message: TranAddresse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranAddresse;
  static deserializeBinaryFromReader(message: TranAddresse, reader: jspb.BinaryReader): TranAddresse;
}

export namespace TranAddresse {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    addresse: string,
    codePostal: string,
    ville: string,
    pays: string,
    gln: string,
    transporteurId: string,
    complement: string,
    iso: string,
  }
}

export class TranContact extends jspb.Message {
  getId(): string;
  setId(value: string): TranContact;

  getCreateAt(): number;
  setCreateAt(value: number): TranContact;

  getUpdateAt(): number;
  setUpdateAt(value: number): TranContact;

  getNom(): string;
  setNom(value: string): TranContact;

  getTel(): string;
  setTel(value: string): TranContact;

  getMobile(): string;
  setMobile(value: string): TranContact;

  getEmail(): string;
  setEmail(value: string): TranContact;

  getTransporteurId(): string;
  setTransporteurId(value: string): TranContact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranContact.AsObject;
  static toObject(includeInstance: boolean, msg: TranContact): TranContact.AsObject;
  static serializeBinaryToWriter(message: TranContact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranContact;
  static deserializeBinaryFromReader(message: TranContact, reader: jspb.BinaryReader): TranContact;
}

export namespace TranContact {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    nom: string,
    tel: string,
    mobile: string,
    email: string,
    transporteurId: string,
  }
}

