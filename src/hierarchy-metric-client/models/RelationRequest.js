"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationRequest = void 0;
var RelationRequest = (function () {
    function RelationRequest() {
    }
    RelationRequest.getAttributeTypeMap = function () {
        return RelationRequest.attributeTypeMap;
    };
    RelationRequest.discriminator = undefined;
    RelationRequest.attributeTypeMap = [
        {
            "name": "typeConnection",
            "baseName": "typeConnection",
            "type": "TypeConnectionEnum",
            "format": ""
        },
        {
            "name": "fromNode",
            "baseName": "fromNode",
            "type": "number",
            "format": ""
        },
        {
            "name": "toNode",
            "baseName": "toNode",
            "type": "number",
            "format": ""
        }
    ];
    return RelationRequest;
}());
exports.RelationRequest = RelationRequest;
//# sourceMappingURL=RelationRequest.js.map