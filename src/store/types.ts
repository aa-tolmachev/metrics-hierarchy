import {
	Metric,
	RelationsTypeConnectionEnum,
} from "../hierarchy-metric-client";

export interface GlobalMenuState {
	isOpen: boolean;
}

export interface MetricGraphState {
	name?: string;
	authorId?: number;
	data?: any;
}

export interface AddMetricNodesState {
	metrics: Metric[];
}

export interface CreateRelationState {
	typeConnection?: RelationsTypeConnectionEnum;
}

export type PerformMetricAction = "create" | "edit" | "default";

export interface FullMetricState {
	usedMetric?: Metric;
	state?: PerformMetricAction;
}
