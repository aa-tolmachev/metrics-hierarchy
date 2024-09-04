import { MetricCreate } from "../../../hierarchy-metric-client";
import { purifyHTML } from "../../../utils/purifyHTML";

export const prepareEditedMetric = (metric: MetricCreate): MetricCreate => {
	return {
		...metric,
		description: metric.description ? purifyHTML(metric.description) : "",
	};
};
