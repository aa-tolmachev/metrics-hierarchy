import { useEffect } from "react";

import { SidePanel } from "../../../../components/SidePanel/SidePanel";
import { MetricGraphLayout } from "../../../../layouts/MetricGraphLayout/MetricGraphLayout";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import {
	removeFullMetric,
	updateFullMetricState,
} from "../../../../store/reducer/fullMetricReducer";
import { useCloseGraphSidePanel } from "../../../../utils/useCloseGraphSidePanel";
import { FullMetric } from "../../../../widgets/FullMetric/FullMetric";

export default function FullMetricPage() {
	const dispatch = useAppDispatch();

	const fullMetricState = useAppSelector((state) => state.fullMetric.state);

	const closePanel = useCloseGraphSidePanel(fullMetricState);

	useEffect(() => {
		dispatch(updateFullMetricState("create"));

		return () => {
			dispatch(removeFullMetric());
		};
	}, [dispatch]);

	if (!fullMetricState) return null;
	return (
		<SidePanel onCancel={closePanel}>
			<FullMetric />
		</SidePanel>
	);
}

FullMetricPage.getLayout = function getLayout(page: any) {
	return <MetricGraphLayout>{page}</MetricGraphLayout>;
};
