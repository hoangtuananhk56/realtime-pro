// source: proto/attendu/attendu.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var proto_conditionnement_conditionnement_pb = require('../../proto/conditionnement/conditionnement_pb.js');
goog.object.extend(proto, proto_conditionnement_conditionnement_pb);
var proto_destinataire_destinataire_pb = require('../../proto/destinataire/destinataire_pb.js');
goog.object.extend(proto, proto_destinataire_destinataire_pb);
var proto_transporteur_transporteur_pb = require('../../proto/transporteur/transporteur_pb.js');
goog.object.extend(proto, proto_transporteur_transporteur_pb);
var proto_user_user_pb = require('../../proto/user/user_pb.js');
goog.object.extend(proto, proto_user_user_pb);
var proto_comarticle_comarticle_pb = require('../../proto/comarticle/comarticle_pb.js');
goog.object.extend(proto, proto_comarticle_comarticle_pb);
var proto_stock_stock_pb = require('../../proto/stock/stock_pb.js');
goog.object.extend(proto, proto_stock_stock_pb);
var proto_sscc_sscc_pb = require('../../proto/sscc/sscc_pb.js');
goog.object.extend(proto, proto_sscc_sscc_pb);
var proto_commande_commande_pb = require('../../proto/commande/commande_pb.js');
goog.object.extend(proto, proto_commande_commande_pb);
var proto_reference_reference_pb = require('../../proto/reference/reference_pb.js');
goog.object.extend(proto, proto_reference_reference_pb);
var proto_export_export_pb = require('../../proto/export/export_pb.js');
goog.object.extend(proto, proto_export_export_pb);
goog.exportSymbol('proto.attendu.AttCommentaire', null, global);
goog.exportSymbol('proto.attendu.AttFile', null, global);
goog.exportSymbol('proto.attendu.AttFileReponse', null, global);
goog.exportSymbol('proto.attendu.AttFournisseur', null, global);
goog.exportSymbol('proto.attendu.AttProduction', null, global);
goog.exportSymbol('proto.attendu.AttProductionInforResponse', null, global);
goog.exportSymbol('proto.attendu.AttProductionListRequest', null, global);
goog.exportSymbol('proto.attendu.AttProductionListResponse', null, global);
goog.exportSymbol('proto.attendu.Attendu', null, global);
goog.exportSymbol('proto.attendu.AttenduHistory', null, global);
goog.exportSymbol('proto.attendu.AttenduRequest', null, global);
goog.exportSymbol('proto.attendu.AttenduResponse', null, global);
goog.exportSymbol('proto.attendu.DashboardChart', null, global);
goog.exportSymbol('proto.attendu.DeleteByIdAttenduRequest', null, global);
goog.exportSymbol('proto.attendu.DeleteFileRequest', null, global);
goog.exportSymbol('proto.attendu.GetAllAttenduStockRequest', null, global);
goog.exportSymbol('proto.attendu.GetAllAttenduStockResponse', null, global);
goog.exportSymbol('proto.attendu.GetAllRequest', null, global);
goog.exportSymbol('proto.attendu.GetAllResponse', null, global);
goog.exportSymbol('proto.attendu.GetAttProBySSCCReponse', null, global);
goog.exportSymbol('proto.attendu.GetAttProBySSCCRequest', null, global);
goog.exportSymbol('proto.attendu.GetByIdAttenduRequest', null, global);
goog.exportSymbol('proto.attendu.GetDashboardInformationRequest', null, global);
goog.exportSymbol('proto.attendu.GetDashboardInformationResponse', null, global);
goog.exportSymbol('proto.attendu.GetFileByIdRequest', null, global);
goog.exportSymbol('proto.attendu.GetFileByNameRequest', null, global);
goog.exportSymbol('proto.attendu.GetFilesInAtt', null, global);
goog.exportSymbol('proto.attendu.GetFilesInAttReponse', null, global);
goog.exportSymbol('proto.attendu.GetHistoryByAttenduIdRequest', null, global);
goog.exportSymbol('proto.attendu.GetHistoryByAttenduIdResponse', null, global);
goog.exportSymbol('proto.attendu.GetMissionByStatusRequest', null, global);
goog.exportSymbol('proto.attendu.GetMissionDetailRequest', null, global);
goog.exportSymbol('proto.attendu.GetMissionDetailResponse', null, global);
goog.exportSymbol('proto.attendu.GetMissionImportantRequest', null, global);
goog.exportSymbol('proto.attendu.GetMissionImportantResponse', null, global);
goog.exportSymbol('proto.attendu.GetMissionRequest', null, global);
goog.exportSymbol('proto.attendu.GetMissionResponse', null, global);
goog.exportSymbol('proto.attendu.HistoryChange', null, global);
goog.exportSymbol('proto.attendu.HistoryMetaData', null, global);
goog.exportSymbol('proto.attendu.LocationDTO', null, global);
goog.exportSymbol('proto.attendu.MetaData', null, global);
goog.exportSymbol('proto.attendu.MissionDTO', null, global);
goog.exportSymbol('proto.attendu.MissionImportantArrayRequest', null, global);
goog.exportSymbol('proto.attendu.MissionImportantResponse', null, global);
goog.exportSymbol('proto.attendu.MissionImpotant', null, global);
goog.exportSymbol('proto.attendu.MissionPayload', null, global);
goog.exportSymbol('proto.attendu.MissionPayloadResponse', null, global);
goog.exportSymbol('proto.attendu.PrintAttProductionInforRequest', null, global);
goog.exportSymbol('proto.attendu.PrintAttProductionInforResponse', null, global);
goog.exportSymbol('proto.attendu.RealtimeAttendu', null, global);
goog.exportSymbol('proto.attendu.UpdateAttenduRequest', null, global);
goog.exportSymbol('proto.attendu.UpdateMissionArticleRequest', null, global);
goog.exportSymbol('proto.attendu.UpdateMissionArticleResponse', null, global);
goog.exportSymbol('proto.attendu.UpdateMissionLocationRequest', null, global);
goog.exportSymbol('proto.attendu.UpdateMissionLocationResponse', null, global);
goog.exportSymbol('proto.attendu.UpdateMissionStatusRequest', null, global);
goog.exportSymbol('proto.attendu.UpdateMissionStatusResponse', null, global);
goog.exportSymbol('proto.attendu.UploadMultiFileRequest', null, global);
goog.exportSymbol('proto.attendu.UploadMultiFileResponse', null, global);
goog.exportSymbol('proto.attendu.UploadNewFileRequest', null, global);
goog.exportSymbol('proto.attendu.ValidMissionRequest', null, global);
goog.exportSymbol('proto.attendu.ValidMissionResponse', null, global);
goog.exportSymbol('proto.attendu.ZoneDTO', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.Attendu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.Attendu.repeatedFields_, null);
};
goog.inherits(proto.attendu.Attendu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.Attendu.displayName = 'proto.attendu.Attendu';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MissionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.MissionDTO.repeatedFields_, null);
};
goog.inherits(proto.attendu.MissionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MissionDTO.displayName = 'proto.attendu.MissionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.LocationDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.LocationDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.LocationDTO.displayName = 'proto.attendu.LocationDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.ZoneDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.ZoneDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.ZoneDTO.displayName = 'proto.attendu.ZoneDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttFile.displayName = 'proto.attendu.AttFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttCommentaire = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttCommentaire, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttCommentaire.displayName = 'proto.attendu.AttCommentaire';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttFournisseur = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttFournisseur, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttFournisseur.displayName = 'proto.attendu.AttFournisseur';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttProduction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttProduction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttProduction.displayName = 'proto.attendu.AttProduction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttenduRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttenduRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttenduRequest.displayName = 'proto.attendu.AttenduRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateAttenduRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateAttenduRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateAttenduRequest.displayName = 'proto.attendu.UpdateAttenduRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttenduResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttenduResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttenduResponse.displayName = 'proto.attendu.AttenduResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetMissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionResponse.displayName = 'proto.attendu.GetMissionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionImportantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetMissionImportantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionImportantResponse.displayName = 'proto.attendu.GetMissionImportantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetByIdAttenduRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetByIdAttenduRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetByIdAttenduRequest.displayName = 'proto.attendu.GetByIdAttenduRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.MetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MetaData.displayName = 'proto.attendu.MetaData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetAllRequest.displayName = 'proto.attendu.GetAllRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetAllResponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetAllResponse.displayName = 'proto.attendu.GetAllResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.DeleteFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.DeleteFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.DeleteFileRequest.displayName = 'proto.attendu.DeleteFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetFilesInAtt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetFilesInAtt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetFilesInAtt.displayName = 'proto.attendu.GetFilesInAtt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetFileByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetFileByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetFileByIdRequest.displayName = 'proto.attendu.GetFileByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetFileByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetFileByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetFileByNameRequest.displayName = 'proto.attendu.GetFileByNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UploadNewFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UploadNewFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UploadNewFileRequest.displayName = 'proto.attendu.UploadNewFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UploadMultiFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.UploadMultiFileRequest.repeatedFields_, null);
};
goog.inherits(proto.attendu.UploadMultiFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UploadMultiFileRequest.displayName = 'proto.attendu.UploadMultiFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetFilesInAttReponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetFilesInAttReponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetFilesInAttReponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetFilesInAttReponse.displayName = 'proto.attendu.GetFilesInAttReponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UploadMultiFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.UploadMultiFileResponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.UploadMultiFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UploadMultiFileResponse.displayName = 'proto.attendu.UploadMultiFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttFileReponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttFileReponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttFileReponse.displayName = 'proto.attendu.AttFileReponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetMissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionRequest.displayName = 'proto.attendu.GetMissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionImportantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetMissionImportantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionImportantRequest.displayName = 'proto.attendu.GetMissionImportantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.ValidMissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.ValidMissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.ValidMissionRequest.displayName = 'proto.attendu.ValidMissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.ValidMissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.ValidMissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.ValidMissionResponse.displayName = 'proto.attendu.ValidMissionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateMissionLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateMissionLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateMissionLocationRequest.displayName = 'proto.attendu.UpdateMissionLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateMissionLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateMissionLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateMissionLocationResponse.displayName = 'proto.attendu.UpdateMissionLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateMissionArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateMissionArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateMissionArticleRequest.displayName = 'proto.attendu.UpdateMissionArticleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateMissionArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateMissionArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateMissionArticleResponse.displayName = 'proto.attendu.UpdateMissionArticleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetDashboardInformationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetDashboardInformationRequest.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetDashboardInformationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetDashboardInformationRequest.displayName = 'proto.attendu.GetDashboardInformationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.DashboardChart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.DashboardChart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.DashboardChart.displayName = 'proto.attendu.DashboardChart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetDashboardInformationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetDashboardInformationResponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetDashboardInformationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetDashboardInformationResponse.displayName = 'proto.attendu.GetDashboardInformationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionByStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetMissionByStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetMissionByStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionByStatusRequest.displayName = 'proto.attendu.GetMissionByStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetMissionDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionDetailRequest.displayName = 'proto.attendu.GetMissionDetailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetMissionDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetMissionDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetMissionDetailResponse.displayName = 'proto.attendu.GetMissionDetailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateMissionStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateMissionStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateMissionStatusRequest.displayName = 'proto.attendu.UpdateMissionStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.UpdateMissionStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.UpdateMissionStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.UpdateMissionStatusResponse.displayName = 'proto.attendu.UpdateMissionStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MissionPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.MissionPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MissionPayload.displayName = 'proto.attendu.MissionPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MissionPayloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.MissionPayloadResponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.MissionPayloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MissionPayloadResponse.displayName = 'proto.attendu.MissionPayloadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MissionImportantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.MissionImportantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MissionImportantResponse.displayName = 'proto.attendu.MissionImportantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MissionImpotant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.MissionImpotant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MissionImpotant.displayName = 'proto.attendu.MissionImpotant';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.MissionImportantArrayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.MissionImportantArrayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.MissionImportantArrayRequest.displayName = 'proto.attendu.MissionImportantArrayRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetAllAttenduStockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetAllAttenduStockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetAllAttenduStockRequest.displayName = 'proto.attendu.GetAllAttenduStockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetAllAttenduStockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetAllAttenduStockResponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetAllAttenduStockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetAllAttenduStockResponse.displayName = 'proto.attendu.GetAllAttenduStockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetAttProBySSCCRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetAttProBySSCCRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetAttProBySSCCRequest.displayName = 'proto.attendu.GetAttProBySSCCRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetAttProBySSCCReponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetAttProBySSCCReponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetAttProBySSCCReponse.displayName = 'proto.attendu.GetAttProBySSCCReponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.PrintAttProductionInforRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.PrintAttProductionInforRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.PrintAttProductionInforRequest.displayName = 'proto.attendu.PrintAttProductionInforRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.PrintAttProductionInforResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.PrintAttProductionInforResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.PrintAttProductionInforResponse.displayName = 'proto.attendu.PrintAttProductionInforResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttProductionInforResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttProductionInforResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttProductionInforResponse.displayName = 'proto.attendu.AttProductionInforResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.DeleteByIdAttenduRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.DeleteByIdAttenduRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.DeleteByIdAttenduRequest.displayName = 'proto.attendu.DeleteByIdAttenduRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.HistoryMetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.HistoryMetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.HistoryMetaData.displayName = 'proto.attendu.HistoryMetaData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.HistoryChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.HistoryChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.HistoryChange.displayName = 'proto.attendu.HistoryChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttenduHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.AttenduHistory.repeatedFields_, null);
};
goog.inherits(proto.attendu.AttenduHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttenduHistory.displayName = 'proto.attendu.AttenduHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetHistoryByAttenduIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.GetHistoryByAttenduIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetHistoryByAttenduIdRequest.displayName = 'proto.attendu.GetHistoryByAttenduIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.GetHistoryByAttenduIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.GetHistoryByAttenduIdResponse.repeatedFields_, null);
};
goog.inherits(proto.attendu.GetHistoryByAttenduIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.GetHistoryByAttenduIdResponse.displayName = 'proto.attendu.GetHistoryByAttenduIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttProductionListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.attendu.AttProductionListRequest.repeatedFields_, null);
};
goog.inherits(proto.attendu.AttProductionListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttProductionListRequest.displayName = 'proto.attendu.AttProductionListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.AttProductionListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.AttProductionListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.AttProductionListResponse.displayName = 'proto.attendu.AttProductionListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.attendu.RealtimeAttendu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.attendu.RealtimeAttendu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.attendu.RealtimeAttendu.displayName = 'proto.attendu.RealtimeAttendu';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.Attendu.repeatedFields_ = [12,15,37,38,39,40,41,49];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.Attendu.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.Attendu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.Attendu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.Attendu.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commande: jspb.Message.getFieldWithDefault(msg, 5, 0),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 6, ""),
    numberOfFournisseur: jspb.Message.getFieldWithDefault(msg, 7, ""),
    livraison: jspb.Message.getFieldWithDefault(msg, 8, 0),
    priorite: jspb.Message.getFieldWithDefault(msg, 9, 0),
    qteTotal: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sousQteTotal: jspb.Message.getFieldWithDefault(msg, 11, 0),
    attProductionList: jspb.Message.toObjectList(msg.getAttProductionList(),
    proto.attendu.AttProduction.toObject, includeInstance),
    attCommentaire: (f = msg.getAttCommentaire()) && proto.attendu.AttCommentaire.toObject(includeInstance, f),
    attFournisseur: (f = msg.getAttFournisseur()) && proto.attendu.AttFournisseur.toObject(includeInstance, f),
    attFileList: jspb.Message.toObjectList(msg.getAttFileList(),
    proto.attendu.AttFile.toObject, includeInstance),
    fournisseurId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    isVal: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    noCommande: jspb.Message.getFieldWithDefault(msg, 18, ""),
    status: jspb.Message.getFieldWithDefault(msg, 19, ""),
    photos: jspb.Message.getFieldWithDefault(msg, 20, 0),
    locationId: jspb.Message.getFieldWithDefault(msg, 21, ""),
    assigneeId: jspb.Message.getFieldWithDefault(msg, 22, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 23, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 24, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 25, ""),
    modificationBy: jspb.Message.getFieldWithDefault(msg, 26, ""),
    validationBy: jspb.Message.getFieldWithDefault(msg, 27, ""),
    validationTime: jspb.Message.getFieldWithDefault(msg, 28, 0),
    modificationerId: jspb.Message.getFieldWithDefault(msg, 29, ""),
    managerBy: jspb.Message.getFieldWithDefault(msg, 30, ""),
    managerId: jspb.Message.getFieldWithDefault(msg, 31, ""),
    assigneeBy: jspb.Message.getFieldWithDefault(msg, 32, ""),
    type: jspb.Message.getFieldWithDefault(msg, 33, ""),
    mouvement: jspb.Message.getFieldWithDefault(msg, 34, ""),
    eta: jspb.Message.getFieldWithDefault(msg, 35, ""),
    recType: jspb.Message.getFieldWithDefault(msg, 36, 0),
    mouvementsList: (f = jspb.Message.getRepeatedField(msg, 37)) == null ? undefined : f,
    etasList: (f = jspb.Message.getRepeatedField(msg, 38)) == null ? undefined : f,
    statusesList: (f = jspb.Message.getRepeatedField(msg, 39)) == null ? undefined : f,
    typesList: (f = jspb.Message.getRepeatedField(msg, 40)) == null ? undefined : f,
    typeCdnList: (f = jspb.Message.getRepeatedField(msg, 41)) == null ? undefined : f,
    quantite: jspb.Message.getFieldWithDefault(msg, 42, 0),
    sousQte: jspb.Message.getFieldWithDefault(msg, 43, 0),
    totalPieses: jspb.Message.getFieldWithDefault(msg, 44, 0),
    chrono: jspb.Message.getFieldWithDefault(msg, 45, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 46, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 47, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 48, ""),
    missionsList: jspb.Message.toObjectList(msg.getMissionsList(),
    proto.attendu.MissionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.Attendu}
 */
proto.attendu.Attendu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.Attendu;
  return proto.attendu.Attendu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.Attendu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.Attendu}
 */
proto.attendu.Attendu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommande(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberOfFournisseur(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLivraison(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriorite(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQteTotal(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSousQteTotal(value);
      break;
    case 12:
      var value = new proto.attendu.AttProduction;
      reader.readMessage(value,proto.attendu.AttProduction.deserializeBinaryFromReader);
      msg.addAttProduction(value);
      break;
    case 13:
      var value = new proto.attendu.AttCommentaire;
      reader.readMessage(value,proto.attendu.AttCommentaire.deserializeBinaryFromReader);
      msg.setAttCommentaire(value);
      break;
    case 14:
      var value = new proto.attendu.AttFournisseur;
      reader.readMessage(value,proto.attendu.AttFournisseur.deserializeBinaryFromReader);
      msg.setAttFournisseur(value);
      break;
    case 15:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.addAttFile(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setFournisseurId(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVal(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoCommande(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPhotos(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssigneeId(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setModificationBy(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationBy(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidationTime(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setModificationerId(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setManagerBy(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setManagerId(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssigneeBy(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setMouvement(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setEta(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecType(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.addMouvements(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.addEtas(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.addStatuses(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 41:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTypeCdn(values[i]);
      }
      break;
    case 42:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantite(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSousQte(value);
      break;
    case 44:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPieses(value);
      break;
    case 45:
      var value = /** @type {string} */ (reader.readString());
      msg.setChrono(value);
      break;
    case 46:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 47:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 48:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 49:
      var value = new proto.attendu.MissionDTO;
      reader.readMessage(value,proto.attendu.MissionDTO.deserializeBinaryFromReader);
      msg.addMissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.Attendu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.Attendu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.Attendu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.Attendu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdateAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommande();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNumberOfFournisseur();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLivraison();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getPriorite();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getQteTotal();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSousQteTotal();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getAttProductionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.attendu.AttProduction.serializeBinaryToWriter
    );
  }
  f = message.getAttCommentaire();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.attendu.AttCommentaire.serializeBinaryToWriter
    );
  }
  f = message.getAttFournisseur();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.attendu.AttFournisseur.serializeBinaryToWriter
    );
  }
  f = message.getAttFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
  f = message.getFournisseurId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIsVal();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getNoCommande();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPhotos();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getAssigneeId();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getModificationBy();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getValidationBy();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getValidationTime();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getModificationerId();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getManagerBy();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getManagerId();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getAssigneeBy();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getMouvement();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getEta();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getRecType();
  if (f !== 0) {
    writer.writeInt32(
      36,
      f
    );
  }
  f = message.getMouvementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      37,
      f
    );
  }
  f = message.getEtasList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      38,
      f
    );
  }
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      39,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      40,
      f
    );
  }
  f = message.getTypeCdnList();
  if (f.length > 0) {
    writer.writePackedInt64(
      41,
      f
    );
  }
  f = message.getQuantite();
  if (f !== 0) {
    writer.writeInt64(
      42,
      f
    );
  }
  f = message.getSousQte();
  if (f !== 0) {
    writer.writeInt64(
      43,
      f
    );
  }
  f = message.getTotalPieses();
  if (f !== 0) {
    writer.writeInt64(
      44,
      f
    );
  }
  f = message.getChrono();
  if (f.length > 0) {
    writer.writeString(
      45,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      46,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      47,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      48,
      f
    );
  }
  f = message.getMissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      49,
      f,
      proto.attendu.MissionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setUpdateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string bl = 4;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getBl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setBl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 commande = 5;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getCommande = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setCommande = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string client_code_nom = 6;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string number_of_fournisseur = 7;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getNumberOfFournisseur = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setNumberOfFournisseur = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 livraison = 8;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getLivraison = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setLivraison = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 priorite = 9;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getPriorite = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setPriorite = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 qte_total = 10;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getQteTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setQteTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 sous_qte_total = 11;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getSousQteTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setSousQteTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * repeated AttProduction att_production = 12;
 * @return {!Array<!proto.attendu.AttProduction>}
 */
proto.attendu.Attendu.prototype.getAttProductionList = function() {
  return /** @type{!Array<!proto.attendu.AttProduction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttProduction, 12));
};


/**
 * @param {!Array<!proto.attendu.AttProduction>} value
 * @return {!proto.attendu.Attendu} returns this
*/
proto.attendu.Attendu.prototype.setAttProductionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.attendu.AttProduction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttProduction}
 */
proto.attendu.Attendu.prototype.addAttProduction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.attendu.AttProduction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearAttProductionList = function() {
  return this.setAttProductionList([]);
};


/**
 * optional AttCommentaire att_commentaire = 13;
 * @return {?proto.attendu.AttCommentaire}
 */
proto.attendu.Attendu.prototype.getAttCommentaire = function() {
  return /** @type{?proto.attendu.AttCommentaire} */ (
    jspb.Message.getWrapperField(this, proto.attendu.AttCommentaire, 13));
};


/**
 * @param {?proto.attendu.AttCommentaire|undefined} value
 * @return {!proto.attendu.Attendu} returns this
*/
proto.attendu.Attendu.prototype.setAttCommentaire = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearAttCommentaire = function() {
  return this.setAttCommentaire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.Attendu.prototype.hasAttCommentaire = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional AttFournisseur att_fournisseur = 14;
 * @return {?proto.attendu.AttFournisseur}
 */
proto.attendu.Attendu.prototype.getAttFournisseur = function() {
  return /** @type{?proto.attendu.AttFournisseur} */ (
    jspb.Message.getWrapperField(this, proto.attendu.AttFournisseur, 14));
};


/**
 * @param {?proto.attendu.AttFournisseur|undefined} value
 * @return {!proto.attendu.Attendu} returns this
*/
proto.attendu.Attendu.prototype.setAttFournisseur = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearAttFournisseur = function() {
  return this.setAttFournisseur(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.Attendu.prototype.hasAttFournisseur = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated AttFile att_file = 15;
 * @return {!Array<!proto.attendu.AttFile>}
 */
proto.attendu.Attendu.prototype.getAttFileList = function() {
  return /** @type{!Array<!proto.attendu.AttFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttFile, 15));
};


/**
 * @param {!Array<!proto.attendu.AttFile>} value
 * @return {!proto.attendu.Attendu} returns this
*/
proto.attendu.Attendu.prototype.setAttFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.attendu.AttFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.Attendu.prototype.addAttFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.attendu.AttFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearAttFileList = function() {
  return this.setAttFileList([]);
};


/**
 * optional string fournisseur_id = 16;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getFournisseurId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setFournisseurId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool is_val = 17;
 * @return {boolean}
 */
proto.attendu.Attendu.prototype.getIsVal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setIsVal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional string no_commande = 18;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getNoCommande = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setNoCommande = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string status = 19;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional int32 photos = 20;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getPhotos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setPhotos = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string location_id = 21;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string assignee_id = 22;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getAssigneeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setAssigneeId = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string company_code_nom = 23;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string warehouse_code_nom = 24;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string created_by = 25;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string modification_by = 26;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getModificationBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setModificationBy = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string validation_by = 27;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getValidationBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setValidationBy = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional int64 validation_time = 28;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getValidationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setValidationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional string modificationer_id = 29;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getModificationerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setModificationerId = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string manager_by = 30;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getManagerBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setManagerBy = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string manager_id = 31;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getManagerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setManagerId = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string assignee_by = 32;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getAssigneeBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setAssigneeBy = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string type = 33;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string mouvement = 34;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getMouvement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setMouvement = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string eta = 35;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getEta = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setEta = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional int32 rec_type = 36;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getRecType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setRecType = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * repeated string mouvements = 37;
 * @return {!Array<string>}
 */
proto.attendu.Attendu.prototype.getMouvementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 37));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setMouvementsList = function(value) {
  return jspb.Message.setField(this, 37, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.addMouvements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 37, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearMouvementsList = function() {
  return this.setMouvementsList([]);
};


/**
 * repeated string etas = 38;
 * @return {!Array<string>}
 */
proto.attendu.Attendu.prototype.getEtasList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 38));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setEtasList = function(value) {
  return jspb.Message.setField(this, 38, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.addEtas = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 38, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearEtasList = function() {
  return this.setEtasList([]);
};


/**
 * repeated string statuses = 39;
 * @return {!Array<string>}
 */
proto.attendu.Attendu.prototype.getStatusesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 39));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setStatusesList = function(value) {
  return jspb.Message.setField(this, 39, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.addStatuses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 39, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * repeated string types = 40;
 * @return {!Array<string>}
 */
proto.attendu.Attendu.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 40));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 40, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 40, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * repeated int64 type_cdn = 41;
 * @return {!Array<number>}
 */
proto.attendu.Attendu.prototype.getTypeCdnList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 41));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setTypeCdnList = function(value) {
  return jspb.Message.setField(this, 41, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.addTypeCdn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 41, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearTypeCdnList = function() {
  return this.setTypeCdnList([]);
};


/**
 * optional int64 quantite = 42;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getQuantite = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setQuantite = function(value) {
  return jspb.Message.setProto3IntField(this, 42, value);
};


/**
 * optional int64 sous_qte = 43;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getSousQte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setSousQte = function(value) {
  return jspb.Message.setProto3IntField(this, 43, value);
};


/**
 * optional int64 total_pieses = 44;
 * @return {number}
 */
proto.attendu.Attendu.prototype.getTotalPieses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 44, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setTotalPieses = function(value) {
  return jspb.Message.setProto3IntField(this, 44, value);
};


/**
 * optional string chrono = 45;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getChrono = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 45, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setChrono = function(value) {
  return jspb.Message.setProto3StringField(this, 45, value);
};


/**
 * optional string client_id = 46;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 46, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 46, value);
};


/**
 * optional string company_id = 47;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 47, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 47, value);
};


/**
 * optional string warehouse_id = 48;
 * @return {string}
 */
proto.attendu.Attendu.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 48, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 48, value);
};


/**
 * repeated MissionDTO missions = 49;
 * @return {!Array<!proto.attendu.MissionDTO>}
 */
proto.attendu.Attendu.prototype.getMissionsList = function() {
  return /** @type{!Array<!proto.attendu.MissionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.MissionDTO, 49));
};


/**
 * @param {!Array<!proto.attendu.MissionDTO>} value
 * @return {!proto.attendu.Attendu} returns this
*/
proto.attendu.Attendu.prototype.setMissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 49, value);
};


/**
 * @param {!proto.attendu.MissionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.MissionDTO}
 */
proto.attendu.Attendu.prototype.addMissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 49, opt_value, proto.attendu.MissionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.Attendu} returns this
 */
proto.attendu.Attendu.prototype.clearMissionsList = function() {
  return this.setMissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.MissionDTO.repeatedFields_ = [12,15,35,54,57,67];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MissionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MissionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MissionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commande: jspb.Message.getFieldWithDefault(msg, 5, 0),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 6, ""),
    numberOfFournisseur: jspb.Message.getFieldWithDefault(msg, 7, ""),
    livraison: jspb.Message.getFieldWithDefault(msg, 8, 0),
    priorite: jspb.Message.getFieldWithDefault(msg, 9, 0),
    qteTotal: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sousQteTotal: jspb.Message.getFieldWithDefault(msg, 11, 0),
    attProductionList: jspb.Message.toObjectList(msg.getAttProductionList(),
    proto.attendu.AttProduction.toObject, includeInstance),
    attCommentaire: (f = msg.getAttCommentaire()) && proto.attendu.AttCommentaire.toObject(includeInstance, f),
    attFournisseur: (f = msg.getAttFournisseur()) && proto.attendu.AttFournisseur.toObject(includeInstance, f),
    attFileList: jspb.Message.toObjectList(msg.getAttFileList(),
    proto.attendu.AttFile.toObject, includeInstance),
    fournisseurId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    isVal: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    noCommande: jspb.Message.getFieldWithDefault(msg, 18, ""),
    status: jspb.Message.getFieldWithDefault(msg, 19, ""),
    photos: jspb.Message.getFieldWithDefault(msg, 20, 0),
    locationId: jspb.Message.getFieldWithDefault(msg, 21, ""),
    assigneeId: jspb.Message.getFieldWithDefault(msg, 22, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 23, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 24, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 25, ""),
    modificationBy: jspb.Message.getFieldWithDefault(msg, 26, ""),
    validationBy: jspb.Message.getFieldWithDefault(msg, 27, ""),
    validationTime: jspb.Message.getFieldWithDefault(msg, 28, 0),
    modificationerId: jspb.Message.getFieldWithDefault(msg, 29, ""),
    managerBy: jspb.Message.getFieldWithDefault(msg, 30, ""),
    managerId: jspb.Message.getFieldWithDefault(msg, 31, ""),
    assigneeBy: jspb.Message.getFieldWithDefault(msg, 32, ""),
    nom: jspb.Message.getFieldWithDefault(msg, 33, ""),
    nomClient: jspb.Message.getFieldWithDefault(msg, 34, ""),
    comArticleList: jspb.Message.toObjectList(msg.getComArticleList(),
    proto_comarticle_comarticle_pb.ComArticle.toObject, includeInstance),
    comPreparation: (f = msg.getComPreparation()) && proto_commande_commande_pb.ComComment.toObject(includeInstance, f),
    comLivraison: (f = msg.getComLivraison()) && proto_commande_commande_pb.ComComment.toObject(includeInstance, f),
    destinataireId: jspb.Message.getFieldWithDefault(msg, 38, ""),
    destinataire: (f = msg.getDestinataire()) && proto_destinataire_destinataire_pb.Destinataire.toObject(includeInstance, f),
    desAddresseId: jspb.Message.getFieldWithDefault(msg, 40, ""),
    desAddresse: (f = msg.getDesAddresse()) && proto_destinataire_destinataire_pb.DesAddresse.toObject(includeInstance, f),
    desContactId: jspb.Message.getFieldWithDefault(msg, 42, ""),
    desContact: (f = msg.getDesContact()) && proto_destinataire_destinataire_pb.DesContact.toObject(includeInstance, f),
    transporteurId: jspb.Message.getFieldWithDefault(msg, 44, ""),
    transporteur: (f = msg.getTransporteur()) && proto_transporteur_transporteur_pb.Transporteur.toObject(includeInstance, f),
    tranAddresseId: jspb.Message.getFieldWithDefault(msg, 46, ""),
    tranAddresse: (f = msg.getTranAddresse()) && proto_transporteur_transporteur_pb.TranAddresse.toObject(includeInstance, f),
    tranContactId: jspb.Message.getFieldWithDefault(msg, 48, ""),
    tranContact: (f = msg.getTranContact()) && proto_transporteur_transporteur_pb.TranContact.toObject(includeInstance, f),
    relayDetail: jspb.Message.getFieldWithDefault(msg, 50, ""),
    livraisonAt: jspb.Message.getFieldWithDefault(msg, 51, 0),
    chargementAt: jspb.Message.getFieldWithDefault(msg, 52, 0),
    imperatif: jspb.Message.getBooleanFieldWithDefault(msg, 53, false),
    comFileList: jspb.Message.toObjectList(msg.getComFileList(),
    proto_commande_commande_pb.ComFile.toObject, includeInstance),
    statusCode: jspb.Message.getFieldWithDefault(msg, 55, ""),
    missionType: jspb.Message.getFieldWithDefault(msg, 56, 0),
    loadingComArticleList: jspb.Message.toObjectList(msg.getLoadingComArticleList(),
    proto_comarticle_comarticle_pb.ComArticle.toObject, includeInstance),
    location: (f = msg.getLocation()) && proto.attendu.LocationDTO.toObject(includeInstance, f),
    stockLocation: (f = msg.getStockLocation()) && proto.attendu.LocationDTO.toObject(includeInstance, f),
    recType: jspb.Message.getFieldWithDefault(msg, 60, 0),
    sscc: jspb.Message.getFieldWithDefault(msg, 61, ""),
    info: jspb.Message.getFieldWithDefault(msg, 62, ""),
    clientMultiBl: jspb.Message.getBooleanFieldWithDefault(msg, 63, false),
    clientId: jspb.Message.getFieldWithDefault(msg, 64, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 65, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 66, ""),
    lotBlockSsccList: (f = jspb.Message.getRepeatedField(msg, 67)) == null ? undefined : f,
    uploadedPhotoCount: jspb.Message.getFieldWithDefault(msg, 68, 0),
    executionDate: jspb.Message.getFieldWithDefault(msg, 69, 0),
    assignmentDate: jspb.Message.getFieldWithDefault(msg, 70, 0),
    expectedDate: jspb.Message.getFieldWithDefault(msg, 71, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MissionDTO}
 */
proto.attendu.MissionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MissionDTO;
  return proto.attendu.MissionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MissionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MissionDTO}
 */
proto.attendu.MissionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommande(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumberOfFournisseur(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLivraison(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriorite(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQteTotal(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSousQteTotal(value);
      break;
    case 12:
      var value = new proto.attendu.AttProduction;
      reader.readMessage(value,proto.attendu.AttProduction.deserializeBinaryFromReader);
      msg.addAttProduction(value);
      break;
    case 13:
      var value = new proto.attendu.AttCommentaire;
      reader.readMessage(value,proto.attendu.AttCommentaire.deserializeBinaryFromReader);
      msg.setAttCommentaire(value);
      break;
    case 14:
      var value = new proto.attendu.AttFournisseur;
      reader.readMessage(value,proto.attendu.AttFournisseur.deserializeBinaryFromReader);
      msg.setAttFournisseur(value);
      break;
    case 15:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.addAttFile(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setFournisseurId(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVal(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoCommande(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPhotos(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssigneeId(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setModificationBy(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationBy(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidationTime(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setModificationerId(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setManagerBy(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setManagerId(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssigneeBy(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setNom(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setNomClient(value);
      break;
    case 35:
      var value = new proto_comarticle_comarticle_pb.ComArticle;
      reader.readMessage(value,proto_comarticle_comarticle_pb.ComArticle.deserializeBinaryFromReader);
      msg.addComArticle(value);
      break;
    case 36:
      var value = new proto_commande_commande_pb.ComComment;
      reader.readMessage(value,proto_commande_commande_pb.ComComment.deserializeBinaryFromReader);
      msg.setComPreparation(value);
      break;
    case 37:
      var value = new proto_commande_commande_pb.ComComment;
      reader.readMessage(value,proto_commande_commande_pb.ComComment.deserializeBinaryFromReader);
      msg.setComLivraison(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinataireId(value);
      break;
    case 39:
      var value = new proto_destinataire_destinataire_pb.Destinataire;
      reader.readMessage(value,proto_destinataire_destinataire_pb.Destinataire.deserializeBinaryFromReader);
      msg.setDestinataire(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesAddresseId(value);
      break;
    case 41:
      var value = new proto_destinataire_destinataire_pb.DesAddresse;
      reader.readMessage(value,proto_destinataire_destinataire_pb.DesAddresse.deserializeBinaryFromReader);
      msg.setDesAddresse(value);
      break;
    case 42:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesContactId(value);
      break;
    case 43:
      var value = new proto_destinataire_destinataire_pb.DesContact;
      reader.readMessage(value,proto_destinataire_destinataire_pb.DesContact.deserializeBinaryFromReader);
      msg.setDesContact(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransporteurId(value);
      break;
    case 45:
      var value = new proto_transporteur_transporteur_pb.Transporteur;
      reader.readMessage(value,proto_transporteur_transporteur_pb.Transporteur.deserializeBinaryFromReader);
      msg.setTransporteur(value);
      break;
    case 46:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranAddresseId(value);
      break;
    case 47:
      var value = new proto_transporteur_transporteur_pb.TranAddresse;
      reader.readMessage(value,proto_transporteur_transporteur_pb.TranAddresse.deserializeBinaryFromReader);
      msg.setTranAddresse(value);
      break;
    case 48:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranContactId(value);
      break;
    case 49:
      var value = new proto_transporteur_transporteur_pb.TranContact;
      reader.readMessage(value,proto_transporteur_transporteur_pb.TranContact.deserializeBinaryFromReader);
      msg.setTranContact(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayDetail(value);
      break;
    case 51:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLivraisonAt(value);
      break;
    case 52:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChargementAt(value);
      break;
    case 53:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImperatif(value);
      break;
    case 54:
      var value = new proto_commande_commande_pb.ComFile;
      reader.readMessage(value,proto_commande_commande_pb.ComFile.deserializeBinaryFromReader);
      msg.addComFile(value);
      break;
    case 55:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusCode(value);
      break;
    case 56:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMissionType(value);
      break;
    case 57:
      var value = new proto_comarticle_comarticle_pb.ComArticle;
      reader.readMessage(value,proto_comarticle_comarticle_pb.ComArticle.deserializeBinaryFromReader);
      msg.addLoadingComArticle(value);
      break;
    case 58:
      var value = new proto.attendu.LocationDTO;
      reader.readMessage(value,proto.attendu.LocationDTO.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 59:
      var value = new proto.attendu.LocationDTO;
      reader.readMessage(value,proto.attendu.LocationDTO.deserializeBinaryFromReader);
      msg.setStockLocation(value);
      break;
    case 60:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecType(value);
      break;
    case 61:
      var value = /** @type {string} */ (reader.readString());
      msg.setSscc(value);
      break;
    case 62:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 63:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClientMultiBl(value);
      break;
    case 64:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 65:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 66:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 67:
      var value = /** @type {string} */ (reader.readString());
      msg.addLotBlockSscc(value);
      break;
    case 68:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUploadedPhotoCount(value);
      break;
    case 69:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExecutionDate(value);
      break;
    case 70:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAssignmentDate(value);
      break;
    case 71:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpectedDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MissionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MissionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MissionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdateAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommande();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNumberOfFournisseur();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLivraison();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getPriorite();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getQteTotal();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSousQteTotal();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getAttProductionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.attendu.AttProduction.serializeBinaryToWriter
    );
  }
  f = message.getAttCommentaire();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.attendu.AttCommentaire.serializeBinaryToWriter
    );
  }
  f = message.getAttFournisseur();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.attendu.AttFournisseur.serializeBinaryToWriter
    );
  }
  f = message.getAttFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
  f = message.getFournisseurId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIsVal();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getNoCommande();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPhotos();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getAssigneeId();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getModificationBy();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getValidationBy();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getValidationTime();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getModificationerId();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getManagerBy();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getManagerId();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getAssigneeBy();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getNom();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getNomClient();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getComArticleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      35,
      f,
      proto_comarticle_comarticle_pb.ComArticle.serializeBinaryToWriter
    );
  }
  f = message.getComPreparation();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_commande_commande_pb.ComComment.serializeBinaryToWriter
    );
  }
  f = message.getComLivraison();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_commande_commande_pb.ComComment.serializeBinaryToWriter
    );
  }
  f = message.getDestinataireId();
  if (f.length > 0) {
    writer.writeString(
      38,
      f
    );
  }
  f = message.getDestinataire();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto_destinataire_destinataire_pb.Destinataire.serializeBinaryToWriter
    );
  }
  f = message.getDesAddresseId();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getDesAddresse();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto_destinataire_destinataire_pb.DesAddresse.serializeBinaryToWriter
    );
  }
  f = message.getDesContactId();
  if (f.length > 0) {
    writer.writeString(
      42,
      f
    );
  }
  f = message.getDesContact();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto_destinataire_destinataire_pb.DesContact.serializeBinaryToWriter
    );
  }
  f = message.getTransporteurId();
  if (f.length > 0) {
    writer.writeString(
      44,
      f
    );
  }
  f = message.getTransporteur();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto_transporteur_transporteur_pb.Transporteur.serializeBinaryToWriter
    );
  }
  f = message.getTranAddresseId();
  if (f.length > 0) {
    writer.writeString(
      46,
      f
    );
  }
  f = message.getTranAddresse();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto_transporteur_transporteur_pb.TranAddresse.serializeBinaryToWriter
    );
  }
  f = message.getTranContactId();
  if (f.length > 0) {
    writer.writeString(
      48,
      f
    );
  }
  f = message.getTranContact();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto_transporteur_transporteur_pb.TranContact.serializeBinaryToWriter
    );
  }
  f = message.getRelayDetail();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
  f = message.getLivraisonAt();
  if (f !== 0) {
    writer.writeInt64(
      51,
      f
    );
  }
  f = message.getChargementAt();
  if (f !== 0) {
    writer.writeInt64(
      52,
      f
    );
  }
  f = message.getImperatif();
  if (f) {
    writer.writeBool(
      53,
      f
    );
  }
  f = message.getComFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      54,
      f,
      proto_commande_commande_pb.ComFile.serializeBinaryToWriter
    );
  }
  f = message.getStatusCode();
  if (f.length > 0) {
    writer.writeString(
      55,
      f
    );
  }
  f = message.getMissionType();
  if (f !== 0) {
    writer.writeInt32(
      56,
      f
    );
  }
  f = message.getLoadingComArticleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      57,
      f,
      proto_comarticle_comarticle_pb.ComArticle.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto.attendu.LocationDTO.serializeBinaryToWriter
    );
  }
  f = message.getStockLocation();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      proto.attendu.LocationDTO.serializeBinaryToWriter
    );
  }
  f = message.getRecType();
  if (f !== 0) {
    writer.writeInt32(
      60,
      f
    );
  }
  f = message.getSscc();
  if (f.length > 0) {
    writer.writeString(
      61,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      62,
      f
    );
  }
  f = message.getClientMultiBl();
  if (f) {
    writer.writeBool(
      63,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      64,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      65,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      66,
      f
    );
  }
  f = message.getLotBlockSsccList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      67,
      f
    );
  }
  f = message.getUploadedPhotoCount();
  if (f !== 0) {
    writer.writeInt32(
      68,
      f
    );
  }
  f = message.getExecutionDate();
  if (f !== 0) {
    writer.writeInt64(
      69,
      f
    );
  }
  f = message.getAssignmentDate();
  if (f !== 0) {
    writer.writeInt64(
      70,
      f
    );
  }
  f = message.getExpectedDate();
  if (f !== 0) {
    writer.writeInt64(
      71,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setUpdateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string bl = 4;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getBl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setBl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 commande = 5;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getCommande = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setCommande = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string client_code_nom = 6;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string number_of_fournisseur = 7;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getNumberOfFournisseur = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setNumberOfFournisseur = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 livraison = 8;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getLivraison = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setLivraison = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 priorite = 9;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getPriorite = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setPriorite = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 qte_total = 10;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getQteTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setQteTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 sous_qte_total = 11;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getSousQteTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setSousQteTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * repeated AttProduction att_production = 12;
 * @return {!Array<!proto.attendu.AttProduction>}
 */
proto.attendu.MissionDTO.prototype.getAttProductionList = function() {
  return /** @type{!Array<!proto.attendu.AttProduction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttProduction, 12));
};


/**
 * @param {!Array<!proto.attendu.AttProduction>} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setAttProductionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.attendu.AttProduction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttProduction}
 */
proto.attendu.MissionDTO.prototype.addAttProduction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.attendu.AttProduction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearAttProductionList = function() {
  return this.setAttProductionList([]);
};


/**
 * optional AttCommentaire att_commentaire = 13;
 * @return {?proto.attendu.AttCommentaire}
 */
proto.attendu.MissionDTO.prototype.getAttCommentaire = function() {
  return /** @type{?proto.attendu.AttCommentaire} */ (
    jspb.Message.getWrapperField(this, proto.attendu.AttCommentaire, 13));
};


/**
 * @param {?proto.attendu.AttCommentaire|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setAttCommentaire = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearAttCommentaire = function() {
  return this.setAttCommentaire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasAttCommentaire = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional AttFournisseur att_fournisseur = 14;
 * @return {?proto.attendu.AttFournisseur}
 */
proto.attendu.MissionDTO.prototype.getAttFournisseur = function() {
  return /** @type{?proto.attendu.AttFournisseur} */ (
    jspb.Message.getWrapperField(this, proto.attendu.AttFournisseur, 14));
};


/**
 * @param {?proto.attendu.AttFournisseur|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setAttFournisseur = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearAttFournisseur = function() {
  return this.setAttFournisseur(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasAttFournisseur = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated AttFile att_file = 15;
 * @return {!Array<!proto.attendu.AttFile>}
 */
proto.attendu.MissionDTO.prototype.getAttFileList = function() {
  return /** @type{!Array<!proto.attendu.AttFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttFile, 15));
};


/**
 * @param {!Array<!proto.attendu.AttFile>} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setAttFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.attendu.AttFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.MissionDTO.prototype.addAttFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.attendu.AttFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearAttFileList = function() {
  return this.setAttFileList([]);
};


/**
 * optional string fournisseur_id = 16;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getFournisseurId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setFournisseurId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool is_val = 17;
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.getIsVal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setIsVal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional string no_commande = 18;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getNoCommande = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setNoCommande = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string status = 19;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional int32 photos = 20;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getPhotos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setPhotos = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string location_id = 21;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string assignee_id = 22;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getAssigneeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setAssigneeId = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string company_code_nom = 23;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string warehouse_code_nom = 24;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string created_by = 25;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string modification_by = 26;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getModificationBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setModificationBy = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string validation_by = 27;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getValidationBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setValidationBy = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional int64 validation_time = 28;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getValidationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setValidationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional string modificationer_id = 29;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getModificationerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setModificationerId = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string manager_by = 30;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getManagerBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setManagerBy = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string manager_id = 31;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getManagerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setManagerId = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string assignee_by = 32;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getAssigneeBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setAssigneeBy = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string nom = 33;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setNom = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string nom_client = 34;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getNomClient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setNomClient = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * repeated comarticle.ComArticle com_article = 35;
 * @return {!Array<!proto.comarticle.ComArticle>}
 */
proto.attendu.MissionDTO.prototype.getComArticleList = function() {
  return /** @type{!Array<!proto.comarticle.ComArticle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_comarticle_comarticle_pb.ComArticle, 35));
};


/**
 * @param {!Array<!proto.comarticle.ComArticle>} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setComArticleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 35, value);
};


/**
 * @param {!proto.comarticle.ComArticle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.comarticle.ComArticle}
 */
proto.attendu.MissionDTO.prototype.addComArticle = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 35, opt_value, proto.comarticle.ComArticle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearComArticleList = function() {
  return this.setComArticleList([]);
};


/**
 * optional commande.ComComment com_preparation = 36;
 * @return {?proto.commande.ComComment}
 */
proto.attendu.MissionDTO.prototype.getComPreparation = function() {
  return /** @type{?proto.commande.ComComment} */ (
    jspb.Message.getWrapperField(this, proto_commande_commande_pb.ComComment, 36));
};


/**
 * @param {?proto.commande.ComComment|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setComPreparation = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearComPreparation = function() {
  return this.setComPreparation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasComPreparation = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional commande.ComComment com_livraison = 37;
 * @return {?proto.commande.ComComment}
 */
proto.attendu.MissionDTO.prototype.getComLivraison = function() {
  return /** @type{?proto.commande.ComComment} */ (
    jspb.Message.getWrapperField(this, proto_commande_commande_pb.ComComment, 37));
};


/**
 * @param {?proto.commande.ComComment|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setComLivraison = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearComLivraison = function() {
  return this.setComLivraison(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasComLivraison = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional string destinataire_id = 38;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getDestinataireId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setDestinataireId = function(value) {
  return jspb.Message.setProto3StringField(this, 38, value);
};


/**
 * optional destinataire.Destinataire destinataire = 39;
 * @return {?proto.destinataire.Destinataire}
 */
proto.attendu.MissionDTO.prototype.getDestinataire = function() {
  return /** @type{?proto.destinataire.Destinataire} */ (
    jspb.Message.getWrapperField(this, proto_destinataire_destinataire_pb.Destinataire, 39));
};


/**
 * @param {?proto.destinataire.Destinataire|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setDestinataire = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearDestinataire = function() {
  return this.setDestinataire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasDestinataire = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional string des_addresse_id = 40;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getDesAddresseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setDesAddresseId = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional destinataire.DesAddresse des_addresse = 41;
 * @return {?proto.destinataire.DesAddresse}
 */
proto.attendu.MissionDTO.prototype.getDesAddresse = function() {
  return /** @type{?proto.destinataire.DesAddresse} */ (
    jspb.Message.getWrapperField(this, proto_destinataire_destinataire_pb.DesAddresse, 41));
};


/**
 * @param {?proto.destinataire.DesAddresse|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setDesAddresse = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearDesAddresse = function() {
  return this.setDesAddresse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasDesAddresse = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional string des_contact_id = 42;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getDesContactId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 42, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setDesContactId = function(value) {
  return jspb.Message.setProto3StringField(this, 42, value);
};


/**
 * optional destinataire.DesContact des_contact = 43;
 * @return {?proto.destinataire.DesContact}
 */
proto.attendu.MissionDTO.prototype.getDesContact = function() {
  return /** @type{?proto.destinataire.DesContact} */ (
    jspb.Message.getWrapperField(this, proto_destinataire_destinataire_pb.DesContact, 43));
};


/**
 * @param {?proto.destinataire.DesContact|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setDesContact = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearDesContact = function() {
  return this.setDesContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasDesContact = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional string transporteur_id = 44;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getTransporteurId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 44, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setTransporteurId = function(value) {
  return jspb.Message.setProto3StringField(this, 44, value);
};


/**
 * optional transporteur.Transporteur transporteur = 45;
 * @return {?proto.transporteur.Transporteur}
 */
proto.attendu.MissionDTO.prototype.getTransporteur = function() {
  return /** @type{?proto.transporteur.Transporteur} */ (
    jspb.Message.getWrapperField(this, proto_transporteur_transporteur_pb.Transporteur, 45));
};


/**
 * @param {?proto.transporteur.Transporteur|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setTransporteur = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearTransporteur = function() {
  return this.setTransporteur(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasTransporteur = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional string tran_addresse_id = 46;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getTranAddresseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 46, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setTranAddresseId = function(value) {
  return jspb.Message.setProto3StringField(this, 46, value);
};


/**
 * optional transporteur.TranAddresse tran_addresse = 47;
 * @return {?proto.transporteur.TranAddresse}
 */
proto.attendu.MissionDTO.prototype.getTranAddresse = function() {
  return /** @type{?proto.transporteur.TranAddresse} */ (
    jspb.Message.getWrapperField(this, proto_transporteur_transporteur_pb.TranAddresse, 47));
};


/**
 * @param {?proto.transporteur.TranAddresse|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setTranAddresse = function(value) {
  return jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearTranAddresse = function() {
  return this.setTranAddresse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasTranAddresse = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional string tran_contact_id = 48;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getTranContactId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 48, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setTranContactId = function(value) {
  return jspb.Message.setProto3StringField(this, 48, value);
};


/**
 * optional transporteur.TranContact tran_contact = 49;
 * @return {?proto.transporteur.TranContact}
 */
proto.attendu.MissionDTO.prototype.getTranContact = function() {
  return /** @type{?proto.transporteur.TranContact} */ (
    jspb.Message.getWrapperField(this, proto_transporteur_transporteur_pb.TranContact, 49));
};


/**
 * @param {?proto.transporteur.TranContact|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setTranContact = function(value) {
  return jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearTranContact = function() {
  return this.setTranContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasTranContact = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional string relay_detail = 50;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getRelayDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setRelayDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};


/**
 * optional int64 livraison_at = 51;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getLivraisonAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 51, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setLivraisonAt = function(value) {
  return jspb.Message.setProto3IntField(this, 51, value);
};


/**
 * optional int64 chargement_at = 52;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getChargementAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 52, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setChargementAt = function(value) {
  return jspb.Message.setProto3IntField(this, 52, value);
};


/**
 * optional bool imperatif = 53;
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.getImperatif = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 53, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setImperatif = function(value) {
  return jspb.Message.setProto3BooleanField(this, 53, value);
};


/**
 * repeated commande.ComFile com_file = 54;
 * @return {!Array<!proto.commande.ComFile>}
 */
proto.attendu.MissionDTO.prototype.getComFileList = function() {
  return /** @type{!Array<!proto.commande.ComFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_commande_commande_pb.ComFile, 54));
};


/**
 * @param {!Array<!proto.commande.ComFile>} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setComFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 54, value);
};


/**
 * @param {!proto.commande.ComFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.commande.ComFile}
 */
proto.attendu.MissionDTO.prototype.addComFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 54, opt_value, proto.commande.ComFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearComFileList = function() {
  return this.setComFileList([]);
};


/**
 * optional string status_code = 55;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getStatusCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 55, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setStatusCode = function(value) {
  return jspb.Message.setProto3StringField(this, 55, value);
};


/**
 * optional int32 mission_type = 56;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getMissionType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 56, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setMissionType = function(value) {
  return jspb.Message.setProto3IntField(this, 56, value);
};


/**
 * repeated comarticle.ComArticle loading_com_article = 57;
 * @return {!Array<!proto.comarticle.ComArticle>}
 */
proto.attendu.MissionDTO.prototype.getLoadingComArticleList = function() {
  return /** @type{!Array<!proto.comarticle.ComArticle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_comarticle_comarticle_pb.ComArticle, 57));
};


/**
 * @param {!Array<!proto.comarticle.ComArticle>} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setLoadingComArticleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 57, value);
};


/**
 * @param {!proto.comarticle.ComArticle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.comarticle.ComArticle}
 */
proto.attendu.MissionDTO.prototype.addLoadingComArticle = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 57, opt_value, proto.comarticle.ComArticle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearLoadingComArticleList = function() {
  return this.setLoadingComArticleList([]);
};


/**
 * optional LocationDTO location = 58;
 * @return {?proto.attendu.LocationDTO}
 */
proto.attendu.MissionDTO.prototype.getLocation = function() {
  return /** @type{?proto.attendu.LocationDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.LocationDTO, 58));
};


/**
 * @param {?proto.attendu.LocationDTO|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 58, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional LocationDTO stock_location = 59;
 * @return {?proto.attendu.LocationDTO}
 */
proto.attendu.MissionDTO.prototype.getStockLocation = function() {
  return /** @type{?proto.attendu.LocationDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.LocationDTO, 59));
};


/**
 * @param {?proto.attendu.LocationDTO|undefined} value
 * @return {!proto.attendu.MissionDTO} returns this
*/
proto.attendu.MissionDTO.prototype.setStockLocation = function(value) {
  return jspb.Message.setWrapperField(this, 59, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearStockLocation = function() {
  return this.setStockLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.hasStockLocation = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional int32 rec_type = 60;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getRecType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 60, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setRecType = function(value) {
  return jspb.Message.setProto3IntField(this, 60, value);
};


/**
 * optional string sscc = 61;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getSscc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 61, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setSscc = function(value) {
  return jspb.Message.setProto3StringField(this, 61, value);
};


/**
 * optional string info = 62;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 62, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 62, value);
};


/**
 * optional bool client_multi_bl = 63;
 * @return {boolean}
 */
proto.attendu.MissionDTO.prototype.getClientMultiBl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 63, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setClientMultiBl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 63, value);
};


/**
 * optional string client_id = 64;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 64, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 64, value);
};


/**
 * optional string company_id = 65;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 65, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 65, value);
};


/**
 * optional string warehouse_id = 66;
 * @return {string}
 */
proto.attendu.MissionDTO.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 66, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 66, value);
};


/**
 * repeated string lot_block_sscc = 67;
 * @return {!Array<string>}
 */
proto.attendu.MissionDTO.prototype.getLotBlockSsccList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 67));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setLotBlockSsccList = function(value) {
  return jspb.Message.setField(this, 67, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.addLotBlockSscc = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 67, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.clearLotBlockSsccList = function() {
  return this.setLotBlockSsccList([]);
};


/**
 * optional int32 uploaded_photo_count = 68;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getUploadedPhotoCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 68, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setUploadedPhotoCount = function(value) {
  return jspb.Message.setProto3IntField(this, 68, value);
};


/**
 * optional int64 execution_date = 69;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getExecutionDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 69, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setExecutionDate = function(value) {
  return jspb.Message.setProto3IntField(this, 69, value);
};


/**
 * optional int64 assignment_date = 70;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getAssignmentDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 70, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setAssignmentDate = function(value) {
  return jspb.Message.setProto3IntField(this, 70, value);
};


/**
 * optional int64 expected_date = 71;
 * @return {number}
 */
proto.attendu.MissionDTO.prototype.getExpectedDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 71, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionDTO} returns this
 */
proto.attendu.MissionDTO.prototype.setExpectedDate = function(value) {
  return jspb.Message.setProto3IntField(this, 71, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.LocationDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.LocationDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.LocationDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.LocationDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zoneId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    aisle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bay: jspb.Message.getFieldWithDefault(msg, 5, ""),
    zoneCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    level: jspb.Message.getFieldWithDefault(msg, 7, 0),
    entryBlock: jspb.Message.getFieldWithDefault(msg, 8, ""),
    code: jspb.Message.getFieldWithDefault(msg, 9, ""),
    zone: (f = msg.getZone()) && proto.attendu.ZoneDTO.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.LocationDTO}
 */
proto.attendu.LocationDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.LocationDTO;
  return proto.attendu.LocationDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.LocationDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.LocationDTO}
 */
proto.attendu.LocationDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAisle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBay(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneCode(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryBlock(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 10:
      var value = new proto.attendu.ZoneDTO;
      reader.readMessage(value,proto.attendu.ZoneDTO.deserializeBinaryFromReader);
      msg.setZone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.LocationDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.LocationDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.LocationDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.LocationDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAisle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBay();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getZoneCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getEntryBlock();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getZone();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.attendu.ZoneDTO.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone_id = 2;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string aisle = 4;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getAisle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setAisle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string bay = 5;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getBay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setBay = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string zone_code = 6;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getZoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setZoneCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 level = 7;
 * @return {number}
 */
proto.attendu.LocationDTO.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string entry_block = 8;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getEntryBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setEntryBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string code = 9;
 * @return {string}
 */
proto.attendu.LocationDTO.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional ZoneDTO zone = 10;
 * @return {?proto.attendu.ZoneDTO}
 */
proto.attendu.LocationDTO.prototype.getZone = function() {
  return /** @type{?proto.attendu.ZoneDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.ZoneDTO, 10));
};


/**
 * @param {?proto.attendu.ZoneDTO|undefined} value
 * @return {!proto.attendu.LocationDTO} returns this
*/
proto.attendu.LocationDTO.prototype.setZone = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.LocationDTO} returns this
 */
proto.attendu.LocationDTO.prototype.clearZone = function() {
  return this.setZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.LocationDTO.prototype.hasZone = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.ZoneDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.ZoneDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.ZoneDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.ZoneDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.ZoneDTO}
 */
proto.attendu.ZoneDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.ZoneDTO;
  return proto.attendu.ZoneDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.ZoneDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.ZoneDTO}
 */
proto.attendu.ZoneDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.ZoneDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.ZoneDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.ZoneDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.ZoneDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.ZoneDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ZoneDTO} returns this
 */
proto.attendu.ZoneDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.attendu.ZoneDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ZoneDTO} returns this
 */
proto.attendu.ZoneDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.attendu.ZoneDTO.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ZoneDTO} returns this
 */
proto.attendu.ZoneDTO.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttFile.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    attenduId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    path: jspb.Message.getFieldWithDefault(msg, 7, ""),
    source: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sscc: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.AttFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttFile;
  return proto.attendu.AttFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.AttFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttenduId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSscc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdateAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAttenduId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSscc();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.attendu.AttFile.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.attendu.AttFile.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setUpdateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string attendu_id = 5;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getAttenduId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setAttenduId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string path = 7;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string source = 8;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string sscc = 9;
 * @return {string}
 */
proto.attendu.AttFile.prototype.getSscc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFile} returns this
 */
proto.attendu.AttFile.prototype.setSscc = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttCommentaire.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttCommentaire.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttCommentaire} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttCommentaire.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    attenduId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttCommentaire}
 */
proto.attendu.AttCommentaire.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttCommentaire;
  return proto.attendu.AttCommentaire.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttCommentaire} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttCommentaire}
 */
proto.attendu.AttCommentaire.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttenduId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttCommentaire.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttCommentaire.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttCommentaire} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttCommentaire.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdateAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAttenduId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.AttCommentaire.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttCommentaire} returns this
 */
proto.attendu.AttCommentaire.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.attendu.AttCommentaire.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttCommentaire} returns this
 */
proto.attendu.AttCommentaire.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.attendu.AttCommentaire.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttCommentaire} returns this
 */
proto.attendu.AttCommentaire.prototype.setUpdateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.attendu.AttCommentaire.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttCommentaire} returns this
 */
proto.attendu.AttCommentaire.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string attendu_id = 5;
 * @return {string}
 */
proto.attendu.AttCommentaire.prototype.getAttenduId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttCommentaire} returns this
 */
proto.attendu.AttCommentaire.prototype.setAttenduId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttFournisseur.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttFournisseur.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttFournisseur} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttFournisseur.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    codeNom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    addresse: jspb.Message.getFieldWithDefault(msg, 5, ""),
    codePostal: jspb.Message.getFieldWithDefault(msg, 6, ""),
    ville: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pays: jspb.Message.getFieldWithDefault(msg, 8, ""),
    iso: jspb.Message.getFieldWithDefault(msg, 9, ""),
    complement: jspb.Message.getFieldWithDefault(msg, 10, ""),
    contact: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tel: jspb.Message.getFieldWithDefault(msg, 12, ""),
    mobile: jspb.Message.getFieldWithDefault(msg, 13, ""),
    email: jspb.Message.getFieldWithDefault(msg, 14, ""),
    attenduId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    gln: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttFournisseur}
 */
proto.attendu.AttFournisseur.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttFournisseur;
  return proto.attendu.AttFournisseur.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttFournisseur} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttFournisseur}
 */
proto.attendu.AttFournisseur.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodeNom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddresse(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodePostal(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVille(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPays(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setIso(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setComplement(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setContact(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTel(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobile(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttenduId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setGln(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttFournisseur.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttFournisseur.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttFournisseur} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttFournisseur.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdateAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCodeNom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddresse();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCodePostal();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVille();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPays();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIso();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getComplement();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getContact();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTel();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMobile();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAttenduId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getGln();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.attendu.AttFournisseur.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.attendu.AttFournisseur.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setUpdateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string code_nom = 4;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string addresse = 5;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getAddresse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setAddresse = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string code_postal = 6;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getCodePostal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setCodePostal = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string ville = 7;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getVille = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setVille = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string pays = 8;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getPays = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setPays = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string iso = 9;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getIso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setIso = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string complement = 10;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getComplement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setComplement = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string contact = 11;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getContact = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setContact = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string tel = 12;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getTel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setTel = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string mobile = 13;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getMobile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setMobile = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string email = 14;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string attendu_id = 15;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getAttenduId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setAttenduId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string gln = 16;
 * @return {string}
 */
proto.attendu.AttFournisseur.prototype.getGln = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFournisseur} returns this
 */
proto.attendu.AttFournisseur.prototype.setGln = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttProduction.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttProduction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttProduction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProduction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    referenceNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refFournisseurNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    libelle: jspb.Message.getFieldWithDefault(msg, 6, ""),
    lot: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sscc: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dluo: jspb.Message.getFieldWithDefault(msg, 9, 0),
    quantite: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sousQte: jspb.Message.getFieldWithDefault(msg, 11, 0),
    totalPieses: jspb.Message.getFieldWithDefault(msg, 12, 0),
    conditionement: jspb.Message.getFieldWithDefault(msg, 13, ""),
    attenduId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    volumeQte: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    poidsQte: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    volumeSousqte: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    poidsSousqte: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    conditionementId: jspb.Message.getFieldWithDefault(msg, 19, ""),
    refFournisserId: jspb.Message.getFieldWithDefault(msg, 20, ""),
    conditionnement: (f = msg.getConditionnement()) && proto_conditionnement_conditionnement_pb.Conditionnement.toObject(includeInstance, f),
    lotTmp: jspb.Message.getFieldWithDefault(msg, 22, ""),
    dluoTmp: jspb.Message.getFieldWithDefault(msg, 23, 0),
    dluoDuration: jspb.Message.getFieldWithDefault(msg, 24, 0),
    isScan: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    referenceId: jspb.Message.getFieldWithDefault(msg, 26, ""),
    refBlock: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    refChange: jspb.Message.getBooleanFieldWithDefault(msg, 28, false),
    validationBy: jspb.Message.getFieldWithDefault(msg, 29, ""),
    validationTime: jspb.Message.getFieldWithDefault(msg, 30, 0),
    attBl: jspb.Message.getFieldWithDefault(msg, 31, ""),
    status: jspb.Message.getFieldWithDefault(msg, 32, ""),
    validationerId: jspb.Message.getFieldWithDefault(msg, 33, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 34, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 35, ""),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 36, ""),
    ssccOb: (f = msg.getSsccOb()) && proto_sscc_sscc_pb.SSCC.toObject(includeInstance, f),
    genBarCodePdf: jspb.Message.getFieldWithDefault(msg, 38, ""),
    dluoFormat: jspb.Message.getFieldWithDefault(msg, 39, ""),
    location: (f = msg.getLocation()) && proto.attendu.LocationDTO.toObject(includeInstance, f),
    locationId: jspb.Message.getFieldWithDefault(msg, 41, ""),
    type: jspb.Message.getFieldWithDefault(msg, 42, ""),
    mouvement: jspb.Message.getFieldWithDefault(msg, 43, ""),
    eta: jspb.Message.getFieldWithDefault(msg, 44, ""),
    chrono: jspb.Message.getFieldWithDefault(msg, 45, ""),
    referenceProduct: (f = msg.getReferenceProduct()) && proto_reference_reference_pb.ReferenceProduct.toObject(includeInstance, f),
    isStandard: jspb.Message.getBooleanFieldWithDefault(msg, 47, false),
    companyId: jspb.Message.getFieldWithDefault(msg, 48, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 49, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttProduction}
 */
proto.attendu.AttProduction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttProduction;
  return proto.attendu.AttProduction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttProduction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttProduction}
 */
proto.attendu.AttProduction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceNumber(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefFournisseurNumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLibelle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLot(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSscc(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDluo(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantite(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSousQte(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPieses(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionement(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttenduId(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVolumeQte(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPoidsQte(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVolumeSousqte(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPoidsSousqte(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionementId(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefFournisserId(value);
      break;
    case 21:
      var value = new proto_conditionnement_conditionnement_pb.Conditionnement;
      reader.readMessage(value,proto_conditionnement_conditionnement_pb.Conditionnement.deserializeBinaryFromReader);
      msg.setConditionnement(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setLotTmp(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDluoTmp(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDluoDuration(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsScan(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceId(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefBlock(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefChange(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationBy(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidationTime(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttBl(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationerId(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 37:
      var value = new proto_sscc_sscc_pb.SSCC;
      reader.readMessage(value,proto_sscc_sscc_pb.SSCC.deserializeBinaryFromReader);
      msg.setSsccOb(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.setGenBarCodePdf(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setDluoFormat(value);
      break;
    case 40:
      var value = new proto.attendu.LocationDTO;
      reader.readMessage(value,proto.attendu.LocationDTO.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 42:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 43:
      var value = /** @type {string} */ (reader.readString());
      msg.setMouvement(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.setEta(value);
      break;
    case 45:
      var value = /** @type {string} */ (reader.readString());
      msg.setChrono(value);
      break;
    case 46:
      var value = new proto_reference_reference_pb.ReferenceProduct;
      reader.readMessage(value,proto_reference_reference_pb.ReferenceProduct.deserializeBinaryFromReader);
      msg.setReferenceProduct(value);
      break;
    case 47:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStandard(value);
      break;
    case 48:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 49:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttProduction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttProduction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttProduction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProduction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdateAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReferenceNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefFournisseurNumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLibelle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLot();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSscc();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDluo();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getQuantite();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSousQte();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getTotalPieses();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getConditionement();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAttenduId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getVolumeQte();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getPoidsQte();
  if (f !== 0.0) {
    writer.writeFloat(
      16,
      f
    );
  }
  f = message.getVolumeSousqte();
  if (f !== 0.0) {
    writer.writeFloat(
      17,
      f
    );
  }
  f = message.getPoidsSousqte();
  if (f !== 0.0) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = message.getConditionementId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getRefFournisserId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getConditionnement();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_conditionnement_conditionnement_pb.Conditionnement.serializeBinaryToWriter
    );
  }
  f = message.getLotTmp();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getDluoTmp();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getDluoDuration();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getIsScan();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getRefBlock();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
  f = message.getRefChange();
  if (f) {
    writer.writeBool(
      28,
      f
    );
  }
  f = message.getValidationBy();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getValidationTime();
  if (f !== 0) {
    writer.writeInt64(
      30,
      f
    );
  }
  f = message.getAttBl();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getValidationerId();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getSsccOb();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_sscc_sscc_pb.SSCC.serializeBinaryToWriter
    );
  }
  f = message.getGenBarCodePdf();
  if (f.length > 0) {
    writer.writeString(
      38,
      f
    );
  }
  f = message.getDluoFormat();
  if (f.length > 0) {
    writer.writeString(
      39,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.attendu.LocationDTO.serializeBinaryToWriter
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      42,
      f
    );
  }
  f = message.getMouvement();
  if (f.length > 0) {
    writer.writeString(
      43,
      f
    );
  }
  f = message.getEta();
  if (f.length > 0) {
    writer.writeString(
      44,
      f
    );
  }
  f = message.getChrono();
  if (f.length > 0) {
    writer.writeString(
      45,
      f
    );
  }
  f = message.getReferenceProduct();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto_reference_reference_pb.ReferenceProduct.serializeBinaryToWriter
    );
  }
  f = message.getIsStandard();
  if (f) {
    writer.writeBool(
      47,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      48,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      49,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setCreateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setUpdateAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string reference_number = 4;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getReferenceNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setReferenceNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ref_fournisseur_number = 5;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getRefFournisseurNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setRefFournisseurNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string libelle = 6;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getLibelle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setLibelle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string lot = 7;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getLot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setLot = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sscc = 8;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getSscc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setSscc = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 dluo = 9;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getDluo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setDluo = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 quantite = 10;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getQuantite = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setQuantite = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 sous_qte = 11;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getSousQte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setSousQte = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 total_pieses = 12;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getTotalPieses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setTotalPieses = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string conditionement = 13;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getConditionement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setConditionement = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string attendu_id = 14;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getAttenduId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setAttenduId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional float volume_qte = 15;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getVolumeQte = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setVolumeQte = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional float poids_qte = 16;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getPoidsQte = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setPoidsQte = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional float volume_sousqte = 17;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getVolumeSousqte = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setVolumeSousqte = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional float poids_sousqte = 18;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getPoidsSousqte = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setPoidsSousqte = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional string conditionement_id = 19;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getConditionementId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setConditionementId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string ref_fournisser_id = 20;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getRefFournisserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setRefFournisserId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional conditionnement.Conditionnement conditionnement = 21;
 * @return {?proto.conditionnement.Conditionnement}
 */
proto.attendu.AttProduction.prototype.getConditionnement = function() {
  return /** @type{?proto.conditionnement.Conditionnement} */ (
    jspb.Message.getWrapperField(this, proto_conditionnement_conditionnement_pb.Conditionnement, 21));
};


/**
 * @param {?proto.conditionnement.Conditionnement|undefined} value
 * @return {!proto.attendu.AttProduction} returns this
*/
proto.attendu.AttProduction.prototype.setConditionnement = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.clearConditionnement = function() {
  return this.setConditionnement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.hasConditionnement = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string lot_tmp = 22;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getLotTmp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setLotTmp = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int64 dluo_tmp = 23;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getDluoTmp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setDluoTmp = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int32 dluo_duration = 24;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getDluoDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setDluoDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional bool is_scan = 25;
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.getIsScan = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setIsScan = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional string reference_id = 26;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional bool ref_block = 27;
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.getRefBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setRefBlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};


/**
 * optional bool ref_change = 28;
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.getRefChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setRefChange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 28, value);
};


/**
 * optional string validation_by = 29;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getValidationBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setValidationBy = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional int64 validation_time = 30;
 * @return {number}
 */
proto.attendu.AttProduction.prototype.getValidationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setValidationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional string att_bl = 31;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getAttBl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setAttBl = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string status = 32;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string validationer_id = 33;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getValidationerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setValidationerId = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string company_code_nom = 34;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string warehouse_code_nom = 35;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional string client_code_nom = 36;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional sscc.SSCC sscc_ob = 37;
 * @return {?proto.sscc.SSCC}
 */
proto.attendu.AttProduction.prototype.getSsccOb = function() {
  return /** @type{?proto.sscc.SSCC} */ (
    jspb.Message.getWrapperField(this, proto_sscc_sscc_pb.SSCC, 37));
};


/**
 * @param {?proto.sscc.SSCC|undefined} value
 * @return {!proto.attendu.AttProduction} returns this
*/
proto.attendu.AttProduction.prototype.setSsccOb = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.clearSsccOb = function() {
  return this.setSsccOb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.hasSsccOb = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional string gen_bar_code_pdf = 38;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getGenBarCodePdf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setGenBarCodePdf = function(value) {
  return jspb.Message.setProto3StringField(this, 38, value);
};


/**
 * optional string dluo_format = 39;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getDluoFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setDluoFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 39, value);
};


/**
 * optional LocationDTO location = 40;
 * @return {?proto.attendu.LocationDTO}
 */
proto.attendu.AttProduction.prototype.getLocation = function() {
  return /** @type{?proto.attendu.LocationDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.LocationDTO, 40));
};


/**
 * @param {?proto.attendu.LocationDTO|undefined} value
 * @return {!proto.attendu.AttProduction} returns this
*/
proto.attendu.AttProduction.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional string location_id = 41;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional string type = 42;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 42, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 42, value);
};


/**
 * optional string mouvement = 43;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getMouvement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 43, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setMouvement = function(value) {
  return jspb.Message.setProto3StringField(this, 43, value);
};


/**
 * optional string eta = 44;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getEta = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 44, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setEta = function(value) {
  return jspb.Message.setProto3StringField(this, 44, value);
};


/**
 * optional string chrono = 45;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getChrono = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 45, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setChrono = function(value) {
  return jspb.Message.setProto3StringField(this, 45, value);
};


/**
 * optional reference.ReferenceProduct reference_product = 46;
 * @return {?proto.reference.ReferenceProduct}
 */
proto.attendu.AttProduction.prototype.getReferenceProduct = function() {
  return /** @type{?proto.reference.ReferenceProduct} */ (
    jspb.Message.getWrapperField(this, proto_reference_reference_pb.ReferenceProduct, 46));
};


/**
 * @param {?proto.reference.ReferenceProduct|undefined} value
 * @return {!proto.attendu.AttProduction} returns this
*/
proto.attendu.AttProduction.prototype.setReferenceProduct = function(value) {
  return jspb.Message.setWrapperField(this, 46, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.clearReferenceProduct = function() {
  return this.setReferenceProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.hasReferenceProduct = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional bool is_standard = 47;
 * @return {boolean}
 */
proto.attendu.AttProduction.prototype.getIsStandard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 47, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setIsStandard = function(value) {
  return jspb.Message.setProto3BooleanField(this, 47, value);
};


/**
 * optional string company_id = 48;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 48, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 48, value);
};


/**
 * optional string warehouse_id = 49;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 49, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 49, value);
};


/**
 * optional string client_id = 50;
 * @return {string}
 */
proto.attendu.AttProduction.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProduction} returns this
 */
proto.attendu.AttProduction.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttenduRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttenduRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttenduRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttenduRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attenduentry: (f = msg.getAttenduentry()) && proto.attendu.Attendu.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttenduRequest}
 */
proto.attendu.AttenduRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttenduRequest;
  return proto.attendu.AttenduRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttenduRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttenduRequest}
 */
proto.attendu.AttenduRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setAttenduentry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttenduRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttenduRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttenduRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttenduRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttenduentry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Attendu attenduEntry = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.AttenduRequest.prototype.getAttenduentry = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.AttenduRequest} returns this
*/
proto.attendu.AttenduRequest.prototype.setAttenduentry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttenduRequest} returns this
 */
proto.attendu.AttenduRequest.prototype.clearAttenduentry = function() {
  return this.setAttenduentry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttenduRequest.prototype.hasAttenduentry = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateAttenduRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateAttenduRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateAttenduRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateAttenduRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attenduentry: (f = msg.getAttenduentry()) && proto.attendu.Attendu.toObject(includeInstance, f),
    realtimeObject: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateAttenduRequest}
 */
proto.attendu.UpdateAttenduRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateAttenduRequest;
  return proto.attendu.UpdateAttenduRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateAttenduRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateAttenduRequest}
 */
proto.attendu.UpdateAttenduRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setAttenduentry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealtimeObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateAttenduRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateAttenduRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateAttenduRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateAttenduRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttenduentry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getRealtimeObject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Attendu attenduEntry = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.UpdateAttenduRequest.prototype.getAttenduentry = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.UpdateAttenduRequest} returns this
*/
proto.attendu.UpdateAttenduRequest.prototype.setAttenduentry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.UpdateAttenduRequest} returns this
 */
proto.attendu.UpdateAttenduRequest.prototype.clearAttenduentry = function() {
  return this.setAttenduentry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.UpdateAttenduRequest.prototype.hasAttenduentry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string realtime_object = 2;
 * @return {string}
 */
proto.attendu.UpdateAttenduRequest.prototype.getRealtimeObject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateAttenduRequest} returns this
 */
proto.attendu.UpdateAttenduRequest.prototype.setRealtimeObject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttenduResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttenduResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttenduResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttenduResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.attendu.Attendu.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttenduResponse}
 */
proto.attendu.AttenduResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttenduResponse;
  return proto.attendu.AttenduResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttenduResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttenduResponse}
 */
proto.attendu.AttenduResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttenduResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttenduResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttenduResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttenduResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Attendu entry = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.AttenduResponse.prototype.getEntry = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.AttenduResponse} returns this
*/
proto.attendu.AttenduResponse.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttenduResponse} returns this
 */
proto.attendu.AttenduResponse.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttenduResponse.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.AttenduResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduResponse} returns this
 */
proto.attendu.AttenduResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.attendu.Attendu.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionResponse}
 */
proto.attendu.GetMissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionResponse;
  return proto.attendu.GetMissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionResponse}
 */
proto.attendu.GetMissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Attendu entry = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.GetMissionResponse.prototype.getEntry = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.GetMissionResponse} returns this
*/
proto.attendu.GetMissionResponse.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetMissionResponse} returns this
 */
proto.attendu.GetMissionResponse.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetMissionResponse.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.GetMissionResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionResponse} returns this
 */
proto.attendu.GetMissionResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 count = 3;
 * @return {number}
 */
proto.attendu.GetMissionResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetMissionResponse} returns this
 */
proto.attendu.GetMissionResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionImportantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionImportantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionImportantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionImportantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    attendu: (f = msg.getAttendu()) && proto.attendu.Attendu.toObject(includeInstance, f),
    commande: (f = msg.getCommande()) && proto_commande_commande_pb.Commande.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    messageerror: jspb.Message.getFieldWithDefault(msg, 4, ""),
    count: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionImportantResponse}
 */
proto.attendu.GetMissionImportantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionImportantResponse;
  return proto.attendu.GetMissionImportantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionImportantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionImportantResponse}
 */
proto.attendu.GetMissionImportantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setAttendu(value);
      break;
    case 2:
      var value = new proto_commande_commande_pb.Commande;
      reader.readMessage(value,proto_commande_commande_pb.Commande.deserializeBinaryFromReader);
      msg.setCommande(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionImportantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionImportantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionImportantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionImportantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttendu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getCommande();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_commande_commande_pb.Commande.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional Attendu attendu = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.GetMissionImportantResponse.prototype.getAttendu = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
*/
proto.attendu.GetMissionImportantResponse.prototype.setAttendu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
 */
proto.attendu.GetMissionImportantResponse.prototype.clearAttendu = function() {
  return this.setAttendu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetMissionImportantResponse.prototype.hasAttendu = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commande.Commande commande = 2;
 * @return {?proto.commande.Commande}
 */
proto.attendu.GetMissionImportantResponse.prototype.getCommande = function() {
  return /** @type{?proto.commande.Commande} */ (
    jspb.Message.getWrapperField(this, proto_commande_commande_pb.Commande, 2));
};


/**
 * @param {?proto.commande.Commande|undefined} value
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
*/
proto.attendu.GetMissionImportantResponse.prototype.setCommande = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
 */
proto.attendu.GetMissionImportantResponse.prototype.clearCommande = function() {
  return this.setCommande(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetMissionImportantResponse.prototype.hasCommande = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.attendu.GetMissionImportantResponse.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
 */
proto.attendu.GetMissionImportantResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string messageError = 4;
 * @return {string}
 */
proto.attendu.GetMissionImportantResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
 */
proto.attendu.GetMissionImportantResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 count = 5;
 * @return {number}
 */
proto.attendu.GetMissionImportantResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetMissionImportantResponse} returns this
 */
proto.attendu.GetMissionImportantResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetByIdAttenduRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetByIdAttenduRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetByIdAttenduRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetByIdAttenduRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetByIdAttenduRequest}
 */
proto.attendu.GetByIdAttenduRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetByIdAttenduRequest;
  return proto.attendu.GetByIdAttenduRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetByIdAttenduRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetByIdAttenduRequest}
 */
proto.attendu.GetByIdAttenduRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetByIdAttenduRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetByIdAttenduRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetByIdAttenduRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetByIdAttenduRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.GetByIdAttenduRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetByIdAttenduRequest} returns this
 */
proto.attendu.GetByIdAttenduRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MetaData}
 */
proto.attendu.MetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MetaData;
  return proto.attendu.MetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MetaData}
 */
proto.attendu.MetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.attendu.MetaData.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MetaData} returns this
 */
proto.attendu.MetaData.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 offset = 2;
 * @return {number}
 */
proto.attendu.MetaData.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MetaData} returns this
 */
proto.attendu.MetaData.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.attendu.MetaData.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MetaData} returns this
 */
proto.attendu.MetaData.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 total = 4;
 * @return {number}
 */
proto.attendu.MetaData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MetaData} returns this
 */
proto.attendu.MetaData.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    role: jspb.Message.getFieldWithDefault(msg, 7, ""),
    bl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    supplier: jspb.Message.getFieldWithDefault(msg, 10, ""),
    type: jspb.Message.getFieldWithDefault(msg, 11, ""),
    mouvement: jspb.Message.getFieldWithDefault(msg, 12, ""),
    eta: jspb.Message.getFieldWithDefault(msg, 13, ""),
    chrono: jspb.Message.getFieldWithDefault(msg, 14, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 15, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 16, ""),
    product: jspb.Message.getFieldWithDefault(msg, 17, ""),
    status: jspb.Message.getFieldWithDefault(msg, 18, ""),
    palette: jspb.Message.getFieldWithDefault(msg, 19, ""),
    lot: jspb.Message.getFieldWithDefault(msg, 20, ""),
    sort: jspb.Message.getFieldWithDefault(msg, 21, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetAllRequest}
 */
proto.attendu.GetAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetAllRequest;
  return proto.attendu.GetAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetAllRequest}
 */
proto.attendu.GetAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplier(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMouvement(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEta(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setChrono(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setProduct(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPalette(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setLot(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setSort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSupplier();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMouvement();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEta();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getChrono();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getProduct();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPalette();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getLot();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getSort();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
};


/**
 * optional int32 limit = 1;
 * @return {number}
 */
proto.attendu.GetAllRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 offset = 2;
 * @return {number}
 */
proto.attendu.GetAllRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string warehouse_id = 4;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string company_id = 5;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_id = 6;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string role = 7;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string bl = 8;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getBl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setBl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string supplier = 10;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getSupplier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setSupplier = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string type = 11;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string mouvement = 12;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getMouvement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setMouvement = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string eta = 13;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getEta = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setEta = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string chrono = 14;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getChrono = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setChrono = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string start_date = 15;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string end_date = 16;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string product = 17;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getProduct = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setProduct = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string status = 18;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string palette = 19;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getPalette = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setPalette = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string lot = 20;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getLot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setLot = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string sort = 21;
 * @return {string}
 */
proto.attendu.GetAllRequest.prototype.getSort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllRequest} returns this
 */
proto.attendu.GetAllRequest.prototype.setSort = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetAllResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.attendu.Attendu.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && proto.attendu.MetaData.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetAllResponse}
 */
proto.attendu.GetAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetAllResponse;
  return proto.attendu.GetAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetAllResponse}
 */
proto.attendu.GetAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 2:
      var value = new proto.attendu.MetaData;
      reader.readMessage(value,proto.attendu.MetaData.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.attendu.MetaData.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated Attendu entry = 1;
 * @return {!Array<!proto.attendu.Attendu>}
 */
proto.attendu.GetAllResponse.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.attendu.Attendu>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {!Array<!proto.attendu.Attendu>} value
 * @return {!proto.attendu.GetAllResponse} returns this
*/
proto.attendu.GetAllResponse.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.Attendu=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.Attendu}
 */
proto.attendu.GetAllResponse.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.Attendu, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetAllResponse} returns this
 */
proto.attendu.GetAllResponse.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional MetaData metadata = 2;
 * @return {?proto.attendu.MetaData}
 */
proto.attendu.GetAllResponse.prototype.getMetadata = function() {
  return /** @type{?proto.attendu.MetaData} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MetaData, 2));
};


/**
 * @param {?proto.attendu.MetaData|undefined} value
 * @return {!proto.attendu.GetAllResponse} returns this
*/
proto.attendu.GetAllResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetAllResponse} returns this
 */
proto.attendu.GetAllResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetAllResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.GetAllResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllResponse} returns this
 */
proto.attendu.GetAllResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.DeleteFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.DeleteFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.DeleteFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.DeleteFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.DeleteFileRequest}
 */
proto.attendu.DeleteFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.DeleteFileRequest;
  return proto.attendu.DeleteFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.DeleteFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.DeleteFileRequest}
 */
proto.attendu.DeleteFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.DeleteFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.DeleteFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.DeleteFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.DeleteFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.DeleteFileRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.DeleteFileRequest} returns this
 */
proto.attendu.DeleteFileRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetFilesInAtt.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetFilesInAtt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetFilesInAtt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFilesInAtt.toObject = function(includeInstance, msg) {
  var f, obj = {
    attId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetFilesInAtt}
 */
proto.attendu.GetFilesInAtt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetFilesInAtt;
  return proto.attendu.GetFilesInAtt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetFilesInAtt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetFilesInAtt}
 */
proto.attendu.GetFilesInAtt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetFilesInAtt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetFilesInAtt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetFilesInAtt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFilesInAtt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string att_id = 1;
 * @return {string}
 */
proto.attendu.GetFilesInAtt.prototype.getAttId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetFilesInAtt} returns this
 */
proto.attendu.GetFilesInAtt.prototype.setAttId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetFileByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetFileByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetFileByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFileByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetFileByIdRequest}
 */
proto.attendu.GetFileByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetFileByIdRequest;
  return proto.attendu.GetFileByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetFileByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetFileByIdRequest}
 */
proto.attendu.GetFileByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetFileByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetFileByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetFileByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFileByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.GetFileByIdRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetFileByIdRequest} returns this
 */
proto.attendu.GetFileByIdRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetFileByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetFileByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetFileByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFileByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetFileByNameRequest}
 */
proto.attendu.GetFileByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetFileByNameRequest;
  return proto.attendu.GetFileByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetFileByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetFileByNameRequest}
 */
proto.attendu.GetFileByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetFileByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetFileByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetFileByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFileByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.GetFileByNameRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetFileByNameRequest} returns this
 */
proto.attendu.GetFileByNameRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string att_id = 2;
 * @return {string}
 */
proto.attendu.GetFileByNameRequest.prototype.getAttId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetFileByNameRequest} returns this
 */
proto.attendu.GetFileByNameRequest.prototype.setAttId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UploadNewFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UploadNewFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UploadNewFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UploadNewFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.attendu.AttFile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UploadNewFileRequest}
 */
proto.attendu.UploadNewFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UploadNewFileRequest;
  return proto.attendu.UploadNewFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UploadNewFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UploadNewFileRequest}
 */
proto.attendu.UploadNewFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UploadNewFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UploadNewFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UploadNewFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UploadNewFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
};


/**
 * optional AttFile file = 1;
 * @return {?proto.attendu.AttFile}
 */
proto.attendu.UploadNewFileRequest.prototype.getFile = function() {
  return /** @type{?proto.attendu.AttFile} */ (
    jspb.Message.getWrapperField(this, proto.attendu.AttFile, 1));
};


/**
 * @param {?proto.attendu.AttFile|undefined} value
 * @return {!proto.attendu.UploadNewFileRequest} returns this
*/
proto.attendu.UploadNewFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.UploadNewFileRequest} returns this
 */
proto.attendu.UploadNewFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.UploadNewFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.UploadMultiFileRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UploadMultiFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UploadMultiFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UploadMultiFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UploadMultiFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.attendu.AttFile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UploadMultiFileRequest}
 */
proto.attendu.UploadMultiFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UploadMultiFileRequest;
  return proto.attendu.UploadMultiFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UploadMultiFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UploadMultiFileRequest}
 */
proto.attendu.UploadMultiFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UploadMultiFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UploadMultiFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UploadMultiFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UploadMultiFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AttFile files = 1;
 * @return {!Array<!proto.attendu.AttFile>}
 */
proto.attendu.UploadMultiFileRequest.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.attendu.AttFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttFile, 1));
};


/**
 * @param {!Array<!proto.attendu.AttFile>} value
 * @return {!proto.attendu.UploadMultiFileRequest} returns this
*/
proto.attendu.UploadMultiFileRequest.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.AttFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.UploadMultiFileRequest.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.AttFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.UploadMultiFileRequest} returns this
 */
proto.attendu.UploadMultiFileRequest.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetFilesInAttReponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetFilesInAttReponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetFilesInAttReponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetFilesInAttReponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFilesInAttReponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.attendu.AttFile.toObject, includeInstance),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetFilesInAttReponse}
 */
proto.attendu.GetFilesInAttReponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetFilesInAttReponse;
  return proto.attendu.GetFilesInAttReponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetFilesInAttReponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetFilesInAttReponse}
 */
proto.attendu.GetFilesInAttReponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetFilesInAttReponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetFilesInAttReponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetFilesInAttReponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetFilesInAttReponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AttFile entry = 1;
 * @return {!Array<!proto.attendu.AttFile>}
 */
proto.attendu.GetFilesInAttReponse.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.attendu.AttFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttFile, 1));
};


/**
 * @param {!Array<!proto.attendu.AttFile>} value
 * @return {!proto.attendu.GetFilesInAttReponse} returns this
*/
proto.attendu.GetFilesInAttReponse.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.AttFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.GetFilesInAttReponse.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.AttFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetFilesInAttReponse} returns this
 */
proto.attendu.GetFilesInAttReponse.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.GetFilesInAttReponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetFilesInAttReponse} returns this
 */
proto.attendu.GetFilesInAttReponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.UploadMultiFileResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UploadMultiFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UploadMultiFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UploadMultiFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UploadMultiFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.attendu.AttFile.toObject, includeInstance),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UploadMultiFileResponse}
 */
proto.attendu.UploadMultiFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UploadMultiFileResponse;
  return proto.attendu.UploadMultiFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UploadMultiFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UploadMultiFileResponse}
 */
proto.attendu.UploadMultiFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UploadMultiFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UploadMultiFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UploadMultiFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UploadMultiFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AttFile entry = 1;
 * @return {!Array<!proto.attendu.AttFile>}
 */
proto.attendu.UploadMultiFileResponse.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.attendu.AttFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttFile, 1));
};


/**
 * @param {!Array<!proto.attendu.AttFile>} value
 * @return {!proto.attendu.UploadMultiFileResponse} returns this
*/
proto.attendu.UploadMultiFileResponse.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.AttFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttFile}
 */
proto.attendu.UploadMultiFileResponse.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.AttFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.UploadMultiFileResponse} returns this
 */
proto.attendu.UploadMultiFileResponse.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.UploadMultiFileResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UploadMultiFileResponse} returns this
 */
proto.attendu.UploadMultiFileResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttFileReponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttFileReponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttFileReponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttFileReponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.attendu.AttFile.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttFileReponse}
 */
proto.attendu.AttFileReponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttFileReponse;
  return proto.attendu.AttFileReponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttFileReponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttFileReponse}
 */
proto.attendu.AttFileReponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttFile;
      reader.readMessage(value,proto.attendu.AttFile.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttFileReponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttFileReponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttFileReponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttFileReponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.AttFile.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AttFile entry = 1;
 * @return {?proto.attendu.AttFile}
 */
proto.attendu.AttFileReponse.prototype.getEntry = function() {
  return /** @type{?proto.attendu.AttFile} */ (
    jspb.Message.getWrapperField(this, proto.attendu.AttFile, 1));
};


/**
 * @param {?proto.attendu.AttFile|undefined} value
 * @return {!proto.attendu.AttFileReponse} returns this
*/
proto.attendu.AttFileReponse.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.AttFileReponse} returns this
 */
proto.attendu.AttFileReponse.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.AttFileReponse.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.AttFileReponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttFileReponse} returns this
 */
proto.attendu.AttFileReponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionRequest}
 */
proto.attendu.GetMissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionRequest;
  return proto.attendu.GetMissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionRequest}
 */
proto.attendu.GetMissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.attendu.GetMissionRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionRequest} returns this
 */
proto.attendu.GetMissionRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionImportantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionImportantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionImportantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionImportantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionImportantRequest}
 */
proto.attendu.GetMissionImportantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionImportantRequest;
  return proto.attendu.GetMissionImportantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionImportantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionImportantRequest}
 */
proto.attendu.GetMissionImportantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionImportantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionImportantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionImportantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionImportantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.attendu.GetMissionImportantRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionImportantRequest} returns this
 */
proto.attendu.GetMissionImportantRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_code_nom = 2;
 * @return {string}
 */
proto.attendu.GetMissionImportantRequest.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionImportantRequest} returns this
 */
proto.attendu.GetMissionImportantRequest.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string warehouse_code_nom = 3;
 * @return {string}
 */
proto.attendu.GetMissionImportantRequest.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionImportantRequest} returns this
 */
proto.attendu.GetMissionImportantRequest.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.ValidMissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.ValidMissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.ValidMissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.ValidMissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attNom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.ValidMissionRequest}
 */
proto.attendu.ValidMissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.ValidMissionRequest;
  return proto.attendu.ValidMissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.ValidMissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.ValidMissionRequest}
 */
proto.attendu.ValidMissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttNom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.ValidMissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.ValidMissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.ValidMissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.ValidMissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttNom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string att_nom = 1;
 * @return {string}
 */
proto.attendu.ValidMissionRequest.prototype.getAttNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ValidMissionRequest} returns this
 */
proto.attendu.ValidMissionRequest.prototype.setAttNom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_code_nom = 2;
 * @return {string}
 */
proto.attendu.ValidMissionRequest.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ValidMissionRequest} returns this
 */
proto.attendu.ValidMissionRequest.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.ValidMissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.ValidMissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.ValidMissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.ValidMissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.ValidMissionResponse}
 */
proto.attendu.ValidMissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.ValidMissionResponse;
  return proto.attendu.ValidMissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.ValidMissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.ValidMissionResponse}
 */
proto.attendu.ValidMissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.ValidMissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.ValidMissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.ValidMissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.ValidMissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.attendu.ValidMissionResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ValidMissionResponse} returns this
 */
proto.attendu.ValidMissionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.ValidMissionResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.ValidMissionResponse} returns this
 */
proto.attendu.ValidMissionResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateMissionLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateMissionLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateMissionLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warehourseCodeNom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    codeBar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateMissionLocationRequest}
 */
proto.attendu.UpdateMissionLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateMissionLocationRequest;
  return proto.attendu.UpdateMissionLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateMissionLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateMissionLocationRequest}
 */
proto.attendu.UpdateMissionLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehourseCodeNom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodeBar(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateMissionLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateMissionLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateMissionLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarehourseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCodeBar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string att_id = 1;
 * @return {string}
 */
proto.attendu.UpdateMissionLocationRequest.prototype.getAttId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionLocationRequest} returns this
 */
proto.attendu.UpdateMissionLocationRequest.prototype.setAttId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string warehourse_code_nom = 2;
 * @return {string}
 */
proto.attendu.UpdateMissionLocationRequest.prototype.getWarehourseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionLocationRequest} returns this
 */
proto.attendu.UpdateMissionLocationRequest.prototype.setWarehourseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code_bar = 3;
 * @return {string}
 */
proto.attendu.UpdateMissionLocationRequest.prototype.getCodeBar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionLocationRequest} returns this
 */
proto.attendu.UpdateMissionLocationRequest.prototype.setCodeBar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string warehouse_id = 4;
 * @return {string}
 */
proto.attendu.UpdateMissionLocationRequest.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionLocationRequest} returns this
 */
proto.attendu.UpdateMissionLocationRequest.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateMissionLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateMissionLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateMissionLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateMissionLocationResponse}
 */
proto.attendu.UpdateMissionLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateMissionLocationResponse;
  return proto.attendu.UpdateMissionLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateMissionLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateMissionLocationResponse}
 */
proto.attendu.UpdateMissionLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateMissionLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateMissionLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateMissionLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.attendu.UpdateMissionLocationResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionLocationResponse} returns this
 */
proto.attendu.UpdateMissionLocationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.UpdateMissionLocationResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionLocationResponse} returns this
 */
proto.attendu.UpdateMissionLocationResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateMissionArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateMissionArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dluo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dlc: jspb.Message.getFieldWithDefault(msg, 3, 0),
    manufactureDate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lot: jspb.Message.getFieldWithDefault(msg, 5, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    variante: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isUpdateScan: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateMissionArticleRequest}
 */
proto.attendu.UpdateMissionArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateMissionArticleRequest;
  return proto.attendu.UpdateMissionArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateMissionArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateMissionArticleRequest}
 */
proto.attendu.UpdateMissionArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDluo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDlc(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setManufactureDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLot(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariante(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUpdateScan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateMissionArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateMissionArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDluo();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDlc();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getManufactureDate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLot();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getVariante();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsUpdateScan();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 dluo = 2;
 * @return {number}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getDluo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setDluo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 dlc = 3;
 * @return {number}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getDlc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setDlc = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 manufacture_date = 4;
 * @return {number}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getManufactureDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setManufactureDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string lot = 5;
 * @return {string}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getLot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setLot = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 quantity = 6;
 * @return {number}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string variante = 7;
 * @return {string}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getVariante = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setVariante = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool is_update_scan = 8;
 * @return {boolean}
 */
proto.attendu.UpdateMissionArticleRequest.prototype.getIsUpdateScan = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.UpdateMissionArticleRequest} returns this
 */
proto.attendu.UpdateMissionArticleRequest.prototype.setIsUpdateScan = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateMissionArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateMissionArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, ""),
    block: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isScanNext: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isValid: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateMissionArticleResponse}
 */
proto.attendu.UpdateMissionArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateMissionArticleResponse;
  return proto.attendu.UpdateMissionArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateMissionArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateMissionArticleResponse}
 */
proto.attendu.UpdateMissionArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlock(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsScanNext(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsValid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateMissionArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateMissionArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlock();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsScanNext();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsValid();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionArticleResponse} returns this
 */
proto.attendu.UpdateMissionArticleResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionArticleResponse} returns this
 */
proto.attendu.UpdateMissionArticleResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool block = 3;
 * @return {boolean}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.getBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.UpdateMissionArticleResponse} returns this
 */
proto.attendu.UpdateMissionArticleResponse.prototype.setBlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_scan_next = 4;
 * @return {boolean}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.getIsScanNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.UpdateMissionArticleResponse} returns this
 */
proto.attendu.UpdateMissionArticleResponse.prototype.setIsScanNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_valid = 5;
 * @return {boolean}
 */
proto.attendu.UpdateMissionArticleResponse.prototype.getIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.attendu.UpdateMissionArticleResponse} returns this
 */
proto.attendu.UpdateMissionArticleResponse.prototype.setIsValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetDashboardInformationRequest.repeatedFields_ = [1,2,3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetDashboardInformationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetDashboardInformationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetDashboardInformationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetDashboardInformationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    companyIdList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    warehouseIdList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    userIdList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    referenceList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    memberList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    startDate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetDashboardInformationRequest}
 */
proto.attendu.GetDashboardInformationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetDashboardInformationRequest;
  return proto.attendu.GetDashboardInformationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetDashboardInformationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetDashboardInformationRequest}
 */
proto.attendu.GetDashboardInformationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCompanyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarehouseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addReference(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addMember(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetDashboardInformationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetDashboardInformationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetDashboardInformationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetDashboardInformationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCompanyIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getWarehouseIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUserIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getReferenceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * repeated string client_id = 1;
 * @return {!Array<string>}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getClientIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setClientIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.addClientId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.clearClientIdList = function() {
  return this.setClientIdList([]);
};


/**
 * repeated string company_id = 2;
 * @return {!Array<string>}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getCompanyIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setCompanyIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.addCompanyId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.clearCompanyIdList = function() {
  return this.setCompanyIdList([]);
};


/**
 * repeated string warehouse_id = 3;
 * @return {!Array<string>}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getWarehouseIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setWarehouseIdList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.addWarehouseId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.clearWarehouseIdList = function() {
  return this.setWarehouseIdList([]);
};


/**
 * repeated string user_id = 4;
 * @return {!Array<string>}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getUserIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setUserIdList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.addUserId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.clearUserIdList = function() {
  return this.setUserIdList([]);
};


/**
 * repeated string reference = 5;
 * @return {!Array<string>}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getReferenceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setReferenceList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.addReference = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.clearReferenceList = function() {
  return this.setReferenceList([]);
};


/**
 * repeated string member = 6;
 * @return {!Array<string>}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getMemberList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setMemberList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.addMember = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.clearMemberList = function() {
  return this.setMemberList([]);
};


/**
 * optional string start_date = 7;
 * @return {string}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string end_date = 8;
 * @return {string}
 */
proto.attendu.GetDashboardInformationRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetDashboardInformationRequest} returns this
 */
proto.attendu.GetDashboardInformationRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.DashboardChart.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.DashboardChart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.DashboardChart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.DashboardChart.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0),
    percent: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.DashboardChart}
 */
proto.attendu.DashboardChart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.DashboardChart;
  return proto.attendu.DashboardChart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.DashboardChart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.DashboardChart}
 */
proto.attendu.DashboardChart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.DashboardChart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.DashboardChart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.DashboardChart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.DashboardChart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPercent();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string date = 1;
 * @return {string}
 */
proto.attendu.DashboardChart.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.DashboardChart} returns this
 */
proto.attendu.DashboardChart.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.attendu.DashboardChart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.DashboardChart} returns this
 */
proto.attendu.DashboardChart.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 value = 3;
 * @return {number}
 */
proto.attendu.DashboardChart.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.DashboardChart} returns this
 */
proto.attendu.DashboardChart.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float percent = 4;
 * @return {number}
 */
proto.attendu.DashboardChart.prototype.getPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.DashboardChart} returns this
 */
proto.attendu.DashboardChart.prototype.setPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetDashboardInformationResponse.repeatedFields_ = [14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetDashboardInformationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetDashboardInformationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetDashboardInformationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetDashboardInformationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageerror: jspb.Message.getFieldWithDefault(msg, 1, ""),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    items: jspb.Message.getFieldWithDefault(msg, 3, 0),
    itemsCdn: jspb.Message.getFieldWithDefault(msg, 4, 0),
    referecence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    disputes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    receptionInprogress: jspb.Message.getFieldWithDefault(msg, 7, 0),
    receptionProcessed: jspb.Message.getFieldWithDefault(msg, 8, 0),
    averageReceptionTime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    placementsInStockInprogress: jspb.Message.getFieldWithDefault(msg, 10, 0),
    placementsInStockProcessed: jspb.Message.getFieldWithDefault(msg, 11, 0),
    averageTimeToStock: jspb.Message.getFieldWithDefault(msg, 12, 0),
    affectedStaff: jspb.Message.getFieldWithDefault(msg, 13, 0),
    stickChartList: jspb.Message.toObjectList(msg.getStickChartList(),
    proto.attendu.DashboardChart.toObject, includeInstance),
    pieChartList: jspb.Message.toObjectList(msg.getPieChartList(),
    proto.attendu.DashboardChart.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetDashboardInformationResponse}
 */
proto.attendu.GetDashboardInformationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetDashboardInformationResponse;
  return proto.attendu.GetDashboardInformationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetDashboardInformationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetDashboardInformationResponse}
 */
proto.attendu.GetDashboardInformationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItems(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItemsCdn(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferecence(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDisputes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceptionInprogress(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceptionProcessed(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAverageReceptionTime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlacementsInStockInprogress(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlacementsInStockProcessed(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAverageTimeToStock(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAffectedStaff(value);
      break;
    case 14:
      var value = new proto.attendu.DashboardChart;
      reader.readMessage(value,proto.attendu.DashboardChart.deserializeBinaryFromReader);
      msg.addStickChart(value);
      break;
    case 15:
      var value = new proto.attendu.DashboardChart;
      reader.readMessage(value,proto.attendu.DashboardChart.deserializeBinaryFromReader);
      msg.addPieChart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetDashboardInformationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetDashboardInformationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetDashboardInformationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetDashboardInformationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getItems();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getItemsCdn();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReferecence();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDisputes();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getReceptionInprogress();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getReceptionProcessed();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getAverageReceptionTime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getPlacementsInStockInprogress();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getPlacementsInStockProcessed();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getAverageTimeToStock();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getAffectedStaff();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getStickChartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.attendu.DashboardChart.serializeBinaryToWriter
    );
  }
  f = message.getPieChartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.attendu.DashboardChart.serializeBinaryToWriter
    );
  }
};


/**
 * optional string messageError = 1;
 * @return {string}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 items = 3;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getItems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setItems = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 items_cdn = 4;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getItemsCdn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setItemsCdn = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 referecence = 5;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getReferecence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setReferecence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 disputes = 6;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getDisputes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setDisputes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 reception_inprogress = 7;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getReceptionInprogress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setReceptionInprogress = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 reception_processed = 8;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getReceptionProcessed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setReceptionProcessed = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 average_reception_time = 9;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getAverageReceptionTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setAverageReceptionTime = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 placements_in_stock_inprogress = 10;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getPlacementsInStockInprogress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setPlacementsInStockInprogress = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 placements_in_stock_processed = 11;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getPlacementsInStockProcessed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setPlacementsInStockProcessed = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 average_time_to_stock = 12;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getAverageTimeToStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setAverageTimeToStock = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 affected_staff = 13;
 * @return {number}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getAffectedStaff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.setAffectedStaff = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated DashboardChart stick_chart = 14;
 * @return {!Array<!proto.attendu.DashboardChart>}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getStickChartList = function() {
  return /** @type{!Array<!proto.attendu.DashboardChart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.DashboardChart, 14));
};


/**
 * @param {!Array<!proto.attendu.DashboardChart>} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
*/
proto.attendu.GetDashboardInformationResponse.prototype.setStickChartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.attendu.DashboardChart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.DashboardChart}
 */
proto.attendu.GetDashboardInformationResponse.prototype.addStickChart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.attendu.DashboardChart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.clearStickChartList = function() {
  return this.setStickChartList([]);
};


/**
 * repeated DashboardChart pie_chart = 15;
 * @return {!Array<!proto.attendu.DashboardChart>}
 */
proto.attendu.GetDashboardInformationResponse.prototype.getPieChartList = function() {
  return /** @type{!Array<!proto.attendu.DashboardChart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.DashboardChart, 15));
};


/**
 * @param {!Array<!proto.attendu.DashboardChart>} value
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
*/
proto.attendu.GetDashboardInformationResponse.prototype.setPieChartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.attendu.DashboardChart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.DashboardChart}
 */
proto.attendu.GetDashboardInformationResponse.prototype.addPieChart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.attendu.DashboardChart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetDashboardInformationResponse} returns this
 */
proto.attendu.GetDashboardInformationResponse.prototype.clearPieChartList = function() {
  return this.setPieChartList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetMissionByStatusRequest.repeatedFields_ = [7,8,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionByStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionByStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionByStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionByStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    paging: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pagesize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    nom: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientCodeNomList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    missionTypeList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    userId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deliveryDate: jspb.Message.getFieldWithDefault(msg, 10, 0),
    companyId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    clientIdList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionByStatusRequest}
 */
proto.attendu.GetMissionByStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionByStatusRequest;
  return proto.attendu.GetMissionByStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionByStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionByStatusRequest}
 */
proto.attendu.GetMissionByStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaging(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagesize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNom(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientCodeNom(value);
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMissionType(values[i]);
      }
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliveryDate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionByStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionByStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionByStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionByStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPaging();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getNom();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientCodeNomList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getMissionTypeList();
  if (f.length > 0) {
    writer.writePackedInt32(
      8,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeliveryDate();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getClientIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
};


/**
 * optional string company_code_nom = 1;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string warehouse_code_nom = 2;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 paging = 4;
 * @return {number}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getPaging = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setPaging = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 pageSize = 5;
 * @return {number}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string nom = 6;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setNom = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string client_code_nom = 7;
 * @return {!Array<string>}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getClientCodeNomList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setClientCodeNomList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.addClientCodeNom = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.clearClientCodeNomList = function() {
  return this.setClientCodeNomList([]);
};


/**
 * repeated int32 mission_type = 8;
 * @return {!Array<number>}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getMissionTypeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setMissionTypeList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.addMissionType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.clearMissionTypeList = function() {
  return this.setMissionTypeList([]);
};


/**
 * optional string user_id = 9;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 delivery_date = 10;
 * @return {number}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getDeliveryDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setDeliveryDate = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string company_id = 11;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string warehouse_id = 12;
 * @return {string}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated string client_id = 13;
 * @return {!Array<string>}
 */
proto.attendu.GetMissionByStatusRequest.prototype.getClientIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.setClientIdList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.addClientId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetMissionByStatusRequest} returns this
 */
proto.attendu.GetMissionByStatusRequest.prototype.clearClientIdList = function() {
  return this.setClientIdList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionDetailRequest}
 */
proto.attendu.GetMissionDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionDetailRequest;
  return proto.attendu.GetMissionDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionDetailRequest}
 */
proto.attendu.GetMissionDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionDetailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.GetMissionDetailRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionDetailRequest} returns this
 */
proto.attendu.GetMissionDetailRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetMissionDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetMissionDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetMissionDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mission: (f = msg.getMission()) && proto.attendu.MissionDTO.toObject(includeInstance, f),
    usr: (f = msg.getUsr()) && proto_user_user_pb.User.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetMissionDetailResponse}
 */
proto.attendu.GetMissionDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetMissionDetailResponse;
  return proto.attendu.GetMissionDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetMissionDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetMissionDetailResponse}
 */
proto.attendu.GetMissionDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.MissionDTO;
      reader.readMessage(value,proto.attendu.MissionDTO.deserializeBinaryFromReader);
      msg.setMission(value);
      break;
    case 2:
      var value = new proto_user_user_pb.User;
      reader.readMessage(value,proto_user_user_pb.User.deserializeBinaryFromReader);
      msg.setUsr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetMissionDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetMissionDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetMissionDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetMissionDetailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.MissionDTO.serializeBinaryToWriter
    );
  }
  f = message.getUsr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_user_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional MissionDTO mission = 1;
 * @return {?proto.attendu.MissionDTO}
 */
proto.attendu.GetMissionDetailResponse.prototype.getMission = function() {
  return /** @type{?proto.attendu.MissionDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MissionDTO, 1));
};


/**
 * @param {?proto.attendu.MissionDTO|undefined} value
 * @return {!proto.attendu.GetMissionDetailResponse} returns this
*/
proto.attendu.GetMissionDetailResponse.prototype.setMission = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetMissionDetailResponse} returns this
 */
proto.attendu.GetMissionDetailResponse.prototype.clearMission = function() {
  return this.setMission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetMissionDetailResponse.prototype.hasMission = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional user.User usr = 2;
 * @return {?proto.user.User}
 */
proto.attendu.GetMissionDetailResponse.prototype.getUsr = function() {
  return /** @type{?proto.user.User} */ (
    jspb.Message.getWrapperField(this, proto_user_user_pb.User, 2));
};


/**
 * @param {?proto.user.User|undefined} value
 * @return {!proto.attendu.GetMissionDetailResponse} returns this
*/
proto.attendu.GetMissionDetailResponse.prototype.setUsr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetMissionDetailResponse} returns this
 */
proto.attendu.GetMissionDetailResponse.prototype.clearUsr = function() {
  return this.setUsr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetMissionDetailResponse.prototype.hasUsr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.GetMissionDetailResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetMissionDetailResponse} returns this
 */
proto.attendu.GetMissionDetailResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateMissionStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateMissionStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    managerId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sscc: jspb.Message.getFieldWithDefault(msg, 6, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 7, ""),
    reasonNote: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateMissionStatusRequest}
 */
proto.attendu.UpdateMissionStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateMissionStatusRequest;
  return proto.attendu.UpdateMissionStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateMissionStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateMissionStatusRequest}
 */
proto.attendu.UpdateMissionStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setManagerId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSscc(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReasonNote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateMissionStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateMissionStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getManagerId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSscc();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReasonNote();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 type = 4;
 * @return {number}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string manager_id = 5;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getManagerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setManagerId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string sscc = 6;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getSscc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setSscc = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string reason = 7;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string reason_note = 8;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusRequest.prototype.getReasonNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusRequest} returns this
 */
proto.attendu.UpdateMissionStatusRequest.prototype.setReasonNote = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.UpdateMissionStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.UpdateMissionStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.attendu.Attendu.toObject(includeInstance, f),
    entryCmd: (f = msg.getEntryCmd()) && proto_commande_commande_pb.Commande.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.UpdateMissionStatusResponse}
 */
proto.attendu.UpdateMissionStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.UpdateMissionStatusResponse;
  return proto.attendu.UpdateMissionStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.UpdateMissionStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.UpdateMissionStatusResponse}
 */
proto.attendu.UpdateMissionStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = new proto_commande_commande_pb.Commande;
      reader.readMessage(value,proto_commande_commande_pb.Commande.deserializeBinaryFromReader);
      msg.setEntryCmd(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.UpdateMissionStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.UpdateMissionStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.UpdateMissionStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getEntryCmd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_commande_commande_pb.Commande.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Attendu entry = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.getEntry = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.UpdateMissionStatusResponse} returns this
*/
proto.attendu.UpdateMissionStatusResponse.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.UpdateMissionStatusResponse} returns this
 */
proto.attendu.UpdateMissionStatusResponse.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commande.Commande entry_cmd = 2;
 * @return {?proto.commande.Commande}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.getEntryCmd = function() {
  return /** @type{?proto.commande.Commande} */ (
    jspb.Message.getWrapperField(this, proto_commande_commande_pb.Commande, 2));
};


/**
 * @param {?proto.commande.Commande|undefined} value
 * @return {!proto.attendu.UpdateMissionStatusResponse} returns this
*/
proto.attendu.UpdateMissionStatusResponse.prototype.setEntryCmd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.UpdateMissionStatusResponse} returns this
 */
proto.attendu.UpdateMissionStatusResponse.prototype.clearEntryCmd = function() {
  return this.setEntryCmd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.hasEntryCmd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.UpdateMissionStatusResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.UpdateMissionStatusResponse} returns this
 */
proto.attendu.UpdateMissionStatusResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MissionPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MissionPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MissionPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    mission: (f = msg.getMission()) && proto.attendu.MissionDTO.toObject(includeInstance, f),
    usr: (f = msg.getUsr()) && proto_user_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MissionPayload}
 */
proto.attendu.MissionPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MissionPayload;
  return proto.attendu.MissionPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MissionPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MissionPayload}
 */
proto.attendu.MissionPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.MissionDTO;
      reader.readMessage(value,proto.attendu.MissionDTO.deserializeBinaryFromReader);
      msg.setMission(value);
      break;
    case 2:
      var value = new proto_user_user_pb.User;
      reader.readMessage(value,proto_user_user_pb.User.deserializeBinaryFromReader);
      msg.setUsr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MissionPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MissionPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MissionPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.MissionDTO.serializeBinaryToWriter
    );
  }
  f = message.getUsr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_user_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional MissionDTO mission = 1;
 * @return {?proto.attendu.MissionDTO}
 */
proto.attendu.MissionPayload.prototype.getMission = function() {
  return /** @type{?proto.attendu.MissionDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MissionDTO, 1));
};


/**
 * @param {?proto.attendu.MissionDTO|undefined} value
 * @return {!proto.attendu.MissionPayload} returns this
*/
proto.attendu.MissionPayload.prototype.setMission = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionPayload} returns this
 */
proto.attendu.MissionPayload.prototype.clearMission = function() {
  return this.setMission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionPayload.prototype.hasMission = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional user.User usr = 2;
 * @return {?proto.user.User}
 */
proto.attendu.MissionPayload.prototype.getUsr = function() {
  return /** @type{?proto.user.User} */ (
    jspb.Message.getWrapperField(this, proto_user_user_pb.User, 2));
};


/**
 * @param {?proto.user.User|undefined} value
 * @return {!proto.attendu.MissionPayload} returns this
*/
proto.attendu.MissionPayload.prototype.setUsr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionPayload} returns this
 */
proto.attendu.MissionPayload.prototype.clearUsr = function() {
  return this.setUsr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionPayload.prototype.hasUsr = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.MissionPayloadResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MissionPayloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MissionPayloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MissionPayloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionPayloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.attendu.MissionPayload.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && proto.attendu.MetaData.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MissionPayloadResponse}
 */
proto.attendu.MissionPayloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MissionPayloadResponse;
  return proto.attendu.MissionPayloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MissionPayloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MissionPayloadResponse}
 */
proto.attendu.MissionPayloadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.MissionPayload;
      reader.readMessage(value,proto.attendu.MissionPayload.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 2:
      var value = new proto.attendu.MetaData;
      reader.readMessage(value,proto.attendu.MetaData.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MissionPayloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MissionPayloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MissionPayloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionPayloadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.MissionPayload.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.attendu.MetaData.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated MissionPayload entry = 1;
 * @return {!Array<!proto.attendu.MissionPayload>}
 */
proto.attendu.MissionPayloadResponse.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.attendu.MissionPayload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.MissionPayload, 1));
};


/**
 * @param {!Array<!proto.attendu.MissionPayload>} value
 * @return {!proto.attendu.MissionPayloadResponse} returns this
*/
proto.attendu.MissionPayloadResponse.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.MissionPayload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.MissionPayload}
 */
proto.attendu.MissionPayloadResponse.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.MissionPayload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.MissionPayloadResponse} returns this
 */
proto.attendu.MissionPayloadResponse.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional MetaData metadata = 2;
 * @return {?proto.attendu.MetaData}
 */
proto.attendu.MissionPayloadResponse.prototype.getMetadata = function() {
  return /** @type{?proto.attendu.MetaData} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MetaData, 2));
};


/**
 * @param {?proto.attendu.MetaData|undefined} value
 * @return {!proto.attendu.MissionPayloadResponse} returns this
*/
proto.attendu.MissionPayloadResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionPayloadResponse} returns this
 */
proto.attendu.MissionPayloadResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionPayloadResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.MissionPayloadResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionPayloadResponse} returns this
 */
proto.attendu.MissionPayloadResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MissionImportantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MissionImportantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MissionImportantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionImportantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.attendu.MissionDTO.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.attendu.MetaData.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, ""),
    count: jspb.Message.getFieldWithDefault(msg, 4, 0),
    usr: (f = msg.getUsr()) && proto_user_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MissionImportantResponse}
 */
proto.attendu.MissionImportantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MissionImportantResponse;
  return proto.attendu.MissionImportantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MissionImportantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MissionImportantResponse}
 */
proto.attendu.MissionImportantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.MissionDTO;
      reader.readMessage(value,proto.attendu.MissionDTO.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = new proto.attendu.MetaData;
      reader.readMessage(value,proto.attendu.MetaData.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 5:
      var value = new proto_user_user_pb.User;
      reader.readMessage(value,proto_user_user_pb.User.deserializeBinaryFromReader);
      msg.setUsr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MissionImportantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MissionImportantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MissionImportantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionImportantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.MissionDTO.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.attendu.MetaData.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUsr();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_user_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional MissionDTO entry = 1;
 * @return {?proto.attendu.MissionDTO}
 */
proto.attendu.MissionImportantResponse.prototype.getEntry = function() {
  return /** @type{?proto.attendu.MissionDTO} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MissionDTO, 1));
};


/**
 * @param {?proto.attendu.MissionDTO|undefined} value
 * @return {!proto.attendu.MissionImportantResponse} returns this
*/
proto.attendu.MissionImportantResponse.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionImportantResponse} returns this
 */
proto.attendu.MissionImportantResponse.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionImportantResponse.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MetaData metadata = 2;
 * @return {?proto.attendu.MetaData}
 */
proto.attendu.MissionImportantResponse.prototype.getMetadata = function() {
  return /** @type{?proto.attendu.MetaData} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MetaData, 2));
};


/**
 * @param {?proto.attendu.MetaData|undefined} value
 * @return {!proto.attendu.MissionImportantResponse} returns this
*/
proto.attendu.MissionImportantResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionImportantResponse} returns this
 */
proto.attendu.MissionImportantResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionImportantResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.MissionImportantResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionImportantResponse} returns this
 */
proto.attendu.MissionImportantResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 count = 4;
 * @return {number}
 */
proto.attendu.MissionImportantResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.MissionImportantResponse} returns this
 */
proto.attendu.MissionImportantResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional user.User usr = 5;
 * @return {?proto.user.User}
 */
proto.attendu.MissionImportantResponse.prototype.getUsr = function() {
  return /** @type{?proto.user.User} */ (
    jspb.Message.getWrapperField(this, proto_user_user_pb.User, 5));
};


/**
 * @param {?proto.user.User|undefined} value
 * @return {!proto.attendu.MissionImportantResponse} returns this
*/
proto.attendu.MissionImportantResponse.prototype.setUsr = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionImportantResponse} returns this
 */
proto.attendu.MissionImportantResponse.prototype.clearUsr = function() {
  return this.setUsr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionImportantResponse.prototype.hasUsr = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MissionImpotant.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MissionImpotant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MissionImpotant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionImpotant.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MissionImpotant}
 */
proto.attendu.MissionImpotant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MissionImpotant;
  return proto.attendu.MissionImpotant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MissionImpotant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MissionImpotant}
 */
proto.attendu.MissionImpotant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MissionImpotant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MissionImpotant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MissionImpotant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionImpotant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string company_code_nom = 1;
 * @return {string}
 */
proto.attendu.MissionImpotant.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionImpotant} returns this
 */
proto.attendu.MissionImpotant.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string warehouse_code_nom = 2;
 * @return {string}
 */
proto.attendu.MissionImpotant.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionImpotant} returns this
 */
proto.attendu.MissionImpotant.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string company_id = 3;
 * @return {string}
 */
proto.attendu.MissionImpotant.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionImpotant} returns this
 */
proto.attendu.MissionImpotant.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string warehouse_id = 4;
 * @return {string}
 */
proto.attendu.MissionImpotant.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionImpotant} returns this
 */
proto.attendu.MissionImpotant.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.MissionImportantArrayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.MissionImportantArrayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.MissionImportantArrayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionImportantArrayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mission: (f = msg.getMission()) && proto.attendu.MissionImpotant.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.MissionImportantArrayRequest}
 */
proto.attendu.MissionImportantArrayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.MissionImportantArrayRequest;
  return proto.attendu.MissionImportantArrayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.MissionImportantArrayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.MissionImportantArrayRequest}
 */
proto.attendu.MissionImportantArrayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new proto.attendu.MissionImpotant;
      reader.readMessage(value,proto.attendu.MissionImpotant.deserializeBinaryFromReader);
      msg.setMission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.MissionImportantArrayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.MissionImportantArrayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.MissionImportantArrayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.MissionImportantArrayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMission();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.attendu.MissionImpotant.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.attendu.MissionImportantArrayRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.MissionImportantArrayRequest} returns this
 */
proto.attendu.MissionImportantArrayRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MissionImpotant mission = 2;
 * @return {?proto.attendu.MissionImpotant}
 */
proto.attendu.MissionImportantArrayRequest.prototype.getMission = function() {
  return /** @type{?proto.attendu.MissionImpotant} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MissionImpotant, 2));
};


/**
 * @param {?proto.attendu.MissionImpotant|undefined} value
 * @return {!proto.attendu.MissionImportantArrayRequest} returns this
*/
proto.attendu.MissionImportantArrayRequest.prototype.setMission = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.MissionImportantArrayRequest} returns this
 */
proto.attendu.MissionImportantArrayRequest.prototype.clearMission = function() {
  return this.setMission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.MissionImportantArrayRequest.prototype.hasMission = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetAllAttenduStockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetAllAttenduStockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllAttenduStockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetAllAttenduStockRequest}
 */
proto.attendu.GetAllAttenduStockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetAllAttenduStockRequest;
  return proto.attendu.GetAllAttenduStockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetAllAttenduStockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetAllAttenduStockRequest}
 */
proto.attendu.GetAllAttenduStockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetAllAttenduStockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetAllAttenduStockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllAttenduStockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string client_code_nom = 1;
 * @return {string}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllAttenduStockRequest} returns this
 */
proto.attendu.GetAllAttenduStockRequest.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_code_nom = 2;
 * @return {string}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllAttenduStockRequest} returns this
 */
proto.attendu.GetAllAttenduStockRequest.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string warehouse_code_nom = 3;
 * @return {string}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllAttenduStockRequest} returns this
 */
proto.attendu.GetAllAttenduStockRequest.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetAllAttenduStockRequest} returns this
 */
proto.attendu.GetAllAttenduStockRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 offset = 5;
 * @return {number}
 */
proto.attendu.GetAllAttenduStockRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetAllAttenduStockRequest} returns this
 */
proto.attendu.GetAllAttenduStockRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetAllAttenduStockResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetAllAttenduStockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetAllAttenduStockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllAttenduStockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.attendu.AttProduction.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && proto.attendu.MetaData.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetAllAttenduStockResponse}
 */
proto.attendu.GetAllAttenduStockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetAllAttenduStockResponse;
  return proto.attendu.GetAllAttenduStockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetAllAttenduStockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetAllAttenduStockResponse}
 */
proto.attendu.GetAllAttenduStockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttProduction;
      reader.readMessage(value,proto.attendu.AttProduction.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 2:
      var value = new proto.attendu.MetaData;
      reader.readMessage(value,proto.attendu.MetaData.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetAllAttenduStockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetAllAttenduStockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAllAttenduStockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.AttProduction.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.attendu.MetaData.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated AttProduction entry = 1;
 * @return {!Array<!proto.attendu.AttProduction>}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.attendu.AttProduction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttProduction, 1));
};


/**
 * @param {!Array<!proto.attendu.AttProduction>} value
 * @return {!proto.attendu.GetAllAttenduStockResponse} returns this
*/
proto.attendu.GetAllAttenduStockResponse.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.AttProduction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttProduction}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.AttProduction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetAllAttenduStockResponse} returns this
 */
proto.attendu.GetAllAttenduStockResponse.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional MetaData metadata = 2;
 * @return {?proto.attendu.MetaData}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.getMetadata = function() {
  return /** @type{?proto.attendu.MetaData} */ (
    jspb.Message.getWrapperField(this, proto.attendu.MetaData, 2));
};


/**
 * @param {?proto.attendu.MetaData|undefined} value
 * @return {!proto.attendu.GetAllAttenduStockResponse} returns this
*/
proto.attendu.GetAllAttenduStockResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetAllAttenduStockResponse} returns this
 */
proto.attendu.GetAllAttenduStockResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.GetAllAttenduStockResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAllAttenduStockResponse} returns this
 */
proto.attendu.GetAllAttenduStockResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetAttProBySSCCRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetAttProBySSCCRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetAttProBySSCCRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAttProBySSCCRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sscc: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetAttProBySSCCRequest}
 */
proto.attendu.GetAttProBySSCCRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetAttProBySSCCRequest;
  return proto.attendu.GetAttProBySSCCRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetAttProBySSCCRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetAttProBySSCCRequest}
 */
proto.attendu.GetAttProBySSCCRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSscc(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetAttProBySSCCRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetAttProBySSCCRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetAttProBySSCCRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAttProBySSCCRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSscc();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string sscc = 1;
 * @return {string}
 */
proto.attendu.GetAttProBySSCCRequest.prototype.getSscc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAttProBySSCCRequest} returns this
 */
proto.attendu.GetAttProBySSCCRequest.prototype.setSscc = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_code_nom = 2;
 * @return {string}
 */
proto.attendu.GetAttProBySSCCRequest.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAttProBySSCCRequest} returns this
 */
proto.attendu.GetAttProBySSCCRequest.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string company_code_nom = 3;
 * @return {string}
 */
proto.attendu.GetAttProBySSCCRequest.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAttProBySSCCRequest} returns this
 */
proto.attendu.GetAttProBySSCCRequest.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string warehouse_code_nom = 4;
 * @return {string}
 */
proto.attendu.GetAttProBySSCCRequest.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAttProBySSCCRequest} returns this
 */
proto.attendu.GetAttProBySSCCRequest.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetAttProBySSCCReponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetAttProBySSCCReponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetAttProBySSCCReponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAttProBySSCCReponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto_stock_stock_pb.AttProduction.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetAttProBySSCCReponse}
 */
proto.attendu.GetAttProBySSCCReponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetAttProBySSCCReponse;
  return proto.attendu.GetAttProBySSCCReponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetAttProBySSCCReponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetAttProBySSCCReponse}
 */
proto.attendu.GetAttProBySSCCReponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_stock_stock_pb.AttProduction;
      reader.readMessage(value,proto_stock_stock_pb.AttProduction.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetAttProBySSCCReponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetAttProBySSCCReponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetAttProBySSCCReponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetAttProBySSCCReponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stock_stock_pb.AttProduction.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional stock.AttProduction entry = 1;
 * @return {?proto.stock.AttProduction}
 */
proto.attendu.GetAttProBySSCCReponse.prototype.getEntry = function() {
  return /** @type{?proto.stock.AttProduction} */ (
    jspb.Message.getWrapperField(this, proto_stock_stock_pb.AttProduction, 1));
};


/**
 * @param {?proto.stock.AttProduction|undefined} value
 * @return {!proto.attendu.GetAttProBySSCCReponse} returns this
*/
proto.attendu.GetAttProBySSCCReponse.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetAttProBySSCCReponse} returns this
 */
proto.attendu.GetAttProBySSCCReponse.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetAttProBySSCCReponse.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.GetAttProBySSCCReponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetAttProBySSCCReponse} returns this
 */
proto.attendu.GetAttProBySSCCReponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.PrintAttProductionInforRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.PrintAttProductionInforRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.PrintAttProductionInforRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.PrintAttProductionInforRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attProductionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.PrintAttProductionInforRequest}
 */
proto.attendu.PrintAttProductionInforRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.PrintAttProductionInforRequest;
  return proto.attendu.PrintAttProductionInforRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.PrintAttProductionInforRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.PrintAttProductionInforRequest}
 */
proto.attendu.PrintAttProductionInforRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttProductionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.PrintAttProductionInforRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.PrintAttProductionInforRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.PrintAttProductionInforRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.PrintAttProductionInforRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttProductionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string att_production_id = 1;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforRequest.prototype.getAttProductionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforRequest} returns this
 */
proto.attendu.PrintAttProductionInforRequest.prototype.setAttProductionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.PrintAttProductionInforResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.PrintAttProductionInforResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.PrintAttProductionInforResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    referenceNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    poidsBrut: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    poidsAdd: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    ssccNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    noCodebarre: jspb.Message.getFieldWithDefault(msg, 6, ""),
    qtyN1: jspb.Message.getFieldWithDefault(msg, 7, 0),
    couche: jspb.Message.getFieldWithDefault(msg, 8, ""),
    variante: jspb.Message.getFieldWithDefault(msg, 9, ""),
    qtyN: jspb.Message.getFieldWithDefault(msg, 10, 0),
    libelleLong: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lot: jspb.Message.getFieldWithDefault(msg, 12, ""),
    dluo: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.PrintAttProductionInforResponse}
 */
proto.attendu.PrintAttProductionInforResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.PrintAttProductionInforResponse;
  return proto.attendu.PrintAttProductionInforResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.PrintAttProductionInforResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.PrintAttProductionInforResponse}
 */
proto.attendu.PrintAttProductionInforResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPoidsBrut(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPoidsAdd(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsccNumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoCodebarre(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQtyN1(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCouche(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariante(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQtyN(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLibelleLong(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLot(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDluo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.PrintAttProductionInforResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.PrintAttProductionInforResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.PrintAttProductionInforResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReferenceNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPoidsBrut();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getPoidsAdd();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSsccNumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNoCodebarre();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getQtyN1();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCouche();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getVariante();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getQtyN();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getLibelleLong();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLot();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDluo();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional string client_name = 1;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reference_number = 2;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getReferenceNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setReferenceNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float poids_brut = 3;
 * @return {number}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getPoidsBrut = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setPoidsBrut = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float poids_add = 4;
 * @return {number}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getPoidsAdd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setPoidsAdd = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string sscc_number = 5;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getSsccNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setSsccNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string no_codebarre = 6;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getNoCodebarre = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setNoCodebarre = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 qty_n_1 = 7;
 * @return {number}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getQtyN1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setQtyN1 = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string couche = 8;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getCouche = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setCouche = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string variante = 9;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getVariante = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setVariante = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 qty_n = 10;
 * @return {number}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getQtyN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setQtyN = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string libelle_long = 11;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getLibelleLong = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setLibelleLong = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string lot = 12;
 * @return {string}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getLot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setLot = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 dluo = 13;
 * @return {number}
 */
proto.attendu.PrintAttProductionInforResponse.prototype.getDluo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.PrintAttProductionInforResponse} returns this
 */
proto.attendu.PrintAttProductionInforResponse.prototype.setDluo = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttProductionInforResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttProductionInforResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttProductionInforResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProductionInforResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttProductionInforResponse}
 */
proto.attendu.AttProductionInforResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttProductionInforResponse;
  return proto.attendu.AttProductionInforResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttProductionInforResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttProductionInforResponse}
 */
proto.attendu.AttProductionInforResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttProductionInforResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttProductionInforResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttProductionInforResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProductionInforResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.attendu.AttProductionInforResponse.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProductionInforResponse} returns this
 */
proto.attendu.AttProductionInforResponse.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.AttProductionInforResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProductionInforResponse} returns this
 */
proto.attendu.AttProductionInforResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.DeleteByIdAttenduRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.DeleteByIdAttenduRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.DeleteByIdAttenduRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.DeleteByIdAttenduRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modificationerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.DeleteByIdAttenduRequest}
 */
proto.attendu.DeleteByIdAttenduRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.DeleteByIdAttenduRequest;
  return proto.attendu.DeleteByIdAttenduRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.DeleteByIdAttenduRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.DeleteByIdAttenduRequest}
 */
proto.attendu.DeleteByIdAttenduRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModificationerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.DeleteByIdAttenduRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.DeleteByIdAttenduRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.DeleteByIdAttenduRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.DeleteByIdAttenduRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModificationerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.DeleteByIdAttenduRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.DeleteByIdAttenduRequest} returns this
 */
proto.attendu.DeleteByIdAttenduRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modificationer_id = 2;
 * @return {string}
 */
proto.attendu.DeleteByIdAttenduRequest.prototype.getModificationerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.DeleteByIdAttenduRequest} returns this
 */
proto.attendu.DeleteByIdAttenduRequest.prototype.setModificationerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.HistoryMetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.HistoryMetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.HistoryMetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.HistoryMetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    countHistory: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.HistoryMetaData}
 */
proto.attendu.HistoryMetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.HistoryMetaData;
  return proto.attendu.HistoryMetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.HistoryMetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.HistoryMetaData}
 */
proto.attendu.HistoryMetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.HistoryMetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.HistoryMetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.HistoryMetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.HistoryMetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCountHistory();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional int64 count = 1;
 * @return {number}
 */
proto.attendu.HistoryMetaData.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.HistoryMetaData} returns this
 */
proto.attendu.HistoryMetaData.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.attendu.HistoryMetaData.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.HistoryMetaData} returns this
 */
proto.attendu.HistoryMetaData.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.attendu.HistoryMetaData.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.HistoryMetaData} returns this
 */
proto.attendu.HistoryMetaData.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 total = 4;
 * @return {number}
 */
proto.attendu.HistoryMetaData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.HistoryMetaData} returns this
 */
proto.attendu.HistoryMetaData.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 count_history = 5;
 * @return {number}
 */
proto.attendu.HistoryMetaData.prototype.getCountHistory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.HistoryMetaData} returns this
 */
proto.attendu.HistoryMetaData.prototype.setCountHistory = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.HistoryChange.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.HistoryChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.HistoryChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.HistoryChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    oldValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    newValue: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.HistoryChange}
 */
proto.attendu.HistoryChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.HistoryChange;
  return proto.attendu.HistoryChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.HistoryChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.HistoryChange}
 */
proto.attendu.HistoryChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.HistoryChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.HistoryChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.HistoryChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.HistoryChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOldValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewValue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string event_type = 1;
 * @return {string}
 */
proto.attendu.HistoryChange.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.HistoryChange} returns this
 */
proto.attendu.HistoryChange.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.attendu.HistoryChange.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.HistoryChange} returns this
 */
proto.attendu.HistoryChange.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.attendu.HistoryChange.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.HistoryChange} returns this
 */
proto.attendu.HistoryChange.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string old_value = 4;
 * @return {string}
 */
proto.attendu.HistoryChange.prototype.getOldValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.HistoryChange} returns this
 */
proto.attendu.HistoryChange.prototype.setOldValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string new_value = 5;
 * @return {string}
 */
proto.attendu.HistoryChange.prototype.getNewValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.HistoryChange} returns this
 */
proto.attendu.HistoryChange.prototype.setNewValue = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.AttenduHistory.repeatedFields_ = [18];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttenduHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttenduHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttenduHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttenduHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    movementType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    movementState: jspb.Message.getFieldWithDefault(msg, 4, ""),
    code: jspb.Message.getFieldWithDefault(msg, 5, ""),
    objectType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    objectId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    objectNumber: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 12, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 13, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 14, ""),
    chrono: jspb.Message.getFieldWithDefault(msg, 15, ""),
    action: jspb.Message.getFieldWithDefault(msg, 16, ""),
    eventType: jspb.Message.getFieldWithDefault(msg, 17, ""),
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    proto.attendu.HistoryChange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttenduHistory}
 */
proto.attendu.AttenduHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttenduHistory;
  return proto.attendu.AttenduHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttenduHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttenduHistory}
 */
proto.attendu.AttenduHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMovementType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMovementState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectNumber(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setChrono(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 18:
      var value = new proto.attendu.HistoryChange;
      reader.readMessage(value,proto.attendu.HistoryChange.deserializeBinaryFromReader);
      msg.addChanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttenduHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttenduHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttenduHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttenduHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMovementType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMovementState();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getObjectType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getObjectNumber();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getChrono();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.attendu.HistoryChange.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.attendu.AttenduHistory.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string movement_type = 3;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getMovementType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setMovementType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string movement_state = 4;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getMovementState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setMovementState = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string code = 5;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string object_type = 6;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getObjectType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setObjectType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string object_id = 7;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string object_number = 8;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getObjectNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setObjectNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string user_id = 10;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string user_name = 11;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string client_code_nom = 12;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string company_code_nom = 13;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string warehouse_code_nom = 14;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string chrono = 15;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getChrono = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setChrono = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string action = 16;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string event_type = 17;
 * @return {string}
 */
proto.attendu.AttenduHistory.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated HistoryChange changes = 18;
 * @return {!Array<!proto.attendu.HistoryChange>}
 */
proto.attendu.AttenduHistory.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.attendu.HistoryChange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.HistoryChange, 18));
};


/**
 * @param {!Array<!proto.attendu.HistoryChange>} value
 * @return {!proto.attendu.AttenduHistory} returns this
*/
proto.attendu.AttenduHistory.prototype.setChangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.attendu.HistoryChange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.HistoryChange}
 */
proto.attendu.AttenduHistory.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.attendu.HistoryChange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.AttenduHistory} returns this
 */
proto.attendu.AttenduHistory.prototype.clearChangesList = function() {
  return this.setChangesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetHistoryByAttenduIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetHistoryByAttenduIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetHistoryByAttenduIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attenduId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    from: jspb.Message.getFieldWithDefault(msg, 4, 0),
    to: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest}
 */
proto.attendu.GetHistoryByAttenduIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetHistoryByAttenduIdRequest;
  return proto.attendu.GetHistoryByAttenduIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetHistoryByAttenduIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest}
 */
proto.attendu.GetHistoryByAttenduIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttenduId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetHistoryByAttenduIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetHistoryByAttenduIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetHistoryByAttenduIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttenduId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFrom();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTo();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string attendu_id = 1;
 * @return {string}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.getAttenduId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest} returns this
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.setAttenduId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 limit = 2;
 * @return {number}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest} returns this
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 offset = 3;
 * @return {number}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest} returns this
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 from = 4;
 * @return {number}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest} returns this
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 to = 5;
 * @return {number}
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.attendu.GetHistoryByAttenduIdRequest} returns this
 */
proto.attendu.GetHistoryByAttenduIdRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.GetHistoryByAttenduIdResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.GetHistoryByAttenduIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.GetHistoryByAttenduIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetHistoryByAttenduIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.attendu.AttenduHistory.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && proto.attendu.HistoryMetaData.toObject(includeInstance, f),
    messageerror: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse}
 */
proto.attendu.GetHistoryByAttenduIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.GetHistoryByAttenduIdResponse;
  return proto.attendu.GetHistoryByAttenduIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.GetHistoryByAttenduIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse}
 */
proto.attendu.GetHistoryByAttenduIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.AttenduHistory;
      reader.readMessage(value,proto.attendu.AttenduHistory.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 2:
      var value = new proto.attendu.HistoryMetaData;
      reader.readMessage(value,proto.attendu.HistoryMetaData.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.GetHistoryByAttenduIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.GetHistoryByAttenduIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.GetHistoryByAttenduIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.attendu.AttenduHistory.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.attendu.HistoryMetaData.serializeBinaryToWriter
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated AttenduHistory entry = 1;
 * @return {!Array<!proto.attendu.AttenduHistory>}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.attendu.AttenduHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.attendu.AttenduHistory, 1));
};


/**
 * @param {!Array<!proto.attendu.AttenduHistory>} value
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse} returns this
*/
proto.attendu.GetHistoryByAttenduIdResponse.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.attendu.AttenduHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttenduHistory}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.attendu.AttenduHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse} returns this
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional HistoryMetaData metadata = 2;
 * @return {?proto.attendu.HistoryMetaData}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.getMetadata = function() {
  return /** @type{?proto.attendu.HistoryMetaData} */ (
    jspb.Message.getWrapperField(this, proto.attendu.HistoryMetaData, 2));
};


/**
 * @param {?proto.attendu.HistoryMetaData|undefined} value
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse} returns this
*/
proto.attendu.GetHistoryByAttenduIdResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse} returns this
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messageError = 3;
 * @return {string}
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.GetHistoryByAttenduIdResponse} returns this
 */
proto.attendu.GetHistoryByAttenduIdResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.attendu.AttProductionListRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttProductionListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttProductionListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttProductionListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProductionListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attProductionIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttProductionListRequest}
 */
proto.attendu.AttProductionListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttProductionListRequest;
  return proto.attendu.AttProductionListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttProductionListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttProductionListRequest}
 */
proto.attendu.AttProductionListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttProductionIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttProductionListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttProductionListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttProductionListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProductionListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttProductionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string att_production_ids = 1;
 * @return {!Array<string>}
 */
proto.attendu.AttProductionListRequest.prototype.getAttProductionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.attendu.AttProductionListRequest} returns this
 */
proto.attendu.AttProductionListRequest.prototype.setAttProductionIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.attendu.AttProductionListRequest} returns this
 */
proto.attendu.AttProductionListRequest.prototype.addAttProductionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.attendu.AttProductionListRequest} returns this
 */
proto.attendu.AttProductionListRequest.prototype.clearAttProductionIdsList = function() {
  return this.setAttProductionIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.AttProductionListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.AttProductionListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.AttProductionListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProductionListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageerror: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.AttProductionListResponse}
 */
proto.attendu.AttProductionListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.AttProductionListResponse;
  return proto.attendu.AttProductionListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.AttProductionListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.AttProductionListResponse}
 */
proto.attendu.AttProductionListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.AttProductionListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.AttProductionListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.AttProductionListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.AttProductionListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageerror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.attendu.AttProductionListResponse.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProductionListResponse} returns this
 */
proto.attendu.AttProductionListResponse.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageError = 2;
 * @return {string}
 */
proto.attendu.AttProductionListResponse.prototype.getMessageerror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.AttProductionListResponse} returns this
 */
proto.attendu.AttProductionListResponse.prototype.setMessageerror = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.attendu.RealtimeAttendu.prototype.toObject = function(opt_includeInstance) {
  return proto.attendu.RealtimeAttendu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.attendu.RealtimeAttendu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.RealtimeAttendu.toObject = function(includeInstance, msg) {
  var f, obj = {
    attendu: (f = msg.getAttendu()) && proto.attendu.Attendu.toObject(includeInstance, f),
    realtimeObject: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.attendu.RealtimeAttendu}
 */
proto.attendu.RealtimeAttendu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.attendu.RealtimeAttendu;
  return proto.attendu.RealtimeAttendu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.attendu.RealtimeAttendu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.attendu.RealtimeAttendu}
 */
proto.attendu.RealtimeAttendu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.attendu.Attendu;
      reader.readMessage(value,proto.attendu.Attendu.deserializeBinaryFromReader);
      msg.setAttendu(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealtimeObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.attendu.RealtimeAttendu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.attendu.RealtimeAttendu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.attendu.RealtimeAttendu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.attendu.RealtimeAttendu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttendu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.attendu.Attendu.serializeBinaryToWriter
    );
  }
  f = message.getRealtimeObject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Attendu attendu = 1;
 * @return {?proto.attendu.Attendu}
 */
proto.attendu.RealtimeAttendu.prototype.getAttendu = function() {
  return /** @type{?proto.attendu.Attendu} */ (
    jspb.Message.getWrapperField(this, proto.attendu.Attendu, 1));
};


/**
 * @param {?proto.attendu.Attendu|undefined} value
 * @return {!proto.attendu.RealtimeAttendu} returns this
*/
proto.attendu.RealtimeAttendu.prototype.setAttendu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.attendu.RealtimeAttendu} returns this
 */
proto.attendu.RealtimeAttendu.prototype.clearAttendu = function() {
  return this.setAttendu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.attendu.RealtimeAttendu.prototype.hasAttendu = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string realtime_object = 2;
 * @return {string}
 */
proto.attendu.RealtimeAttendu.prototype.getRealtimeObject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.attendu.RealtimeAttendu} returns this
 */
proto.attendu.RealtimeAttendu.prototype.setRealtimeObject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.attendu);
