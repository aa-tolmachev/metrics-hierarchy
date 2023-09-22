import { MetricEdgeType } from "../../_models/merticGraph/metricEdge";
import { EDGE_COLOR } from "./constants";

/**
 * Returns style part of the Edge object.
 * @param {MetricEdgeType} type - type of the edge
 */
export const getEdgeStyle = (type?: MetricEdgeType) => {
  switch (type) {
    case "Soft":
      return {
        keyshape: {
          stroke: EDGE_COLOR,
          lineWidth: 2,
          lineDash: [4, 4],
          endArrow: {
            path: "M 0,0 L 8,4 L 8,-4 Z",
            fill: EDGE_COLOR,
            stroke: "transparent",
          },
        },
      };
    default:
      return {
        keyshape: {
          stroke: EDGE_COLOR,
          lineWidth: 2,
        },
      };
  }
};
