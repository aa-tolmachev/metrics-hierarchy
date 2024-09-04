import { v4 as uuidv4 } from "uuid";

import { GraphUpdate, NodeUpdate } from "../hierarchy-metric-client";

const mapNode =
	(edges: any[], createNewIds: boolean) =>
	(node: any): NodeUpdate => {
		const nodeEdges = edges.filter((edge) => edge.from === node.id);
		const relations = nodeEdges.map((edge) => ({
			id: createNewIds ? uuidv4() : edge.id,
			fromNode: edge.from,
			toNode: edge.to,
			typeConnection: edge.typeConnection,
		}));
		return {
			id: node.id,
			relations,
			metricId: node.metricId,
			coordinates: {
				x: Math.round(node.x),
				y: Math.round(node.y),
			},
		};
	};

export const mapDataToGraphUpdate = (
	graphName: string,
	authorId: number | undefined,
	graphData: any,
	createNewIds: boolean,
): GraphUpdate => {
	const nodePositions = graphData.getPositions();
	// первый элемент entry - id вершины
	// второй - объект { x, y }
	const positionEntries = Object.entries(nodePositions);

	const nodes = new Map<string, any>(graphData.body.data.nodes._data);

	positionEntries.forEach((entry) => {
		const nodeId = entry[0];
		const { x, y } = entry[1] as { x: number; y: number };

		const prevNode = nodes.get(nodeId);
		nodes.set(nodeId, { ...prevNode, x, y });
	});

	const nodeArray = Array.from(nodes, ([, value]) => value);
	const edgeArray = Array.from(
		graphData.body.data.edges._data,
		([, value]) => value,
	);
	const nodesUpdate = nodeArray.map(mapNode(edgeArray, createNewIds));

	if (createNewIds) {
		nodesUpdate.forEach((node) => {
			const oldNode = { ...node };

			node.id = uuidv4();

			nodesUpdate.forEach((innerNode) => {
				innerNode.relations?.forEach((relation) => {
					if (relation.fromNode === oldNode.id)
						relation.fromNode = node.id;
					if (relation.toNode === oldNode.id)
						relation.toNode = node.id;
				});
			});
		});
	}

	return {
		name: graphName,
		authorId,
		nodes: nodesUpdate,
	};
};
