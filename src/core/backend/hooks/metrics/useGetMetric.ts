import { useContext } from "react";

import { Configuration, Metric } from "../../../../hierarchy-metric-client";
import { MetricsContext } from "../../../frontend/MetricsContext";
import { useGetRequest } from "../useGetRequest";

/**
 * Gets metric by id.
 * @param {string} id - metric's id
 * @param {Configuration} options - API's configuration
 */
export const useGetMetric = (
	id: string | undefined,
	options?: Configuration | undefined,
) => {
	const api = useContext(MetricsContext);
	const request = useGetRequest<Metric>(() => {
		if (id) return api.metricGet(id, options);
	}, id);
	return request;
};
