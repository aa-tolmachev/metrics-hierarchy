"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GranularityInner = void 0;
var GranularityInner = (function () {
    function GranularityInner() {
    }
    GranularityInner.getAttributeTypeMap = function () {
        return GranularityInner.attributeTypeMap;
    };
    GranularityInner.discriminator = undefined;
    GranularityInner.attributeTypeMap = [
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
    return GranularityInner;
}());
exports.GranularityInner = GranularityInner;
//# sourceMappingURL=GranularityInner.js.map