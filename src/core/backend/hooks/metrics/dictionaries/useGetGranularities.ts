import {
	Configuration,
	GranularitiesApi,
	GranularityInner,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets granularities list.
 * @param {Configuration} options - API's configuration
 */
export const useGetGranularities = (options?: Configuration | undefined) => {
	const api = new GranularitiesApi(configuration);
	const request = useGetRequest<GranularityInner[]>(() =>
		api.granularitiesGet(options),
	);
	return request;
};
