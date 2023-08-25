export const isMetricPath = (path: string) => {
  const pathArray = path.split("/");
  if (pathArray.length > 2) return true;
  return false;
};
