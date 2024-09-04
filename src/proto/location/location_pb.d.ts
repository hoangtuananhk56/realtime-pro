import * as jspb from 'google-protobuf'



export class Location extends jspb.Message {
  getId(): string;
  setId(value: string): Location;

  getCreateAt(): number;
  setCreateAt(value: number): Location;

  getUpdateAt(): number;
  setUpdateAt(value: number): Location;

  getName(): string;
  setName(value: string): Location;

  getStorageType(): string;
  setStorageType(value: string): Location;

  getStorageFunc(): string;
  setStorageFunc(value: string): Location;

  getZoneId(): string;
  setZoneId(value: string): Location;

  getAisle(): string;
  setAisle(value: string): Location;

  getBay(): string;
  setBay(value: string): Location;

  getWidth(): number;
  setWidth(value: number): Location;

  getHeight(): number;
  setHeight(value: number): Location;

  getLength(): number;
  setLength(value: number): Location;

  getEntryBlock(): string;
  setEntryBlock(value: string): Location;

  getConditionement(): string;
  setConditionement(value: string): Location;

  getMaxHeight(): number;
  setMaxHeight(value: number): Location;

  getMaxWeight(): number;
  setMaxWeight(value: number): Location;

  getMinHeight(): number;
  setMinHeight(value: number): Location;

  getLevel(): number;
  setLevel(value: number): Location;

  getDebut(): number;
  setDebut(value: number): Location;

  getFin(): number;
  setFin(value: number): Location;

  getLocationType(): string;
  setLocationType(value: string): Location;

  getCode(): string;
  setCode(value: string): Location;

  getParentId(): string;
  setParentId(value: string): Location;

  getChildrenList(): Array<Location>;
  setChildrenList(value: Array<Location>): Location;
  clearChildrenList(): Location;
  addChildren(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    storageType: string,
    storageFunc: string,
    zoneId: string,
    aisle: string,
    bay: string,
    width: number,
    height: number,
    length: number,
    entryBlock: string,
    conditionement: string,
    maxHeight: number,
    maxWeight: number,
    minHeight: number,
    level: number,
    debut: number,
    fin: number,
    locationType: string,
    code: string,
    parentId: string,
    childrenList: Array<Location.AsObject>,
  }
}

