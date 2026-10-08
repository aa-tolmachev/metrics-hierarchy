import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { FC } from "react";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionProps } from "../../types";

export const DeleteMetricControls: FC<MetricSectionProps> = () => {
	const router = useRouter();

	const graph = useAppSelector((state) => state.metricGraph.data);
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (!usedMetric || !graph) return null;

	return (
		<Button
			icon="pi pi-trash"
			severity="danger"
			text
			rounded
			tooltip="Убрать метрику с графа"
			tooltipOptions={{ position: "bottom" }}
			onClick={() => {
				graph.deleteSelected();
				if (router.query.graph)
					router.push(`/graphs/${router.query.graph}`);
			}}
		/>
	);
};
