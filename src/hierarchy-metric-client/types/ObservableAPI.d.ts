import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableAttractionChannelsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AttractionChannelsApiRequestFactory, responseProcessor?: AttractionChannelsApiResponseProcessor);
    attractionChannelsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<AttractionChannel>>>;
    attractionChannelsGet(_options?: Configuration): Observable<Array<AttractionChannel>>;
}
import { DimensionsApiRequestFactory, DimensionsApiResponseProcessor } from "../apis/DimensionsApi";
export declare class ObservableDimensionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DimensionsApiRequestFactory, responseProcessor?: DimensionsApiResponseProcessor);
    dimensionsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DimensionInner>>>;
    dimensionsGet(_options?: Configuration): Observable<Array<DimensionInner>>;
}
import { DomainsApiRequestFactory, DomainsApiResponseProcessor } from "../apis/DomainsApi";
export declare class ObservableDomainsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DomainsApiRequestFactory, responseProcessor?: DomainsApiResponseProcessor);
    domainsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Domain>>>;
    domainsGet(_options?: Configuration): Observable<Array<Domain>>;
}
import { GranularitiesApiRequestFactory, GranularitiesApiResponseProcessor } from "../apis/GranularitiesApi";
export declare class ObservableGranularitiesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GranularitiesApiRequestFactory, responseProcessor?: GranularitiesApiResponseProcessor);
    granularitiesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<GranularityInner>>>;
    granularitiesGet(_options?: Configuration): Observable<Array<GranularityInner>>;
}
import { GraphsApiRequestFactory, GraphsApiResponseProcessor } from "../apis/GraphsApi";
export declare class ObservableGraphsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GraphsApiRequestFactory, responseProcessor?: GraphsApiResponseProcessor);
    dimensionsDeleteWithHttpInfo(graphId: string, _options?: Configuration): Observable<HttpInfo<DimensionsDelete200Response>>;
    dimensionsDelete(graphId: string, _options?: Configuration): Observable<DimensionsDelete200Response>;
    graphGetWithHttpInfo(graphId: string, _options?: Configuration): Observable<HttpInfo<Graph>>;
    graphGet(graphId: string, _options?: Configuration): Observable<Graph>;
    graphUpdateWithHttpInfo(graphId: string, graphUpdate?: GraphUpdate, _options?: Configuration): Observable<HttpInfo<Graph>>;
    graphUpdate(graphId: string, graphUpdate?: GraphUpdate, _options?: Configuration): Observable<Graph>;
    graphsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<GraphShort>>>;
    graphsGet(_options?: Configuration): Observable<Array<GraphShort>>;
}
import { LevelsApiRequestFactory, LevelsApiResponseProcessor } from "../apis/LevelsApi";
export declare class ObservableLevelsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LevelsApiRequestFactory, responseProcessor?: LevelsApiResponseProcessor);
    levelsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Level>>>;
    levelsGet(_options?: Configuration): Observable<Array<Level>>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export declare class ObservableMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    metricCreateWithHttpInfo(metricCreate?: MetricCreate, _options?: Configuration): Observable<HttpInfo<Metric>>;
    metricCreate(metricCreate?: MetricCreate, _options?: Configuration): Observable<Metric>;
    metricDeleteWithHttpInfo(metricId: string, _options?: Configuration): Observable<HttpInfo<MetricDelete202Response>>;
    metricDelete(metricId: string, _options?: Configuration): Observable<MetricDelete202Response>;
    metricGetWithHttpInfo(metricId: string, _options?: Configuration): Observable<HttpInfo<Metric>>;
    metricGet(metricId: string, _options?: Configuration): Observable<Metric>;
    metricUpdateWithHttpInfo(metricId: string, metricCreate: MetricCreate, _options?: Configuration): Observable<HttpInfo<Metric>>;
    metricUpdate(metricId: string, metricCreate: MetricCreate, _options?: Configuration): Observable<Metric>;
    metricsGetWithHttpInfo(name: string, description: string, label: string, dataSource: string, typeIds: string, rankIds: string, domainIds: string, ownerIds: string, graphIds: string, levelIds: string, platformIds: string, productIds: string, attractionChannelIds: string, _options?: Configuration): Observable<HttpInfo<Array<Metric>>>;
    metricsGet(name: string, description: string, label: string, dataSource: string, typeIds: string, rankIds: string, domainIds: string, ownerIds: string, graphIds: string, levelIds: string, platformIds: string, productIds: string, attractionChannelIds: string, _options?: Configuration): Observable<Array<Metric>>;
}
import { PlatformsApiRequestFactory, PlatformsApiResponseProcessor } from "../apis/PlatformsApi";
export declare class ObservablePlatformsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PlatformsApiRequestFactory, responseProcessor?: PlatformsApiResponseProcessor);
    platformsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Platform>>>;
    platformsGet(_options?: Configuration): Observable<Array<Platform>>;
}
import { ProductApiRequestFactory, ProductApiResponseProcessor } from "../apis/ProductApi";
export declare class ObservableProductApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor);
    productsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Product>>>;
    productsGet(_options?: Configuration): Observable<Array<Product>>;
}
import { StatusesApiRequestFactory, StatusesApiResponseProcessor } from "../apis/StatusesApi";
export declare class ObservableStatusesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: StatusesApiRequestFactory, responseProcessor?: StatusesApiResponseProcessor);
    statusesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Status>>>;
    statusesGet(_options?: Configuration): Observable<Array<Status>>;
}
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export declare class ObservableTypesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    typesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Type>>>;
    typesGet(_options?: Configuration): Observable<Array<Type>>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    rolesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<RolesGet200ResponseInner>>>;
    rolesGet(_options?: Configuration): Observable<Array<RolesGet200ResponseInner>>;
    usersGetWithHttpInfo(role: string, _options?: Configuration): Observable<HttpInfo<Array<User>>>;
    usersGet(role: string, _options?: Configuration): Observable<Array<User>>;
}
