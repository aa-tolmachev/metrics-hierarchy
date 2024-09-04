import {
	Configuration,
	Level,
	LevelsApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets levels list.
 * @param {Configuration} options - API's configuration
 */
export const useGetLevels = (options?: Configuration | undefined) => {
	const api = new LevelsApi(configuration);
	const request = useGetRequest<Level[]>(() => api.levelsGet(options));
	return request;
};
