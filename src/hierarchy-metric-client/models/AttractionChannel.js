"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionChannel = void 0;
var AttractionChannel = (function () {
    function AttractionChannel() {
    }
    AttractionChannel.getAttributeTypeMap = function () {
        return AttractionChannel.attributeTypeMap;
    };
    AttractionChannel.discriminator = undefined;
    AttractionChannel.attributeTypeMap = [
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
    return AttractionChannel;
}());
exports.AttractionChannel = AttractionChannel;
//# sourceMappingURL=AttractionChannel.js.map