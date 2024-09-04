"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
var Platform = (function () {
    function Platform() {
    }
    Platform.getAttributeTypeMap = function () {
        return Platform.attributeTypeMap;
    };
    Platform.discriminator = undefined;
    Platform.attributeTypeMap = [
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
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=Platform.js.map