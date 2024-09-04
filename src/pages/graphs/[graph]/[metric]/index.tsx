import { useRouter } from "next/router";
import { useEffect } from "react";

import { SidePanel } from "../../../../components/SidePanel/SidePanel";
import { useGetMetric } from "../../../../core/backend/hooks/metrics/useGetMetric";
import { MetricGraphLayout } from "../../../../layouts/MetricGraphLayout/MetricGraphLayout";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import {
	removeFullMetric,
	updateFullMetricState,
	updateFullMetricUsedMetric,
} from "../../../../store/reducer/fullMetricReducer";
import { useCloseGraphSidePanel } from "../../../../utils/useCloseGraphSidePanel";
import { FullMetric } from "../../../../widgets/FullMetric/FullMetric";

export default function FullMetricPage() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const { usedMetric, state: fullMetricState } = useAppSelector(
		(state) => state.fullMetric,
	);
	const { data } = useGetMetric(router.query.metric?.toString());

	useEffect(() => {
		if (data) dispatch(updateFullMetricUsedMetric(data));
		dispatch(updateFullMetricState("default"));

		return () => {
			dispatch(removeFullMetric());
		};
	}, [data, dispatch]);

	const closePanel = useCloseGraphSidePanel(fullMetricState);

	if (!usedMetric) return null;
	return (
		<SidePanel onCancel={closePanel}>
			<FullMetric />
		</SidePanel>
	);
}

FullMetricPage.getLayout = function getLayout(page: any) {
	return <MetricGraphLayout>{page}</MetricGraphLayout>;
};
