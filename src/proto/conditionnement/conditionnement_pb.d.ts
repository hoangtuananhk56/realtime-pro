import * as jspb from 'google-protobuf'



export class Conditionnement extends jspb.Message {
  getId(): string;
  setId(value: string): Conditionnement;

  getCreateAt(): number;
  setCreateAt(value: number): Conditionnement;

  getUpdateAt(): number;
  setUpdateAt(value: number): Conditionnement;

  getNom(): string;
  setNom(value: string): Conditionnement;

  getIcone(): string;
  setIcone(value: string): Conditionnement;

  getNiveau(): number;
  setNiveau(value: number): Conditionnement;

  getQte(): number;
  setQte(value: number): Conditionnement;

  getType(): number;
  setType(value: number): Conditionnement;

  getPoidsNet(): number;
  setPoidsNet(value: number): Conditionnement;

  getPoidsBrut(): number;
  setPoidsBrut(value: number): Conditionnement;

  getLongueur(): number;
  setLongueur(value: number): Conditionnement;

  getLargeur(): number;
  setLargeur(value: number): Conditionnement;

  getHauteur(): number;
  setHauteur(value: number): Conditionnement;

  getCouche(): number;
  setCouche(value: number): Conditionnement;

  getTypeDeCodebarre(): string;
  setTypeDeCodebarre(value: string): Conditionnement;

  getNoCodebarre(): string;
  setNoCodebarre(value: string): Conditionnement;

  getVariante(): string;
  setVariante(value: string): Conditionnement;

  getRotation(): string;
  setRotation(value: string): Conditionnement;

  getSupport(): string;
  setSupport(value: string): Conditionnement;

  getReferenceId(): string;
  setReferenceId(value: string): Conditionnement;

  getPoidsAdd(): number;
  setPoidsAdd(value: number): Conditionnement;

  getAttEnable(): boolean;
  setAttEnable(value: boolean): Conditionnement;

  getBlockDel(): boolean;
  setBlockDel(value: boolean): Conditionnement;

  getQteVariable(): boolean;
  setQteVariable(value: boolean): Conditionnement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conditionnement.AsObject;
  static toObject(includeInstance: boolean, msg: Conditionnement): Conditionnement.AsObject;
  static serializeBinaryToWriter(message: Conditionnement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conditionnement;
  static deserializeBinaryFromReader(message: Conditionnement, reader: jspb.BinaryReader): Conditionnement;
}

export namespace Conditionnement {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    nom: string,
    icone: string,
    niveau: number,
    qte: number,
    type: number,
    poidsNet: number,
    poidsBrut: number,
    longueur: number,
    largeur: number,
    hauteur: number,
    couche: number,
    typeDeCodebarre: string,
    noCodebarre: string,
    variante: string,
    rotation: string,
    support: string,
    referenceId: string,
    poidsAdd: number,
    attEnable: boolean,
    blockDel: boolean,
    qteVariable: boolean,
  }
}

