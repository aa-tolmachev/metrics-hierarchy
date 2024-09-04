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
export declare class PromiseAttractionChannelsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AttractionChannelsApiRequestFactory, responseProcessor?: AttractionChannelsApiResponseProcessor);
    attractionChannelsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<AttractionChannel>>>;
    attractionChannelsGet(_options?: Configuration): Promise<Array<AttractionChannel>>;
}
import { DimensionsApiRequestFactory, DimensionsApiResponseProcessor } from "../apis/DimensionsApi";
export declare class PromiseDimensionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DimensionsApiRequestFactory, responseProcessor?: DimensionsApiResponseProcessor);
    dimensionsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DimensionInner>>>;
    dimensionsGet(_options?: Configuration): Promise<Array<DimensionInner>>;
}
import { DomainsApiRequestFactory, DomainsApiResponseProcessor } from "../apis/DomainsApi";
export declare class PromiseDomainsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DomainsApiRequestFactory, responseProcessor?: DomainsApiResponseProcessor);
    domainsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Domain>>>;
    domainsGet(_options?: Configuration): Promise<Array<Domain>>;
}
import { GranularitiesApiRequestFactory, GranularitiesApiResponseProcessor } from "../apis/GranularitiesApi";
export declare class PromiseGranularitiesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GranularitiesApiRequestFactory, responseProcessor?: GranularitiesApiResponseProcessor);
    granularitiesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<GranularityInner>>>;
    granularitiesGet(_options?: Configuration): Promise<Array<GranularityInner>>;
}
import { GraphsApiRequestFactory, GraphsApiResponseProcessor } from "../apis/GraphsApi";
export declare class PromiseGraphsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GraphsApiRequestFactory, responseProcessor?: GraphsApiResponseProcessor);
    dimensionsDeleteWithHttpInfo(graphId: string, _options?: Configuration): Promise<HttpInfo<DimensionsDelete200Response>>;
    dimensionsDelete(graphId: string, _options?: Configuration): Promise<DimensionsDelete200Response>;
    graphGetWithHttpInfo(graphId: string, _options?: Configuration): Promise<HttpInfo<Graph>>;
    graphGet(graphId: string, _options?: Configuration): Promise<Graph>;
    graphUpdateWithHttpInfo(graphId: string, graphUpdate?: GraphUpdate, _options?: Configuration): Promise<HttpInfo<Graph>>;
    graphUpdate(graphId: string, graphUpdate?: GraphUpdate, _options?: Configuration): Promise<Graph>;
    graphsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<GraphShort>>>;
    graphsGet(_options?: Configuration): Promise<Array<GraphShort>>;
}
import { LevelsApiRequestFactory, LevelsApiResponseProcessor } from "../apis/LevelsApi";
export declare class PromiseLevelsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LevelsApiRequestFactory, responseProcessor?: LevelsApiResponseProcessor);
    levelsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Level>>>;
    levelsGet(_options?: Configuration): Promise<Array<Level>>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export declare class PromiseMetricsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    metricCreateWithHttpInfo(metricCreate?: MetricCreate, _options?: Configuration): Promise<HttpInfo<Metric>>;
    metricCreate(metricCreate?: MetricCreate, _options?: Configuration): Promise<Metric>;
    metricDeleteWithHttpInfo(metricId: string, _options?: Configuration): Promise<HttpInfo<MetricDelete202Response>>;
    metricDelete(metricId: string, _options?: Configuration): Promise<MetricDelete202Response>;
    metricGetWithHttpInfo(metricId: string, _options?: Configuration): Promise<HttpInfo<Metric>>;
    metricGet(metricId: string, _options?: Configuration): Promise<Metric>;
    metricUpdateWithHttpInfo(metricId: string, metricCreate: MetricCreate, _options?: Configuration): Promise<HttpInfo<Metric>>;
    metricUpdate(metricId: string, metricCreate: MetricCreate, _options?: Configuration): Promise<Metric>;
    metricsGetWithHttpInfo(name: string, description: string, label: string, dataSource: string, typeIds: string, rankIds: string, domainIds: string, ownerIds: string, graphIds: string, levelIds: string, platformIds: string, productIds: string, attractionChannelIds: string, _options?: Configuration): Promise<HttpInfo<Array<Metric>>>;
    metricsGet(name: string, description: string, label: string, dataSource: string, typeIds: string, rankIds: string, domainIds: string, ownerIds: string, graphIds: string, levelIds: string, platformIds: string, productIds: string, attractionChannelIds: string, _options?: Configuration): Promise<Array<Metric>>;
}
import { PlatformsApiRequestFactory, PlatformsApiResponseProcessor } from "../apis/PlatformsApi";
export declare class PromisePlatformsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PlatformsApiRequestFactory, responseProcessor?: PlatformsApiResponseProcessor);
    platformsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Platform>>>;
    platformsGet(_options?: Configuration): Promise<Array<Platform>>;
}
import { ProductApiRequestFactory, ProductApiResponseProcessor } from "../apis/ProductApi";
export declare class PromiseProductApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor);
    productsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Product>>>;
    productsGet(_options?: Configuration): Promise<Array<Product>>;
}
import { StatusesApiRequestFactory, StatusesApiResponseProcessor } from "../apis/StatusesApi";
export declare class PromiseStatusesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatusesApiRequestFactory, responseProcessor?: StatusesApiResponseProcessor);
    statusesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Status>>>;
    statusesGet(_options?: Configuration): Promise<Array<Status>>;
}
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export declare class PromiseTypesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    typesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Type>>>;
    typesGet(_options?: Configuration): Promise<Array<Type>>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    rolesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RolesGet200ResponseInner>>>;
    rolesGet(_options?: Configuration): Promise<Array<RolesGet200ResponseInner>>;
    usersGetWithHttpInfo(role: string, _options?: Configuration): Promise<HttpInfo<Array<User>>>;
    usersGet(role: string, _options?: Configuration): Promise<Array<User>>;
}
