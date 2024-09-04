"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUsersApi = exports.ObservableTypesApi = exports.ObservableStatusesApi = exports.ObservableProductApi = exports.ObservablePlatformsApi = exports.ObservableMetricsApi = exports.ObservableLevelsApi = exports.ObservableGraphsApi = exports.ObservableGranularitiesApi = exports.ObservableDomainsApi = exports.ObservableDimensionsApi = exports.ObservableAttractionChannelsApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AttractionChannelsApi_1 = require("../apis/AttractionChannelsApi");
var ObservableAttractionChannelsApi = (function () {
    function ObservableAttractionChannelsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttractionChannelsApi_1.AttractionChannelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttractionChannelsApi_1.AttractionChannelsApiResponseProcessor();
    }
    ObservableAttractionChannelsApi.prototype.attractionChannelsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.attractionChannelsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.attractionChannelsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttractionChannelsApi.prototype.attractionChannelsGet = function (_options) {
        return this.attractionChannelsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAttractionChannelsApi;
}());
exports.ObservableAttractionChannelsApi = ObservableAttractionChannelsApi;
var DimensionsApi_1 = require("../apis/DimensionsApi");
var ObservableDimensionsApi = (function () {
    function ObservableDimensionsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DimensionsApi_1.DimensionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DimensionsApi_1.DimensionsApiResponseProcessor();
    }
    ObservableDimensionsApi.prototype.dimensionsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.dimensionsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.dimensionsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableDimensionsApi.prototype.dimensionsGet = function (_options) {
        return this.dimensionsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableDimensionsApi;
}());
exports.ObservableDimensionsApi = ObservableDimensionsApi;
var DomainsApi_1 = require("../apis/DomainsApi");
var ObservableDomainsApi = (function () {
    function ObservableDomainsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainsApi_1.DomainsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainsApi_1.DomainsApiResponseProcessor();
    }
    ObservableDomainsApi.prototype.domainsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.domainsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.domainsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableDomainsApi.prototype.domainsGet = function (_options) {
        return this.domainsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableDomainsApi;
}());
exports.ObservableDomainsApi = ObservableDomainsApi;
var GranularitiesApi_1 = require("../apis/GranularitiesApi");
var ObservableGranularitiesApi = (function () {
    function ObservableGranularitiesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GranularitiesApi_1.GranularitiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GranularitiesApi_1.GranularitiesApiResponseProcessor();
    }
    ObservableGranularitiesApi.prototype.granularitiesGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.granularitiesGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.granularitiesGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableGranularitiesApi.prototype.granularitiesGet = function (_options) {
        return this.granularitiesGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableGranularitiesApi;
}());
exports.ObservableGranularitiesApi = ObservableGranularitiesApi;
var GraphsApi_1 = require("../apis/GraphsApi");
var ObservableGraphsApi = (function () {
    function ObservableGraphsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GraphsApi_1.GraphsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GraphsApi_1.GraphsApiResponseProcessor();
    }
    ObservableGraphsApi.prototype.dimensionsDeleteWithHttpInfo = function (graphId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.dimensionsDelete(graphId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.dimensionsDeleteWithHttpInfo(rsp); }));
        }));
    };
    ObservableGraphsApi.prototype.dimensionsDelete = function (graphId, _options) {
        return this.dimensionsDeleteWithHttpInfo(graphId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableGraphsApi.prototype.graphGetWithHttpInfo = function (graphId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.graphGet(graphId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.graphGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableGraphsApi.prototype.graphGet = function (graphId, _options) {
        return this.graphGetWithHttpInfo(graphId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableGraphsApi.prototype.graphUpdateWithHttpInfo = function (graphId, graphUpdate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.graphUpdate(graphId, graphUpdate, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.graphUpdateWithHttpInfo(rsp); }));
        }));
    };
    ObservableGraphsApi.prototype.graphUpdate = function (graphId, graphUpdate, _options) {
        return this.graphUpdateWithHttpInfo(graphId, graphUpdate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableGraphsApi.prototype.graphsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.graphsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.graphsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableGraphsApi.prototype.graphsGet = function (_options) {
        return this.graphsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableGraphsApi;
}());
exports.ObservableGraphsApi = ObservableGraphsApi;
var LevelsApi_1 = require("../apis/LevelsApi");
var ObservableLevelsApi = (function () {
    function ObservableLevelsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LevelsApi_1.LevelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LevelsApi_1.LevelsApiResponseProcessor();
    }
    ObservableLevelsApi.prototype.levelsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.levelsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.levelsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableLevelsApi.prototype.levelsGet = function (_options) {
        return this.levelsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLevelsApi;
}());
exports.ObservableLevelsApi = ObservableLevelsApi;
var MetricsApi_1 = require("../apis/MetricsApi");
var ObservableMetricsApi = (function () {
    function ObservableMetricsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetricsApi_1.MetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetricsApi_1.MetricsApiResponseProcessor();
    }
    ObservableMetricsApi.prototype.metricCreateWithHttpInfo = function (metricCreate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.metricCreate(metricCreate, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.metricCreateWithHttpInfo(rsp); }));
        }));
    };
    ObservableMetricsApi.prototype.metricCreate = function (metricCreate, _options) {
        return this.metricCreateWithHttpInfo(metricCreate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMetricsApi.prototype.metricDeleteWithHttpInfo = function (metricId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.metricDelete(metricId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.metricDeleteWithHttpInfo(rsp); }));
        }));
    };
    ObservableMetricsApi.prototype.metricDelete = function (metricId, _options) {
        return this.metricDeleteWithHttpInfo(metricId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMetricsApi.prototype.metricGetWithHttpInfo = function (metricId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.metricGet(metricId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.metricGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableMetricsApi.prototype.metricGet = function (metricId, _options) {
        return this.metricGetWithHttpInfo(metricId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMetricsApi.prototype.metricUpdateWithHttpInfo = function (metricId, metricCreate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.metricUpdate(metricId, metricCreate, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.metricUpdateWithHttpInfo(rsp); }));
        }));
    };
    ObservableMetricsApi.prototype.metricUpdate = function (metricId, metricCreate, _options) {
        return this.metricUpdateWithHttpInfo(metricId, metricCreate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableMetricsApi.prototype.metricsGetWithHttpInfo = function (name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.metricsGet(name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.metricsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableMetricsApi.prototype.metricsGet = function (name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options) {
        return this.metricsGetWithHttpInfo(name, description, label, dataSource, typeIds, rankIds, domainIds, ownerIds, graphIds, levelIds, platformIds, productIds, attractionChannelIds, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMetricsApi;
}());
exports.ObservableMetricsApi = ObservableMetricsApi;
var PlatformsApi_1 = require("../apis/PlatformsApi");
var ObservablePlatformsApi = (function () {
    function ObservablePlatformsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlatformsApi_1.PlatformsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlatformsApi_1.PlatformsApiResponseProcessor();
    }
    ObservablePlatformsApi.prototype.platformsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.platformsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.platformsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservablePlatformsApi.prototype.platformsGet = function (_options) {
        return this.platformsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePlatformsApi;
}());
exports.ObservablePlatformsApi = ObservablePlatformsApi;
var ProductApi_1 = require("../apis/ProductApi");
var ObservableProductApi = (function () {
    function ObservableProductApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductApi_1.ProductApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductApi_1.ProductApiResponseProcessor();
    }
    ObservableProductApi.prototype.productsGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.productsGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.productsGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableProductApi.prototype.productsGet = function (_options) {
        return this.productsGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableProductApi;
}());
exports.ObservableProductApi = ObservableProductApi;
var StatusesApi_1 = require("../apis/StatusesApi");
var ObservableStatusesApi = (function () {
    function ObservableStatusesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusesApi_1.StatusesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusesApi_1.StatusesApiResponseProcessor();
    }
    ObservableStatusesApi.prototype.statusesGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.statusesGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.statusesGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableStatusesApi.prototype.statusesGet = function (_options) {
        return this.statusesGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableStatusesApi;
}());
exports.ObservableStatusesApi = ObservableStatusesApi;
var TypesApi_1 = require("../apis/TypesApi");
var ObservableTypesApi = (function () {
    function ObservableTypesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TypesApi_1.TypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TypesApi_1.TypesApiResponseProcessor();
    }
    ObservableTypesApi.prototype.typesGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.typesGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.typesGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableTypesApi.prototype.typesGet = function (_options) {
        return this.typesGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTypesApi;
}());
exports.ObservableTypesApi = ObservableTypesApi;
var UsersApi_1 = require("../apis/UsersApi");
var ObservableUsersApi = (function () {
    function ObservableUsersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApi_1.UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApi_1.UsersApiResponseProcessor();
    }
    ObservableUsersApi.prototype.rolesGetWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.rolesGet(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.rolesGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.rolesGet = function (_options) {
        return this.rolesGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsersApi.prototype.usersGetWithHttpInfo = function (role, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.usersGet(role, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.usersGetWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.usersGet = function (role, _options) {
        return this.usersGetWithHttpInfo(role, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableUsersApi;
}());
exports.ObservableUsersApi = ObservableUsersApi;
//# sourceMappingURL=ObservableAPI.js.map