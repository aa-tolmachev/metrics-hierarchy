import {
	Configuration,
	User,
	UsersApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets users list.
 * @param {string} role - user's role
 * @param {Configuration} options - API's configuration
 */
export const useGetUsers = (role: string, options?: Configuration) => {
	const api = new UsersApi(configuration);
	const request = useGetRequest<User[]>(() => api.usersGet(role, options));
	return request;
};
