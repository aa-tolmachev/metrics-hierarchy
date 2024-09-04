import { useContext } from "react";

import { Graph } from "../../../../hierarchy-metric-client";
import { GraphsContext } from "../../../frontend/GraphsContext";
import { useGetRequest } from "../useGetRequest";

/**
 * Gets graph by id.
 * @param {string} id - graph's id
 */
export const useGetMetricGraph = (id: string | undefined) => {
	const api = useContext(GraphsContext);
	const request = useGetRequest<Graph | undefined>(() => {
		if (id) return api.graphGet(id);
	});
	return request;
};
