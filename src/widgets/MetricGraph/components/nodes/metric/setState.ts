/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const setState = (name: string, _: any, node: any) => {
  const group = node.getContainer();
  const container = group.get("children")[0];
  switch (name) {
    case "active":
      container.attr("shadowColor", "#474747");
      break;
    case "inactive":
      container.attr("shadowColor", undefined);
      break;
    default:
      container.attr("shadowColor", undefined);
  }
};
