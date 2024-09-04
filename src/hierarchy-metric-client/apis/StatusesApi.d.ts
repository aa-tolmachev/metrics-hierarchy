import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Status } from '../models/Status';
export declare class StatusesApiRequestFactory extends BaseAPIRequestFactory {
    statusesGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class StatusesApiResponseProcessor {
    statusesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Status>>>;
}
