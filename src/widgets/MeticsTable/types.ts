import { Metric } from "../../hierarchy-metric-client";

interface MetricDataOverride {
	dimensions: string;
	granularities: string;
	owner: string;
	status: string;
	rank: string;
	type: string;
	domain: string;
	graphs: string;
	product: string;
	platform: string;
	attractionChannel: string;
	level: string;
}

export interface MetricTableData
	extends Omit<Metric, keyof MetricDataOverride>,
		MetricDataOverride {
	onMetricEdit: VoidFunction;
	onMetricDelete?: VoidFunction;
}
