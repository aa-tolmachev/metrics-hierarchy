import { MetricGraphSource } from "../../../store/reducers/types";

export const getLayoutType = (source: MetricGraphSource) => {
  switch (source) {
    case "config":
      return "dagre";
    case "localStorage":
    default:
      return "preset";
  }
};
