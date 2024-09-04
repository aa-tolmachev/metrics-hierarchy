import { Dialog } from "primereact/dialog";
import { FC } from "react";

import { useGetMetricGraph } from "../../../core/backend/hooks/metricGraphs/useGetMetricGraph";
import { GraphShort } from "../../../hierarchy-metric-client";
import { MetricGraphEditForm } from "../../MetricGraphEditForm/MetricGraphEditForm";

interface GraphEditDialogProps {
	graphShort: GraphShort;

	onHide: VoidFunction;
	onEdit: VoidFunction;
}

export const GraphEditDialog: FC<GraphEditDialogProps> = ({
	graphShort,
	onHide,
	onEdit,
}) => {
	const { data: graph } = useGetMetricGraph(graphShort.id!);
	if (graph)
		return (
			<Dialog className="w-20rem" visible onHide={onHide}>
				<MetricGraphEditForm graph={graph} onEdit={onEdit} />
			</Dialog>
		);
	return graph;
};
