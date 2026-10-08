import { Edge } from "vis";

import {
	Node as GraphNode,
	Relations,
	RelationsTypeConnectionEnum,
} from "../../../../../../hierarchy-metric-client";

export const SOFT_RELATION_DASHES = [4, 4];

interface ExtendedEdge extends Edge {
	typeConnection?: RelationsTypeConnectionEnum;
}

const mapRelation = (relation: Relations): ExtendedEdge => ({
	id: relation.id,
	from: relation.fromNode,
	to: relation.toNode,
	typeConnection: relation.typeConnection,
	dashes:
		relation.typeConnection === RelationsTypeConnectionEnum.Soft
			? SOFT_RELATION_DASHES
			: false,
});

export const mapNodeToEdges = (node: GraphNode): Edge[] => {
	const { id, relations } = node;
	if (!id) throw new Error("no node id");
	if (!relations || relations.length === 0) return [];
	return relations.map(mapRelation);
};
