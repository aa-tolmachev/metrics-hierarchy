"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationsTypeConnectionEnum = exports.Relations = void 0;
var Relations = (function () {
    function Relations() {
    }
    Relations.getAttributeTypeMap = function () {
        return Relations.attributeTypeMap;
    };
    Relations.discriminator = undefined;
    Relations.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "typeConnection",
            "baseName": "typeConnection",
            "type": "RelationsTypeConnectionEnum",
            "format": ""
        },
        {
            "name": "fromNode",
            "baseName": "fromNode",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "toNode",
            "baseName": "toNode",
            "type": "string",
            "format": "uuid"
        }
    ];
    return Relations;
}());
exports.Relations = Relations;
var RelationsTypeConnectionEnum;
(function (RelationsTypeConnectionEnum) {
    RelationsTypeConnectionEnum["Hard"] = "hard";
    RelationsTypeConnectionEnum["Soft"] = "soft";
})(RelationsTypeConnectionEnum = exports.RelationsTypeConnectionEnum || (exports.RelationsTypeConnectionEnum = {}));
//# sourceMappingURL=Relations.js.map