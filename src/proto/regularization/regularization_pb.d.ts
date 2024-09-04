import * as jspb from 'google-protobuf'



export class RegularizationReason extends jspb.Message {
  getId(): string;
  setId(value: string): RegularizationReason;

  getName(): string;
  setName(value: string): RegularizationReason;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularizationReason.AsObject;
  static toObject(includeInstance: boolean, msg: RegularizationReason): RegularizationReason.AsObject;
  static serializeBinaryToWriter(message: RegularizationReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularizationReason;
  static deserializeBinaryFromReader(message: RegularizationReason, reader: jspb.BinaryReader): RegularizationReason;
}

export namespace RegularizationReason {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class Regularization extends jspb.Message {
  getId(): string;
  setId(value: string): Regularization;

  getRegType(): number;
  setRegType(value: number): Regularization;

  getReason(): string;
  setReason(value: string): Regularization;

  getSscc(): string;
  setSscc(value: string): Regularization;

  getQuantity(): number;
  setQuantity(value: number): Regularization;

  getComment(): string;
  setComment(value: string): Regularization;

  getWeight(): string;
  setWeight(value: string): Regularization;

  getHeight(): string;
  setHeight(value: string): Regularization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Regularization.AsObject;
  static toObject(includeInstance: boolean, msg: Regularization): Regularization.AsObject;
  static serializeBinaryToWriter(message: Regularization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Regularization;
  static deserializeBinaryFromReader(message: Regularization, reader: jspb.BinaryReader): Regularization;
}

export namespace Regularization {
  export type AsObject = {
    id: string,
    regType: number,
    reason: string,
    sscc: string,
    quantity: number,
    comment: string,
    weight: string,
    height: string,
  }
}

