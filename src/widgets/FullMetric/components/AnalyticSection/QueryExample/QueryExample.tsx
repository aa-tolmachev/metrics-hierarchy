import { Editor } from "primereact/editor";
import { FC } from "react";

import { Typography } from "../../../../../components/Typography/Typography";
import { Metric } from "../../../../../hierarchy-metric-client";
import { parseHTML } from "../../../../../utils/parseHTML";
import { MetricSectionEditableProps } from "../../../types";

interface QueryExampleProps extends MetricSectionEditableProps {
	metric: Metric | undefined;
}

export const QueryExample: FC<QueryExampleProps> = ({
	metric,
	editedMetric,
	changeEditedMetric,
}) => {
	if (!editedMetric && !metric) return null;

	const content = editedMetric ? (
		<Editor
			value={editedMetric.queryExample}
			onTextChange={(e) => {
				changeEditedMetric("queryExample", e.htmlValue ?? "");
			}}
			style={{ height: "200px" }}
		/>
	) : (
		parseHTML(metric!.queryExample)
	);

	return (
		<div className="flex flex-column gap-2">
			<Typography component="h3">
				Пример запроса для расчета метрики
			</Typography>
			{content}
		</div>
	);
};
