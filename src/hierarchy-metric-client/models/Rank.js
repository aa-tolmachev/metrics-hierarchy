"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rank = void 0;
var Rank = (function () {
    function Rank() {
    }
    Rank.getAttributeTypeMap = function () {
        return Rank.attributeTypeMap;
    };
    Rank.discriminator = undefined;
    Rank.attributeTypeMap = [
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
    return Rank;
}());
exports.Rank = Rank;
//# sourceMappingURL=Rank.js.map