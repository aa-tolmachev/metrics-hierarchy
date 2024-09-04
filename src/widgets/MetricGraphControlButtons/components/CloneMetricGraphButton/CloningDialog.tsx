import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FC, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Typography } from "../../../../components/Typography/Typography";
import { usePutMetricGraph } from "../../../../core/backend/hooks/metricGraphs/usePutMetricGraph";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { mapDataToGraphUpdate } from "../../../../utils/mapDataToGraphUpdate";

interface CloningDialogProps {
	onCloningSuccess: (newGraphId: string) => void;
	onCloningCancel: VoidFunction;
}

export const CloningDialog: FC<CloningDialogProps> = ({
	onCloningSuccess,
	onCloningCancel,
}) => {
	const { data, updateGraph } = usePutMetricGraph();

	const currentGraph = useAppSelector((state) => state.metricGraph);
	const [newGraphName, setNewGraphName] = useState(
		!currentGraph.name
			? ""
			: currentGraph.name.length < 24
				? `Копия ${currentGraph.name}`
				: currentGraph.name,
	);

	useEffect(() => {
		if (data?.id) {
			onCloningSuccess(data.id);
		}
	}, [data, onCloningSuccess]);

	const cloneGraph = useCallback(async () => {
		if (!currentGraph.name || !currentGraph.data)
			throw new Error("Нет текущего графа");

		const graphUpdate = mapDataToGraphUpdate(
			newGraphName,
			currentGraph.authorId,
			currentGraph.data,
			true,
		);

		const newGraphId = uuidv4();
		updateGraph(newGraphId, graphUpdate);
	}, [
		currentGraph.authorId,
		currentGraph.data,
		currentGraph.name,
		newGraphName,
		updateGraph,
	]);

	return (
		<Dialog className="w-20rem" visible onHide={onCloningCancel}>
			<div className="flex flex-column gap-4">
				<Typography component="h3">Копировать граф</Typography>
				<div className="flex flex-column gap-3">
					<Typography component="span">
						Название нового графа
					</Typography>
					<InputText
						value={newGraphName}
						onChange={(e) => {
							setNewGraphName(e.target.value);
						}}
					/>
				</div>
				<div className="flex gap-3">
					<Button
						label="Отменить"
						severity="secondary"
						onClick={onCloningCancel}
					/>
					<Button label="Копировать" onClick={cloneGraph} />
				</div>
			</div>
		</Dialog>
	);
};
