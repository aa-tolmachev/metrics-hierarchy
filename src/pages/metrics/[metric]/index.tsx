import { useRouter } from "next/router";
import { useEffect } from "react";

import { PageCard } from "../../../components/PageCard/PageCard";
import { useGetMetric } from "../../../core/backend/hooks/metrics/useGetMetric";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import {
	removeFullMetric,
	updateFullMetricState,
	updateFullMetricUsedMetric,
} from "../../../store/reducer/fullMetricReducer";
import { FullMetric } from "../../../widgets/FullMetric/FullMetric";

export default function MetricPage() {
	const { query } = useRouter();
	const dispatch = useAppDispatch();

	const { data } = useGetMetric(query.metric?.toString());

	const { usedMetric, state: fullMetricState } = useAppSelector(
		(state) => state.fullMetric,
	);

	useEffect(() => {
		if (data) {
			dispatch(updateFullMetricUsedMetric(data));
			dispatch(updateFullMetricState("edit"));
		}

		return () => {
			dispatch(removeFullMetric());
		};
	}, [data, dispatch]);

	if (!usedMetric || !("id" in usedMetric) || fullMetricState !== "edit")
		return null;

	return (
		<PageCard>
			<FullMetric />
		</PageCard>
	);
}
