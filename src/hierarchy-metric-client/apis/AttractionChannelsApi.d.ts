import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AttractionChannel } from '../models/AttractionChannel';
export declare class AttractionChannelsApiRequestFactory extends BaseAPIRequestFactory {
    attractionChannelsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class AttractionChannelsApiResponseProcessor {
    attractionChannelsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<AttractionChannel>>>;
}
