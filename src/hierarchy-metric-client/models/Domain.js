"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = void 0;
var Domain = (function () {
    function Domain() {
    }
    Domain.getAttributeTypeMap = function () {
        return Domain.attributeTypeMap;
    };
    Domain.discriminator = undefined;
    Domain.attributeTypeMap = [
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
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string",
            "format": ""
        }
    ];
    return Domain;
}());
exports.Domain = Domain;
//# sourceMappingURL=Domain.js.map