"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var Level = (function () {
    function Level() {
    }
    Level.getAttributeTypeMap = function () {
        return Level.attributeTypeMap;
    };
    Level.discriminator = undefined;
    Level.attributeTypeMap = [
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
    return Level;
}());
exports.Level = Level;
//# sourceMappingURL=Level.js.map