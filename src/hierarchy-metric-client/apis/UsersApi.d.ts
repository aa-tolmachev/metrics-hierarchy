import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { RolesGet200ResponseInner } from '../models/RolesGet200ResponseInner';
import { User } from '../models/User';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    rolesGet(_options?: Configuration): Promise<RequestContext>;
    usersGet(role: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    rolesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RolesGet200ResponseInner>>>;
    usersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<User>>>;
}
