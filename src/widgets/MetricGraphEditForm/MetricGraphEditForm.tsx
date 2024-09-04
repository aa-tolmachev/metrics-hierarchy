import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { FC, useState } from "react";

import { Typography } from "../../components/Typography/Typography";
import { usePutMetricGraph } from "../../core/backend/hooks/metricGraphs/usePutMetricGraph";
import { useGetUsers } from "../../core/backend/hooks/metrics/dictionaries/useGetUsers";
import { Graph } from "../../hierarchy-metric-client";
import { mapNodeToNodeUpdate } from "./utils/mapNodeToNodeUpdate";

interface MetricGraphEditFormProps {
	graph: Graph;

	onEdit: VoidFunction;
}

export const MetricGraphEditForm: FC<MetricGraphEditFormProps> = ({
	graph,
	onEdit,
}) => {
	const { data: owners } = useGetUsers("Owner");
	const [name, setName] = useState(graph.name ?? "");
	const [authorId, setAuthorId] = useState(graph.author?.id);

	const { updateGraph } = usePutMetricGraph();

	if (!graph.id) throw new Error("Граф должен иметь id!");

	return (
		<article className="flex flex-column gap-3">
			<Typography component="h3">Редактировать граф</Typography>
			<div className="flex flex-column gap-2">
				<Typography component="span">Изменить название</Typography>
				<InputText
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div className="flex flex-column gap-2">
				<Typography component="span">Изменить владельца</Typography>
				<Dropdown
					value={authorId}
					onChange={(e) => {
						setAuthorId(e.value);
					}}
					options={owners}
					optionLabel="name"
					optionValue="id"
				/>
			</div>
			<Button
				label="Редактировать"
				onClick={async () => {
					await updateGraph(graph.id!, {
						name,
						authorId,
						nodes: graph.nodes?.map(mapNodeToNodeUpdate),
					});
					onEdit();
				}}
			/>
		</article>
	);
};
