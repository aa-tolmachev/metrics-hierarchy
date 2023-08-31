import Graphin, { IG6GraphEvent, Behaviors } from "@antv/graphin";
import { FC } from "react";
import { registerMetric } from "./components";
import { useGraphData } from "./utils/hooks/useGraphData/useGraphData";
import { useMetricGraph } from "./utils/hooks/useMetricGraph/useMetricGraph";
import { getLayoutType } from "./utils/getLayoutType";
import styles from "./MetricGraph.module.scss";
import { MetricGraphControls } from "./MetricGraphControls/MetricGraphControls";

interface MetricGraphProps {
  onMetricClick: (e: IG6GraphEvent) => void;
}

export const MetricGraph: FC<MetricGraphProps> = ({ onMetricClick }) => {
  registerMetric();

  const { graphRef, onResetGraph } = useMetricGraph(onMetricClick);

  const data = useGraphData();
  if (!data)
    return (
      <div className={styles.emptyField}>
        <MetricGraphControls />
      </div>
    );

  const { graph, source } = data;

  const { ActivateRelations, DragNodeWithForce } = Behaviors;

  return (
    <>
      <MetricGraphControls onResetGraph={onResetGraph} />
      <Graphin
        style={{
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#F5F5F5",
        }}
        data={graph}
        layout={{
          type: getLayoutType(source),
          center: [0, 0],
          nodeSize: 140,
          rankdir: "LR",
        }}
        ref={graphRef}
      >
        <DragNodeWithForce autoPin />
        <ActivateRelations trigger="click" />
      </Graphin>
    </>
  );
};
