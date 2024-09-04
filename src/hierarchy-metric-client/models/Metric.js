"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = void 0;
var Metric = (function () {
    function Metric() {
    }
    Metric.getAttributeTypeMap = function () {
        return Metric.attributeTypeMap;
    };
    Metric.discriminator = undefined;
    Metric.attributeTypeMap = [
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
            "name": "state",
            "baseName": "state",
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
            "name": "level",
            "baseName": "level",
            "type": "Level",
            "format": ""
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "Platform",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "Product",
            "format": ""
        },
        {
            "name": "attractionChannel",
            "baseName": "attractionChannel",
            "type": "AttractionChannel",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Type",
            "format": ""
        },
        {
            "name": "rank",
            "baseName": "rank",
            "type": "Rank",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Status",
            "format": ""
        },
        {
            "name": "nameCalculation",
            "baseName": "nameCalculation",
            "type": "string",
            "format": ""
        },
        {
            "name": "granularities",
            "baseName": "granularities",
            "type": "Array<GranularityInner>",
            "format": ""
        },
        {
            "name": "dimensions",
            "baseName": "dimensions",
            "type": "Array<DimensionInner>",
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
            "name": "owner",
            "baseName": "owner",
            "type": "MetricUser",
            "format": ""
        },
        {
            "name": "analyst",
            "baseName": "analyst",
            "type": "MetricUser",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "Domain",
            "format": ""
        },
        {
            "name": "graphs",
            "baseName": "graphs",
            "type": "Array<GraphShort>",
            "format": ""
        }
    ];
    return Metric;
}());
exports.Metric = Metric;
//# sourceMappingURL=Metric.js.map