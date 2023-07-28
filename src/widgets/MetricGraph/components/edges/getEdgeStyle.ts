import { MetricEdgeType } from "../../../../core/types/metric";

/**
 * Returns style part of the Edge object.
 * @param {MetricEdgeType} type - type of the edge
 */
export const getEdgeStyle = (type?: MetricEdgeType) => {
  switch (type) {
    case "weakRelated":
      return {
        keyshape: {
          lineWidth: 2,
          lineDash: [4, 4],
          endArrow: {
            path: "M 0,0 L 8,4 L 8,-4 Z",
            fill: "#DDDDDD",
            stroke: "transparent",
          },
        },
      };
    default:
      return {
        keyshape: {
          lineWidth: 2,
        },
      };
  }
};
