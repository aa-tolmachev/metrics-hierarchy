import { MetricShort } from "../../../../../../../../hierarchy-metric-client";
import { escapeHTML } from "../../../../../../../../utils/escapeHTML";

const formatNumber = (value: number) =>
	value.toLocaleString("ru-RU", { maximumFractionDigits: 2 });

const getMetricValue = (
	value: number | undefined,
	valuePostfix: string | undefined,
) => {
	if (value === undefined || value === null)
		return `<span class="value value-empty">—</span>`;
	const postfix = valuePostfix
		? `<span class="postfix">${escapeHTML(valuePostfix)}</span>`
		: "";
	return `<span class="value">${formatNumber(value)}${postfix}</span>`;
};

const getValueDynamics = (dynamics: number | undefined) => {
	if (!dynamics) return "";
	const isPositive = dynamics > 0;
	const className = isPositive
		? "dynamics dynamics-positive"
		: "dynamics dynamics-negative";
	return `<span class="${className}">${isPositive ? "▲" : "▼"} ${formatNumber(Math.abs(dynamics))}%</span>`;
};

export const getMetricInfo = (metric: MetricShort) => `
	<div class="name">${escapeHTML(metric.name ?? "")}</div>
	<div class="values">
		${getMetricValue(metric.value, metric.valuePostfix)}
		${getValueDynamics(metric.dynamics)}
	</div>
`;
