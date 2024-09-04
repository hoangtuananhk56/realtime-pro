import * as jspb from 'google-protobuf'



export class LotReference extends jspb.Message {
  getId(): string;
  setId(value: string): LotReference;

  getCreatedAt(): number;
  setCreatedAt(value: number): LotReference;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): LotReference;

  getLotUnlockAt(): number;
  setLotUnlockAt(value: number): LotReference;

  getLotLockAt(): number;
  setLotLockAt(value: number): LotReference;

  getLotBlock(): boolean;
  setLotBlock(value: boolean): LotReference;

  getPreLotBlock(): boolean;
  setPreLotBlock(value: boolean): LotReference;

  getMotif(): string;
  setMotif(value: string): LotReference;

  getOrigine(): string;
  setOrigine(value: string): LotReference;

  getLot(): string;
  setLot(value: string): LotReference;

  getReferenceId(): string;
  setReferenceId(value: string): LotReference;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): LotReference;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): LotReference;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): LotReference;

  getCompanyId(): string;
  setCompanyId(value: string): LotReference;

  getWarehouseId(): string;
  setWarehouseId(value: string): LotReference;

  getClientId(): string;
  setClientId(value: string): LotReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LotReference.AsObject;
  static toObject(includeInstance: boolean, msg: LotReference): LotReference.AsObject;
  static serializeBinaryToWriter(message: LotReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LotReference;
  static deserializeBinaryFromReader(message: LotReference, reader: jspb.BinaryReader): LotReference;
}

export namespace LotReference {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    lotUnlockAt: number,
    lotLockAt: number,
    lotBlock: boolean,
    preLotBlock: boolean,
    motif: string,
    origine: string,
    lot: string,
    referenceId: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

