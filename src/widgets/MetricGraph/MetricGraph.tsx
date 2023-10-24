import Graphin, { Behaviors } from "@antv/graphin";
import { registerMetric } from "./components";
import { useGraphData } from "./utils/hooks/useGraphData";
import { useMetricGraph } from "./utils/hooks/useMetricGraph/useMetricGraph";
import { getLayoutType } from "./utils/getLayoutType";
import styles from "./MetricGraph.module.scss";
import { MetricGraphControls } from "./MetricGraphControls/MetricGraphControls";
import { useGraphDirection } from "./utils/hooks/useGraphDirection";
import { useRef } from "react";
import { useCombos } from "./utils/hooks/combos/useCombos";
import { useAddCombo } from "./MetricGraphControls/ComboNodesButton/utils/hooks/useAddCombo";
import { createCombo } from "./MetricGraphControls/ComboNodesButton/utils/createCombo";
import { useDeserializeData } from "./utils/hooks/useDeserializeData";

export const MetricGraph = () => {
  useDeserializeData();
  registerMetric();

  const graphRef = useRef<Graphin>(null);

  const data = useGraphData();

  const combos = useCombos();

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
        data={{
          ...graph,
          combos,
        }}
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
