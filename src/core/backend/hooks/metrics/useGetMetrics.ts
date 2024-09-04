import { useContext } from "react";

import { Metric } from "../../../../hierarchy-metric-client";
import { MetricsContext } from "../../../frontend/MetricsContext";
import { useGetRequest } from "../useGetRequest";
import { MetricFilters } from "./types";

/**
 * Gets all metrics.
 */
export const useGetMetrics = (filters: MetricFilters) => {
	const api = useContext(MetricsContext);
	const request = useGetRequest<Metric[]>(() =>
		api.metricsGet(
			filters.name ?? "",
			filters.description ?? "",
			filters.label ?? "",
			filters.type ?? "",
			filters.dataSource ?? "",
			filters.rank?.toString() ?? "",
			filters.domain?.toString() ?? "",
			filters.owner?.toString() ?? "",
			filters.graphs.length > 0 ? filters.graphs.join(",") : "",
			filters.level ?? "",
			filters.platform ?? "",
			filters.product ?? "",
			filters.attractionChannel ?? "",
		),
	);
	return request;
};
