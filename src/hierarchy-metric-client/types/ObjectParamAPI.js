"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectTypesApi = exports.ObjectStatusesApi = exports.ObjectProductApi = exports.ObjectPlatformsApi = exports.ObjectMetricsApi = exports.ObjectLevelsApi = exports.ObjectGraphsApi = exports.ObjectGranularitiesApi = exports.ObjectDomainsApi = exports.ObjectDimensionsApi = exports.ObjectAttractionChannelsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAttractionChannelsApi = (function () {
    function ObjectAttractionChannelsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAttractionChannelsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAttractionChannelsApi.prototype.attractionChannelsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.attractionChannelsGetWithHttpInfo(options).toPromise();
    };
    ObjectAttractionChannelsApi.prototype.attractionChannelsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.attractionChannelsGet(options).toPromise();
    };
    return ObjectAttractionChannelsApi;
}());
exports.ObjectAttractionChannelsApi = ObjectAttractionChannelsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectDimensionsApi = (function () {
    function ObjectDimensionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDimensionsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDimensionsApi.prototype.dimensionsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.dimensionsGetWithHttpInfo(options).toPromise();
    };
    ObjectDimensionsApi.prototype.dimensionsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.dimensionsGet(options).toPromise();
    };
    return ObjectDimensionsApi;
}());
exports.ObjectDimensionsApi = ObjectDimensionsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectDomainsApi = (function () {
    function ObjectDomainsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDomainsApi.prototype.domainsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.domainsGetWithHttpInfo(options).toPromise();
    };
    ObjectDomainsApi.prototype.domainsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.domainsGet(options).toPromise();
    };
    return ObjectDomainsApi;
}());
exports.ObjectDomainsApi = ObjectDomainsApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectGranularitiesApi = (function () {
    function ObjectGranularitiesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableGranularitiesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectGranularitiesApi.prototype.granularitiesGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.granularitiesGetWithHttpInfo(options).toPromise();
    };
    ObjectGranularitiesApi.prototype.granularitiesGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.granularitiesGet(options).toPromise();
    };
    return ObjectGranularitiesApi;
}());
exports.ObjectGranularitiesApi = ObjectGranularitiesApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectGraphsApi = (function () {
    function ObjectGraphsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableGraphsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectGraphsApi.prototype.dimensionsDeleteWithHttpInfo = function (param, options) {
        return this.api.dimensionsDeleteWithHttpInfo(param.graphId, options).toPromise();
    };
    ObjectGraphsApi.prototype.dimensionsDelete = function (param, options) {
        return this.api.dimensionsDelete(param.graphId, options).toPromise();
    };
    ObjectGraphsApi.prototype.graphGetWithHttpInfo = function (param, options) {
        return this.api.graphGetWithHttpInfo(param.graphId, options).toPromise();
    };
    ObjectGraphsApi.prototype.graphGet = function (param, options) {
        return this.api.graphGet(param.graphId, options).toPromise();
    };
    ObjectGraphsApi.prototype.graphUpdateWithHttpInfo = function (param, options) {
        return this.api.graphUpdateWithHttpInfo(param.graphId, param.graphUpdate, options).toPromise();
    };
    ObjectGraphsApi.prototype.graphUpdate = function (param, options) {
        return this.api.graphUpdate(param.graphId, param.graphUpdate, options).toPromise();
    };
    ObjectGraphsApi.prototype.graphsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.graphsGetWithHttpInfo(options).toPromise();
    };
    ObjectGraphsApi.prototype.graphsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.graphsGet(options).toPromise();
    };
    return ObjectGraphsApi;
}());
exports.ObjectGraphsApi = ObjectGraphsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectLevelsApi = (function () {
    function ObjectLevelsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableLevelsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLevelsApi.prototype.levelsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.levelsGetWithHttpInfo(options).toPromise();
    };
    ObjectLevelsApi.prototype.levelsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.levelsGet(options).toPromise();
    };
    return ObjectLevelsApi;
}());
exports.ObjectLevelsApi = ObjectLevelsApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectMetricsApi = (function () {
    function ObjectMetricsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMetricsApi.prototype.metricCreateWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.metricCreateWithHttpInfo(param.metricCreate, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricCreate = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.metricCreate(param.metricCreate, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricDeleteWithHttpInfo = function (param, options) {
        return this.api.metricDeleteWithHttpInfo(param.metricId, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricDelete = function (param, options) {
        return this.api.metricDelete(param.metricId, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricGetWithHttpInfo = function (param, options) {
        return this.api.metricGetWithHttpInfo(param.metricId, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricGet = function (param, options) {
        return this.api.metricGet(param.metricId, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricUpdateWithHttpInfo = function (param, options) {
        return this.api.metricUpdateWithHttpInfo(param.metricId, param.metricCreate, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricUpdate = function (param, options) {
        return this.api.metricUpdate(param.metricId, param.metricCreate, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricsGetWithHttpInfo = function (param, options) {
        return this.api.metricsGetWithHttpInfo(param.name, param.description, param.label, param.dataSource, param.typeIds, param.rankIds, param.domainIds, param.ownerIds, param.graphIds, param.levelIds, param.platformIds, param.productIds, param.attractionChannelIds, options).toPromise();
    };
    ObjectMetricsApi.prototype.metricsGet = function (param, options) {
        return this.api.metricsGet(param.name, param.description, param.label, param.dataSource, param.typeIds, param.rankIds, param.domainIds, param.ownerIds, param.graphIds, param.levelIds, param.platformIds, param.productIds, param.attractionChannelIds, options).toPromise();
    };
    return ObjectMetricsApi;
}());
exports.ObjectMetricsApi = ObjectMetricsApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectPlatformsApi = (function () {
    function ObjectPlatformsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservablePlatformsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPlatformsApi.prototype.platformsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.platformsGetWithHttpInfo(options).toPromise();
    };
    ObjectPlatformsApi.prototype.platformsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.platformsGet(options).toPromise();
    };
    return ObjectPlatformsApi;
}());
exports.ObjectPlatformsApi = ObjectPlatformsApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectProductApi = (function () {
    function ObjectProductApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableProductApi(configuration, requestFactory, responseProcessor);
    }
    ObjectProductApi.prototype.productsGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.productsGetWithHttpInfo(options).toPromise();
    };
    ObjectProductApi.prototype.productsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.productsGet(options).toPromise();
    };
    return ObjectProductApi;
}());
exports.ObjectProductApi = ObjectProductApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectStatusesApi = (function () {
    function ObjectStatusesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableStatusesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectStatusesApi.prototype.statusesGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.statusesGetWithHttpInfo(options).toPromise();
    };
    ObjectStatusesApi.prototype.statusesGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.statusesGet(options).toPromise();
    };
    return ObjectStatusesApi;
}());
exports.ObjectStatusesApi = ObjectStatusesApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectTypesApi = (function () {
    function ObjectTypesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectTypesApi.prototype.typesGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.typesGetWithHttpInfo(options).toPromise();
    };
    ObjectTypesApi.prototype.typesGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.typesGet(options).toPromise();
    };
    return ObjectTypesApi;
}());
exports.ObjectTypesApi = ObjectTypesApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectUsersApi = (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUsersApi.prototype.rolesGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.rolesGetWithHttpInfo(options).toPromise();
    };
    ObjectUsersApi.prototype.rolesGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.rolesGet(options).toPromise();
    };
    ObjectUsersApi.prototype.usersGetWithHttpInfo = function (param, options) {
        return this.api.usersGetWithHttpInfo(param.role, options).toPromise();
    };
    ObjectUsersApi.prototype.usersGet = function (param, options) {
        return this.api.usersGet(param.role, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map