import {
	Configuration,
	DimensionInner,
	DimensionsApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets metric dimensions list.
 * @param {Configuration} options - API's configuration
 */
export const useGetDimensions = (options?: Configuration | undefined) => {
	const api = new DimensionsApi(configuration);
	const request = useGetRequest<DimensionInner[]>(() =>
		api.dimensionsGet(options),
	);
	return request;
};
