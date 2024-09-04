import {
	Configuration,
	Status,
	StatusesApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets domains list.
 * @param {Configuration} options - API's configuration
 */
export const useGetStatuses = (options?: Configuration | undefined) => {
	const api = new StatusesApi(configuration);
	const request = useGetRequest<Status[]>(() => api.statusesGet(options));
	return request;
};
