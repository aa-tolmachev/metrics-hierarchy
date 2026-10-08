import { Status } from "../../../../../../../../hierarchy-metric-client";
import { escapeHTML } from "../../../../../../../../utils/escapeHTML";
import { getStatusTone } from "../../../../../../../../utils/getStatusTone";

export const getStatus = (status: Status | undefined) => {
	if (!status || !status.name) return "";
	const { color, background } = getStatusTone(status.name);
	return `<span class="status" style="color: ${color}; background: ${background}">${escapeHTML(status.name)}</span>`;
};
