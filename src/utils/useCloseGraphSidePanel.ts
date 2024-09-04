import { useRouter } from "next/router";
import { useCallback } from "react";

import { PerformMetricAction } from "../store/types";
import { confirmWithoutSavingMetric } from "./confirmWithoutSavingMetric";

export const useCloseGraphSidePanel = (
	fullMetricState: PerformMetricAction | undefined,
) => {
	const router = useRouter();

	const redirectToGraph = useCallback(() => {
		if (router.query.graph) router.push(`/graphs/${router.query.graph}`);
	}, [router]);

	const closePanel = useCallback(() => {
		if (!fullMetricState || fullMetricState === "default") {
			redirectToGraph();
			return;
		}
		confirmWithoutSavingMetric(fullMetricState, redirectToGraph, undefined);
	}, [fullMetricState, redirectToGraph]);

	return closePanel;
};
