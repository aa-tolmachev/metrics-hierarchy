import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { DimensionsDelete200Response } from '../models/DimensionsDelete200Response';
import { Graph } from '../models/Graph';
import { GraphShort } from '../models/GraphShort';
import { GraphUpdate } from '../models/GraphUpdate';
export declare class GraphsApiRequestFactory extends BaseAPIRequestFactory {
    dimensionsDelete(graphId: string, _options?: Configuration): Promise<RequestContext>;
    graphGet(graphId: string, _options?: Configuration): Promise<RequestContext>;
    graphUpdate(graphId: string, graphUpdate?: GraphUpdate, _options?: Configuration): Promise<RequestContext>;
    graphsGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class GraphsApiResponseProcessor {
    dimensionsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DimensionsDelete200Response>>;
    graphGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Graph>>;
    graphUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Graph>>;
    graphsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<GraphShort>>>;
}
