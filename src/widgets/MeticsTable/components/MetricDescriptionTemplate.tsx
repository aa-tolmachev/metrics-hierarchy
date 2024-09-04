import { parseHTML } from "../../../utils/parseHTML";
import { MetricTableData } from "../types";

export const MetricDescriptionTemplate = (data: MetricTableData) => {
	return parseHTML(data.description);
};
