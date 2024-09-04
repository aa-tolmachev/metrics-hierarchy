import { Metric } from "../../../../../hierarchy-metric-client";
import { AppDispatch } from "../../../../../store";
import { addMetricNodes } from "../../../../../store/reducer/addMetricNodeReducer";

export const addMetricsById = (
	metricIds: number[],
	metrics: Metric[],
	dispatch: AppDispatch,
) => {
	const addedMetrics: Metric[] = [];
	metricIds.forEach((metricId) => {
		const addedMetric = metrics.find((metric) => metric.id === metricId);
		if (addedMetric) addedMetrics.push(addedMetric);
	});
	dispatch(addMetricNodes(addedMetrics));
};
