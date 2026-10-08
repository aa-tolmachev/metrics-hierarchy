import { useUpdateEffect } from "ahooks";
import { useRouter } from "next/router";
import { Data, Edge, Node as VisNode } from "vis";

import { useGetMetricGraph } from "../../../../../core/backend/hooks/metricGraphs/useGetMetricGraph";
import { Graph } from "../../../../../hierarchy-metric-client";
import { loadGraphPositions } from "../../../../../utils/graphPositionsStorage";
import { mapNode } from "./utils/mapNode";
import { mapNodeToEdges } from "./utils/mapNodeToEdges";

interface MetricGraphData {
	data: Data;
	rawData: Graph | undefined;
	loading: boolean;
	error: any;
}

export const useGetMetricGraphData = (
	id: string | undefined,
): MetricGraphData => {
	const { data: rawData, loading, reload, error } = useGetMetricGraph(id);

	const router = useRouter();
	useUpdateEffect(() => {
		reload();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.query.graph]);

	if (!rawData) {
		const data = { nodes: [], edges: [] };
		return { data, rawData, loading, error };
	}

	let graphNodes: VisNode[];
	let graphEdges: Edge[];
	const { nodes } = rawData;
	if (!nodes) {
		graphNodes = [];
		graphEdges = [];
	} else {
		const savedPositions = rawData.id ? loadGraphPositions(rawData.id) : {};
		graphNodes = nodes.map(mapNode(savedPositions));
		graphEdges = nodes.flatMap(mapNodeToEdges);
	}

	const data = { nodes: graphNodes, edges: graphEdges };

	return { data, rawData, loading, error };
};
