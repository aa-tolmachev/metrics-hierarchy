import "normalize.css";
import { MetricGraph } from "./widgets/MetricGraph/MetricGraph";
import { useCallback, useState } from "react";
import { IG6GraphEvent } from "@antv/graphin";
import { MetricConfig } from "./core/types/metric";
import { Provider } from "react-redux";
import { store } from "./store";
import { FullMetric } from "./widgets/FullMetric/FullMetric";

function App() {
  const [chosenMetric, setChosenMetric] = useState<MetricConfig>();

  const onMetricClick = useCallback((e: IG6GraphEvent) => {
    const item = e.item;
    if (!item) return;
    const metric = item.get<MetricConfig>("model");
    setChosenMetric(metric);
  }, []);

  const onCancel = () => setChosenMetric(undefined);

  return (
    <Provider store={store}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        {chosenMetric && (
          <FullMetric metric={chosenMetric} onCancel={onCancel} />
        )}
        <MetricGraph onMetricClick={onMetricClick} />
      </div>
    </Provider>
  );
}

export default App;
