"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersApi = exports.TypesApi = exports.StatusesApi = exports.ProductApi = exports.PlatformsApi = exports.MetricsApi = exports.LevelsApi = exports.GraphsApi = exports.GranularitiesApi = exports.DomainsApi = exports.DimensionsApi = exports.AttractionChannelsApi = exports.RequiredError = exports.createConfiguration = void 0;
__exportStar(require("./http/http"), exports);
__exportStar(require("./auth/auth"), exports);
__exportStar(require("./models/all"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function () { return configuration_1.createConfiguration; } });
__exportStar(require("./apis/exception"), exports);
__exportStar(require("./servers"), exports);
var baseapi_1 = require("./apis/baseapi");
Object.defineProperty(exports, "RequiredError", { enumerable: true, get: function () { return baseapi_1.RequiredError; } });
var PromiseAPI_1 = require("./types/PromiseAPI");
Object.defineProperty(exports, "AttractionChannelsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAttractionChannelsApi; } });
Object.defineProperty(exports, "DimensionsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDimensionsApi; } });
Object.defineProperty(exports, "DomainsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDomainsApi; } });
Object.defineProperty(exports, "GranularitiesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseGranularitiesApi; } });
Object.defineProperty(exports, "GraphsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseGraphsApi; } });
Object.defineProperty(exports, "LevelsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLevelsApi; } });
Object.defineProperty(exports, "MetricsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseMetricsApi; } });
Object.defineProperty(exports, "PlatformsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePlatformsApi; } });
Object.defineProperty(exports, "ProductApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseProductApi; } });
Object.defineProperty(exports, "StatusesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseStatusesApi; } });
Object.defineProperty(exports, "TypesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTypesApi; } });
Object.defineProperty(exports, "UsersApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseUsersApi; } });
//# sourceMappingURL=index.js.map