"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphCreateRequest = void 0;
var GraphCreateRequest = (function () {
    function GraphCreateRequest() {
    }
    GraphCreateRequest.getAttributeTypeMap = function () {
        return GraphCreateRequest.attributeTypeMap;
    };
    GraphCreateRequest.discriminator = undefined;
    GraphCreateRequest.attributeTypeMap = [
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
        }
    ];
    return GraphCreateRequest;
}());
exports.GraphCreateRequest = GraphCreateRequest;
//# sourceMappingURL=GraphCreateRequest.js.map