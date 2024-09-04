import { MetricShort } from "../../../../../../../../hierarchy-metric-client";
import { cutText } from "../../../../../../../../utils/cutText";
import { getTextWidth } from "../../../../../../../../utils/getTextWidth";

const getTrendIcon = (isDynamicsPositive: boolean) => {
	return `<path class="${
		isDynamicsPositive ? "trend-icon" : "trend-icon upside-down"
	}" d="M11.4241 1.97009L8.75625 2.29151C8.66785 2.30223 8.63035 2.41071 8.6933 2.47366L9.4875 3.26785L6.46071 6.29464L5.09732 4.93259C5.01294 4.84821 4.87768 4.84955 4.79464 4.93259L0.486157 9.24241C0.466218 9.26255 0.455032 9.28974 0.455032 9.31808C0.455032 9.34642 0.466218 9.37361 0.486157 9.39375L1.08884 9.9991C1.13035 10.0406 1.19866 10.0406 1.24018 9.9991L4.94598 6.29464L6.30803 7.65669C6.39241 7.73973 6.52767 7.73973 6.61071 7.65669L10.2455 4.02455L11.0397 4.81875C11.054 4.83291 11.0719 4.84279 11.0915 4.84727C11.111 4.85176 11.1315 4.85065 11.1504 4.8441C11.1694 4.83754 11.1862 4.82579 11.1988 4.81018C11.2114 4.79457 11.2194 4.77573 11.2219 4.7558L11.5433 2.08794C11.5527 2.01964 11.4937 1.96071 11.4241 1.97009Z" fill="${
		isDynamicsPositive ? "#33A000" : "red"
	}"/>`;
};

const getMetricValue = (
	value: number | undefined,
	valuePostfix: string | undefined,
) => {
	if (!value) return "";
	const renderedValue = valuePostfix ? `${value} ${valuePostfix}` : value;
	return `
		<span>
			${cutText(renderedValue.toString(), 10)}
		</span>
	`;
};

const getValueDynamics = (
	dynamics: number | undefined,
	isDynamicsPositive: boolean,
) => {
	if (!dynamics) return "";

	const dynamicsClass = isDynamicsPositive
		? "metric-dynamics metric-percent-positive"
		: "metric-dynamics metric-percent-negative";

	return `
		<span class="${dynamicsClass}">
			${dynamics}%
		</span>
	`;
};

export const getMetricInfo = (metric: MetricShort | undefined) => {
	const isDynamicsPositive = metric?.dynamics ? metric.dynamics >= 0 : false;

	const trendIcon = !metric?.dynamics
		? ""
		: isDynamicsPositive
			? getTrendIcon(true)
			: getTrendIcon(false);

	const value = metric?.value;
	const valuePostfix = metric?.valuePostfix;
	let renderedValue = "";
	if (value && valuePostfix) renderedValue = `${value} ${valuePostfix}`;
	else if (value) renderedValue = value.toString();

	const valueTextWidht =
		renderedValue.length > 0
			? getTextWidth(renderedValue, "24px sans-serif")
			: 0;
	const trendIconOffset = 24 + valueTextWidht + 8;

	const shortName = metric?.name ? cutText(metric.name, 25) : "";

	return `
		<g transform="translate(${trendIconOffset}, 120)">
			${trendIcon}
		</g>
		<foreignObject width="400" height="200">
			<div class="node-container" xmlns="http://www.w3.org/1999/xhtml">
				<h3 class="node-heading">${shortName}</h3>
				<div class="node-values">
					${getMetricValue(metric?.value, metric?.valuePostfix)}
					${getValueDynamics(metric?.dynamics, isDynamicsPositive)}
				</div>
			</div>
		</foreignObject>
	`;
};
