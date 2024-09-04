"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = (function () {
    function Graph() {
    }
    Graph.getAttributeTypeMap = function () {
        return Graph.attributeTypeMap;
    };
    Graph.discriminator = undefined;
    Graph.attributeTypeMap = [
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
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<Node>",
            "format": ""
        }
    ];
    return Graph;
}());
exports.Graph = Graph;
//# sourceMappingURL=Graph.js.map