import "normalize.css";
import { MetricGraph } from "./widgets/MetricGraph/MetricGraph";
import { useCallback, useState } from "react";
import { IG6GraphEvent } from "@antv/graphin";
import { MetricModal } from "./widgets/MetricModal/MetricModal";
import { MetricConfig } from "./core/types/metric";
import { Provider } from "react-redux";
import { store } from "./store";

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
      <MetricGraph onMetricClick={onMetricClick} />
      {chosenMetric && (
        <MetricModal metric={chosenMetric} onCancel={onCancel} />
      )}
    </Provider>
  );
}

export default App;
