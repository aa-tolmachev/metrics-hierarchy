import { useContext } from "react";

import { GraphShort } from "../../../../hierarchy-metric-client";
import { GraphsContext } from "../../../frontend/GraphsContext";
import { useGetRequest } from "../useGetRequest";

/**
 * Gets all graphs.
 */
export const useGetMetricGraphs = () => {
	const api = useContext(GraphsContext);
	const request = useGetRequest<GraphShort[]>(() => api.graphsGet());

	return request;
};
