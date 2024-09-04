import * as jspb from 'google-protobuf'



export class Specificites extends jspb.Message {
  getId(): string;
  setId(value: string): Specificites;

  getCreateAt(): number;
  setCreateAt(value: number): Specificites;

  getUpdateAt(): number;
  setUpdateAt(value: number): Specificites;

  getCodeRegie(): string;
  setCodeRegie(value: string): Specificites;

  getCouleur(): string;
  setCouleur(value: string): Specificites;

  getCentraLisation(): string;
  setCentraLisation(value: string): Specificites;

  getMilesime(): string;
  setMilesime(value: string): Specificites;

  getDegre(): string;
  setDegre(value: string): Specificites;

  getReferenceId(): string;
  setReferenceId(value: string): Specificites;

  getFragilite(): boolean;
  setFragilite(value: boolean): Specificites;

  getFroid(): boolean;
  setFroid(value: boolean): Specificites;

  getNomDouaniere(): boolean;
  setNomDouaniere(value: boolean): Specificites;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Specificites.AsObject;
  static toObject(includeInstance: boolean, msg: Specificites): Specificites.AsObject;
  static serializeBinaryToWriter(message: Specificites, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Specificites;
  static deserializeBinaryFromReader(message: Specificites, reader: jspb.BinaryReader): Specificites;
}

export namespace Specificites {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    codeRegie: string,
    couleur: string,
    centraLisation: string,
    milesime: string,
    degre: string,
    referenceId: string,
    fragilite: boolean,
    froid: boolean,
    nomDouaniere: boolean,
  }
}

