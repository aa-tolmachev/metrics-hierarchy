import { MetricCreate } from "../../hierarchy-metric-client";

export type ChangeMetricFunc = (
	key: keyof MetricCreate,
	value: string | number | undefined,
) => void;

export type EditedMetric = Partial<MetricCreate>;

export interface MetricSectionProps {
	editedMetric?: EditedMetric;
}

export interface MetricSectionEditableProps extends MetricSectionProps {
	changeEditedMetric: ChangeMetricFunc;
}
