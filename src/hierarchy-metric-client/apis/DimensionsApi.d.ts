import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { DimensionInner } from '../models/DimensionInner';
export declare class DimensionsApiRequestFactory extends BaseAPIRequestFactory {
    dimensionsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class DimensionsApiResponseProcessor {
    dimensionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DimensionInner>>>;
}
