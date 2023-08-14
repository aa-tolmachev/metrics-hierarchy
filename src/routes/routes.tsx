import { Navigate, useRoutes } from "react-router-dom";
import { PATH } from "./paths";
import { GraphWrapper } from "../wrappers/GraphWrapper";
import { FullMetric } from "../widgets/FullMetric/FullMetric";

export const AppRouter = () => {
  return useRoutes([
    {
      path: PATH.main,
      element: <GraphWrapper />,
      children: [{ index: true, element: <Navigate to="metrics" /> }],
    },
    {
      path: PATH.metrics,
      element: <GraphWrapper />,
      children: [
        {
          path: PATH.metric,
          element: <FullMetric />,
        },
      ],
    },
  ]);
};
