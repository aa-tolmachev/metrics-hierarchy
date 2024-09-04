import {
	Configuration,
	Domain,
	DomainsApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets domains list.
 * @param {Configuration} options - API's configuration
 */
export const useGetDomains = (options?: Configuration | undefined) => {
	const api = new DomainsApi(configuration);
	const request = useGetRequest<Domain[]>(() => api.domainsGet(options));
	return request;
};
