import { FC } from "react";

import { GraphUpdate } from "../../hierarchy-metric-client";
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
		<div className="fixed flex gap-2" style={{ top: 10, right: 10 }}>
			<CreateMetricButton />
			<AddExistingMetricsButton />
			<CreateRelationButton />
			<SaveMetricGraphButton onSaveMetricGraph={onSaveMetricGraph} />
			<CloneMetricGraphButton />
		</div>
	);
};
