import { Node as VisNode } from "vis";

import { Node as GraphNode } from "../../../../../../../hierarchy-metric-client";
import { getNodeImage } from "./getNodeImage/getNodeImage";

interface ExtendedNode extends VisNode {
	metricId: number | undefined;
}

export const mapNode = (node: GraphNode): ExtendedNode => ({
	id: node.id,
	metricId: node.metric?.id,
	shape: "image",
	image: getNodeImage(node.metric),
	x: node.coordinates?.x ?? undefined,
	y: node.coordinates?.y ?? undefined,
});
