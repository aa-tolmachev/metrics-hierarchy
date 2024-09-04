import {
	Configuration,
	Platform,
	PlatformsApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets platforms list.
 * @param {Configuration} options - API's configuration
 */
export const useGetPlatforms = (options?: Configuration | undefined) => {
	const api = new PlatformsApi(configuration);
	const request = useGetRequest<Platform[]>(() => api.platformsGet(options));
	return request;
};
