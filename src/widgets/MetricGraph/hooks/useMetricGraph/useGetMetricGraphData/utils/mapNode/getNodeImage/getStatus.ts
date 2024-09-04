import { Status } from "../../../../../../../../hierarchy-metric-client";

export const getStatus = (
	status: Status | undefined,
	statusTextBadgeOffset: number,
	statusBadgeWidth: number,
	statusTextOffset: number,
) => {
	if (!status || !status.name) return "";
	return `
		<rect x="${statusTextBadgeOffset}" y="150" rx="10" ry="10" width="${statusBadgeWidth}" height="40" fill="#fffbfb" stroke-width="4" stroke="#ece6e6"/>
		<text x="${statusTextOffset}" y="180" class="metric-status">
			${status.name}
		</text>
	`;
};
