"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relation = void 0;
var Relation = (function () {
    function Relation() {
    }
    Relation.getAttributeTypeMap = function () {
        return Relation.attributeTypeMap;
    };
    Relation.discriminator = undefined;
    Relation.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
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
    return Relation;
}());
exports.Relation = Relation;
//# sourceMappingURL=Relation.js.map