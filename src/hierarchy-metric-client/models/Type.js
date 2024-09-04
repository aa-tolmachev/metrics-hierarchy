"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type = (function () {
    function Type() {
    }
    Type.getAttributeTypeMap = function () {
        return Type.attributeTypeMap;
    };
    Type.discriminator = undefined;
    Type.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return Type;
}());
exports.Type = Type;
//# sourceMappingURL=Type.js.map