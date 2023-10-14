import Graphin, { Behaviors } from "@antv/graphin";
import { registerMetric } from "./components";
import { useGraphData } from "./utils/hooks/useGraphData";
import { useMetricGraph } from "./utils/hooks/useMetricGraph/useMetricGraph";
import { getLayoutType } from "./utils/getLayoutType";
import styles from "./MetricGraph.module.scss";
import { MetricGraphControls } from "./MetricGraphControls/MetricGraphControls";
import { useGraphDirection } from "./utils/hooks/useGraphDirection";
import { useRef } from "react";

export const MetricGraph = () => {
  registerMetric();

  const graphRef = useRef<Graphin>(null);

  const data = useGraphData();

  const { onResetGraph } = useMetricGraph(graphRef, data.graph);

  const [graphDirection, setGraphDirection] = useGraphDirection();

  if (!data)
    return (
      <div className={styles.emptyField}>
        <MetricGraphControls graphDirection={graphDirection} />
      </div>
    );

  const { graph, source } = data;

  const { DragNodeWithForce } = Behaviors;

  return (
    <>
      <MetricGraphControls
        graphDirection={graphDirection}
        onResetGraph={onResetGraph}
        setGraphDirection={setGraphDirection}
      />
      <Graphin
        style={{
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#f3f3f3",
        }}
        data={graph}
        layout={{
          type: getLayoutType(source),
          center: [0, 0],
          nodeSize: 140,
          rankdir: graphDirection,
        }}
        ref={graphRef}
      >
        <DragNodeWithForce autoPin />
      </Graphin>
    </>
  );
};
