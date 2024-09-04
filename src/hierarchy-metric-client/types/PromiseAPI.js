"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUsersApi = exports.PromiseTypesApi = exports.PromiseStatusesApi = exports.PromiseProductApi = exports.PromisePlatformsApi = exports.PromiseMetricsApi = exports.PromiseLevelsApi = exports.PromiseGraphsApi = exports.PromiseGranularitiesApi = exports.PromiseDomainsApi = exports.PromiseDimensionsApi = exports.PromiseAttractionChannelsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAttractionChannelsApi = (function () {
    function PromiseAttractionChannelsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAttractionChannelsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAttractionChannelsApi.prototype.attractionChannelsGetWithHttpInfo = function (_options) {
        var result = this.api.attractionChannelsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAttractionChannelsApi.prototype.attractionChannelsGet = function (_options) {
        var result = this.api.attractionChannelsGet(_options);
        return result.toPromise();
    };
    return PromiseAttractionChannelsApi;
}());
exports.PromiseAttractionChannelsApi = PromiseAttractionChannelsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseDimensionsApi = (function () {
    function PromiseDimensionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDimensionsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDimensionsApi.prototype.dimensionsGetWithHttpInfo = function (_options) {
        var result = this.api.dimensionsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseDimensionsApi.prototype.dimensionsGet = function (_options) {
        var result = this.api.dimensionsGet(_options);
        return result.toPromise();
    };
    return PromiseDimensionsApi;
}());
exports.PromiseDimensionsApi = PromiseDimensionsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseDomainsApi = (function () {
    function PromiseDomainsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDomainsApi.prototype.domainsGetWithHttpInfo = function (_options) {
        var result = this.api.domainsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseDomainsApi.prototype.domainsGet = function (_options) {
        var result = this.api.domainsGet(_options);
        return result.toPromise();
    };
    return PromiseDomainsApi;
}());
exports.PromiseDomainsApi = PromiseDomainsApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseGranularitiesApi = (function () {
    function PromiseGranularitiesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableGranularitiesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseGranularitiesApi.prototype.granularitiesGetWithHttpInfo = function (_options) {
        var result = this.api.granularitiesGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseGranularitiesApi.prototype.granularitiesGet = function (_options) {
        var result = this.api.granularitiesGet(_options);
        return result.toPromise();
    };
    return PromiseGranularitiesApi;
}());
exports.PromiseGranularitiesApi = PromiseGranularitiesApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseGraphsApi = (function () {
    function PromiseGraphsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableGraphsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseGraphsApi.prototype.dimensionsDeleteWithHttpInfo = function (graphId, _options) {
        var result = this.api.dimensionsDeleteWithHttpInfo(graphId, _options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.dimensionsDelete = function (graphId, _options) {
        var result = this.api.dimensionsDelete(graphId, _options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.graphGetWithHttpInfo = function (graphId, _options) {
        var result = this.api.graphGetWithHttpInfo(graphId, _options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.graphGet = function (graphId, _options) {
        var result = this.api.graphGet(graphId, _options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.graphUpdateWithHttpInfo = function (graphId, graphUpdate, _options) {
        var result = this.api.graphUpdateWithHttpInfo(graphId, graphUpdate, _options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.graphUpdate = function (graphId, graphUpdate, _options) {
        var result = this.api.graphUpdate(graphId, graphUpdate, _options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.graphsGetWithHttpInfo = function (_options) {
        var result = this.api.graphsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseGraphsApi.prototype.graphsGet = function (_options) {
        var result = this.api.graphsGet(_options);
        return result.toPromise();
    };
    return PromiseGraphsApi;
}());
exports.PromiseGraphsApi = PromiseGraphsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseLevelsApi = (function () {
    function PromiseLevelsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableLevelsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLevelsApi.prototype.levelsGetWithHttpInfo = function (_options) {
        var result = this.api.levelsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseLevelsApi.prototype.levelsGet = function (_options) {
        var result = this.api.levelsGet(_options);
        return result.toPromise();
    };
    return PromiseLevelsApi;
}());
exports.PromiseLevelsApi = PromiseLevelsApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseMetricsApi = (function () {
    function PromiseMetricsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMetricsApi.prototype.metricCreateWithHttpInfo = function (metricCreate, _options) {
        var result = this.api.metricCreateWithHttpInfo(metricCreate, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricCreate = function (metricCreate, _options) {
        var result = this.api.metricCreate(metricCreate, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricDeleteWithHttpInfo = function (metricId, _options) {
        var result = this.api.metricDeleteWithHttpInfo(metricId, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricDelete = function (metricId, _options) {
        var result = this.api.metricDelete(metricId, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricGetWithHttpInfo = function (metricId, _options) {
        var result = this.api.metricGetWithHttpInfo(metricId, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricGet = function (metricId, _options) {
        var result = this.api.metricGet(metricId, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricUpdateWithHttpInfo = function (metricId, metricCreate, _options) {
        var result = this.api.metricUpdateWithHttpInfo(metricId, metricCreate, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricUpdate = function (metricId, metricCreate, _options) {
        var result = this.api.metricUpdate(metricId, metricCreate, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricsGetWithHttpInfo = function (name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options) {
        var result = this.api.metricsGetWithHttpInfo(name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options);
        return result.toPromise();
    };
    PromiseMetricsApi.prototype.metricsGet = function (name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options) {
        var result = this.api.metricsGet(name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options);
        return result.toPromise();
    };
    return PromiseMetricsApi;
}());
exports.PromiseMetricsApi = PromiseMetricsApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromisePlatformsApi = (function () {
    function PromisePlatformsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservablePlatformsApi(configuration, requestFactory, responseProcessor);
    }
    PromisePlatformsApi.prototype.platformsGetWithHttpInfo = function (_options) {
        var result = this.api.platformsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePlatformsApi.prototype.platformsGet = function (_options) {
        var result = this.api.platformsGet(_options);
        return result.toPromise();
    };
    return PromisePlatformsApi;
}());
exports.PromisePlatformsApi = PromisePlatformsApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseProductApi = (function () {
    function PromiseProductApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableProductApi(configuration, requestFactory, responseProcessor);
    }
    PromiseProductApi.prototype.productsGetWithHttpInfo = function (_options) {
        var result = this.api.productsGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseProductApi.prototype.productsGet = function (_options) {
        var result = this.api.productsGet(_options);
        return result.toPromise();
    };
    return PromiseProductApi;
}());
exports.PromiseProductApi = PromiseProductApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseStatusesApi = (function () {
    function PromiseStatusesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableStatusesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseStatusesApi.prototype.statusesGetWithHttpInfo = function (_options) {
        var result = this.api.statusesGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseStatusesApi.prototype.statusesGet = function (_options) {
        var result = this.api.statusesGet(_options);
        return result.toPromise();
    };
    return PromiseStatusesApi;
}());
exports.PromiseStatusesApi = PromiseStatusesApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromiseTypesApi = (function () {
    function PromiseTypesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseTypesApi.prototype.typesGetWithHttpInfo = function (_options) {
        var result = this.api.typesGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseTypesApi.prototype.typesGet = function (_options) {
        var result = this.api.typesGet(_options);
        return result.toPromise();
    };
    return PromiseTypesApi;
}());
exports.PromiseTypesApi = PromiseTypesApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromiseUsersApi = (function () {
    function PromiseUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUsersApi.prototype.rolesGetWithHttpInfo = function (_options) {
        var result = this.api.rolesGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.rolesGet = function (_options) {
        var result = this.api.rolesGet(_options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersGetWithHttpInfo = function (role, _options) {
        var result = this.api.usersGetWithHttpInfo(role, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersGet = function (role, _options) {
        var result = this.api.usersGet(role, _options);
        return result.toPromise();
    };
    return PromiseUsersApi;
}());
exports.PromiseUsersApi = PromiseUsersApi;
//# sourceMappingURL=PromiseAPI.js.map