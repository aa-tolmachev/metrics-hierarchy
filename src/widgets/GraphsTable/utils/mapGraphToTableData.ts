import { GraphShort } from "../../../hierarchy-metric-client";
import { GraphTableData } from "../types";

export const mapGraphToTableData =
	(
		onGraphClick: (graphId: string) => void,
		onGraphEdit: (graph: GraphShort) => void,
	) =>
	(graph: GraphShort): GraphTableData => {
		const { id, name, author } = graph;
		return {
			name,
			author: author?.name,
			onGraphClick: () => onGraphClick(id!),
			onGraphEdit: () => onGraphEdit(graph),
		};
	};
