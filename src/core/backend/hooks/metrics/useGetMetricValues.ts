import { useCallback } from "react";

import { backendApi } from "../../../frontend/configuration";
import { useGetRequest } from "../useGetRequest";

export interface MetricValue {
	date: string;
	value: number;
}

/**
 * Gets daily metric values.
 * Эндпоинта нет в OpenAPI-клиенте, поэтому запрос делается напрямую.
 * @param {string} id - metric's id
 * @param {number} days - period length in days
 */
export const useGetMetricValues = (id: string | undefined, days = 30) => {
	const getValues = useCallback(() => {
		if (!id) return undefined;
		return fetch(`${backendApi}/metrics/${id}/values?days=${days}`).then(
			(response) => {
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				return response.json() as Promise<MetricValue[]>;
			},
		);
	}, [id, days]);

	return useGetRequest<MetricValue[]>(getValues, id, days);
};
