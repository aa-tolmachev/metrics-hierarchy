import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Product } from '../models/Product';
export declare class ProductApiRequestFactory extends BaseAPIRequestFactory {
    productsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class ProductApiResponseProcessor {
    productsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Product>>>;
}
