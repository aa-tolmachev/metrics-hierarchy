import { MetricShort } from "../../../../../../../../hierarchy-metric-client";

export const getDomainFlag = (metric: MetricShort) => {
	if (!metric.domain?.color) return "";
	return `<rect width="8" height="200" fill="#${metric.domain.color}" clip-path="url(#card-clip)"/>`;
};
