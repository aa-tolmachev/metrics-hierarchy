import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AttractionChannel } from '../models/AttractionChannel';
import { DimensionInner } from '../models/DimensionInner';
import { DimensionsDelete200Response } from '../models/DimensionsDelete200Response';
import { Domain } from '../models/Domain';
import { GranularityInner } from '../models/GranularityInner';
import { Graph } from '../models/Graph';
import { GraphShort } from '../models/GraphShort';
import { GraphUpdate } from '../models/GraphUpdate';
import { Level } from '../models/Level';
import { Metric } from '../models/Metric';
import { MetricCreate } from '../models/MetricCreate';
import { MetricDelete202Response } from '../models/MetricDelete202Response';
import { Platform } from '../models/Platform';
import { Product } from '../models/Product';
import { RolesGet200ResponseInner } from '../models/RolesGet200ResponseInner';
import { Status } from '../models/Status';
import { Type } from '../models/Type';
import { User } from '../models/User';
import { AttractionChannelsApiRequestFactory, AttractionChannelsApiResponseProcessor } from "../apis/AttractionChannelsApi";
export interface AttractionChannelsApiAttractionChannelsGetRequest {
}
export declare class ObjectAttractionChannelsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AttractionChannelsApiRequestFactory, responseProcessor?: AttractionChannelsApiResponseProcessor);
    attractionChannelsGetWithHttpInfo(param?: AttractionChannelsApiAttractionChannelsGetRequest, options?: Configuration): Promise<HttpInfo<Array<AttractionChannel>>>;
    attractionChannelsGet(param?: AttractionChannelsApiAttractionChannelsGetRequest, options?: Configuration): Promise<Array<AttractionChannel>>;
}
import { DimensionsApiRequestFactory, DimensionsApiResponseProcessor } from "../apis/DimensionsApi";
export interface DimensionsApiDimensionsGetRequest {
}
export declare class ObjectDimensionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DimensionsApiRequestFactory, responseProcessor?: DimensionsApiResponseProcessor);
    dimensionsGetWithHttpInfo(param?: DimensionsApiDimensionsGetRequest, options?: Configuration): Promise<HttpInfo<Array<DimensionInner>>>;
    dimensionsGet(param?: DimensionsApiDimensionsGetRequest, options?: Configuration): Promise<Array<DimensionInner>>;
}
import { DomainsApiRequestFactory, DomainsApiResponseProcessor } from "../apis/DomainsApi";
export interface DomainsApiDomainsGetRequest {
}
export declare class ObjectDomainsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DomainsApiRequestFactory, responseProcessor?: DomainsApiResponseProcessor);
    domainsGetWithHttpInfo(param?: DomainsApiDomainsGetRequest, options?: Configuration): Promise<HttpInfo<Array<Domain>>>;
    domainsGet(param?: DomainsApiDomainsGetRequest, options?: Configuration): Promise<Array<Domain>>;
}
import { GranularitiesApiRequestFactory, GranularitiesApiResponseProcessor } from "../apis/GranularitiesApi";
export interface GranularitiesApiGranularitiesGetRequest {
}
export declare class ObjectGranularitiesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GranularitiesApiRequestFactory, responseProcessor?: GranularitiesApiResponseProcessor);
    granularitiesGetWithHttpInfo(param?: GranularitiesApiGranularitiesGetRequest, options?: Configuration): Promise<HttpInfo<Array<GranularityInner>>>;
    granularitiesGet(param?: GranularitiesApiGranularitiesGetRequest, options?: Configuration): Promise<Array<GranularityInner>>;
}
import { GraphsApiRequestFactory, GraphsApiResponseProcessor } from "../apis/GraphsApi";
export interface GraphsApiDimensionsDeleteRequest {
    graphId: string;
}
export interface GraphsApiGraphGetRequest {
    graphId: string;
}
export interface GraphsApiGraphUpdateRequest {
    graphId: string;
    graphUpdate?: GraphUpdate;
}
export interface GraphsApiGraphsGetRequest {
}
export declare class ObjectGraphsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GraphsApiRequestFactory, responseProcessor?: GraphsApiResponseProcessor);
    dimensionsDeleteWithHttpInfo(param: GraphsApiDimensionsDeleteRequest, options?: Configuration): Promise<HttpInfo<DimensionsDelete200Response>>;
    dimensionsDelete(param: GraphsApiDimensionsDeleteRequest, options?: Configuration): Promise<DimensionsDelete200Response>;
    graphGetWithHttpInfo(param: GraphsApiGraphGetRequest, options?: Configuration): Promise<HttpInfo<Graph>>;
    graphGet(param: GraphsApiGraphGetRequest, options?: Configuration): Promise<Graph>;
    graphUpdateWithHttpInfo(param: GraphsApiGraphUpdateRequest, options?: Configuration): Promise<HttpInfo<Graph>>;
    graphUpdate(param: GraphsApiGraphUpdateRequest, options?: Configuration): Promise<Graph>;
    graphsGetWithHttpInfo(param?: GraphsApiGraphsGetRequest, options?: Configuration): Promise<HttpInfo<Array<GraphShort>>>;
    graphsGet(param?: GraphsApiGraphsGetRequest, options?: Configuration): Promise<Array<GraphShort>>;
}
import { LevelsApiRequestFactory, LevelsApiResponseProcessor } from "../apis/LevelsApi";
export interface LevelsApiLevelsGetRequest {
}
export declare class ObjectLevelsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LevelsApiRequestFactory, responseProcessor?: LevelsApiResponseProcessor);
    levelsGetWithHttpInfo(param?: LevelsApiLevelsGetRequest, options?: Configuration): Promise<HttpInfo<Array<Level>>>;
    levelsGet(param?: LevelsApiLevelsGetRequest, options?: Configuration): Promise<Array<Level>>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export interface MetricsApiMetricCreateRequest {
    metricCreate?: MetricCreate;
}
export interface MetricsApiMetricDeleteRequest {
    metricId: string;
}
export interface MetricsApiMetricGetRequest {
    metricId: string;
}
export interface MetricsApiMetricUpdateRequest {
    metricId: string;
    metricCreate: MetricCreate;
}
export interface MetricsApiMetricsGetRequest {
    name: string;
    description: string;
    label: string;
    dataSource: string;
    typeIds: string;
    rankIds: string;
    domainIds: string;
    ownerIds: string;
    graphIds: string;
    levelIds: string;
    platformIds: string;
    productIds: string;
    attractionChannelIds: string;
}
export declare class ObjectMetricsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    metricCreateWithHttpInfo(param?: MetricsApiMetricCreateRequest, options?: Configuration): Promise<HttpInfo<Metric>>;
    metricCreate(param?: MetricsApiMetricCreateRequest, options?: Configuration): Promise<Metric>;
    metricDeleteWithHttpInfo(param: MetricsApiMetricDeleteRequest, options?: Configuration): Promise<HttpInfo<MetricDelete202Response>>;
    metricDelete(param: MetricsApiMetricDeleteRequest, options?: Configuration): Promise<MetricDelete202Response>;
    metricGetWithHttpInfo(param: MetricsApiMetricGetRequest, options?: Configuration): Promise<HttpInfo<Metric>>;
    metricGet(param: MetricsApiMetricGetRequest, options?: Configuration): Promise<Metric>;
    metricUpdateWithHttpInfo(param: MetricsApiMetricUpdateRequest, options?: Configuration): Promise<HttpInfo<Metric>>;
    metricUpdate(param: MetricsApiMetricUpdateRequest, options?: Configuration): Promise<Metric>;
    metricsGetWithHttpInfo(param: MetricsApiMetricsGetRequest, options?: Configuration): Promise<HttpInfo<Array<Metric>>>;
    metricsGet(param: MetricsApiMetricsGetRequest, options?: Configuration): Promise<Array<Metric>>;
}
import { PlatformsApiRequestFactory, PlatformsApiResponseProcessor } from "../apis/PlatformsApi";
export interface PlatformsApiPlatformsGetRequest {
}
export declare class ObjectPlatformsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PlatformsApiRequestFactory, responseProcessor?: PlatformsApiResponseProcessor);
    platformsGetWithHttpInfo(param?: PlatformsApiPlatformsGetRequest, options?: Configuration): Promise<HttpInfo<Array<Platform>>>;
    platformsGet(param?: PlatformsApiPlatformsGetRequest, options?: Configuration): Promise<Array<Platform>>;
}
import { ProductApiRequestFactory, ProductApiResponseProcessor } from "../apis/ProductApi";
export interface ProductApiProductsGetRequest {
}
export declare class ObjectProductApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor);
    productsGetWithHttpInfo(param?: ProductApiProductsGetRequest, options?: Configuration): Promise<HttpInfo<Array<Product>>>;
    productsGet(param?: ProductApiProductsGetRequest, options?: Configuration): Promise<Array<Product>>;
}
import { StatusesApiRequestFactory, StatusesApiResponseProcessor } from "../apis/StatusesApi";
export interface StatusesApiStatusesGetRequest {
}
export declare class ObjectStatusesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatusesApiRequestFactory, responseProcessor?: StatusesApiResponseProcessor);
    statusesGetWithHttpInfo(param?: StatusesApiStatusesGetRequest, options?: Configuration): Promise<HttpInfo<Array<Status>>>;
    statusesGet(param?: StatusesApiStatusesGetRequest, options?: Configuration): Promise<Array<Status>>;
}
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export interface TypesApiTypesGetRequest {
}
export declare class ObjectTypesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    typesGetWithHttpInfo(param?: TypesApiTypesGetRequest, options?: Configuration): Promise<HttpInfo<Array<Type>>>;
    typesGet(param?: TypesApiTypesGetRequest, options?: Configuration): Promise<Array<Type>>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiRolesGetRequest {
}
export interface UsersApiUsersGetRequest {
    role: string;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    rolesGetWithHttpInfo(param?: UsersApiRolesGetRequest, options?: Configuration): Promise<HttpInfo<Array<RolesGet200ResponseInner>>>;
    rolesGet(param?: UsersApiRolesGetRequest, options?: Configuration): Promise<Array<RolesGet200ResponseInner>>;
    usersGetWithHttpInfo(param: UsersApiUsersGetRequest, options?: Configuration): Promise<HttpInfo<Array<User>>>;
    usersGet(param: UsersApiUsersGetRequest, options?: Configuration): Promise<Array<User>>;
}
