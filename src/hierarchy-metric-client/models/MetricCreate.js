"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricCreate = void 0;
var MetricCreate = (function () {
    function MetricCreate() {
    }
    MetricCreate.getAttributeTypeMap = function () {
        return MetricCreate.attributeTypeMap;
    };
    MetricCreate.discriminator = undefined;
    MetricCreate.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number",
            "format": ""
        },
        {
            "name": "rankId",
            "baseName": "rankId",
            "type": "number",
            "format": ""
        },
        {
            "name": "levelId",
            "baseName": "levelId",
            "type": "number",
            "format": ""
        },
        {
            "name": "platformId",
            "baseName": "platformId",
            "type": "number",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "number",
            "format": ""
        },
        {
            "name": "attractionChannelId",
            "baseName": "attractionChannelId",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusId",
            "baseName": "statusId",
            "type": "number",
            "format": ""
        },
        {
            "name": "nameCalculation",
            "baseName": "nameCalculation",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "granularitiesIds",
            "baseName": "granularitiesIds",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "dimensionsIds",
            "baseName": "dimensionsIds",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "refToBoard",
            "baseName": "refToBoard",
            "type": "string",
            "format": "url"
        },
        {
            "name": "queryExample",
            "baseName": "queryExample",
            "type": "string",
            "format": ""
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "number",
            "format": ""
        },
        {
            "name": "analystId",
            "baseName": "analystId",
            "type": "number",
            "format": ""
        },
        {
            "name": "domainId",
            "baseName": "domainId",
            "type": "number",
            "format": ""
        }
    ];
    return MetricCreate;
}());
exports.MetricCreate = MetricCreate;
//# sourceMappingURL=MetricCreate.js.map