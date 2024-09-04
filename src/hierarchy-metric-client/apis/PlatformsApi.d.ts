import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Platform } from '../models/Platform';
export declare class PlatformsApiRequestFactory extends BaseAPIRequestFactory {
    platformsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class PlatformsApiResponseProcessor {
    platformsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Platform>>>;
}
