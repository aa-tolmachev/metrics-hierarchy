import { MetricTableData } from "../types";

export const MetricEditTemplate = (data: MetricTableData) => {
	return (
		<i
			className="pi pi-pencil cursor-pointer text-primary"
			onClick={data.onMetricEdit}
		/>
	);
};
