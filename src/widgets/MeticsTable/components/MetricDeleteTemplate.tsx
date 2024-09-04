import { MetricTableData } from "../types";

export const MetricDeleteTemplate = (data: MetricTableData) => {
	const enabledClassNames = "text-primary cursor-pointer";
	const disabledClassNames = "text-color-secondary";

	const computedClassNames = data.onMetricDelete
		? enabledClassNames
		: disabledClassNames;

	return (
		<i
			className={`pi pi-trash ${computedClassNames}`}
			onClick={data.onMetricDelete}
		/>
	);
};
