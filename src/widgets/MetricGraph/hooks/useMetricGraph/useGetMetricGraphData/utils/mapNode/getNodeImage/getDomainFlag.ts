import { MetricShort } from "../../../../../../../../hierarchy-metric-client";

export const getDomainFlag = (metric: MetricShort) => {
	return `<path d="M0 8C0 3.58173 3.58172 0 16 0V0V200V200C3.58172 200 0 196.418 0 192V8Z" fill="#${metric.domain?.color}"/>`;
};
