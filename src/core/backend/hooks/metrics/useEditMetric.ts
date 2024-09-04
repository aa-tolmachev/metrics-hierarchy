// import { useContext } from "react";
// import { ApiContext } from "../../../frontend/ApiContext/ApiContext";
import { useCallback, useContext } from "react";

import {
	Configuration,
	MetricCreate,
} from "../../../../hierarchy-metric-client";
import { MetricsContext } from "../../../frontend/MetricsContext";

/**
 * Edits metric.
 * @param {Configuration} options - API's configuration
 */
export const useEditMetric = (options?: Configuration) => {
	const api = useContext(MetricsContext);

	const request = useCallback(
		(id: string, newMetricValues: MetricCreate) => {
			return api.metricUpdate(id, newMetricValues, options);
		},
		[api, options],
	);

	return request;
};
