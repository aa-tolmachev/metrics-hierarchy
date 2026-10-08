import { MetricShort } from "../../../../../../../../hierarchy-metric-client";
import { getDomainFlag } from "./getDomainFlag";
import { getMetricInfo } from "./getMetricInfo";
import { getOwner } from "./getOwner";
import { getStatus } from "./getStatus";
import { CONTAINER, EXPAND_ICON } from "./images";
import { STYLES } from "./styles";

export const getNodeImage = (metric: MetricShort | undefined) => {
	if (!metric) return undefined;

	return (
		"data:image/svg+xml;charset=utf-8, " +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
				${STYLES}
				${CONTAINER}
				${getDomainFlag(metric)}
				<foreignObject x="8" y="0" width="392" height="200">
					<div class="card" xmlns="http://www.w3.org/1999/xhtml">
						<div class="meta">
							${getStatus(metric.status ?? undefined)}
							${getOwner(metric.owner ?? undefined)}
						</div>
						${getMetricInfo(metric)}
					</div>
				</foreignObject>
				${EXPAND_ICON}
			</svg>`,
		)
	);
};
