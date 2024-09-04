"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status = (function () {
    function Status() {
    }
    Status.getAttributeTypeMap = function () {
        return Status.attributeTypeMap;
    };
    Status.discriminator = undefined;
    Status.attributeTypeMap = [
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
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=Status.js.map