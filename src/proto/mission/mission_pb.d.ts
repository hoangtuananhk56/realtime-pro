import * as jspb from 'google-protobuf'

import * as proto_comarticle_comarticle_pb from '../../proto/comarticle/comarticle_pb'; // proto import: "proto/comarticle/comarticle.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class MissionFile extends jspb.Message {
  getPath(): string;
  setPath(value: string): MissionFile;

  getName(): string;
  setName(value: string): MissionFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionFile.AsObject;
  static toObject(includeInstance: boolean, msg: MissionFile): MissionFile.AsObject;
  static serializeBinaryToWriter(message: MissionFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionFile;
  static deserializeBinaryFromReader(message: MissionFile, reader: jspb.BinaryReader): MissionFile;
}

export namespace MissionFile {
  export type AsObject = {
    path: string,
    name: string,
  }
}

export class Mission extends jspb.Message {
  getId(): string;
  setId(value: string): Mission;

  getCreatedAt(): number;
  setCreatedAt(value: number): Mission;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Mission;

  getParentId(): string;
  setParentId(value: string): Mission;

  getModificationBy(): string;
  setModificationBy(value: string): Mission;

  getModificationerId(): string;
  setModificationerId(value: string): Mission;

  getValidationBy(): string;
  setValidationBy(value: string): Mission;

  getValidationerId(): string;
  setValidationerId(value: string): Mission;

  getValidationTime(): number;
  setValidationTime(value: number): Mission;

  getManagerId(): string;
  setManagerId(value: string): Mission;

  getManagerBy(): string;
  setManagerBy(value: string): Mission;

  getAssigneeId(): string;
  setAssigneeId(value: string): Mission;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): Mission;

  getStatusCode(): string;
  setStatusCode(value: string): Mission;

  getComArticleList(): Array<proto_comarticle_comarticle_pb.ComArticle>;
  setComArticleList(value: Array<proto_comarticle_comarticle_pb.ComArticle>): Mission;
  clearComArticleList(): Mission;
  addComArticle(value?: proto_comarticle_comarticle_pb.ComArticle, index?: number): proto_comarticle_comarticle_pb.ComArticle;

  getPriorite(): number;
  setPriorite(value: number): Mission;

  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): Mission;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): Mission;

  getClientCodeNom(): string;
  setClientCodeNom(value: string): Mission;

  getNom(): string;
  setNom(value: string): Mission;

  getMissionType(): number;
  setMissionType(value: number): Mission;

  getTruckNumber(): string;
  setTruckNumber(value: string): Mission;

  getSscc(): string;
  setSscc(value: string): Mission;

  getCompanyId(): string;
  setCompanyId(value: string): Mission;

  getWarehouseId(): string;
  setWarehouseId(value: string): Mission;

  getClientId(): string;
  setClientId(value: string): Mission;

  getLoadingBl(): string;
  setLoadingBl(value: string): Mission;

  getMissionFilesList(): Array<MissionFile>;
  setMissionFilesList(value: Array<MissionFile>): Mission;
  clearMissionFilesList(): Mission;
  addMissionFiles(value?: MissionFile, index?: number): MissionFile;

  getExpectedDate(): number;
  setExpectedDate(value: number): Mission;

  getAssignmentDate(): number;
  setAssignmentDate(value: number): Mission;

  getExecutionDate(): number;
  setExecutionDate(value: number): Mission;

  getProgress(): number;
  setProgress(value: number): Mission;

  getMissionName(): string;
  setMissionName(value: string): Mission;

  getCreatedBy(): string;
  setCreatedBy(value: string): Mission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mission.AsObject;
  static toObject(includeInstance: boolean, msg: Mission): Mission.AsObject;
  static serializeBinaryToWriter(message: Mission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mission;
  static deserializeBinaryFromReader(message: Mission, reader: jspb.BinaryReader): Mission;
}

export namespace Mission {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    parentId: string,
    modificationBy: string,
    modificationerId: string,
    validationBy: string,
    validationerId: string,
    validationTime: number,
    managerId: string,
    managerBy: string,
    assigneeId: string,
    assigneeBy: string,
    statusCode: string,
    comArticleList: Array<proto_comarticle_comarticle_pb.ComArticle.AsObject>,
    priorite: number,
    companyCodeNom: string,
    warehouseCodeNom: string,
    clientCodeNom: string,
    nom: string,
    missionType: number,
    truckNumber: string,
    sscc: string,
    companyId: string,
    warehouseId: string,
    clientId: string,
    loadingBl: string,
    missionFilesList: Array<MissionFile.AsObject>,
    expectedDate: number,
    assignmentDate: number,
    executionDate: number,
    progress: number,
    missionName: string,
    createdBy: string,
  }
}

export class MissionRequest extends jspb.Message {
  getEntry(): Mission | undefined;
  setEntry(value?: Mission): MissionRequest;
  hasEntry(): boolean;
  clearEntry(): MissionRequest;

  getStatusCode(): string;
  setStatusCode(value: string): MissionRequest;

  getScene(): string;
  setScene(value: string): MissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionRequest): MissionRequest.AsObject;
  static serializeBinaryToWriter(message: MissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionRequest;
  static deserializeBinaryFromReader(message: MissionRequest, reader: jspb.BinaryReader): MissionRequest;
}

export namespace MissionRequest {
  export type AsObject = {
    entry?: Mission.AsObject,
    statusCode: string,
    scene: string,
  }
}

export class UserIDRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): UserIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserIDRequest): UserIDRequest.AsObject;
  static serializeBinaryToWriter(message: UserIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIDRequest;
  static deserializeBinaryFromReader(message: UserIDRequest, reader: jspb.BinaryReader): UserIDRequest;
}

export namespace UserIDRequest {
  export type AsObject = {
    userid: string,
  }
}

export class MissionResponse extends jspb.Message {
  getEntry(): Mission | undefined;
  setEntry(value?: Mission): MissionResponse;
  hasEntry(): boolean;
  clearEntry(): MissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): MissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MissionResponse): MissionResponse.AsObject;
  static serializeBinaryToWriter(message: MissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionResponse;
  static deserializeBinaryFromReader(message: MissionResponse, reader: jspb.BinaryReader): MissionResponse;
}

export namespace MissionResponse {
  export type AsObject = {
    entry?: Mission.AsObject,
    messageerror: string,
  }
}

export class MissionIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): MissionIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionIDRequest): MissionIDRequest.AsObject;
  static serializeBinaryToWriter(message: MissionIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionIDRequest;
  static deserializeBinaryFromReader(message: MissionIDRequest, reader: jspb.BinaryReader): MissionIDRequest;
}

export namespace MissionIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class CheckEnterTruckNumberResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): CheckEnterTruckNumberResponse;

  getMessageError(): string;
  setMessageError(value: string): CheckEnterTruckNumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEnterTruckNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEnterTruckNumberResponse): CheckEnterTruckNumberResponse.AsObject;
  static serializeBinaryToWriter(message: CheckEnterTruckNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEnterTruckNumberResponse;
  static deserializeBinaryFromReader(message: CheckEnterTruckNumberResponse, reader: jspb.BinaryReader): CheckEnterTruckNumberResponse;
}

export namespace CheckEnterTruckNumberResponse {
  export type AsObject = {
    isValid: boolean,
    messageError: string,
  }
}

export class CheckEnterTruckNumberRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CheckEnterTruckNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEnterTruckNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEnterTruckNumberRequest): CheckEnterTruckNumberRequest.AsObject;
  static serializeBinaryToWriter(message: CheckEnterTruckNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEnterTruckNumberRequest;
  static deserializeBinaryFromReader(message: CheckEnterTruckNumberRequest, reader: jspb.BinaryReader): CheckEnterTruckNumberRequest;
}

export namespace CheckEnterTruckNumberRequest {
  export type AsObject = {
    id: string,
  }
}

export class UpdateEnterTruckNumberResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): UpdateEnterTruckNumberResponse;

  getMessageError(): string;
  setMessageError(value: string): UpdateEnterTruckNumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEnterTruckNumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEnterTruckNumberResponse): UpdateEnterTruckNumberResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEnterTruckNumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEnterTruckNumberResponse;
  static deserializeBinaryFromReader(message: UpdateEnterTruckNumberResponse, reader: jspb.BinaryReader): UpdateEnterTruckNumberResponse;
}

export namespace UpdateEnterTruckNumberResponse {
  export type AsObject = {
    isValid: boolean,
    messageError: string,
  }
}

export class UpdateEnterTruckNumberRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEnterTruckNumberRequest;

  getTruckNumber(): string;
  setTruckNumber(value: string): UpdateEnterTruckNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEnterTruckNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEnterTruckNumberRequest): UpdateEnterTruckNumberRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEnterTruckNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEnterTruckNumberRequest;
  static deserializeBinaryFromReader(message: UpdateEnterTruckNumberRequest, reader: jspb.BinaryReader): UpdateEnterTruckNumberRequest;
}

export namespace UpdateEnterTruckNumberRequest {
  export type AsObject = {
    id: string,
    truckNumber: string,
  }
}

export class MissionInfo extends jspb.Message {
  getIsManualLot(): boolean;
  setIsManualLot(value: boolean): MissionInfo;

  getIsManualSscc(): boolean;
  setIsManualSscc(value: boolean): MissionInfo;

  getIsManualDluo(): boolean;
  setIsManualDluo(value: boolean): MissionInfo;

  getSscc(): string;
  setSscc(value: string): MissionInfo;

  getLot(): string;
  setLot(value: string): MissionInfo;

  getDluo(): number;
  setDluo(value: number): MissionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MissionInfo): MissionInfo.AsObject;
  static serializeBinaryToWriter(message: MissionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionInfo;
  static deserializeBinaryFromReader(message: MissionInfo, reader: jspb.BinaryReader): MissionInfo;
}

export namespace MissionInfo {
  export type AsObject = {
    isManualLot: boolean,
    isManualSscc: boolean,
    isManualDluo: boolean,
    sscc: string,
    lot: string,
    dluo: number,
  }
}

export class CreateReapproMission extends jspb.Message {
  getCommandeId(): string;
  setCommandeId(value: string): CreateReapproMission;

  getSsccsList(): Array<MissionInfo>;
  setSsccsList(value: Array<MissionInfo>): CreateReapproMission;
  clearSsccsList(): CreateReapproMission;
  addSsccs(value?: MissionInfo, index?: number): MissionInfo;

  getPriorite(): number;
  setPriorite(value: number): CreateReapproMission;

  getCompanyId(): string;
  setCompanyId(value: string): CreateReapproMission;

  getWarehouseId(): string;
  setWarehouseId(value: string): CreateReapproMission;

  getClientId(): string;
  setClientId(value: string): CreateReapproMission;

  getCommandeNom(): string;
  setCommandeNom(value: string): CreateReapproMission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReapproMission.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReapproMission): CreateReapproMission.AsObject;
  static serializeBinaryToWriter(message: CreateReapproMission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReapproMission;
  static deserializeBinaryFromReader(message: CreateReapproMission, reader: jspb.BinaryReader): CreateReapproMission;
}

export namespace CreateReapproMission {
  export type AsObject = {
    commandeId: string,
    ssccsList: Array<MissionInfo.AsObject>,
    priorite: number,
    companyId: string,
    warehouseId: string,
    clientId: string,
    commandeNom: string,
  }
}

export class CreateReapproMissionRequest extends jspb.Message {
  getEntry(): CreateReapproMission | undefined;
  setEntry(value?: CreateReapproMission): CreateReapproMissionRequest;
  hasEntry(): boolean;
  clearEntry(): CreateReapproMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReapproMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReapproMissionRequest): CreateReapproMissionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReapproMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReapproMissionRequest;
  static deserializeBinaryFromReader(message: CreateReapproMissionRequest, reader: jspb.BinaryReader): CreateReapproMissionRequest;
}

export namespace CreateReapproMissionRequest {
  export type AsObject = {
    entry?: CreateReapproMission.AsObject,
  }
}

export class SsccResponse extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): SsccResponse;

  getErrStatus(): string;
  setErrStatus(value: string): SsccResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SsccResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SsccResponse): SsccResponse.AsObject;
  static serializeBinaryToWriter(message: SsccResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SsccResponse;
  static deserializeBinaryFromReader(message: SsccResponse, reader: jspb.BinaryReader): SsccResponse;
}

export namespace SsccResponse {
  export type AsObject = {
    sscc: string,
    errStatus: string,
  }
}

export class CreateReapproMissionResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): CreateReapproMissionResponse;

  getMessageError(): string;
  setMessageError(value: string): CreateReapproMissionResponse;

  getErrDetailList(): Array<SsccResponse>;
  setErrDetailList(value: Array<SsccResponse>): CreateReapproMissionResponse;
  clearErrDetailList(): CreateReapproMissionResponse;
  addErrDetail(value?: SsccResponse, index?: number): SsccResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReapproMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReapproMissionResponse): CreateReapproMissionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateReapproMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReapproMissionResponse;
  static deserializeBinaryFromReader(message: CreateReapproMissionResponse, reader: jspb.BinaryReader): CreateReapproMissionResponse;
}

export namespace CreateReapproMissionResponse {
  export type AsObject = {
    status: string,
    messageError: string,
    errDetailList: Array<SsccResponse.AsObject>,
  }
}

export class GetDashboardInformationRequest extends jspb.Message {
  getCompanyCodeNom(): string;
  setCompanyCodeNom(value: string): GetDashboardInformationRequest;

  getWarehouseCodeNom(): string;
  setWarehouseCodeNom(value: string): GetDashboardInformationRequest;

  getUserId(): string;
  setUserId(value: string): GetDashboardInformationRequest;

  getCompanyId(): string;
  setCompanyId(value: string): GetDashboardInformationRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): GetDashboardInformationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardInformationRequest): GetDashboardInformationRequest.AsObject;
  static serializeBinaryToWriter(message: GetDashboardInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardInformationRequest;
  static deserializeBinaryFromReader(message: GetDashboardInformationRequest, reader: jspb.BinaryReader): GetDashboardInformationRequest;
}

export namespace GetDashboardInformationRequest {
  export type AsObject = {
    companyCodeNom: string,
    warehouseCodeNom: string,
    userId: string,
    companyId: string,
    warehouseId: string,
  }
}

export class GetDashboardInformationResponse extends jspb.Message {
  getUnassigned(): string;
  setUnassigned(value: string): GetDashboardInformationResponse;

  getAssigned(): string;
  setAssigned(value: string): GetDashboardInformationResponse;

  getInprogress(): string;
  setInprogress(value: string): GetDashboardInformationResponse;

  getCompleted(): string;
  setCompleted(value: string): GetDashboardInformationResponse;

  getPending(): string;
  setPending(value: string): GetDashboardInformationResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetDashboardInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardInformationResponse): GetDashboardInformationResponse.AsObject;
  static serializeBinaryToWriter(message: GetDashboardInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardInformationResponse;
  static deserializeBinaryFromReader(message: GetDashboardInformationResponse, reader: jspb.BinaryReader): GetDashboardInformationResponse;
}

export namespace GetDashboardInformationResponse {
  export type AsObject = {
    unassigned: string,
    assigned: string,
    inprogress: string,
    completed: string,
    pending: string,
    messageerror: string,
  }
}

export class TerminateMissionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TerminateMissionRequest;

  getUserId(): string;
  setUserId(value: string): TerminateMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerminateMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TerminateMissionRequest): TerminateMissionRequest.AsObject;
  static serializeBinaryToWriter(message: TerminateMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerminateMissionRequest;
  static deserializeBinaryFromReader(message: TerminateMissionRequest, reader: jspb.BinaryReader): TerminateMissionRequest;
}

export namespace TerminateMissionRequest {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class GetInterruptReasonMasterDataRequest extends jspb.Message {
  getMissionType(): number;
  setMissionType(value: number): GetInterruptReasonMasterDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInterruptReasonMasterDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInterruptReasonMasterDataRequest): GetInterruptReasonMasterDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetInterruptReasonMasterDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInterruptReasonMasterDataRequest;
  static deserializeBinaryFromReader(message: GetInterruptReasonMasterDataRequest, reader: jspb.BinaryReader): GetInterruptReasonMasterDataRequest;
}

export namespace GetInterruptReasonMasterDataRequest {
  export type AsObject = {
    missionType: number,
  }
}

export class InterruptReasonMasterData extends jspb.Message {
  getContent(): string;
  setContent(value: string): InterruptReasonMasterData;

  getIsAttachNote(): boolean;
  setIsAttachNote(value: boolean): InterruptReasonMasterData;
  hasIsAttachNote(): boolean;
  clearIsAttachNote(): InterruptReasonMasterData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterruptReasonMasterData.AsObject;
  static toObject(includeInstance: boolean, msg: InterruptReasonMasterData): InterruptReasonMasterData.AsObject;
  static serializeBinaryToWriter(message: InterruptReasonMasterData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterruptReasonMasterData;
  static deserializeBinaryFromReader(message: InterruptReasonMasterData, reader: jspb.BinaryReader): InterruptReasonMasterData;
}

export namespace InterruptReasonMasterData {
  export type AsObject = {
    content: string,
    isAttachNote?: boolean,
  }

  export enum IsAttachNoteCase { 
    _IS_ATTACH_NOTE_NOT_SET = 0,
    IS_ATTACH_NOTE = 2,
  }
}

export class GetInterruptReasonMasterDataResponse extends jspb.Message {
  getInterruptReasonMasterDataList(): Array<InterruptReasonMasterData>;
  setInterruptReasonMasterDataList(value: Array<InterruptReasonMasterData>): GetInterruptReasonMasterDataResponse;
  clearInterruptReasonMasterDataList(): GetInterruptReasonMasterDataResponse;
  addInterruptReasonMasterData(value?: InterruptReasonMasterData, index?: number): InterruptReasonMasterData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInterruptReasonMasterDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInterruptReasonMasterDataResponse): GetInterruptReasonMasterDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetInterruptReasonMasterDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInterruptReasonMasterDataResponse;
  static deserializeBinaryFromReader(message: GetInterruptReasonMasterDataResponse, reader: jspb.BinaryReader): GetInterruptReasonMasterDataResponse;
}

export namespace GetInterruptReasonMasterDataResponse {
  export type AsObject = {
    interruptReasonMasterDataList: Array<InterruptReasonMasterData.AsObject>,
  }
}

export class CreateMissionMovementRequest extends jspb.Message {
  getStockId(): string;
  setStockId(value: string): CreateMissionMovementRequest;

  getSscc(): string;
  setSscc(value: string): CreateMissionMovementRequest;

  getBarCode(): string;
  setBarCode(value: string): CreateMissionMovementRequest;

  getPriorite(): number;
  setPriorite(value: number): CreateMissionMovementRequest;

  getCreationerCode(): string;
  setCreationerCode(value: string): CreateMissionMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMissionMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMissionMovementRequest): CreateMissionMovementRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMissionMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMissionMovementRequest;
  static deserializeBinaryFromReader(message: CreateMissionMovementRequest, reader: jspb.BinaryReader): CreateMissionMovementRequest;
}

export namespace CreateMissionMovementRequest {
  export type AsObject = {
    stockId: string,
    sscc: string,
    barCode: string,
    priorite: number,
    creationerCode: string,
  }
}

export class CreateMissionMovementResponse extends jspb.Message {
  getContent(): string;
  setContent(value: string): CreateMissionMovementResponse;

  getIsAttachNote(): boolean;
  setIsAttachNote(value: boolean): CreateMissionMovementResponse;
  hasIsAttachNote(): boolean;
  clearIsAttachNote(): CreateMissionMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMissionMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMissionMovementResponse): CreateMissionMovementResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMissionMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMissionMovementResponse;
  static deserializeBinaryFromReader(message: CreateMissionMovementResponse, reader: jspb.BinaryReader): CreateMissionMovementResponse;
}

export namespace CreateMissionMovementResponse {
  export type AsObject = {
    content: string,
    isAttachNote?: boolean,
  }

  export enum IsAttachNoteCase { 
    _IS_ATTACH_NOTE_NOT_SET = 0,
    IS_ATTACH_NOTE = 2,
  }
}

export class UpdateSpecialMissionRequest extends jspb.Message {
  getMissionName(): string;
  setMissionName(value: string): UpdateSpecialMissionRequest;

  getUserId(): string;
  setUserId(value: string): UpdateSpecialMissionRequest;

  getCompanyId(): string;
  setCompanyId(value: string): UpdateSpecialMissionRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): UpdateSpecialMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSpecialMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSpecialMissionRequest): UpdateSpecialMissionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSpecialMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSpecialMissionRequest;
  static deserializeBinaryFromReader(message: UpdateSpecialMissionRequest, reader: jspb.BinaryReader): UpdateSpecialMissionRequest;
}

export namespace UpdateSpecialMissionRequest {
  export type AsObject = {
    missionName: string,
    userId: string,
    companyId: string,
    warehouseId: string,
  }
}

export class CheckMissionMovementRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CheckMissionMovementRequest;

  getSscc(): string;
  setSscc(value: string): CheckMissionMovementRequest;

  getUserId(): string;
  setUserId(value: string): CheckMissionMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMissionMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMissionMovementRequest): CheckMissionMovementRequest.AsObject;
  static serializeBinaryToWriter(message: CheckMissionMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMissionMovementRequest;
  static deserializeBinaryFromReader(message: CheckMissionMovementRequest, reader: jspb.BinaryReader): CheckMissionMovementRequest;
}

export namespace CheckMissionMovementRequest {
  export type AsObject = {
    id: string,
    sscc: string,
    userId: string,
  }
}

export class CheckMissionMovementResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): CheckMissionMovementResponse;
  hasIsValid(): boolean;
  clearIsValid(): CheckMissionMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMissionMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMissionMovementResponse): CheckMissionMovementResponse.AsObject;
  static serializeBinaryToWriter(message: CheckMissionMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMissionMovementResponse;
  static deserializeBinaryFromReader(message: CheckMissionMovementResponse, reader: jspb.BinaryReader): CheckMissionMovementResponse;
}

export namespace CheckMissionMovementResponse {
  export type AsObject = {
    isValid?: boolean,
  }

  export enum IsValidCase { 
    _IS_VALID_NOT_SET = 0,
    IS_VALID = 1,
  }
}

export class CheckActionMovementRequest extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): CheckActionMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckActionMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckActionMovementRequest): CheckActionMovementRequest.AsObject;
  static serializeBinaryToWriter(message: CheckActionMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckActionMovementRequest;
  static deserializeBinaryFromReader(message: CheckActionMovementRequest, reader: jspb.BinaryReader): CheckActionMovementRequest;
}

export namespace CheckActionMovementRequest {
  export type AsObject = {
    sscc: string,
  }
}

export class CheckActionMovementResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): CheckActionMovementResponse;
  hasIsValid(): boolean;
  clearIsValid(): CheckActionMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckActionMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckActionMovementResponse): CheckActionMovementResponse.AsObject;
  static serializeBinaryToWriter(message: CheckActionMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckActionMovementResponse;
  static deserializeBinaryFromReader(message: CheckActionMovementResponse, reader: jspb.BinaryReader): CheckActionMovementResponse;
}

export namespace CheckActionMovementResponse {
  export type AsObject = {
    isValid?: boolean,
  }

  export enum IsValidCase { 
    _IS_VALID_NOT_SET = 0,
    IS_VALID = 1,
  }
}

export class MissionReference extends jspb.Message {
  getId(): string;
  setId(value: string): MissionReference;

  getImage(): string;
  setImage(value: string): MissionReference;

  getCommentList(): Array<string>;
  setCommentList(value: Array<string>): MissionReference;
  clearCommentList(): MissionReference;
  addComment(value: string, index?: number): MissionReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionReference.AsObject;
  static toObject(includeInstance: boolean, msg: MissionReference): MissionReference.AsObject;
  static serializeBinaryToWriter(message: MissionReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionReference;
  static deserializeBinaryFromReader(message: MissionReference, reader: jspb.BinaryReader): MissionReference;
}

export namespace MissionReference {
  export type AsObject = {
    id: string,
    image: string,
    commentList: Array<string>,
  }
}

export class MissionArticle extends jspb.Message {
  getId(): string;
  setId(value: string): MissionArticle;

  getSscc(): string;
  setSscc(value: string): MissionArticle;

  getReference(): MissionReference | undefined;
  setReference(value?: MissionReference): MissionArticle;
  hasReference(): boolean;
  clearReference(): MissionArticle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionArticle.AsObject;
  static toObject(includeInstance: boolean, msg: MissionArticle): MissionArticle.AsObject;
  static serializeBinaryToWriter(message: MissionArticle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionArticle;
  static deserializeBinaryFromReader(message: MissionArticle, reader: jspb.BinaryReader): MissionArticle;
}

export namespace MissionArticle {
  export type AsObject = {
    id: string,
    sscc: string,
    reference?: MissionReference.AsObject,
  }
}

export class GetMissionDetailRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetMissionDetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionDetailRequest): GetMissionDetailRequest.AsObject;
  static serializeBinaryToWriter(message: GetMissionDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionDetailRequest;
  static deserializeBinaryFromReader(message: GetMissionDetailRequest, reader: jspb.BinaryReader): GetMissionDetailRequest;
}

export namespace GetMissionDetailRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMissionDetailResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetMissionDetailResponse;

  getMissionType(): number;
  setMissionType(value: number): GetMissionDetailResponse;
  hasMissionType(): boolean;
  clearMissionType(): GetMissionDetailResponse;

  getArticlesList(): Array<MissionArticle>;
  setArticlesList(value: Array<MissionArticle>): GetMissionDetailResponse;
  clearArticlesList(): GetMissionDetailResponse;
  addArticles(value?: MissionArticle, index?: number): MissionArticle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionDetailResponse): GetMissionDetailResponse.AsObject;
  static serializeBinaryToWriter(message: GetMissionDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionDetailResponse;
  static deserializeBinaryFromReader(message: GetMissionDetailResponse, reader: jspb.BinaryReader): GetMissionDetailResponse;
}

export namespace GetMissionDetailResponse {
  export type AsObject = {
    id: string,
    missionType?: number,
    articlesList: Array<MissionArticle.AsObject>,
  }

  export enum MissionTypeCase { 
    _MISSION_TYPE_NOT_SET = 0,
    MISSION_TYPE = 2,
  }
}

export class MissionFilesRequest extends jspb.Message {
  getMissionFilesList(): Array<MissionFileRequest>;
  setMissionFilesList(value: Array<MissionFileRequest>): MissionFilesRequest;
  clearMissionFilesList(): MissionFilesRequest;
  addMissionFiles(value?: MissionFileRequest, index?: number): MissionFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionFilesRequest): MissionFilesRequest.AsObject;
  static serializeBinaryToWriter(message: MissionFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionFilesRequest;
  static deserializeBinaryFromReader(message: MissionFilesRequest, reader: jspb.BinaryReader): MissionFilesRequest;
}

export namespace MissionFilesRequest {
  export type AsObject = {
    missionFilesList: Array<MissionFileRequest.AsObject>,
  }
}

export class MissionFileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): MissionFileRequest;

  getMissionId(): string;
  setMissionId(value: string): MissionFileRequest;

  getPath(): string;
  setPath(value: string): MissionFileRequest;

  getName(): string;
  setName(value: string): MissionFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionFileRequest): MissionFileRequest.AsObject;
  static serializeBinaryToWriter(message: MissionFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionFileRequest;
  static deserializeBinaryFromReader(message: MissionFileRequest, reader: jspb.BinaryReader): MissionFileRequest;
}

export namespace MissionFileRequest {
  export type AsObject = {
    id: string,
    missionId: string,
    path: string,
    name: string,
  }
}

export class Reserve extends jspb.Message {
  getId(): string;
  setId(value: string): Reserve;

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
    reserveTypeId: string,
    reserveTypeName: string,
    attenduId: string,
    sscc: string,
    quantity: number,
    imagesList: Array<string>,
  }
}

export class AttenduReserve extends jspb.Message {
  getSscc(): string;
  setSscc(value: string): AttenduReserve;

  getReservesList(): Array<Reserve>;
  setReservesList(value: Array<Reserve>): AttenduReserve;
  clearReservesList(): AttenduReserve;
  addReserves(value?: Reserve, index?: number): Reserve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttenduReserve.AsObject;
  static toObject(includeInstance: boolean, msg: AttenduReserve): AttenduReserve.AsObject;
  static serializeBinaryToWriter(message: AttenduReserve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttenduReserve;
  static deserializeBinaryFromReader(message: AttenduReserve, reader: jspb.BinaryReader): AttenduReserve;
}

export namespace AttenduReserve {
  export type AsObject = {
    sscc: string,
    reservesList: Array<Reserve.AsObject>,
  }
}

export class GetScanedReservesByMissionIdRequest extends jspb.Message {
  getAttenduId(): string;
  setAttenduId(value: string): GetScanedReservesByMissionIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanedReservesByMissionIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanedReservesByMissionIdRequest): GetScanedReservesByMissionIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetScanedReservesByMissionIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanedReservesByMissionIdRequest;
  static deserializeBinaryFromReader(message: GetScanedReservesByMissionIdRequest, reader: jspb.BinaryReader): GetScanedReservesByMissionIdRequest;
}

export namespace GetScanedReservesByMissionIdRequest {
  export type AsObject = {
    attenduId: string,
  }
}

export class GetScanedReservesByMissionIdResponse extends jspb.Message {
  getEntryList(): Array<AttenduReserve>;
  setEntryList(value: Array<AttenduReserve>): GetScanedReservesByMissionIdResponse;
  clearEntryList(): GetScanedReservesByMissionIdResponse;
  addEntry(value?: AttenduReserve, index?: number): AttenduReserve;

  getMessageerror(): string;
  setMessageerror(value: string): GetScanedReservesByMissionIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanedReservesByMissionIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanedReservesByMissionIdResponse): GetScanedReservesByMissionIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetScanedReservesByMissionIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanedReservesByMissionIdResponse;
  static deserializeBinaryFromReader(message: GetScanedReservesByMissionIdResponse, reader: jspb.BinaryReader): GetScanedReservesByMissionIdResponse;
}

export namespace GetScanedReservesByMissionIdResponse {
  export type AsObject = {
    entryList: Array<AttenduReserve.AsObject>,
    messageerror: string,
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

export class MissionAllRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): MissionAllRequest;

  getOffset(): number;
  setOffset(value: number): MissionAllRequest;

  getClientId(): string;
  setClientId(value: string): MissionAllRequest;

  getWarehouseId(): string;
  setWarehouseId(value: string): MissionAllRequest;

  getCompanyId(): string;
  setCompanyId(value: string): MissionAllRequest;

  getStartDate(): string;
  setStartDate(value: string): MissionAllRequest;

  getEndDate(): string;
  setEndDate(value: string): MissionAllRequest;

  getNom(): string;
  setNom(value: string): MissionAllRequest;

  getAssigneeId(): string;
  setAssigneeId(value: string): MissionAllRequest;

  getMissionType(): string;
  setMissionType(value: string): MissionAllRequest;

  getProgress(): string;
  setProgress(value: string): MissionAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionAllRequest): MissionAllRequest.AsObject;
  static serializeBinaryToWriter(message: MissionAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionAllRequest;
  static deserializeBinaryFromReader(message: MissionAllRequest, reader: jspb.BinaryReader): MissionAllRequest;
}

export namespace MissionAllRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    clientId: string,
    warehouseId: string,
    companyId: string,
    startDate: string,
    endDate: string,
    nom: string,
    assigneeId: string,
    missionType: string,
    progress: string,
  }
}

export class MissionAllResponse extends jspb.Message {
  getEntryList(): Array<Mission>;
  setEntryList(value: Array<Mission>): MissionAllResponse;
  clearEntryList(): MissionAllResponse;
  addEntry(value?: Mission, index?: number): Mission;

  getMetadata(): MetaData | undefined;
  setMetadata(value?: MetaData): MissionAllResponse;
  hasMetadata(): boolean;
  clearMetadata(): MissionAllResponse;

  getMessageerror(): string;
  setMessageerror(value: string): MissionAllResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MissionAllResponse): MissionAllResponse.AsObject;
  static serializeBinaryToWriter(message: MissionAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionAllResponse;
  static deserializeBinaryFromReader(message: MissionAllResponse, reader: jspb.BinaryReader): MissionAllResponse;
}

export namespace MissionAllResponse {
  export type AsObject = {
    entryList: Array<Mission.AsObject>,
    metadata?: MetaData.AsObject,
    messageerror: string,
  }
}

export class FilterUltilsateurResquest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): FilterUltilsateurResquest;

  getWarehouseId(): string;
  setWarehouseId(value: string): FilterUltilsateurResquest;

  getCompanyId(): string;
  setCompanyId(value: string): FilterUltilsateurResquest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterUltilsateurResquest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterUltilsateurResquest): FilterUltilsateurResquest.AsObject;
  static serializeBinaryToWriter(message: FilterUltilsateurResquest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterUltilsateurResquest;
  static deserializeBinaryFromReader(message: FilterUltilsateurResquest, reader: jspb.BinaryReader): FilterUltilsateurResquest;
}

export namespace FilterUltilsateurResquest {
  export type AsObject = {
    clientId: string,
    warehouseId: string,
    companyId: string,
  }
}

export class UltilsateurResponse extends jspb.Message {
  getAssigneeId(): string;
  setAssigneeId(value: string): UltilsateurResponse;

  getAssigneeBy(): string;
  setAssigneeBy(value: string): UltilsateurResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UltilsateurResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UltilsateurResponse): UltilsateurResponse.AsObject;
  static serializeBinaryToWriter(message: UltilsateurResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UltilsateurResponse;
  static deserializeBinaryFromReader(message: UltilsateurResponse, reader: jspb.BinaryReader): UltilsateurResponse;
}

export namespace UltilsateurResponse {
  export type AsObject = {
    assigneeId: string,
    assigneeBy: string,
  }
}

export class FilterUtilisateurResponse extends jspb.Message {
  getEntryList(): Array<UltilsateurResponse>;
  setEntryList(value: Array<UltilsateurResponse>): FilterUtilisateurResponse;
  clearEntryList(): FilterUtilisateurResponse;
  addEntry(value?: UltilsateurResponse, index?: number): UltilsateurResponse;

  getMessageerror(): string;
  setMessageerror(value: string): FilterUtilisateurResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterUtilisateurResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterUtilisateurResponse): FilterUtilisateurResponse.AsObject;
  static serializeBinaryToWriter(message: FilterUtilisateurResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterUtilisateurResponse;
  static deserializeBinaryFromReader(message: FilterUtilisateurResponse, reader: jspb.BinaryReader): FilterUtilisateurResponse;
}

export namespace FilterUtilisateurResponse {
  export type AsObject = {
    entryList: Array<UltilsateurResponse.AsObject>,
    messageerror: string,
  }
}

export class MissionTypeResponse extends jspb.Message {
  getMissionType(): string;
  setMissionType(value: string): MissionTypeResponse;

  getMissionName(): string;
  setMissionName(value: string): MissionTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MissionTypeResponse): MissionTypeResponse.AsObject;
  static serializeBinaryToWriter(message: MissionTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionTypeResponse;
  static deserializeBinaryFromReader(message: MissionTypeResponse, reader: jspb.BinaryReader): MissionTypeResponse;
}

export namespace MissionTypeResponse {
  export type AsObject = {
    missionType: string,
    missionName: string,
  }
}

export class GetMissionTypeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionTypeRequest): GetMissionTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetMissionTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionTypeRequest;
  static deserializeBinaryFromReader(message: GetMissionTypeRequest, reader: jspb.BinaryReader): GetMissionTypeRequest;
}

export namespace GetMissionTypeRequest {
  export type AsObject = {
  }
}

export class GetMissionTypeResponse extends jspb.Message {
  getEntryList(): Array<MissionTypeResponse>;
  setEntryList(value: Array<MissionTypeResponse>): GetMissionTypeResponse;
  clearEntryList(): GetMissionTypeResponse;
  addEntry(value?: MissionTypeResponse, index?: number): MissionTypeResponse;

  getMessageerror(): string;
  setMessageerror(value: string): GetMissionTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMissionTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMissionTypeResponse): GetMissionTypeResponse.AsObject;
  static serializeBinaryToWriter(message: GetMissionTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMissionTypeResponse;
  static deserializeBinaryFromReader(message: GetMissionTypeResponse, reader: jspb.BinaryReader): GetMissionTypeResponse;
}

export namespace GetMissionTypeResponse {
  export type AsObject = {
    entryList: Array<MissionTypeResponse.AsObject>,
    messageerror: string,
  }
}

export class GetProgressListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgressListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgressListRequest): GetProgressListRequest.AsObject;
  static serializeBinaryToWriter(message: GetProgressListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgressListRequest;
  static deserializeBinaryFromReader(message: GetProgressListRequest, reader: jspb.BinaryReader): GetProgressListRequest;
}

export namespace GetProgressListRequest {
  export type AsObject = {
  }
}

export class ProgressType extends jspb.Message {
  getProgress(): string;
  setProgress(value: string): ProgressType;

  getProgressName(): string;
  setProgressName(value: string): ProgressType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressType.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressType): ProgressType.AsObject;
  static serializeBinaryToWriter(message: ProgressType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressType;
  static deserializeBinaryFromReader(message: ProgressType, reader: jspb.BinaryReader): ProgressType;
}

export namespace ProgressType {
  export type AsObject = {
    progress: string,
    progressName: string,
  }
}

export class GetProgressListResponse extends jspb.Message {
  getEntryList(): Array<ProgressType>;
  setEntryList(value: Array<ProgressType>): GetProgressListResponse;
  clearEntryList(): GetProgressListResponse;
  addEntry(value?: ProgressType, index?: number): ProgressType;

  getMessageerror(): string;
  setMessageerror(value: string): GetProgressListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgressListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgressListResponse): GetProgressListResponse.AsObject;
  static serializeBinaryToWriter(message: GetProgressListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgressListResponse;
  static deserializeBinaryFromReader(message: GetProgressListResponse, reader: jspb.BinaryReader): GetProgressListResponse;
}

export namespace GetProgressListResponse {
  export type AsObject = {
    entryList: Array<ProgressType.AsObject>,
    messageerror: string,
  }
}

export class UpdatePatchMissionRequest extends jspb.Message {
  getEntry(): Mission | undefined;
  setEntry(value?: Mission): UpdatePatchMissionRequest;
  hasEntry(): boolean;
  clearEntry(): UpdatePatchMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePatchMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePatchMissionRequest): UpdatePatchMissionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePatchMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePatchMissionRequest;
  static deserializeBinaryFromReader(message: UpdatePatchMissionRequest, reader: jspb.BinaryReader): UpdatePatchMissionRequest;
}

export namespace UpdatePatchMissionRequest {
  export type AsObject = {
    entry?: Mission.AsObject,
  }
}

export class UpdatePatchMissionResponse extends jspb.Message {
  getEntry(): Mission | undefined;
  setEntry(value?: Mission): UpdatePatchMissionResponse;
  hasEntry(): boolean;
  clearEntry(): UpdatePatchMissionResponse;

  getMessageerror(): string;
  setMessageerror(value: string): UpdatePatchMissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePatchMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePatchMissionResponse): UpdatePatchMissionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePatchMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePatchMissionResponse;
  static deserializeBinaryFromReader(message: UpdatePatchMissionResponse, reader: jspb.BinaryReader): UpdatePatchMissionResponse;
}

export namespace UpdatePatchMissionResponse {
  export type AsObject = {
    entry?: Mission.AsObject,
    messageerror: string,
  }
}

