import * as jspb from 'google-protobuf'



export class Gestion extends jspb.Message {
  getId(): string;
  setId(value: string): Gestion;

  getCreateAt(): number;
  setCreateAt(value: number): Gestion;

  getUpdateAt(): number;
  setUpdateAt(value: number): Gestion;

  getProductionBatchId(): string;
  setProductionBatchId(value: string): Gestion;

  getDluo(): boolean;
  setDluo(value: boolean): Gestion;

  getDlv(): boolean;
  setDlv(value: boolean): Gestion;

  getDlc(): boolean;
  setDlc(value: boolean): Gestion;

  getNbrJoursDluo(): string;
  setNbrJoursDluo(value: string): Gestion;

  getNbrJoursDlv(): string;
  setNbrJoursDlv(value: string): Gestion;

  getGestionDeLot(): boolean;
  setGestionDeLot(value: boolean): Gestion;

  getBlocageEntree(): boolean;
  setBlocageEntree(value: boolean): Gestion;

  getBlocageSortie(): boolean;
  setBlocageSortie(value: boolean): Gestion;

  getAlerteStock(): string;
  setAlerteStock(value: string): Gestion;

  getTypeAlerte(): string;
  setTypeAlerte(value: string): Gestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gestion.AsObject;
  static toObject(includeInstance: boolean, msg: Gestion): Gestion.AsObject;
  static serializeBinaryToWriter(message: Gestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gestion;
  static deserializeBinaryFromReader(message: Gestion, reader: jspb.BinaryReader): Gestion;
}

export namespace Gestion {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    productionBatchId: string,
    dluo: boolean,
    dlv: boolean,
    dlc: boolean,
    nbrJoursDluo: string,
    nbrJoursDlv: string,
    gestionDeLot: boolean,
    blocageEntree: boolean,
    blocageSortie: boolean,
    alerteStock: string,
    typeAlerte: string,
  }
}

