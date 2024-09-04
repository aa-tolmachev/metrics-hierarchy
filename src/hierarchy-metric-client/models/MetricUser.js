"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricUser = void 0;
var MetricUser = (function () {
    function MetricUser() {
    }
    MetricUser.getAttributeTypeMap = function () {
        return MetricUser.attributeTypeMap;
    };
    MetricUser.discriminator = undefined;
    MetricUser.attributeTypeMap = [
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
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        }
    ];
    return MetricUser;
}());
exports.MetricUser = MetricUser;
//# sourceMappingURL=MetricUser.js.map