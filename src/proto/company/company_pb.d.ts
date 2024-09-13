import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class Company extends jspb.Message {
  getId(): string;
  setId(value: string): Company;

  getNom(): string;
  setNom(value: string): Company;

  getCode(): string;
  setCode(value: string): Company;

  getCodeNom(): string;
  setCodeNom(value: string): Company;

  getCreatedAt(): number;
  setCreatedAt(value: number): Company;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Company;

  getWarehouseCompanyList(): Array<WarehouseCompanyTable>;
  setWarehouseCompanyList(value: Array<WarehouseCompanyTable>): Company;
  clearWarehouseCompanyList(): Company;
  addWarehouseCompany(value?: WarehouseCompanyTable, index?: number): WarehouseCompanyTable;

  getBlockDel(): boolean;
  setBlockDel(value: boolean): Company;

  getRequireAnomaly(): boolean;
  setRequireAnomaly(value: boolean): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    id: string,
    nom: string,
    code: string,
    codeNom: string,
    createdAt: number,
    updatedAt: number,
    warehouseCompanyList: Array<WarehouseCompanyTable.AsObject>,
    blockDel: boolean,
    requireAnomaly: boolean,
  }
}

export class WarehouseCompanyTable extends jspb.Message {
  getId(): string;
  setId(value: string): WarehouseCompanyTable;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseCompanyTable;

  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseCompanyTable;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): WarehouseCompanyTable;

  getCompanyId(): string;
  setCompanyId(value: string): WarehouseCompanyTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseCompanyTable.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseCompanyTable): WarehouseCompanyTable.AsObject;
  static serializeBinaryToWriter(message: WarehouseCompanyTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseCompanyTable;
  static deserializeBinaryFromReader(message: WarehouseCompanyTable, reader: jspb.BinaryReader): WarehouseCompanyTable;
}

export namespace WarehouseCompanyTable {
  export type AsObject = {
    id: string,
    warehouseCodeNom: string,
    warehouseId: string,
    companyCodeNom: string,
    companyId: string,
  }
}

export class WarehouseCompanyDto extends jspb.Message {
  getId(): string;
  setId(value: string): WarehouseCompanyDto;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): WarehouseCompanyDto;

  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseCompanyDto;

  getBlockDel(): boolean;
  setBlockDel(value: boolean): WarehouseCompanyDto;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): WarehouseCompanyDto;

  getCompanyId(): string;
  setCompanyId(value: string): WarehouseCompanyDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseCompanyDto.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseCompanyDto): WarehouseCompanyDto.AsObject;
  static serializeBinaryToWriter(message: WarehouseCompanyDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseCompanyDto;
  static deserializeBinaryFromReader(message: WarehouseCompanyDto, reader: jspb.BinaryReader): WarehouseCompanyDto;
}

export namespace WarehouseCompanyDto {
  export type AsObject = {
    id: string,
    warehouseCodeNom: string,
    warehouseId: string,
    blockDel: boolean,
    companyCodeNom: string,
    companyId: string,
  }
}

export class CompanyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CompanyRequest;

  getNom(): string;
  setNom(value: string): CompanyRequest;

  getCode(): string;
  setCode(value: string): CompanyRequest;

  getCodeNom(): string;
  setCodeNom(value: string): CompanyRequest;

  getCreateAt(): number;
  setCreateAt(value: number): CompanyRequest;

  getUpdateAt(): number;
  setUpdateAt(value: number): CompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyRequest): CompanyRequest.AsObject;
  static serializeBinaryToWriter(message: CompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyRequest;
  static deserializeBinaryFromReader(message: CompanyRequest, reader: jspb.BinaryReader): CompanyRequest;
}

export namespace CompanyRequest {
  export type AsObject = {
    id: string,
    nom: string,
    code: string,
    codeNom: string,
    createAt: number,
    updateAt: number,
  }
}

export class WarehouseCompany extends jspb.Message {
  getId(): string;
  setId(value: string): WarehouseCompany;

  getCodeNom(): string;
  setCodeNom(value: string): WarehouseCompany;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseCompany.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseCompany): WarehouseCompany.AsObject;
  static serializeBinaryToWriter(message: WarehouseCompany, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseCompany;
  static deserializeBinaryFromReader(message: WarehouseCompany, reader: jspb.BinaryReader): WarehouseCompany;
}

export namespace WarehouseCompany {
  export type AsObject = {
    id: string,
    codeNom: string,
  }
}

export class CompanyWithWarehouseRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CompanyWithWarehouseRequest;

  getNom(): string;
  setNom(value: string): CompanyWithWarehouseRequest;

  getCode(): string;
  setCode(value: string): CompanyWithWarehouseRequest;

  getCodeNom(): string;
  setCodeNom(value: string): CompanyWithWarehouseRequest;

  getWarehousesList(): Array<WarehouseCompany>;
  setWarehousesList(value: Array<WarehouseCompany>): CompanyWithWarehouseRequest;
  clearWarehousesList(): CompanyWithWarehouseRequest;
  addWarehouses(value?: WarehouseCompany, index?: number): WarehouseCompany;

  getCreateAt(): number;
  setCreateAt(value: number): CompanyWithWarehouseRequest;

  getUpdateAt(): number;
  setUpdateAt(value: number): CompanyWithWarehouseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyWithWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyWithWarehouseRequest): CompanyWithWarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: CompanyWithWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyWithWarehouseRequest;
  static deserializeBinaryFromReader(message: CompanyWithWarehouseRequest, reader: jspb.BinaryReader): CompanyWithWarehouseRequest;
}

export namespace CompanyWithWarehouseRequest {
  export type AsObject = {
    id: string,
    nom: string,
    code: string,
    codeNom: string,
    warehousesList: Array<WarehouseCompany.AsObject>,
    createAt: number,
    updateAt: number,
  }
}

export class CompanyRequestInput extends jspb.Message {
  getNom(): string;
  setNom(value: string): CompanyRequestInput;

  getCode(): string;
  setCode(value: string): CompanyRequestInput;

  getWarehouseIdsList(): Array<string>;
  setWarehouseIdsList(value: Array<string>): CompanyRequestInput;
  clearWarehouseIdsList(): CompanyRequestInput;
  addWarehouseIds(value: string, index?: number): CompanyRequestInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyRequestInput.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyRequestInput): CompanyRequestInput.AsObject;
  static serializeBinaryToWriter(message: CompanyRequestInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyRequestInput;
  static deserializeBinaryFromReader(message: CompanyRequestInput, reader: jspb.BinaryReader): CompanyRequestInput;
}

export namespace CompanyRequestInput {
  export type AsObject = {
    nom: string,
    code: string,
    warehouseIdsList: Array<string>,
  }
}

export class WarehouseRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): WarehouseRequest;
  clearIdsList(): WarehouseRequest;
  addIds(value: string, index?: number): WarehouseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseRequest): WarehouseRequest.AsObject;
  static serializeBinaryToWriter(message: WarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseRequest;
  static deserializeBinaryFromReader(message: WarehouseRequest, reader: jspb.BinaryReader): WarehouseRequest;
}

export namespace WarehouseRequest {
  export type AsObject = {
    idsList: Array<string>,
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

export class Response extends jspb.Message {
  getEntrycompany(): CompanyRequest | undefined;
  setEntrycompany(value?: CompanyRequest): Response;
  hasEntrycompany(): boolean;
  clearEntrycompany(): Response;

  getEntrywarehouse(): WarehouseRequest | undefined;
  setEntrywarehouse(value?: WarehouseRequest): Response;
  hasEntrywarehouse(): boolean;
  clearEntrywarehouse(): Response;

  getMessageerror(): string;
  setMessageerror(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    entrycompany?: CompanyRequest.AsObject,
    entrywarehouse?: WarehouseRequest.AsObject,
    messageerror: string,
  }
}

export class CreateCompanyRequest extends jspb.Message {
  getNom(): string;
  setNom(value: string): CreateCompanyRequest;

  getCode(): string;
  setCode(value: string): CreateCompanyRequest;

  getWarehouseIdsList(): Array<string>;
  setWarehouseIdsList(value: Array<string>): CreateCompanyRequest;
  clearWarehouseIdsList(): CreateCompanyRequest;
  addWarehouseIds(value: string, index?: number): CreateCompanyRequest;

  getRequireAnomaly(): boolean;
  setRequireAnomaly(value: boolean): CreateCompanyRequest;
  hasRequireAnomaly(): boolean;
  clearRequireAnomaly(): CreateCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyRequest): CreateCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyRequest;
  static deserializeBinaryFromReader(message: CreateCompanyRequest, reader: jspb.BinaryReader): CreateCompanyRequest;
}

export namespace CreateCompanyRequest {
  export type AsObject = {
    nom: string,
    code: string,
    warehouseIdsList: Array<string>,
    requireAnomaly?: boolean,
  }

  export enum RequireAnomalyCase { 
    _REQUIRE_ANOMALY_NOT_SET = 0,
    REQUIRE_ANOMALY = 4,
  }
}

export class UpdateCompanyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCompanyRequest;

  getNom(): string;
  setNom(value: string): UpdateCompanyRequest;

  getCode(): string;
  setCode(value: string): UpdateCompanyRequest;

  getWarehouseIdsList(): Array<string>;
  setWarehouseIdsList(value: Array<string>): UpdateCompanyRequest;
  clearWarehouseIdsList(): UpdateCompanyRequest;
  addWarehouseIds(value: string, index?: number): UpdateCompanyRequest;

  getRequireAnomaly(): boolean;
  setRequireAnomaly(value: boolean): UpdateCompanyRequest;
  hasRequireAnomaly(): boolean;
  clearRequireAnomaly(): UpdateCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompanyRequest): UpdateCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompanyRequest;
  static deserializeBinaryFromReader(message: UpdateCompanyRequest, reader: jspb.BinaryReader): UpdateCompanyRequest;
}

export namespace UpdateCompanyRequest {
  export type AsObject = {
    id: string,
    nom: string,
    code: string,
    warehouseIdsList: Array<string>,
    requireAnomaly?: boolean,
  }

  export enum RequireAnomalyCase { 
    _REQUIRE_ANOMALY_NOT_SET = 0,
    REQUIRE_ANOMALY = 5,
  }
}

export class GetAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GetAllRequest;

  getOffset(): number;
  setOffset(value: number): GetAllRequest;

  getOrder(): string;
  setOrder(value: string): GetAllRequest;

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
    order: string,
  }
}

export class GetAllResponse extends jspb.Message {
  getEntryList(): Array<CompanyWithWarehouseRequest>;
  setEntryList(value: Array<CompanyWithWarehouseRequest>): GetAllResponse;
  clearEntryList(): GetAllResponse;
  addEntry(value?: CompanyWithWarehouseRequest, index?: number): CompanyWithWarehouseRequest;

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
    entryList: Array<CompanyWithWarehouseRequest.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class WarehouseIdRequest extends jspb.Message {
  getWarehouseId(): string;
  setWarehouseId(value: string): WarehouseIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarehouseIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WarehouseIdRequest): WarehouseIdRequest.AsObject;
  static serializeBinaryToWriter(message: WarehouseIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarehouseIdRequest;
  static deserializeBinaryFromReader(message: WarehouseIdRequest, reader: jspb.BinaryReader): WarehouseIdRequest;
}

export namespace WarehouseIdRequest {
  export type AsObject = {
    warehouseId: string,
  }
}

export class GetAllCompaniesByWarehouseIdResponse extends jspb.Message {
  getEntryList(): Array<WarehouseCompany>;
  setEntryList(value: Array<WarehouseCompany>): GetAllCompaniesByWarehouseIdResponse;
  clearEntryList(): GetAllCompaniesByWarehouseIdResponse;
  addEntry(value?: WarehouseCompany, index?: number): WarehouseCompany;

  getMessageerror(): string;
  setMessageerror(value: string): GetAllCompaniesByWarehouseIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompaniesByWarehouseIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompaniesByWarehouseIdResponse): GetAllCompaniesByWarehouseIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllCompaniesByWarehouseIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompaniesByWarehouseIdResponse;
  static deserializeBinaryFromReader(message: GetAllCompaniesByWarehouseIdResponse, reader: jspb.BinaryReader): GetAllCompaniesByWarehouseIdResponse;
}

export namespace GetAllCompaniesByWarehouseIdResponse {
  export type AsObject = {
    entryList: Array<WarehouseCompany.AsObject>,
    messageerror: string,
  }
}

export class DeleteCompanyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompanyRequest): DeleteCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompanyRequest;
  static deserializeBinaryFromReader(message: DeleteCompanyRequest, reader: jspb.BinaryReader): DeleteCompanyRequest;
}

export namespace DeleteCompanyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCompanyResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): DeleteCompanyResponse;

  getMessageError(): string;
  setMessageError(value: string): DeleteCompanyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompanyResponse): DeleteCompanyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompanyResponse;
  static deserializeBinaryFromReader(message: DeleteCompanyResponse, reader: jspb.BinaryReader): DeleteCompanyResponse;
}

export namespace DeleteCompanyResponse {
  export type AsObject = {
    status: number,
    messageError: string,
  }
}

export class FindCompanyByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FindCompanyByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindCompanyByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindCompanyByIdRequest): FindCompanyByIdRequest.AsObject;
  static serializeBinaryToWriter(message: FindCompanyByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindCompanyByIdRequest;
  static deserializeBinaryFromReader(message: FindCompanyByIdRequest, reader: jspb.BinaryReader): FindCompanyByIdRequest;
}

export namespace FindCompanyByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class FindCompanyByIdResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): FindCompanyByIdResponse;

  getMessageError(): string;
  setMessageError(value: string): FindCompanyByIdResponse;

  getEntry(): Company | undefined;
  setEntry(value?: Company): FindCompanyByIdResponse;
  hasEntry(): boolean;
  clearEntry(): FindCompanyByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindCompanyByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindCompanyByIdResponse): FindCompanyByIdResponse.AsObject;
  static serializeBinaryToWriter(message: FindCompanyByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindCompanyByIdResponse;
  static deserializeBinaryFromReader(message: FindCompanyByIdResponse, reader: jspb.BinaryReader): FindCompanyByIdResponse;
}

export namespace FindCompanyByIdResponse {
  export type AsObject = {
    status: number,
    messageError: string,
    entry?: Company.AsObject,
  }
}

export class UpdateCompanyResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): UpdateCompanyResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateCompanyResponse;

  getEntry(): Company | undefined;
  setEntry(value?: Company): UpdateCompanyResponse;
  hasEntry(): boolean;
  clearEntry(): UpdateCompanyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompanyResponse): UpdateCompanyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompanyResponse;
  static deserializeBinaryFromReader(message: UpdateCompanyResponse, reader: jspb.BinaryReader): UpdateCompanyResponse;
}

export namespace UpdateCompanyResponse {
  export type AsObject = {
    status: number,
    messageError: string,
    entry?: Company.AsObject,
  }
}

export class GetAllCompanyWarehouseForUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAllCompanyWarehouseForUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompanyWarehouseForUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompanyWarehouseForUpdateRequest): GetAllCompanyWarehouseForUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllCompanyWarehouseForUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompanyWarehouseForUpdateRequest;
  static deserializeBinaryFromReader(message: GetAllCompanyWarehouseForUpdateRequest, reader: jspb.BinaryReader): GetAllCompanyWarehouseForUpdateRequest;
}

export namespace GetAllCompanyWarehouseForUpdateRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetAllCompanyWarehouseForUpdateResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): GetAllCompanyWarehouseForUpdateResponse;

  getMessageError(): string;
  setMessageError(value: string): GetAllCompanyWarehouseForUpdateResponse;

  getEntryList(): Array<WarehouseCompanyDto>;
  setEntryList(value: Array<WarehouseCompanyDto>): GetAllCompanyWarehouseForUpdateResponse;
  clearEntryList(): GetAllCompanyWarehouseForUpdateResponse;
  addEntry(value?: WarehouseCompanyDto, index?: number): WarehouseCompanyDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompanyWarehouseForUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompanyWarehouseForUpdateResponse): GetAllCompanyWarehouseForUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllCompanyWarehouseForUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompanyWarehouseForUpdateResponse;
  static deserializeBinaryFromReader(message: GetAllCompanyWarehouseForUpdateResponse, reader: jspb.BinaryReader): GetAllCompanyWarehouseForUpdateResponse;
}

export namespace GetAllCompanyWarehouseForUpdateResponse {
  export type AsObject = {
    status: number,
    messageError: string,
    entryList: Array<WarehouseCompanyDto.AsObject>,
  }
}

export class DeleteManyCompanyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteManyCompanyRequest;
  clearIdsList(): DeleteManyCompanyRequest;
  addIds(value: string, index?: number): DeleteManyCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteManyCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteManyCompanyRequest): DeleteManyCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteManyCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteManyCompanyRequest;
  static deserializeBinaryFromReader(message: DeleteManyCompanyRequest, reader: jspb.BinaryReader): DeleteManyCompanyRequest;
}

export namespace DeleteManyCompanyRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class DeleteManyCompanyResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): DeleteManyCompanyResponse;

  getMessageError(): string;
  setMessageError(value: string): DeleteManyCompanyResponse;

  getCompaniesNoPermitToDeleteList(): Array<string>;
  setCompaniesNoPermitToDeleteList(value: Array<string>): DeleteManyCompanyResponse;
  clearCompaniesNoPermitToDeleteList(): DeleteManyCompanyResponse;
  addCompaniesNoPermitToDelete(value: string, index?: number): DeleteManyCompanyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteManyCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteManyCompanyResponse): DeleteManyCompanyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteManyCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteManyCompanyResponse;
  static deserializeBinaryFromReader(message: DeleteManyCompanyResponse, reader: jspb.BinaryReader): DeleteManyCompanyResponse;
}

export namespace DeleteManyCompanyResponse {
  export type AsObject = {
    status: number,
    messageError: string,
    companiesNoPermitToDeleteList: Array<string>,
  }
}

export class GetAllCompanyListRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): GetAllCompanyListRequest;
  hasCompanyId(): boolean;
  clearCompanyId(): GetAllCompanyListRequest;

  getWarehousesList(): Array<string>;
  setWarehousesList(value: Array<string>): GetAllCompanyListRequest;
  clearWarehousesList(): GetAllCompanyListRequest;
  addWarehouses(value: string, index?: number): GetAllCompanyListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompanyListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompanyListRequest): GetAllCompanyListRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllCompanyListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompanyListRequest;
  static deserializeBinaryFromReader(message: GetAllCompanyListRequest, reader: jspb.BinaryReader): GetAllCompanyListRequest;
}

export namespace GetAllCompanyListRequest {
  export type AsObject = {
    companyId?: string,
    warehousesList: Array<string>,
  }

  export enum CompanyIdCase { 
    _COMPANY_ID_NOT_SET = 0,
    COMPANY_ID = 1,
  }
}

export class GetAllCompanyListResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): GetAllCompanyListResponse;

  getMessageError(): string;
  setMessageError(value: string): GetAllCompanyListResponse;

  getCompaniesList(): Array<CompanyData>;
  setCompaniesList(value: Array<CompanyData>): GetAllCompanyListResponse;
  clearCompaniesList(): GetAllCompanyListResponse;
  addCompanies(value?: CompanyData, index?: number): CompanyData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompanyListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompanyListResponse): GetAllCompanyListResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllCompanyListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompanyListResponse;
  static deserializeBinaryFromReader(message: GetAllCompanyListResponse, reader: jspb.BinaryReader): GetAllCompanyListResponse;
}

export namespace GetAllCompanyListResponse {
  export type AsObject = {
    status: number,
    messageError: string,
    companiesList: Array<CompanyData.AsObject>,
  }
}

export class CompanyData extends jspb.Message {
  getWarehouseId(): string;
  setWarehouseId(value: string): CompanyData;

  getCompaniesList(): Array<CompanyItem>;
  setCompaniesList(value: Array<CompanyItem>): CompanyData;
  clearCompaniesList(): CompanyData;
  addCompanies(value?: CompanyItem, index?: number): CompanyItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyData.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyData): CompanyData.AsObject;
  static serializeBinaryToWriter(message: CompanyData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyData;
  static deserializeBinaryFromReader(message: CompanyData, reader: jspb.BinaryReader): CompanyData;
}

export namespace CompanyData {
  export type AsObject = {
    warehouseId: string,
    companiesList: Array<CompanyItem.AsObject>,
  }
}

export class CompanyItem extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): CompanyItem;

  getCodeNom(): string;
  setCodeNom(value: string): CompanyItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyItem.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyItem): CompanyItem.AsObject;
  static serializeBinaryToWriter(message: CompanyItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyItem;
  static deserializeBinaryFromReader(message: CompanyItem, reader: jspb.BinaryReader): CompanyItem;
}

export namespace CompanyItem {
  export type AsObject = {
    companyId: string,
    codeNom: string,
  }
}

