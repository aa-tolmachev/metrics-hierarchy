"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionInner = void 0;
var DimensionInner = (function () {
    function DimensionInner() {
    }
    DimensionInner.getAttributeTypeMap = function () {
        return DimensionInner.attributeTypeMap;
    };
    DimensionInner.discriminator = undefined;
    DimensionInner.attributeTypeMap = [
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
    return DimensionInner;
}());
exports.DimensionInner = DimensionInner;
//# sourceMappingURL=DimensionInner.js.map