import { MetricUser } from "../../../../../../../../hierarchy-metric-client";

export const getOwner = (
	owner: MetricUser | undefined,
	ownerBadgeWidth: number,
) => {
	if (!owner || !owner.name) return "";
	return `
		<rect x="24" y="150" rx="10" ry="10" width="${ownerBadgeWidth}" height="40" fill="#ff4344"/>
		<text x="35" y="180" class="metric-owner">
			${owner.name}
		</text>
	`;
};
