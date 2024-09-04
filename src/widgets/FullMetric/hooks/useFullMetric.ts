import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { useCreateMetric } from "../../../core/backend/hooks/metrics/useCreateMetric";
import { useEditMetric } from "../../../core/backend/hooks/metrics/useEditMetric";
import { Metric, MetricCreate } from "../../../hierarchy-metric-client";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { addMetricNodes } from "../../../store/reducer/addMetricNodeReducer";
import {
	updateFullMetricState,
	updateFullMetricUsedMetric,
} from "../../../store/reducer/fullMetricReducer";
import { purifyHTML } from "../../../utils/purifyHTML";
import { EMPTY_METRIC } from "../constants";
import { ChangeMetricFunc, EditedMetric } from "../types";
import { mapMetricToEditedMetric } from "../utils/mapMetricToEditedMetric";
import { VALIDATE_METRIC_CAUSE } from "../utils/validateEditedMetric";

export const useFullMetric = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const { usedMetric, state: fullMetricState } = useAppSelector(
		(state) => state.fullMetric,
	);

	const [editedMetric, setEditedMetric] = useState<EditedMetric | undefined>(
		fullMetricState === "create"
			? EMPTY_METRIC
			: fullMetricState === "edit" && usedMetric
				? mapMetricToEditedMetric(usedMetric)
				: undefined,
	);

	useEffect(() => {
		if (fullMetricState === "create" || fullMetricState === "edit") {
			window.onbeforeunload = (event) => {
				event.preventDefault();
			};
		} else {
			window.onbeforeunload = null;
		}
		return () => {
			window.onbeforeunload = null;
		};
	}, [fullMetricState]);

	const startEditing = useCallback(() => {
		if (!usedMetric) throw new Error("There must be metric to edit!");
		setEditedMetric(mapMetricToEditedMetric(usedMetric));
		dispatch(updateFullMetricState("edit"));
	}, [dispatch, usedMetric]);

	const endEditing = useCallback(() => {
		setEditedMetric(undefined);
		dispatch(updateFullMetricState("default"));
	}, [dispatch]);

	const editMetric = useEditMetric();
	const createMetric = useCreateMetric();

	const finishEditing = useCallback(async () => {
		if (fullMetricState === "edit" && !usedMetric)
			throw new Error("Нет сохранённой метрики!");

		try {
			if (editedMetric /*&& validateEditedMetric(editedMetric)*/) {
				const preparedMetric = {
					...(editedMetric as MetricCreate),
					state: "создана",
					description: purifyHTML(
						(editedMetric as MetricCreate).description ?? "",
					),
				};

				let resultMetric: Metric | undefined = undefined;

				if (fullMetricState === "edit") {
					resultMetric = await editMetric(
						usedMetric!.id.toString(),
						preparedMetric,
					);
				} else {
					resultMetric = await createMetric(preparedMetric);
					if (router.query.graph)
						dispatch(addMetricNodes([resultMetric]));
					if (router.pathname === "/metrics/new")
						router.push("/metrics");
				}

				if (resultMetric) {
					dispatch(updateFullMetricUsedMetric(resultMetric));
				}
			}
			endEditing();
		} catch (error: any) {
			if ("cause" in error && error.cause === VALIDATE_METRIC_CAUSE) {
				alert(error);
				return;
			}
			// eslint-disable-next-line no-console
			console.error(error);
		}
	}, [
		createMetric,
		dispatch,
		editMetric,
		editedMetric,
		endEditing,
		fullMetricState,
		router,
		usedMetric,
	]);

	const changeEditedMetric: ChangeMetricFunc = useCallback((key, value) => {
		Object.getOwnPropertyNames(new MetricCreate());
		setEditedMetric((prev) => {
			if (!prev)
				throw new Error(
					"edited metric should be changed only in editing state",
				);
			const newMetric = { ...prev } as any;
			newMetric[key] = value;
			return newMetric;
		});
	}, []);

	return {
		editedMetric,
		fullMetricState,
		startEditing,
		endEditing,
		finishEditing,
		changeEditedMetric,
	};
};
