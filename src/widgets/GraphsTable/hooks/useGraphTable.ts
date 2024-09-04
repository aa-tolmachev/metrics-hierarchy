import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";

import { GraphShort } from "../../../hierarchy-metric-client";
import { mapGraphToTableData } from "../utils/mapGraphToTableData";

export const useGraphTable = (
	graphs: GraphShort[],
	onGraphEdit: (graph: GraphShort) => void,
) => {
	const { push, prefetch } = useRouter();

	useEffect(() => {
		graphs.forEach((graph) => {
			prefetch(`/graphs/${graph.id}`);
		});
	}, [graphs, prefetch]);

	const onGraphClick = useCallback(
		(graphId: string) => {
			push(`/graphs/${graphId}`);
		},
		[push],
	);

	const graphData = useMemo(
		() => graphs.map(mapGraphToTableData(onGraphClick, onGraphEdit)),
		[graphs, onGraphClick, onGraphEdit],
	);

	return graphData;
};
