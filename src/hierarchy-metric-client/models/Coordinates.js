"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
var Coordinates = (function () {
    function Coordinates() {
    }
    Coordinates.getAttributeTypeMap = function () {
        return Coordinates.attributeTypeMap;
    };
    Coordinates.discriminator = undefined;
    Coordinates.attributeTypeMap = [
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": ""
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": ""
        }
    ];
    return Coordinates;
}());
exports.Coordinates = Coordinates;
//# sourceMappingURL=Coordinates.js.map