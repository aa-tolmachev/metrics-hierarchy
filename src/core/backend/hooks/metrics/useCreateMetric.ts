// import { useContext } from "react";
// import { ApiContext } from "../../../frontend/ApiContext/ApiContext";
import { useCallback, useContext } from "react";

import {
	Configuration,
	MetricCreate,
} from "../../../../hierarchy-metric-client";
import { MetricsContext } from "../../../frontend/MetricsContext";

/**
 * Creates metric.
 * @param {Configuration} options - API's configuration
 */
export const useCreateMetric = (options?: Configuration) => {
	const api = useContext(MetricsContext);

	const request = useCallback(
		(newMetricValues: MetricCreate) => {
			return api.metricCreate(newMetricValues, options);
		},
		[api, options],
	);

	return request;
};
