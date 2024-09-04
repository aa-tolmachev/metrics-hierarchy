import {
	Configuration,
	RolesGet200ResponseInner,
	UsersApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets roles list.
 * @param {Configuration} options - API's configuration
 */
export const useGetRoles = (options?: Configuration) => {
	const api = new UsersApi(configuration);
	const request = useGetRequest<RolesGet200ResponseInner[]>(() =>
		api.rolesGet(options),
	);
	return request;
};
