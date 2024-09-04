import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Metric } from '../models/Metric';
import { MetricCreate } from '../models/MetricCreate';
import { MetricDelete202Response } from '../models/MetricDelete202Response';
export declare class MetricsApiRequestFactory extends BaseAPIRequestFactory {
    metricCreate(metricCreate?: MetricCreate, _options?: Configuration): Promise<RequestContext>;
    metricDelete(metricId: string, _options?: Configuration): Promise<RequestContext>;
    metricGet(metricId: string, _options?: Configuration): Promise<RequestContext>;
    metricUpdate(metricId: string, metricCreate: MetricCreate, _options?: Configuration): Promise<RequestContext>;
    metricsGet(name: string, description: string, label: string, dataSource: string, typeIds: string, rankIds: string, domainIds: string, ownerIds: string, graphIds: string, levelIds: string, platformIds: string, productIds: string, attractionChannelIds: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class MetricsApiResponseProcessor {
    metricCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Metric>>;
    metricDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetricDelete202Response>>;
    metricGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Metric>>;
    metricUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Metric>>;
    metricsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Metric>>>;
}
