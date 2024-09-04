import { parseHTML } from "../../../utils/parseHTML";
import { MetricTableData } from "../types";

export const QueryExampleTemplate = (data: MetricTableData) => {
	return parseHTML(data.queryExample);
};
