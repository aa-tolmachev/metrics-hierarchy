"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricShort = void 0;
var MetricShort = (function () {
    function MetricShort() {
    }
    MetricShort.getAttributeTypeMap = function () {
        return MetricShort.attributeTypeMap;
    };
    MetricShort.discriminator = undefined;
    MetricShort.attributeTypeMap = [
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
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "dynamics",
            "baseName": "dynamics",
            "type": "number",
            "format": ""
        },
        {
            "name": "valuePostfix",
            "baseName": "valuePostfix",
            "type": "string",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "Domain",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Status",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "MetricUser",
            "format": ""
        }
    ];
    return MetricShort;
}());
exports.MetricShort = MetricShort;
//# sourceMappingURL=MetricShort.js.map