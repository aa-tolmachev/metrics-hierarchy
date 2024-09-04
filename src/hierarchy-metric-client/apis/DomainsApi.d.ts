import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Domain } from '../models/Domain';
export declare class DomainsApiRequestFactory extends BaseAPIRequestFactory {
    domainsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class DomainsApiResponseProcessor {
    domainsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Domain>>>;
}
