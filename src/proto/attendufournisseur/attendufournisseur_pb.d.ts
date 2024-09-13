import * as jspb from 'google-protobuf'



export class Attendufournisseur extends jspb.Message {
  getId(): string;
  setId(value: string): Attendufournisseur;

  getCreateAt(): number;
  setCreateAt(value: number): Attendufournisseur;

  getUpdateAt(): number;
  setUpdateAt(value: number): Attendufournisseur;

  getAttenduId(): string;
  setAttenduId(value: string): Attendufournisseur;

  getFournisseurId(): string;
  setFournisseurId(value: string): Attendufournisseur;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attendufournisseur.AsObject;
  static toObject(includeInstance: boolean, msg: Attendufournisseur): Attendufournisseur.AsObject;
  static serializeBinaryToWriter(message: Attendufournisseur, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attendufournisseur;
  static deserializeBinaryFromReader(message: Attendufournisseur, reader: jspb.BinaryReader): Attendufournisseur;
}

export namespace Attendufournisseur {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    attenduId: string,
    fournisseurId: string,
  }
}

