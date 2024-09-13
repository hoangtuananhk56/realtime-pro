import * as jspb from 'google-protobuf'



export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): Notification;

  getCreatedTime(): number;
  setCreatedTime(value: number): Notification;

  getCreatedBy(): string;
  setCreatedBy(value: string): Notification;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Notification;

  getMissionId(): string;
  setMissionId(value: string): Notification;

  getMissionNumber(): string;
  setMissionNumber(value: string): Notification;

  getMissionType(): number;
  setMissionType(value: number): Notification;

  getIsRead(): boolean;
  setIsRead(value: boolean): Notification;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): Notification;

  getAssigneeId(): string;
  setAssigneeId(value: string): Notification;

  getActionType(): string;
  setActionType(value: string): Notification;

  getClientName(): string;
  setClientName(value: string): Notification;

  getCompanyName(): string;
  setCompanyName(value: string): Notification;

  getWarehouseName(): string;
  setWarehouseName(value: string): Notification;

  getContent(): string;
  setContent(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: string,
    createdTime: number,
    createdBy: string,
    updatedAt: number,
    missionId: string,
    missionNumber: string,
    missionType: number,
    isRead: boolean,
    assigneeBy: string,
    assigneeId: string,
    actionType: string,
    clientName: string,
    companyName: string,
    warehouseName: string,
    content: string,
  }
}

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

  getUserId(): string;
  setUserId(value: string): GetAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllRequest;
  static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    userId: string,
  }
}

export class MetaData extends jspb.Message {
  getCount(): number;
  setCount(value: number): MetaData;

  getOffset(): number;
  setOffset(value: number): MetaData;

  getLimit(): number;
  setLimit(value: number): MetaData;

  getTotal(): number;
  setTotal(value: number): MetaData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaData.AsObject;
  static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
  static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaData;
  static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
}

export namespace MetaData {
  export type AsObject = {
    count: number,
    offset: number,
    limit: number,
    total: number,
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<Notification>;
  setEntryList(value: Array<Notification>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: Notification, index?: number): Notification;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): GetAllResponse;
  hasMetadata(): boolean;
  clearMetadata(): GetAllResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllResponse): GetAllResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllResponse;
  static deserializeBinaryFromReader(message: GetAllResponse, reader: jspb.BinaryReader): GetAllResponse;
}

export namespace GetAllResponse {
  export type AsObject = {
    entryList: Array<Notification.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class ReadNotiRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ReadNotiRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadNotiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadNotiRequest): ReadNotiRequest.AsObject;
  static serializeBinaryToWriter(message: ReadNotiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadNotiRequest;
  static deserializeBinaryFromReader(message: ReadNotiRequest, reader: jspb.BinaryReader): ReadNotiRequest;
}

export namespace ReadNotiRequest {
  export type AsObject = {
    id: string,
  }
}

export class ReadNotiResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): ReadNotiResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadNotiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadNotiResponse): ReadNotiResponse.AsObject;
  static serializeBinaryToWriter(message: ReadNotiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadNotiResponse;
  static deserializeBinaryFromReader(message: ReadNotiResponse, reader: jspb.BinaryReader): ReadNotiResponse;
}

export namespace ReadNotiResponse {
  export type AsObject = {
    messageerror: string,
  }
}

export class CountUnreadRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CountUnreadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUnreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUnreadRequest): CountUnreadRequest.AsObject;
  static serializeBinaryToWriter(message: CountUnreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUnreadRequest;
  static deserializeBinaryFromReader(message: CountUnreadRequest, reader: jspb.BinaryReader): CountUnreadRequest;
}

export namespace CountUnreadRequest {
  export type AsObject = {
    userId: string,
  }
}

export class CountUnreadResponse extends jspb.Message {
  getMessageerror(): string;
  setMessageerror(value: string): CountUnreadResponse;

  getCountUnread(): number;
  setCountUnread(value: number): CountUnreadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUnreadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUnreadResponse): CountUnreadResponse.AsObject;
  static serializeBinaryToWriter(message: CountUnreadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUnreadResponse;
  static deserializeBinaryFromReader(message: CountUnreadResponse, reader: jspb.BinaryReader): CountUnreadResponse;
}

export namespace CountUnreadResponse {
  export type AsObject = {
    messageerror: string,
    countUnread: number,
  }
}

