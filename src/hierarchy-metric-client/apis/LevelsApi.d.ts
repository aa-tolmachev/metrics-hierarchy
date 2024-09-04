import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Level } from '../models/Level';
export declare class LevelsApiRequestFactory extends BaseAPIRequestFactory {
    levelsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class LevelsApiResponseProcessor {
    levelsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Level>>>;
}
