import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GranularityInner } from '../models/GranularityInner';
export declare class GranularitiesApiRequestFactory extends BaseAPIRequestFactory {
    granularitiesGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class GranularitiesApiResponseProcessor {
    granularitiesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<GranularityInner>>>;
}
