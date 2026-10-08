import { Node as VisNode } from "vis";

import { Node as GraphNode } from "../../../../../../../hierarchy-metric-client";
import { NodePositions } from "../../../../../../../utils/graphPositionsStorage";
import { getNodeImage } from "./getNodeImage/getNodeImage";

interface ExtendedNode extends VisNode {
	metricId: number | undefined;
}

export const mapNode =
	(savedPositions: NodePositions) =>
	(node: GraphNode): ExtendedNode => {
		const saved = node.id ? savedPositions[node.id] : undefined;
		return {
			id: node.id,
			metricId: node.metric?.id,
			shape: "image",
			image: getNodeImage(node.metric),
			x: saved?.x ?? node.coordinates?.x ?? undefined,
			y: saved?.y ?? node.coordinates?.y ?? undefined,
		};
	};
