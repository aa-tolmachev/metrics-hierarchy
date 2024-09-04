import {
	AttractionChannel,
	AttractionChannelsApi,
	Configuration,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets attraction channels list.
 * @param {Configuration} options - API's configuration
 */
export const useGetAttractionChannels = (
	options?: Configuration | undefined,
) => {
	const api = new AttractionChannelsApi(configuration);
	const request = useGetRequest<AttractionChannel[]>(() =>
		api.attractionChannelsGet(options),
	);
	return request;
};
