"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = void 0;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map