"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeUpdate = void 0;
var NodeUpdate = (function () {
    function NodeUpdate() {
    }
    NodeUpdate.getAttributeTypeMap = function () {
        return NodeUpdate.attributeTypeMap;
    };
    NodeUpdate.discriminator = undefined;
    NodeUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "metricId",
            "baseName": "metricId",
            "type": "number",
            "format": ""
        },
        {
            "name": "coordinates",
            "baseName": "coordinates",
            "type": "NodeUpdateCoordinates",
            "format": ""
        },
        {
            "name": "relations",
            "baseName": "relations",
            "type": "Array<Relations>",
            "format": ""
        }
    ];
    return NodeUpdate;
}());
exports.NodeUpdate = NodeUpdate;
//# sourceMappingURL=NodeUpdate.js.map