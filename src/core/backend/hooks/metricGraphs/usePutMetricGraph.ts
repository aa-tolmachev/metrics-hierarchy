import { useCallback, useContext, useState } from "react";

import {
	Configuration,
	Graph,
	GraphUpdate,
} from "../../../../hierarchy-metric-client";
import { GraphsContext } from "../../../frontend/GraphsContext";

/**
 * Edits metric graph.
 * @param {Configuration} options - API's configuration
 */

export const usePutMetricGraph = (options?: Configuration) => {
	const api = useContext(GraphsContext);

	const [data, setData] = useState<Graph>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>();

	const updateGraph = useCallback(
		async (id: string, graphUpdate: GraphUpdate) => {
			setLoading(true);
			try {
				const result = await api.graphUpdate(id, graphUpdate, options);
				setData(result);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		},
		[api, options],
	);

	return { data, loading, error, updateGraph };
};
