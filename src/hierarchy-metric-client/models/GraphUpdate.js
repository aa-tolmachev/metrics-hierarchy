"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphUpdate = void 0;
var GraphUpdate = (function () {
    function GraphUpdate() {
    }
    GraphUpdate.getAttributeTypeMap = function () {
        return GraphUpdate.attributeTypeMap;
    };
    GraphUpdate.discriminator = undefined;
    GraphUpdate.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorId",
            "baseName": "authorId",
            "type": "number",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<NodeUpdate>",
            "format": ""
        }
    ];
    return GraphUpdate;
}());
exports.GraphUpdate = GraphUpdate;
//# sourceMappingURL=GraphUpdate.js.map