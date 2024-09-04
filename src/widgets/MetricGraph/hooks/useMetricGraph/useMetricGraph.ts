import { useUpdateEffect } from "ahooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Options } from "vis";

import { RelationsTypeConnectionEnum } from "../../../../hierarchy-metric-client";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { removeFirstMetricNode } from "../../../../store/reducer/addMetricNodeReducer";
import { removeCreateRelation } from "../../../../store/reducer/createRelationReducer";
import { useGetMetricGraphData } from "./useGetMetricGraphData/useGetMetricGraphData";
import { getNodeImage } from "./useGetMetricGraphData/utils/mapNode/getNodeImage/getNodeImage";

export const useMetricGraph = (onClick: (e: any) => void) => {
	const router = useRouter();
	const { data, rawData, error } = useGetMetricGraphData(
		router.query.graph?.toString(),
	);

	useEffect(() => {
		if (error && (error.code === 404 || error.code === 500)) {
			router.replace(`/graphs`);
		}
	}, [error, router]);

	const dispatch = useAppDispatch();

	const createdMetricNodes = useAppSelector(
		(state) => state.addMetricNodes.metrics,
	);
	const typeConnection = useAppSelector(
		(state) => state.createRelation.typeConnection,
	);
	const graph = useAppSelector((state) => state.metricGraph.data);

	useUpdateEffect(() => {
		if (!graph || createdMetricNodes.length === 0) return;

		graph.disableEditMode();
		graph.addNodeMode();
	}, [createdMetricNodes, graph]);

	useUpdateEffect(() => {
		if (!graph || !typeConnection) return;

		graph.disableEditMode();
		graph.addEdgeMode();
	}, [typeConnection, graph]);

	const options: Options = {
		physics: {
			enabled: false,
		},
		autoResize: true,
		layout: {
			improvedLayout: false,
		},
		manipulation: {
			addNode: (nodeData: any, callback: any) => {
				if (typeConnection) return;
				nodeData.shape = "image";
				nodeData.image = getNodeImage(createdMetricNodes[0]);
				nodeData.label = "";
				nodeData.metricId = createdMetricNodes[0].id;
				callback(nodeData);
				dispatch(removeFirstMetricNode());
			},
			addEdge: (edgeData: any, callback: any) => {
				if (createdMetricNodes.length > 0) return;
				try {
					if (edgeData.from === edgeData.to) {
						throw new Error(
							"Нельзя добавить связь метрики с самой собой!",
							{ cause: "selfRelation" },
						);
					}
					edgeData.dashes =
						typeConnection === RelationsTypeConnectionEnum.Soft;
					edgeData.typeConnection = typeConnection;
					callback(edgeData);
				} catch (error: any) {
					if ("cause" in error && error.cause === "selfRelation") {
						alert(error.message);
					} else {
						console.error(error);
					}
				} finally {
					dispatch(removeCreateRelation());
					graph.disableEditMode();
				}
			},
		},
	};

	const events = {
		click: onClick,
	};

	return { data, rawData, options, events };
};
