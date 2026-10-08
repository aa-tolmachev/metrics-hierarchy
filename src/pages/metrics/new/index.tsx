import { useEffect } from "react";

import { PageCard } from "../../../components/PageCard/PageCard";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import {
	removeFullMetric,
	updateFullMetricState,
} from "../../../store/reducer/fullMetricReducer";
import { FullMetric } from "../../../widgets/FullMetric/FullMetric";

export default function MetricPage() {
	const dispatch = useAppDispatch();

	const { state: fullMetricState } = useAppSelector(
		(state) => state.fullMetric,
	);

	useEffect(() => {
		dispatch(updateFullMetricState("create"));

		return () => {
			dispatch(removeFullMetric());
		};
	}, [dispatch]);

	if (fullMetricState !== "create") return null;

	return (
		<PageCard>
			<FullMetric />
		</PageCard>
	);
}
