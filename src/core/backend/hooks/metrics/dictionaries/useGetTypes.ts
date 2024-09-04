import {
	Configuration,
	Type,
	TypesApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets metric types list.
 * @param {Configuration} options - API's configuration
 */
export const useGetTypes = (options?: Configuration | undefined) => {
	const api = new TypesApi(configuration);
	const request = useGetRequest<Type[]>(() => api.typesGet(options));
	return request;
};
