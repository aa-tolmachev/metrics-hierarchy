import { Edge } from "vis";

import {
	Node as GraphNode,
	Relations,
	RelationsTypeConnectionEnum,
} from "../../../../../../hierarchy-metric-client";

interface ExtendedEdge extends Edge {
	typeConnection?: RelationsTypeConnectionEnum;
}

const mapRelation = (relation: Relations): ExtendedEdge => ({
	id: relation.id,
	from: relation.fromNode,
	to: relation.toNode,
	typeConnection: relation.typeConnection,
	dashes: relation.typeConnection === RelationsTypeConnectionEnum.Soft,
});

export const mapNodeToEdges = (node: GraphNode): Edge[] => {
	const { id, relations } = node;
	if (!id) throw new Error("no node id");
	if (!relations || relations.length === 0) return [];
	return relations.map(mapRelation);
};
