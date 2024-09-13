import * as jspb from 'google-protobuf'



export class AttFile extends jspb.Message {
  getId(): string;
  setId(value: string): AttFile;

  getCreateAt(): number;
  setCreateAt(value: number): AttFile;

  getUpdateAt(): number;
  setUpdateAt(value: number): AttFile;

  getName(): string;
  setName(value: string): AttFile;

  getAttenduId(): string;
  setAttenduId(value: string): AttFile;

  getDescription(): string;
  setDescription(value: string): AttFile;

  getPath(): string;
  setPath(value: string): AttFile;

  getFileType(): string;
  setFileType(value: string): AttFile;

  getFileSize(): number;
  setFileSize(value: number): AttFile;

  getSource(): string;
  setSource(value: string): AttFile;

  getSscc(): string;
  setSscc(value: string): AttFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttFile.AsObject;
  static toObject(includeInstance: boolean, msg: AttFile): AttFile.AsObject;
  static serializeBinaryToWriter(message: AttFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttFile;
  static deserializeBinaryFromReader(message: AttFile, reader: jspb.BinaryReader): AttFile;
}

export namespace AttFile {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    attenduId: string,
    description: string,
    path: string,
    fileType: string,
    fileSize: number,
    source: string,
    sscc: string,
  }
}

export class ComFile extends jspb.Message {
  getId(): string;
  setId(value: string): ComFile;

  getCreateAt(): number;
  setCreateAt(value: number): ComFile;

  getUpdateAt(): number;
  setUpdateAt(value: number): ComFile;

  getName(): string;
  setName(value: string): ComFile;

  getCommandeId(): string;
  setCommandeId(value: string): ComFile;

  getDescription(): string;
  setDescription(value: string): ComFile;

  getPath(): string;
  setPath(value: string): ComFile;

  getFileType(): string;
  setFileType(value: string): ComFile;

  getFileSize(): number;
  setFileSize(value: number): ComFile;

  getSource(): string;
  setSource(value: string): ComFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComFile.AsObject;
  static toObject(includeInstance: boolean, msg: ComFile): ComFile.AsObject;
  static serializeBinaryToWriter(message: ComFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComFile;
  static deserializeBinaryFromReader(message: ComFile, reader: jspb.BinaryReader): ComFile;
}

export namespace ComFile {
  export type AsObject = {
    id: string,
    createAt: number,
    updateAt: number,
    name: string,
    commandeId: string,
    description: string,
    path: string,
    fileType: string,
    fileSize: number,
    source: string,
  }
}

export class AttFilesRespnose extends jspb.Message {
  getId(): string;
  setId(value: string): AttFilesRespnose;

  getName(): string;
  setName(value: string): AttFilesRespnose;

  getAttenduId(): string;
  setAttenduId(value: string): AttFilesRespnose;

  getPath(): string;
  setPath(value: string): AttFilesRespnose;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttFilesRespnose.AsObject;
  static toObject(includeInstance: boolean, msg: AttFilesRespnose): AttFilesRespnose.AsObject;
  static serializeBinaryToWriter(message: AttFilesRespnose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttFilesRespnose;
  static deserializeBinaryFromReader(message: AttFilesRespnose, reader: jspb.BinaryReader): AttFilesRespnose;
}

export namespace AttFilesRespnose {
  export type AsObject = {
    id: string,
    name: string,
    attenduId: string,
    path: string,
  }
}

export class UploadRequest extends jspb.Message {
  getInfo(): AttFile | undefined;
  setInfo(value?: AttFile): UploadRequest;
  hasInfo(): boolean;
  clearInfo(): UploadRequest;

  getChunkData(): Uint8Array | string;
  getChunkData_asU8(): Uint8Array;
  getChunkData_asB64(): string;
  setChunkData(value: Uint8Array | string): UploadRequest;

  getDataCase(): UploadRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
  static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRequest;
  static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
  export type AsObject = {
    info?: AttFile.AsObject,
    chunkData: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    INFO = 1,
    CHUNK_DATA = 2,
  }
}

export class UploadComRequest extends jspb.Message {
  getInfo(): ComFile | undefined;
  setInfo(value?: ComFile): UploadComRequest;
  hasInfo(): boolean;
  clearInfo(): UploadComRequest;

  getChunkData(): Uint8Array | string;
  getChunkData_asU8(): Uint8Array;
  getChunkData_asB64(): string;
  setChunkData(value: Uint8Array | string): UploadComRequest;

  getDataCase(): UploadComRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadComRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadComRequest): UploadComRequest.AsObject;
  static serializeBinaryToWriter(message: UploadComRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadComRequest;
  static deserializeBinaryFromReader(message: UploadComRequest, reader: jspb.BinaryReader): UploadComRequest;
}

export namespace UploadComRequest {
  export type AsObject = {
    info?: ComFile.AsObject,
    chunkData: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    INFO = 1,
    CHUNK_DATA = 2,
  }
}

export class UploadComResponse extends jspb.Message {
  getEntry(): ComFile | undefined;
  setEntry(value?: ComFile): UploadComResponse;
  hasEntry(): boolean;
  clearEntry(): UploadComResponse;

  getCode(): UploadStatusCode;
  setCode(value: UploadStatusCode): UploadComResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UploadComResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadComResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadComResponse): UploadComResponse.AsObject;
  static serializeBinaryToWriter(message: UploadComResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadComResponse;
  static deserializeBinaryFromReader(message: UploadComResponse, reader: jspb.BinaryReader): UploadComResponse;
}

export namespace UploadComResponse {
  export type AsObject = {
    entry?: ComFile.AsObject,
    code: UploadStatusCode,
    messageerror: string,
  }
}

export class DeleteRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    path: string,
  }
}

export class DownloadRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): DownloadRequest;

  getType(): string;
  setType(value: string): DownloadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadRequest): DownloadRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadRequest;
  static deserializeBinaryFromReader(message: DownloadRequest, reader: jspb.BinaryReader): DownloadRequest;
}

export namespace DownloadRequest {
  export type AsObject = {
    path: string,
    type: string,
  }
}

export class GetFilesInAtt extends jspb.Message {
  getAttId(): string;
  setAttId(value: string): GetFilesInAtt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesInAtt.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesInAtt): GetFilesInAtt.AsObject;
  static serializeBinaryToWriter(message: GetFilesInAtt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesInAtt;
  static deserializeBinaryFromReader(message: GetFilesInAtt, reader: jspb.BinaryReader): GetFilesInAtt;
}

export namespace GetFilesInAtt {
  export type AsObject = {
    attId: string,
  }
}

export class GetAllByClassAndIdRequest extends jspb.Message {
  getClassFile(): string;
  setClassFile(value: string): GetAllByClassAndIdRequest;

  getId(): string;
  setId(value: string): GetAllByClassAndIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllByClassAndIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllByClassAndIdRequest): GetAllByClassAndIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllByClassAndIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllByClassAndIdRequest;
  static deserializeBinaryFromReader(message: GetAllByClassAndIdRequest, reader: jspb.BinaryReader): GetAllByClassAndIdRequest;
}

export namespace GetAllByClassAndIdRequest {
  export type AsObject = {
    classFile: string,
    id: string,
  }
}

export class GetAllByClassAndIdResponse extends jspb.Message {
  getFilePathList(): Array<string>;
  setFilePathList(value: Array<string>): GetAllByClassAndIdResponse;
  clearFilePathList(): GetAllByClassAndIdResponse;
  addFilePath(value: string, index?: number): GetAllByClassAndIdResponse;

  getMessageError(): string;
  setMessageError(value: string): GetAllByClassAndIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllByClassAndIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllByClassAndIdResponse): GetAllByClassAndIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllByClassAndIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllByClassAndIdResponse;
  static deserializeBinaryFromReader(message: GetAllByClassAndIdResponse, reader: jspb.BinaryReader): GetAllByClassAndIdResponse;
}

export namespace GetAllByClassAndIdResponse {
  export type AsObject = {
    filePathList: Array<string>,
    messageError: string,
  }
}

export class DownloadResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): DownloadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadResponse): DownloadResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadResponse;
  static deserializeBinaryFromReader(message: DownloadResponse, reader: jspb.BinaryReader): DownloadResponse;
}

export namespace DownloadResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class UploadResponse extends jspb.Message {
  getEntry(): AttFile | undefined;
  setEntry(value?: AttFile): UploadResponse;
  hasEntry(): boolean;
  clearEntry(): UploadResponse;

  getCode(): UploadStatusCode;
  setCode(value: UploadStatusCode): UploadResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
  static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadResponse;
  static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
  export type AsObject = {
    entry?: AttFile.AsObject,
    code: UploadStatusCode,
    messageerror: string,
  }
}

export class DeleteResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): DeleteResponse;

  getMessageerror(): string;
  setMessageerror(value: string): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

export class FilesResponse extends jspb.Message {
  getEntryList(): Array<AttFile>;
  setEntryList(value: Array<AttFile>): FilesResponse;
  clearEntryList(): FilesResponse;
  addEntry(value?: AttFile, index?: number): AttFile;

  getMessageerror(): string;
  setMessageerror(value: string): FilesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilesResponse): FilesResponse.AsObject;
  static serializeBinaryToWriter(message: FilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilesResponse;
  static deserializeBinaryFromReader(message: FilesResponse, reader: jspb.BinaryReader): FilesResponse;
}

export namespace FilesResponse {
  export type AsObject = {
    entryList: Array<AttFile.AsObject>,
    messageerror: string,
  }
}

export class UrlResponse extends jspb.Message {
  getScheme(): string;
  setScheme(value: string): UrlResponse;

  getHost(): string;
  setHost(value: string): UrlResponse;

  getPath(): string;
  setPath(value: string): UrlResponse;

  getRawQuery(): string;
  setRawQuery(value: string): UrlResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UrlResponse): UrlResponse.AsObject;
  static serializeBinaryToWriter(message: UrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlResponse;
  static deserializeBinaryFromReader(message: UrlResponse, reader: jspb.BinaryReader): UrlResponse;
}

export namespace UrlResponse {
  export type AsObject = {
    scheme: string,
    host: string,
    path: string,
    rawQuery: string,
    messageerror: string,
  }
}

export class DeleteMutltiRequest extends jspb.Message {
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): DeleteMutltiRequest;
  clearPathsList(): DeleteMutltiRequest;
  addPaths(value: string, index?: number): DeleteMutltiRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMutltiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMutltiRequest): DeleteMutltiRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMutltiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMutltiRequest;
  static deserializeBinaryFromReader(message: DeleteMutltiRequest, reader: jspb.BinaryReader): DeleteMutltiRequest;
}

export namespace DeleteMutltiRequest {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class DeleteMutltiResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): DeleteMutltiResponse;

  getMessageerror(): string;
  setMessageerror(value: string): DeleteMutltiResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMutltiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMutltiResponse): DeleteMutltiResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteMutltiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMutltiResponse;
  static deserializeBinaryFromReader(message: DeleteMutltiResponse, reader: jspb.BinaryReader): DeleteMutltiResponse;
}

export namespace DeleteMutltiResponse {
  export type AsObject = {
    status: string,
    messageerror: string,
  }
}

export class MetaData extends jspb.Message {
  getName(): string;
  setName(value: string): MetaData;

  getFileType(): string;
  setFileType(value: string): MetaData;

  getFileSize(): number;
  setFileSize(value: number): MetaData;

  getClassFile(): string;
  setClassFile(value: string): MetaData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaData.AsObject;
  static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
  static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaData;
  static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
}

export namespace MetaData {
  export type AsObject = {
    name: string,
    fileType: string,
    fileSize: number,
    classFile: string,
  }
}

export class UploadOneFileRequest extends jspb.Message {
  getInfo(): MetaData | undefined;
  setInfo(value?: MetaData): UploadOneFileRequest;
  hasInfo(): boolean;
  clearInfo(): UploadOneFileRequest;

  getChunkData(): Uint8Array | string;
  getChunkData_asU8(): Uint8Array;
  getChunkData_asB64(): string;
  setChunkData(value: Uint8Array | string): UploadOneFileRequest;

  getDataCase(): UploadOneFileRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadOneFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadOneFileRequest): UploadOneFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadOneFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadOneFileRequest;
  static deserializeBinaryFromReader(message: UploadOneFileRequest, reader: jspb.BinaryReader): UploadOneFileRequest;
}

export namespace UploadOneFileRequest {
  export type AsObject = {
    info?: MetaData.AsObject,
    chunkData: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    INFO = 1,
    CHUNK_DATA = 2,
  }
}

export class UploadOneFileResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): UploadOneFileResponse;

  getCode(): UploadStatusCode;
  setCode(value: UploadStatusCode): UploadOneFileResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UploadOneFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadOneFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadOneFileResponse): UploadOneFileResponse.AsObject;
  static serializeBinaryToWriter(message: UploadOneFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadOneFileResponse;
  static deserializeBinaryFromReader(message: UploadOneFileResponse, reader: jspb.BinaryReader): UploadOneFileResponse;
}

export namespace UploadOneFileResponse {
  export type AsObject = {
    path: string,
    code: UploadStatusCode,
    messageerror: string,
  }
}

export class DownloadOneFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): DownloadOneFileRequest;

  getClassFile(): string;
  setClassFile(value: string): DownloadOneFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadOneFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadOneFileRequest): DownloadOneFileRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadOneFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadOneFileRequest;
  static deserializeBinaryFromReader(message: DownloadOneFileRequest, reader: jspb.BinaryReader): DownloadOneFileRequest;
}

export namespace DownloadOneFileRequest {
  export type AsObject = {
    path: string,
    classFile: string,
  }
}

export enum UploadStatusCode { 
  UNKNOWN = 0,
  OK = 1,
  FAILED = 2,
}
