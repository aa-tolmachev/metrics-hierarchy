import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Typography } from "../../components/Typography/Typography";
import { usePutMetricGraph } from "../../core/backend/hooks/metricGraphs/usePutMetricGraph";

interface CreateMetricGraphDialogProps {
	onHide: VoidFunction;
}

export const CreateMetricGraphDialog: FC<CreateMetricGraphDialogProps> = ({
	onHide,
}) => {
	const router = useRouter();
	const { data, updateGraph } = usePutMetricGraph();

	const [newGraphName, setNewGraphName] = useState("");

	useEffect(() => {
		if (data?.id) {
			router.push(`graphs/${data.id}`);
		}
	}, [data, router]);

	return (
		<Dialog visible onHide={onHide}>
			<div className="flex flex-column gap-4">
				<Typography component="h3">Создать граф</Typography>
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
				<Button
					disabled={newGraphName === ""}
					onClick={() => {
						updateGraph(uuidv4(), {
							name: newGraphName,
							nodes: [],
						});
					}}
				>
					Создать
				</Button>
			</div>
		</Dialog>
	);
};
