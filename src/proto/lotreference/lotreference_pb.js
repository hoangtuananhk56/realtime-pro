// source: proto/lotreference/lotreference.proto
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

goog.exportSymbol('proto.lotreference.LotReference', null, global);
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
proto.lotreference.LotReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lotreference.LotReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lotreference.LotReference.displayName = 'proto.lotreference.LotReference';
}



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
proto.lotreference.LotReference.prototype.toObject = function(opt_includeInstance) {
  return proto.lotreference.LotReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lotreference.LotReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lotreference.LotReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lotUnlockAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lotLockAt: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lotBlock: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    preLotBlock: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    motif: jspb.Message.getFieldWithDefault(msg, 8, ""),
    origine: jspb.Message.getFieldWithDefault(msg, 9, ""),
    lot: jspb.Message.getFieldWithDefault(msg, 10, ""),
    referenceId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 12, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 13, ""),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 14, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 17, "")
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
 * @return {!proto.lotreference.LotReference}
 */
proto.lotreference.LotReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lotreference.LotReference;
  return proto.lotreference.LotReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lotreference.LotReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lotreference.LotReference}
 */
proto.lotreference.LotReference.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotUnlockAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotLockAt(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLotBlock(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreLotBlock(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMotif(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrigine(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLot(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 17:
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
proto.lotreference.LotReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lotreference.LotReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lotreference.LotReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lotreference.LotReference.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLotUnlockAt();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLotLockAt();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLotBlock();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPreLotBlock();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMotif();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOrigine();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLot();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.lotreference.LotReference.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 updated_at = 3;
 * @return {number}
 */
proto.lotreference.LotReference.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 lot_unlock_at = 4;
 * @return {number}
 */
proto.lotreference.LotReference.prototype.getLotUnlockAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setLotUnlockAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 lot_lock_at = 5;
 * @return {number}
 */
proto.lotreference.LotReference.prototype.getLotLockAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setLotLockAt = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool lot_block = 6;
 * @return {boolean}
 */
proto.lotreference.LotReference.prototype.getLotBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setLotBlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool pre_lot_block = 7;
 * @return {boolean}
 */
proto.lotreference.LotReference.prototype.getPreLotBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setPreLotBlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string motif = 8;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getMotif = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setMotif = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string origine = 9;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getOrigine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setOrigine = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string lot = 10;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getLot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setLot = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string reference_id = 11;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string company_code_nom = 12;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string warehouse_code_nom = 13;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string client_code_nom = 14;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string company_id = 15;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string warehouse_id = 16;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string client_id = 17;
 * @return {string}
 */
proto.lotreference.LotReference.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.lotreference.LotReference} returns this
 */
proto.lotreference.LotReference.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


goog.object.extend(exports, proto.lotreference);
