import { useCallback, useContext } from "react";

import { Configuration } from "../../../../hierarchy-metric-client";
import { MetricsContext } from "../../../frontend/MetricsContext";

export const useDeleteMetric = (options?: Configuration) => {
	const api = useContext(MetricsContext);

	const request = useCallback(
		(id: string) => {
			return api.metricDelete(id, options);
		},
		[api, options],
	);

	return request;
};
