import { Graph } from "@antv/graphin";
import { MetricSubGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";

export const makeNodesCollapsed = (
  graph: Graph,
  subGraphs: MetricSubGraph[]
) => {
  graph.getNodes().forEach((node) => {
    const isCollapsed = !!subGraphs.find(
      (subGraph) => subGraph.id === node.get<string>("id")
    );
    if (isCollapsed) node.setState("collapsed", true);
  });
};
