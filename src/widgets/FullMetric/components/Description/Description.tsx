import { Editor } from "primereact/editor";
import { FC } from "react";

import { Section } from "../../../../components/Section/Section";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { parseHTML } from "../../../../utils/parseHTML";
import { MetricSectionEditableProps } from "../../types";
import styles from "./Description.module.scss";

export const Description: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (editedMetric)
		return (
			<Section title="Описание">
				<Editor
					value={editedMetric.description}
					onTextChange={(e) => {
						changeEditedMetric("description", e.htmlValue ?? "");
					}}
					style={{ height: "160px" }}
				/>
			</Section>
		);

	if (!usedMetric || !usedMetric.description?.trim()) return null;

	return (
		<Section title="Описание">
			<div className={styles.text}>
				{parseHTML(usedMetric.description)}
			</div>
		</Section>
	);
};
