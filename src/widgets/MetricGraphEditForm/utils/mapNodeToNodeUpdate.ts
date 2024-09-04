import { Node, NodeUpdate } from "../../../hierarchy-metric-client";

export const mapNodeToNodeUpdate = (node: Node): NodeUpdate => ({
	...node,
	metricId: node.metric?.id,
});
