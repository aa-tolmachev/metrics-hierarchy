import { FC } from "react";

import { GraphUpdate } from "../../hierarchy-metric-client";
import styles from "./MetricGraphControlButtons.module.scss";
import { AddExistingMetricsButton } from "./components/AddExistingMetricButton/AddExistingMetricButton";
import { CloneMetricGraphButton } from "./components/CloneMetricGraphButton/CloneMetricGraphButton";
import { CreateMetricButton } from "./components/CreateMetricButton/CreateMetricButton";
import { CreateRelationButton } from "./components/CreateRelationButton/CreateRelationButton";
import { SaveMetricGraphButton } from "./components/SaveMetricGraphButton/SaveMetricGraphButton";

interface MetricGraphControlButtonsProps {
	onSaveMetricGraph: (id: string, graphUpdate: GraphUpdate) => Promise<void>;
}

export const MetricGraphControlButtons: FC<MetricGraphControlButtonsProps> = ({
	onSaveMetricGraph,
}) => {
	return (
		<div className={styles.toolbar}>
			<CreateMetricButton />
			<AddExistingMetricsButton />
			<CreateRelationButton />
			<CloneMetricGraphButton />
			<span className={styles.divider} />
			<SaveMetricGraphButton onSaveMetricGraph={onSaveMetricGraph} />
		</div>
	);
};
