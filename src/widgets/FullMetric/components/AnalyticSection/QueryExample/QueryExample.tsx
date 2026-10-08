import { InputTextarea } from "primereact/inputtextarea";
import { FC } from "react";

import { Section } from "../../../../../components/Section/Section";
import { Metric } from "../../../../../hierarchy-metric-client";
import { isHTML } from "../../../../../utils/htmlToText";
import { parseHTML } from "../../../../../utils/parseHTML";
import { MetricSectionEditableProps } from "../../../types";
import styles from "../AnalyticSection.module.scss";

interface QueryExampleProps extends MetricSectionEditableProps {
	metric: Metric | undefined;
}

export const QueryExample: FC<QueryExampleProps> = ({
	metric,
	editedMetric,
	changeEditedMetric,
}) => {
	if (editedMetric)
		return (
			<Section title="SQL">
				<InputTextarea
					className={styles.code}
					autoResize
					rows={6}
					spellCheck={false}
					placeholder="SELECT …"
					value={editedMetric.queryExample}
					onChange={(e) => {
						changeEditedMetric("queryExample", e.target.value);
					}}
				/>
			</Section>
		);

	const query = metric?.queryExample?.trim();
	if (!query) return null;

	return (
		<Section title="SQL">
			<pre className={styles.code}>
				{isHTML(query) ? parseHTML(query) : query}
			</pre>
		</Section>
	);
};
