import { EdgeType } from "./types";

/**
 * Returns style part of the Edge object.
 * @param {EdgeType} type - type of the edge
 */
export const getEdgeStyle = (type?: EdgeType) => {
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
