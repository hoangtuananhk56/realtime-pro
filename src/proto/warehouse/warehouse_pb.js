// source: proto/warehouse/warehouse.proto
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

goog.exportSymbol('proto.Warehouse.Warehouse', null, global);
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
proto.Warehouse.Warehouse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Warehouse.Warehouse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Warehouse.Warehouse.displayName = 'proto.Warehouse.Warehouse';
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
proto.Warehouse.Warehouse.prototype.toObject = function(opt_includeInstance) {
  return proto.Warehouse.Warehouse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Warehouse.Warehouse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Warehouse.Warehouse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    adresse: jspb.Message.getFieldWithDefault(msg, 5, ""),
    code: jspb.Message.getFieldWithDefault(msg, 6, ""),
    codeNom: jspb.Message.getFieldWithDefault(msg, 7, ""),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
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
 * @return {!proto.Warehouse.Warehouse}
 */
proto.Warehouse.Warehouse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Warehouse.Warehouse;
  return proto.Warehouse.Warehouse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Warehouse.Warehouse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Warehouse.Warehouse}
 */
proto.Warehouse.Warehouse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdresse(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodeNom(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeight(value);
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
proto.Warehouse.Warehouse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Warehouse.Warehouse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Warehouse.Warehouse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Warehouse.Warehouse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAdresse();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCodeNom();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.Warehouse.Warehouse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Warehouse.Warehouse.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 create_at = 2;
 * @return {number}
 */
proto.Warehouse.Warehouse.prototype.getCreateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setCreateAt = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.clearCreateAt = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Warehouse.Warehouse.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 update_at = 3;
 * @return {number}
 */
proto.Warehouse.Warehouse.prototype.getUpdateAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setUpdateAt = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.clearUpdateAt = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Warehouse.Warehouse.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string nom = 4;
 * @return {string}
 */
proto.Warehouse.Warehouse.prototype.getNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setNom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string adresse = 5;
 * @return {string}
 */
proto.Warehouse.Warehouse.prototype.getAdresse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setAdresse = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string code = 6;
 * @return {string}
 */
proto.Warehouse.Warehouse.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string code_nom = 7;
 * @return {string}
 */
proto.Warehouse.Warehouse.prototype.getCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional float height = 8;
 * @return {number}
 */
proto.Warehouse.Warehouse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Warehouse.Warehouse} returns this
 */
proto.Warehouse.Warehouse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


goog.object.extend(exports, proto.Warehouse);
