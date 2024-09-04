"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphShort = void 0;
var GraphShort = (function () {
    function GraphShort() {
    }
    GraphShort.getAttributeTypeMap = function () {
        return GraphShort.attributeTypeMap;
    };
    GraphShort.discriminator = undefined;
    GraphShort.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "MetricUser",
            "format": ""
        }
    ];
    return GraphShort;
}());
exports.GraphShort = GraphShort;
//# sourceMappingURL=GraphShort.js.map