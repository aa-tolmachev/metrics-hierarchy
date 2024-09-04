import { MetricTableData } from "../types";

export const MetricDashboardTemplate = (data: MetricTableData) => {
	return (
		<a className="text-primary" href={data.refToBoard}>
			<i className="pi pi-external-link cursor-pointer" />
		</a>
	);
};
