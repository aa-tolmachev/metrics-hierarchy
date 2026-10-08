import { MetricUser } from "../../../../../../../../hierarchy-metric-client";
import { escapeHTML } from "../../../../../../../../utils/escapeHTML";

export const getOwner = (owner: MetricUser | undefined) => {
	if (!owner || !owner.name) return "";
	return `<span class="owner">${escapeHTML(owner.name)}</span>`;
};
