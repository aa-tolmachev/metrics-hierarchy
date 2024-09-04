"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/AttractionChannel"), exports);
__exportStar(require("../models/Coordinates"), exports);
__exportStar(require("../models/DimensionInner"), exports);
__exportStar(require("../models/DimensionsDelete200Response"), exports);
__exportStar(require("../models/Domain"), exports);
__exportStar(require("../models/ErrorResponse"), exports);
__exportStar(require("../models/GranularityInner"), exports);
__exportStar(require("../models/Graph"), exports);
__exportStar(require("../models/GraphCreateRequest"), exports);
__exportStar(require("../models/GraphShort"), exports);
__exportStar(require("../models/GraphUpdate"), exports);
__exportStar(require("../models/GraphUpdate400Response"), exports);
__exportStar(require("../models/Level"), exports);
__exportStar(require("../models/Metric"), exports);
__exportStar(require("../models/MetricCreate"), exports);
__exportStar(require("../models/MetricCreate400Response"), exports);
__exportStar(require("../models/MetricDelete202Response"), exports);
__exportStar(require("../models/MetricShort"), exports);
__exportStar(require("../models/MetricUser"), exports);
__exportStar(require("../models/Node"), exports);
__exportStar(require("../models/NodeUpdate"), exports);
__exportStar(require("../models/NodeUpdateCoordinates"), exports);
__exportStar(require("../models/Platform"), exports);
__exportStar(require("../models/Product"), exports);
__exportStar(require("../models/Rank"), exports);
__exportStar(require("../models/Relation"), exports);
__exportStar(require("../models/RelationRequest"), exports);
__exportStar(require("../models/Relations"), exports);
__exportStar(require("../models/RolesGet200ResponseInner"), exports);
__exportStar(require("../models/Status"), exports);
__exportStar(require("../models/Type"), exports);
__exportStar(require("../models/TypeConnectionEnum"), exports);
__exportStar(require("../models/User"), exports);
var AttractionChannel_1 = require("../models/AttractionChannel");
var Coordinates_1 = require("../models/Coordinates");
var DimensionInner_1 = require("../models/DimensionInner");
var DimensionsDelete200Response_1 = require("../models/DimensionsDelete200Response");
var Domain_1 = require("../models/Domain");
var ErrorResponse_1 = require("../models/ErrorResponse");
var GranularityInner_1 = require("../models/GranularityInner");
var Graph_1 = require("../models/Graph");
var GraphCreateRequest_1 = require("../models/GraphCreateRequest");
var GraphShort_1 = require("../models/GraphShort");
var GraphUpdate_1 = require("../models/GraphUpdate");
var GraphUpdate400Response_1 = require("../models/GraphUpdate400Response");
var Level_1 = require("../models/Level");
var Metric_1 = require("../models/Metric");
var MetricCreate_1 = require("../models/MetricCreate");
var MetricCreate400Response_1 = require("../models/MetricCreate400Response");
var MetricDelete202Response_1 = require("../models/MetricDelete202Response");
var MetricShort_1 = require("../models/MetricShort");
var MetricUser_1 = require("../models/MetricUser");
var Node_1 = require("../models/Node");
var NodeUpdate_1 = require("../models/NodeUpdate");
var NodeUpdateCoordinates_1 = require("../models/NodeUpdateCoordinates");
var Platform_1 = require("../models/Platform");
var Product_1 = require("../models/Product");
var Rank_1 = require("../models/Rank");
var Relation_1 = require("../models/Relation");
var RelationRequest_1 = require("../models/RelationRequest");
var Relations_1 = require("../models/Relations");
var RolesGet200ResponseInner_1 = require("../models/RolesGet200ResponseInner");
var Status_1 = require("../models/Status");
var Type_1 = require("../models/Type");
var User_1 = require("../models/User");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = new Set([
    "RelationsTypeConnectionEnum",
    "TypeConnectionEnum",
]);
var typeMap = {
    "AttractionChannel": AttractionChannel_1.AttractionChannel,
    "Coordinates": Coordinates_1.Coordinates,
    "DimensionInner": DimensionInner_1.DimensionInner,
    "DimensionsDelete200Response": DimensionsDelete200Response_1.DimensionsDelete200Response,
    "Domain": Domain_1.Domain,
    "ErrorResponse": ErrorResponse_1.ErrorResponse,
    "GranularityInner": GranularityInner_1.GranularityInner,
    "Graph": Graph_1.Graph,
    "GraphCreateRequest": GraphCreateRequest_1.GraphCreateRequest,
    "GraphShort": GraphShort_1.GraphShort,
    "GraphUpdate": GraphUpdate_1.GraphUpdate,
    "GraphUpdate400Response": GraphUpdate400Response_1.GraphUpdate400Response,
    "Level": Level_1.Level,
    "Metric": Metric_1.Metric,
    "MetricCreate": MetricCreate_1.MetricCreate,
    "MetricCreate400Response": MetricCreate400Response_1.MetricCreate400Response,
    "MetricDelete202Response": MetricDelete202Response_1.MetricDelete202Response,
    "MetricShort": MetricShort_1.MetricShort,
    "MetricUser": MetricUser_1.MetricUser,
    "Node": Node_1.Node,
    "NodeUpdate": NodeUpdate_1.NodeUpdate,
    "NodeUpdateCoordinates": NodeUpdateCoordinates_1.NodeUpdateCoordinates,
    "Platform": Platform_1.Platform,
    "Product": Product_1.Product,
    "Rank": Rank_1.Rank,
    "Relation": Relation_1.Relation,
    "RelationRequest": RelationRequest_1.RelationRequest,
    "Relations": Relations_1.Relations,
    "RolesGet200ResponseInner": RolesGet200ResponseInner_1.RolesGet200ResponseInner,
    "Status": Status_1.Status,
    "Type": Type_1.Type,
    "User": User_1.User,
};
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), type = _a[0], subtype = _a[1];
    return {
        type: type,
        subtype: subtype,
        subtypeTokens: subtype.split('+'),
    };
};
var mimeTypePredicateFactory = function (predicate) { return function (mimeType) { return predicate(parseMimeType(mimeType)); }; };
var mimeTypeSimplePredicateFactory = function (type, subtype) { return mimeTypePredicateFactory(function (descriptor) {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
}); };
var isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
var isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
var isJsonLikeMimeType = mimeTypePredicateFactory(function (descriptor) { return descriptor.type === 'application' && descriptor.subtypeTokens.some(function (item) { return item === 'json'; }); });
var isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
var isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
var supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (var _i = 0, supportedMimeTypePredicatesWithPriority_1 = supportedMimeTypePredicatesWithPriority; _i < supportedMimeTypePredicatesWithPriority_1.length; _i++) {
            var predicate = supportedMimeTypePredicatesWithPriority_1[_i];
            for (var _a = 0, normalMediaTypes_1 = normalMediaTypes; _a < normalMediaTypes_1.length; _a++) {
                var mediaType = normalMediaTypes_1[_a];
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map