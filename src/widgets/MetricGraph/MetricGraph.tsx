import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import Graph from "react-graph-vis";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import {
	addMetricGraphAuthorId,
	addMetricGraphData,
	addMetricGraphName,
	removeMetricGraph,
} from "../../store/reducer/metricGraphReducer";
import { useMetricGraph } from "./hooks/useMetricGraph/useMetricGraph";

const MetricGraph = () => {
	const router = useRouter();

	const dispatch = useAppDispatch();
	const graphRef = useRef<any>();

	useEffect(() => {
		if (graphRef.current)
			dispatch(addMetricGraphData(graphRef.current.Network));
		return () => {
			dispatch(removeMetricGraph());
		};
	}, [dispatch]);

	const graph = useAppSelector((state) => state.metricGraph.data);

	const openNodeOnClick = useCallback(
		(e: any) => {
			if (!graph || e.nodes.length === 0) return;
			const existingNodes = graph.body.data.nodes._data;
			const clickedNode = existingNodes.get(e.nodes[0]);
			if (!clickedNode || !clickedNode.metricId) return;
			if (typeof router.query.graph === "string")
				router.push(
					`/graphs/${router.query.graph}/${clickedNode.metricId}`,
				);
		},
		[graph, router],
	);

	const { data, rawData, events, options } = useMetricGraph(openNodeOnClick);

	useEffect(() => {
		if (rawData) {
			if (rawData.name) dispatch(addMetricGraphName(rawData.name));
			if (rawData.author?.id)
				dispatch(addMetricGraphAuthorId(rawData.author?.id));
		}
	}, [dispatch, rawData]);

	useEffect(() => {
		if (!rawData || !rawData.nodes) return;
		data.nodes?.forEach((node) => {
			const prefetchedNode = rawData.nodes!.find(
				(rawNode) => rawNode.id === node.id,
			);
			if (prefetchedNode?.metric?.id && router.query.graph)
				router.prefetch(
					`/graphs/${router.query.graph}/${prefetchedNode?.metric.id}`,
				);
		});
	}, [data.nodes, rawData, router]);

	if (!data) return null;

	return (
		<Graph ref={graphRef} graph={data} events={events} options={options} />
	);
};

export default MetricGraph;
