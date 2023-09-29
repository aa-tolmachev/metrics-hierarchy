/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const getShapes = (node: any) => {
  const group = node.getContainer();
  const shapes = group.get("children");
  const container = shapes[0];
  const collapseBadge = shapes[11];
  const collapsePlus = shapes[12];

  return { container, collapseBadge, collapsePlus };
};
