import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Type } from '../models/Type';
export declare class TypesApiRequestFactory extends BaseAPIRequestFactory {
    typesGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class TypesApiResponseProcessor {
    typesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Type>>>;
}
