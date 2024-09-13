import * as jspb from 'google-protobuf'

import * as proto_attendu_attendu_pb from '../../proto/attendu/attendu_pb'; // proto import: "proto/attendu/attendu.proto"
import * as proto_commande_commande_pb from '../../proto/commande/commande_pb'; // proto import: "proto/commande/commande.proto"
import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"
import * as proto_reference_reference_pb from '../../proto/reference/reference_pb'; // proto import: "proto/reference/reference.proto"
import * as proto_stock_stock_pb from '../../proto/stock/stock_pb'; // proto import: "proto/stock/stock.proto"


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getName(): string;
  setName(value: string): User;

  getRoomName(): string;
  setRoomName(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    roomName: string,
  }
}

export class Connect extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): Connect;
  hasUser(): boolean;
  clearUser(): Connect;

  getActive(): boolean;
  setActive(value: boolean): Connect;

  getRoomName(): string;
  setRoomName(value: string): Connect;

  getToken(): string;
  setToken(value: string): Connect;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connect.AsObject;
  static toObject(includeInstance: boolean, msg: Connect): Connect.AsObject;
  static serializeBinaryToWriter(message: Connect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connect;
  static deserializeBinaryFromReader(message: Connect, reader: jspb.BinaryReader): Connect;
}

export namespace Connect {
  export type AsObject = {
    user?: User.AsObject,
    active: boolean,
    roomName: string,
    token: string,
  }
}

export class Close extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Close.AsObject;
  static toObject(includeInstance: boolean, msg: Close): Close.AsObject;
  static serializeBinaryToWriter(message: Close, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Close;
  static deserializeBinaryFromReader(message: Close, reader: jspb.BinaryReader): Close;
}

export namespace Close {
  export type AsObject = {
  }
}

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getTimestamp(): string;
  setTimestamp(value: string): Message;

  getRoomName(): string;
  setRoomName(value: string): Message;

  getAction(): string;
  setAction(value: string): Message;

  getType(): string;
  setType(value: string): Message;

  getAttenduEntry(): proto_attendu_attendu_pb.Attendu | undefined;
  setAttenduEntry(value?: proto_attendu_attendu_pb.Attendu): Message;
  hasAttenduEntry(): boolean;
  clearAttenduEntry(): Message;

  getAttProductionEntry(): proto_attendu_attendu_pb.AttProduction | undefined;
  setAttProductionEntry(value?: proto_attendu_attendu_pb.AttProduction): Message;
  hasAttProductionEntry(): boolean;
  clearAttProductionEntry(): Message;

  getCommandeEntry(): proto_commande_commande_pb.Commande | undefined;
  setCommandeEntry(value?: proto_commande_commande_pb.Commande): Message;
  hasCommandeEntry(): boolean;
  clearCommandeEntry(): Message;

  getComArticleEntry(): proto_comarticle_comarticle_pb.ComArticle | undefined;
  setComArticleEntry(value?: proto_comarticle_comarticle_pb.ComArticle): Message;
  hasComArticleEntry(): boolean;
  clearComArticleEntry(): Message;

  getReferenceEntry(): proto_reference_reference_pb.Reference | undefined;
  setReferenceEntry(value?: proto_reference_reference_pb.Reference): Message;
  hasReferenceEntry(): boolean;
  clearReferenceEntry(): Message;

  getStockEntry(): proto_stock_stock_pb.Stock | undefined;
  setStockEntry(value?: proto_stock_stock_pb.Stock): Message;
  hasStockEntry(): boolean;
  clearStockEntry(): Message;

  getUpdateAttenduRequest(): proto_attendu_attendu_pb.RealtimeAttendu | undefined;
  setUpdateAttenduRequest(value?: proto_attendu_attendu_pb.RealtimeAttendu): Message;
  hasUpdateAttenduRequest(): boolean;
  clearUpdateAttenduRequest(): Message;

  getEventCase(): Message.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    timestamp: string,
    roomName: string,
    action: string,
    type: string,
    attenduEntry?: proto_attendu_attendu_pb.Attendu.AsObject,
    attProductionEntry?: proto_attendu_attendu_pb.AttProduction.AsObject,
    commandeEntry?: proto_commande_commande_pb.Commande.AsObject,
    comArticleEntry?: proto_comarticle_comarticle_pb.ComArticle.AsObject,
    referenceEntry?: proto_reference_reference_pb.Reference.AsObject,
    stockEntry?: proto_stock_stock_pb.Stock.AsObject,
    updateAttenduRequest?: proto_attendu_attendu_pb.RealtimeAttendu.AsObject,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    ATTENDU_ENTRY = 6,
    ATT_PRODUCTION_ENTRY = 7,
    COMMANDE_ENTRY = 8,
    COM_ARTICLE_ENTRY = 9,
    REFERENCE_ENTRY = 10,
    STOCK_ENTRY = 11,
    UPDATE_ATTENDU_REQUEST = 12,
  }
}

