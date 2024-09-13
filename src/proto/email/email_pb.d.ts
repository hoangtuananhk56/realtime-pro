import * as jspb from 'google-protobuf'



export class Email extends jspb.Message {
  getSender(): string;
  setSender(value: string): Email;

  getToList(): Array<string>;
  setToList(value: Array<string>): Email;
  clearToList(): Email;
  addTo(value: string, index?: number): Email;

  getCcList(): Array<string>;
  setCcList(value: Array<string>): Email;
  clearCcList(): Email;
  addCc(value: string, index?: number): Email;

  getBccList(): Array<string>;
  setBccList(value: Array<string>): Email;
  clearBccList(): Email;
  addBcc(value: string, index?: number): Email;

  getSubject(): string;
  setSubject(value: string): Email;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): Email;

  getType(): string;
  setType(value: string): Email;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    sender: string,
    toList: Array<string>,
    ccList: Array<string>,
    bccList: Array<string>,
    subject: string,
    body: Uint8Array | string,
    type: string,
  }
}

export class EmailRequest extends jspb.Message {
  getEntry(): Email | undefined;
  setEntry(value?: Email): EmailRequest;
  hasEntry(): boolean;
  clearEntry(): EmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailRequest): EmailRequest.AsObject;
  static serializeBinaryToWriter(message: EmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailRequest;
  static deserializeBinaryFromReader(message: EmailRequest, reader: jspb.BinaryReader): EmailRequest;
}

export namespace EmailRequest {
  export type AsObject = {
    entry?: Email.AsObject,
  }
}

export class EmailResponse extends jspb.Message {
  getEntry(): Email | undefined;
  setEntry(value?: Email): EmailResponse;
  hasEntry(): boolean;
  clearEntry(): EmailResponse;

  getMessageerror(): string;
  setMessageerror(value: string): EmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmailResponse): EmailResponse.AsObject;
  static serializeBinaryToWriter(message: EmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailResponse;
  static deserializeBinaryFromReader(message: EmailResponse, reader: jspb.BinaryReader): EmailResponse;
}

export namespace EmailResponse {
  export type AsObject = {
    entry?: Email.AsObject,
    messageerror: string,
  }
}

export class Bytes extends jspb.Message {
  getB(): Uint8Array | string;
  getB_asU8(): Uint8Array;
  getB_asB64(): string;
  setB(value: Uint8Array | string): Bytes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bytes.AsObject;
  static toObject(includeInstance: boolean, msg: Bytes): Bytes.AsObject;
  static serializeBinaryToWriter(message: Bytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bytes;
  static deserializeBinaryFromReader(message: Bytes, reader: jspb.BinaryReader): Bytes;
}

export namespace Bytes {
  export type AsObject = {
    b: Uint8Array | string,
  }
}

