"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = (function () {
    function Node() {
    }
    Node.getAttributeTypeMap = function () {
        return Node.attributeTypeMap;
    };
    Node.discriminator = undefined;
    Node.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "MetricShort",
            "format": ""
        },
        {
            "name": "coordinates",
            "baseName": "coordinates",
            "type": "Coordinates",
            "format": ""
        },
        {
            "name": "relations",
            "baseName": "relations",
            "type": "Array<Relations>",
            "format": ""
        }
    ];
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=Node.js.map