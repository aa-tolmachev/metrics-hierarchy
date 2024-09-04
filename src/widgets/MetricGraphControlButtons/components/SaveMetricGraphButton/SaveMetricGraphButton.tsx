import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { FC } from "react";

import { GraphUpdate } from "../../../../hierarchy-metric-client";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { mapDataToGraphUpdate } from "../../../../utils/mapDataToGraphUpdate";

interface SaveMetricGraphButtonProps {
	onSaveMetricGraph: (id: string, graphUpdate: GraphUpdate) => Promise<void>;
}

export const SaveMetricGraphButton: FC<SaveMetricGraphButtonProps> = ({
	onSaveMetricGraph,
}) => {
	const router = useRouter();

	const currentGraph = useAppSelector((state) => state.metricGraph);

	const onClick = () => {
		if (
			router.query.graph &&
			typeof router.query.graph === "string" &&
			currentGraph
		) {
			if (!currentGraph.name) throw new Error("Нет имени графа");
			const graphUpdate = mapDataToGraphUpdate(
				currentGraph.name,
				currentGraph.authorId,
				currentGraph.data,
				false,
			);
			onSaveMetricGraph(router.query.graph, graphUpdate);
		}
	};

	return <Button onClick={onClick}>Сохранить изменения</Button>;
};
