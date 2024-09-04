import * as jspb from 'google-protobuf'



export class Reserve extends jspb.Message {
  getId(): string;
  setId(value: string): Reserve;

  getCreatedAt(): number;
  setCreatedAt(value: number): Reserve;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Reserve;

  getReserveTypeId(): string;
  setReserveTypeId(value: string): Reserve;

  getReserveTypeName(): string;
  setReserveTypeName(value: string): Reserve;

  getAttenduId(): string;
  setAttenduId(value: string): Reserve;

  getSscc(): string;
  setSscc(value: string): Reserve;

  getQuantity(): number;
  setQuantity(value: number): Reserve;

  getIsTakePhotos(): boolean;
  setIsTakePhotos(value: boolean): Reserve;

  getIsInputNumber(): boolean;
  setIsInputNumber(value: boolean): Reserve;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Reserve;
  clearImagesList(): Reserve;
  addImages(value: string, index?: number): Reserve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reserve.AsObject;
  static toObject(includeInstance: boolean, msg: Reserve): Reserve.AsObject;
  static serializeBinaryToWriter(message: Reserve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reserve;
  static deserializeBinaryFromReader(message: Reserve, reader: jspb.BinaryReader): Reserve;
}

export namespace Reserve {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    reserveTypeId: string,
    reserveTypeName: string,
    attenduId: string,
    sscc: string,
    quantity: number,
    isTakePhotos: boolean,
    isInputNumber: boolean,
    imagesList: Array<string>,
  }
}

export class ReserveType extends jspb.Message {
  getId(): string;
  setId(value: string): ReserveType;

  getCreatedAt(): number;
  setCreatedAt(value: number): ReserveType;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ReserveType;

  getName(): string;
  setName(value: string): ReserveType;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): ReserveType;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): ReserveType;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): ReserveType;

  getIsTakePhotos(): boolean;
  setIsTakePhotos(value: boolean): ReserveType;

  getIsInputNumber(): boolean;
  setIsInputNumber(value: boolean): ReserveType;

  getIsDeductQty(): boolean;
  setIsDeductQty(value: boolean): ReserveType;

  getCompanyId(): string;
  setCompanyId(value: string): ReserveType;

  getWarehouseId(): string;
  setWarehouseId(value: string): ReserveType;

  getClientId(): string;
  setClientId(value: string): ReserveType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveType.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveType): ReserveType.AsObject;
  static serializeBinaryToWriter(message: ReserveType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveType;
  static deserializeBinaryFromReader(message: ReserveType, reader: jspb.BinaryReader): ReserveType;
}

export namespace ReserveType {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    name: string,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    isTakePhotos: boolean,
    isInputNumber: boolean,
    isDeductQty: boolean,
    companyId: string,
    warehouseId: string,
    clientId: string,
  }
}

