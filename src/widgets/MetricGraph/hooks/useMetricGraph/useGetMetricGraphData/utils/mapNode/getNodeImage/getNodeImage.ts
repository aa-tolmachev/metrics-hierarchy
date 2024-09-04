import {
	Metric,
	MetricShort,
	MetricUser,
} from "../../../../../../../../hierarchy-metric-client";
import { cutText } from "../../../../../../../../utils/cutText";
import { getTextWidth } from "../../../../../../../../utils/getTextWidth";
import { getDomainFlag } from "./getDomainFlag";
import { getMetricInfo } from "./getMetricInfo";
import { getOwner } from "./getOwner";
import { getStatus } from "./getStatus";
import { CONTAINER, EXPAND_ICON } from "./images";
import { STYLES } from "./styles";

export const getNodeImage = (metric: MetricShort | undefined) => {
	if (!metric) return undefined;

	const { owner, status } = metric as Metric;

	let preparedOwner: MetricUser | undefined = undefined;
	let ownerBadgeWidth = 0;
	if (owner?.name) {
		preparedOwner = {
			...owner,
			name: cutText(owner.name, 10),
		};
		const ownerTextWidth = getTextWidth(
			preparedOwner.name!,
			"24px sans-serif",
		);
		ownerBadgeWidth = ownerTextWidth > 0 ? ownerTextWidth + 20 : 0;
	}

	const statusTextBadgeOffset =
		ownerBadgeWidth > 0 ? 24 + ownerBadgeWidth + 8 : 24;
	const statusTextOffset =
		statusTextBadgeOffset > 0 ? statusTextBadgeOffset + 14 : 0;
	const statusTextWidth =
		status && status.name
			? getTextWidth(status.name, "24px sans-serif")
			: 0;
	const statusBadgeWidth = statusTextWidth > 0 ? statusTextWidth + 20 : 0;

	return (
		"data:image/svg+xml;charset=utf-8, " +
		encodeURIComponent(
			`<svg  xmlns="http://www.w3.org/2000/svg" width="400" height="200">
				${STYLES}
				${CONTAINER}
				${getDomainFlag(metric)}
				${EXPAND_ICON}
				${getMetricInfo(metric)}
				${getOwner(preparedOwner ?? undefined, ownerBadgeWidth)}
				${getStatus(status ?? undefined, statusTextBadgeOffset, statusBadgeWidth, statusTextOffset)}
			</svg>`,
		)
	);
};
