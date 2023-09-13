import Graphin, { IG6GraphEvent, Behaviors, GraphinData } from "@antv/graphin";
import { FC } from "react";
import { registerMetric } from "./components";
import { useGraphData } from "./utils/hooks/useGraphData";
import { useMetricGraph } from "./utils/hooks/useMetricGraph";
import { getLayoutType } from "./utils/getLayoutType";
import styles from "./MetricGraph.module.scss";
import { MetricGraphControls } from "./MetricGraphControls/MetricGraphControls";
import { useGraphDirection } from "./utils/hooks/useGraphDirection";

interface MetricGraphProps {
  onMetricClick: (e: IG6GraphEvent) => void;
}

export const MetricGraph: FC<MetricGraphProps> = ({ onMetricClick }) => {
  registerMetric();

  const { graphRef, onResetGraph } = useMetricGraph(onMetricClick);

  const [graphDirection, setGraphDirection] = useGraphDirection();

  const data = useGraphData();
  if (!data)
    return (
      <div className={styles.emptyField}>
        <MetricGraphControls graphDirection={graphDirection} />
      </div>
    );

  const { graph, source } = data;

  const {
    ActivateRelations,
    DragNodeWithForce,
    DragCanvas,
    BrushSelect,
    LassoSelect,
  } = Behaviors;

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
          combos: [
            {
              id: "comboA",
              label: "AAAAAAAAAAAAAAAAAa",
            },
          ],
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
        <ActivateRelations trigger="click" />
      </Graphin>
    </>
  );
};
