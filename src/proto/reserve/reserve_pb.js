// source: proto/reserve/reserve.proto
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

goog.exportSymbol('proto.reserve.Reserve', null, global);
goog.exportSymbol('proto.reserve.ReserveType', null, global);
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
proto.reserve.Reserve = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reserve.Reserve.repeatedFields_, null);
};
goog.inherits(proto.reserve.Reserve, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reserve.Reserve.displayName = 'proto.reserve.Reserve';
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
proto.reserve.ReserveType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reserve.ReserveType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reserve.ReserveType.displayName = 'proto.reserve.ReserveType';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reserve.Reserve.repeatedFields_ = [11];



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
proto.reserve.Reserve.prototype.toObject = function(opt_includeInstance) {
  return proto.reserve.Reserve.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reserve.Reserve} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reserve.Reserve.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reserveTypeId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    reserveTypeName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    attenduId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sscc: jspb.Message.getFieldWithDefault(msg, 7, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isTakePhotos: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    isInputNumber: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    imagesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.reserve.Reserve}
 */
proto.reserve.Reserve.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reserve.Reserve;
  return proto.reserve.Reserve.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reserve.Reserve} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reserve.Reserve}
 */
proto.reserve.Reserve.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setReserveTypeId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReserveTypeName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttenduId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSscc(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTakePhotos(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInputNumber(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
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
proto.reserve.Reserve.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reserve.Reserve.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reserve.Reserve} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reserve.Reserve.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getReserveTypeId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReserveTypeName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAttenduId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSscc();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getIsTakePhotos();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIsInputNumber();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.reserve.Reserve.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.reserve.Reserve.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 updated_at = 3;
 * @return {number}
 */
proto.reserve.Reserve.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string reserve_type_id = 4;
 * @return {string}
 */
proto.reserve.Reserve.prototype.getReserveTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setReserveTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reserve_type_name = 5;
 * @return {string}
 */
proto.reserve.Reserve.prototype.getReserveTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setReserveTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string attendu_id = 6;
 * @return {string}
 */
proto.reserve.Reserve.prototype.getAttenduId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setAttenduId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string sscc = 7;
 * @return {string}
 */
proto.reserve.Reserve.prototype.getSscc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setSscc = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 quantity = 8;
 * @return {number}
 */
proto.reserve.Reserve.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool is_take_photos = 9;
 * @return {boolean}
 */
proto.reserve.Reserve.prototype.getIsTakePhotos = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setIsTakePhotos = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool is_input_number = 10;
 * @return {boolean}
 */
proto.reserve.Reserve.prototype.getIsInputNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setIsInputNumber = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string images = 11;
 * @return {!Array<string>}
 */
proto.reserve.Reserve.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reserve.Reserve} returns this
 */
proto.reserve.Reserve.prototype.clearImagesList = function() {
  return this.setImagesList([]);
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
proto.reserve.ReserveType.prototype.toObject = function(opt_includeInstance) {
  return proto.reserve.ReserveType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reserve.ReserveType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reserve.ReserveType.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    companyCodeNom: jspb.Message.getFieldWithDefault(msg, 5, ""),
    warehouseCodeNom: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientCodeNom: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isTakePhotos: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isInputNumber: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    isDeductQty: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    companyId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.reserve.ReserveType}
 */
proto.reserve.ReserveType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reserve.ReserveType;
  return proto.reserve.ReserveType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reserve.ReserveType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reserve.ReserveType}
 */
proto.reserve.ReserveType.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyCodeNom(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseCodeNom(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCodeNom(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTakePhotos(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInputNumber(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeductQty(value);
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
proto.reserve.ReserveType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reserve.ReserveType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reserve.ReserveType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reserve.ReserveType.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCompanyCodeNom();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWarehouseCodeNom();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientCodeNom();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsTakePhotos();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsInputNumber();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIsDeductQty();
  if (f) {
    writer.writeBool(
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
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.reserve.ReserveType.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 updated_at = 3;
 * @return {number}
 */
proto.reserve.ReserveType.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string company_code_nom = 5;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getCompanyCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setCompanyCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string warehouse_code_nom = 6;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getWarehouseCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setWarehouseCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string client_code_nom = 7;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getClientCodeNom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setClientCodeNom = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool is_take_photos = 8;
 * @return {boolean}
 */
proto.reserve.ReserveType.prototype.getIsTakePhotos = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setIsTakePhotos = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_input_number = 9;
 * @return {boolean}
 */
proto.reserve.ReserveType.prototype.getIsInputNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setIsInputNumber = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool is_deduct_qty = 10;
 * @return {boolean}
 */
proto.reserve.ReserveType.prototype.getIsDeductQty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setIsDeductQty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string company_id = 11;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string warehouse_id = 12;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string client_id = 13;
 * @return {string}
 */
proto.reserve.ReserveType.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.reserve.ReserveType} returns this
 */
proto.reserve.ReserveType.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


goog.object.extend(exports, proto.reserve);
