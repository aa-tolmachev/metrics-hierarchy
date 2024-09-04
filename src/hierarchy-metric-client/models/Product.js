"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = (function () {
    function Product() {
    }
    Product.getAttributeTypeMap = function () {
        return Product.attributeTypeMap;
    };
    Product.discriminator = undefined;
    Product.attributeTypeMap = [
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
        }
    ];
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map