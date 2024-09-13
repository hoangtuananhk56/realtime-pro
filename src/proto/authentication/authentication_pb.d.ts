import * as jspb from 'google-protobuf'

import * as proto_clientwarehousecompany_clientwarehousecompany_pb from '../../proto/clientwarehousecompany/clientwarehousecompany_pb'; // proto import: "proto/clientwarehousecompany/clientwarehousecompany.proto"


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getCreateAt(): number;
  setCreateAt(value: number): User;

  getUpdateAt(): number;
  setUpdateAt(value: number): User;

  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getNom(): string;
  setNom(value: string): User;

  getPreNom(): string;
  setPreNom(value: string): User;

  getAddress(): string;
  setAddress(value: string): User;

  getTel(): string;
  setTel(value: string): User;

  getMail(): string;
  setMail(value: string): User;

  getActif(): boolean;
  setActif(value: boolean): User;

  getManagerId(): string;
  setManagerId(value: string): User;

  getStockistList(): Array<User>;
  setStockistList(value: Array<User>): User;
  clearStockistList(): User;
  addStockist(value?: User, index?: number): User;

  getCode(): string;
  setCode(value: string): User;

  getRole(): string;
  setRole(value: string): User;

  getClientWarehouseCompanyList(): Array<proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany>;
  setClientWarehouseCompanyList(value: Array<proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany>): User;
  clearClientWarehouseCompanyList(): User;
  addClientWarehouseCompany(value?: proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany, index?: number): proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany;

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
    createAt: number,
    updateAt: number,
    username: string,
    password: string,
    nom: string,
    preNom: string,
    address: string,
    tel: string,
    mail: string,
    actif: boolean,
    managerId: string,
    stockistList: Array<User.AsObject>,
    code: string,
    role: string,
    clientWarehouseCompanyList: Array<proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany.AsObject>,
  }
}

export class Request extends jspb.Message {
  getCode(): string;
  setCode(value: string): Request;

  getPassword(): string;
  setPassword(value: string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    code: string,
    password: string,
  }
}

export class SignInRequest extends jspb.Message {
  getSigninentry(): Request | undefined;
  setSigninentry(value?: Request): SignInRequest;
  hasSigninentry(): boolean;
  clearSigninentry(): SignInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    signinentry?: Request.AsObject,
  }
}

export class Response extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): Response;
  hasUser(): boolean;
  clearUser(): Response;

  getMessageerror(): string;
  setMessageerror(value: string): Response;

  getAccesstoken(): string;
  setAccesstoken(value: string): Response;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    user?: User.AsObject,
    messageerror: string,
    accesstoken: string,
    refreshtoken: string,
  }
}

export class SignUpForm extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): SignUpForm;

  getPassword(): string;
  setPassword(value: string): SignUpForm;

  getNom(): string;
  setNom(value: string): SignUpForm;

  getPreNom(): string;
  setPreNom(value: string): SignUpForm;

  getAddress(): string;
  setAddress(value: string): SignUpForm;

  getTel(): string;
  setTel(value: string): SignUpForm;

  getMail(): string;
  setMail(value: string): SignUpForm;

  getActif(): boolean;
  setActif(value: boolean): SignUpForm;

  getManagerId(): string;
  setManagerId(value: string): SignUpForm;

  getStockistList(): Array<User>;
  setStockistList(value: Array<User>): SignUpForm;
  clearStockistList(): SignUpForm;
  addStockist(value?: User, index?: number): User;

  getCode(): string;
  setCode(value: string): SignUpForm;

  getRole(): string;
  setRole(value: string): SignUpForm;

  getClientWarehouseCompanyList(): Array<proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany>;
  setClientWarehouseCompanyList(value: Array<proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany>): SignUpForm;
  clearClientWarehouseCompanyList(): SignUpForm;
  addClientWarehouseCompany(value?: proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany, index?: number): proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpForm.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpForm): SignUpForm.AsObject;
  static serializeBinaryToWriter(message: SignUpForm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpForm;
  static deserializeBinaryFromReader(message: SignUpForm, reader: jspb.BinaryReader): SignUpForm;
}

export namespace SignUpForm {
  export type AsObject = {
    username: string,
    password: string,
    nom: string,
    preNom: string,
    address: string,
    tel: string,
    mail: string,
    actif: boolean,
    managerId: string,
    stockistList: Array<User.AsObject>,
    code: string,
    role: string,
    clientWarehouseCompanyList: Array<proto_clientwarehousecompany_clientwarehousecompany_pb.ClientWarehouseCompany.AsObject>,
  }
}

export class SignUpRequest extends jspb.Message {
  getSignupentry(): SignUpForm | undefined;
  setSignupentry(value?: SignUpForm): SignUpRequest;
  hasSignupentry(): boolean;
  clearSignupentry(): SignUpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    signupentry?: SignUpForm.AsObject,
  }
}

