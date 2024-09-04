import dynamic from "next/dynamic";
import { Toast } from "primereact/toast";
import { FC, ReactNode, useEffect, useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { FullSizeWrapper } from "../../components/FullSizeWrapper";
import { MetricLegend } from "../../components/MetricLegend/MetricLegend";
import { usePutMetricGraph } from "../../core/backend/hooks/metricGraphs/usePutMetricGraph";
import { store } from "../../store";
import { MetricGraphControlButtons } from "../../widgets/MetricGraphControlButtons/MetricGraphControlButtons";
import styles from "./MetricGraphLayout.module.scss";

const MetricGraph = dynamic(
	() => import("../../widgets/MetricGraph/MetricGraph"),
	{ ssr: false },
);

interface MetricGraphLayoutProps {
	children?: ReactNode;
}

export const MetricGraphLayout: FC<MetricGraphLayoutProps> = ({ children }) => {
	const { data, loading, error, updateGraph } = usePutMetricGraph();

	const saveGraphLoadingRef = useRef<Toast>(null);
	const saveGraphSuccessRef = useRef<Toast>(null);
	const saveGraphErrorRef = useRef<Toast>(null);

	useEffect(() => {
		if (loading) {
			saveGraphLoadingRef.current?.show({
				severity: "info",
				summary: "Граф сохраняется...",
				life: 0,
			});
		} else {
			saveGraphLoadingRef.current?.clear();
		}
	}, [loading]);

	useEffect(() => {
		if (data && !error) {
			saveGraphSuccessRef.current?.show({
				severity: "success",
				summary: "Граф успешно сохранён!",
				life: 3000,
				closable: true,
			});
		}
	}, [data, error]);

	useEffect(() => {
		if (error) {
			const summary =
				"message" in error
					? error.message
					: typeof error === "string"
						? error
						: "Произошла ошибка при сохранении графа.";
			saveGraphErrorRef.current?.show({
				severity: "success",
				summary,
				life: 3000,
				closable: true,
			});
		}
	}, [error]);

	return (
		<ReduxProvider store={store}>
			<FullSizeWrapper>
				{children}
				<Toast ref={saveGraphLoadingRef} />
				<Toast ref={saveGraphSuccessRef} />
				<Toast ref={saveGraphErrorRef} />
				<MetricGraph />
				<MetricLegend className={styles.legend} />
				<MetricGraphControlButtons onSaveMetricGraph={updateGraph} />
			</FullSizeWrapper>
		</ReduxProvider>
	);
};
