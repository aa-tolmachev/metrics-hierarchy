import cx from "classnames";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { FC } from "react";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionProps } from "../../types";
import styles from "./DeleteMetricControls.module.scss";

export const DeleteMetricControls: FC<MetricSectionProps> = () => {
	const router = useRouter();
	const wrapperClassName = cx("flex flex-row gap-3 relative", styles.wrapper);

	const graph = useAppSelector((state) => state.metricGraph.data);
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (!usedMetric) return null;

	return (
		<div className={wrapperClassName}>
			<Button
				severity="secondary"
				onClick={() => {
					if (graph) {
						graph.deleteSelected();
						if (router.query.graph)
							router.push(`/graphs/${router.query.graph}`);
					}
				}}
			>
				Удалить метрику с графа
			</Button>
		</div>
	);
};
