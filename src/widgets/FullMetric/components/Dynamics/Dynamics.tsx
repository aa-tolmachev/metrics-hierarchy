import { Chart } from "primereact/chart";
import { FC, useMemo } from "react";

import { Pill } from "../../../../components/Pill/Pill";
import { Section } from "../../../../components/Section/Section";
import { useGetMetricValues } from "../../../../core/backend/hooks/metrics/useGetMetricValues";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionProps } from "../../types";
import styles from "./Dynamics.module.scss";

const PERIOD_DAYS = 30;
const LINE_COLOR = "#4f8ef7";

const formatNumber = (value: number) =>
	value.toLocaleString("ru-RU", { maximumFractionDigits: 2 });

const formatDay = (date: string) =>
	new Date(date).toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "short",
	});

export const Dynamics: FC<MetricSectionProps> = ({ editedMetric }) => {
	const { usedMetric } = useAppSelector((state) => state.fullMetric);
	const metricId =
		usedMetric && "id" in usedMetric ? usedMetric.id.toString() : undefined;
	const { data: values, loading } = useGetMetricValues(
		editedMetric ? undefined : metricId,
		PERIOD_DAYS,
	);

	const postfix = usedMetric?.valuePostfix ?? "";

	const chartData = useMemo(
		() => ({
			labels: values?.map(({ date }) => formatDay(date)) ?? [],
			datasets: [
				{
					data: values?.map(({ value }) => value) ?? [],
					borderColor: LINE_COLOR,
					backgroundColor: "rgba(79, 142, 247, 0.08)",
					borderWidth: 2,
					fill: true,
					tension: 0.35,
					pointRadius: 0,
					pointHoverRadius: 4,
					pointHoverBackgroundColor: LINE_COLOR,
				},
			],
		}),
		[values],
	);

	const chartOptions = useMemo(
		() => ({
			maintainAspectRatio: false,
			interaction: { mode: "index", intersect: false },
			plugins: {
				legend: { display: false },
				tooltip: {
					displayColors: false,
					callbacks: {
						label: (context: any) =>
							`${formatNumber(context.parsed.y)} ${postfix}`.trim(),
					},
				},
			},
			scales: {
				x: {
					grid: { display: false },
					border: { display: false },
					ticks: {
						color: "#9ca3af",
						font: { size: 11 },
						maxRotation: 0,
						autoSkip: true,
						maxTicksLimit: 6,
					},
				},
				y: {
					grid: { color: "#f1f2f4" },
					border: { display: false },
					ticks: {
						color: "#9ca3af",
						font: { size: 11 },
						maxTicksLimit: 5,
						callback: (value: number) => formatNumber(value),
					},
				},
			},
		}),
		[postfix],
	);

	if (editedMetric || !metricId) return null;

	const first = values?.[0]?.value;
	const last = values?.[values.length - 1]?.value;
	const change =
		first !== undefined && last !== undefined && first !== 0
			? ((last - first) / Math.abs(first)) * 100
			: undefined;

	return (
		<Section title={`Динамика за ${PERIOD_DAYS} дней`}>
			{values && values.length > 0 ? (
				<>
					<div className={styles.summary}>
						<span className={styles.value}>
							{formatNumber(last!)}
							{postfix && (
								<span className={styles.postfix}>
									{postfix}
								</span>
							)}
						</span>
						{change !== undefined && (
							<Pill
								color={change >= 0 ? "#15803d" : "#b91c1c"}
								background={change >= 0 ? "#dcfce7" : "#fee2e2"}
							>
								{change >= 0 ? "▲" : "▼"}{" "}
								{formatNumber(Math.abs(change))}%
							</Pill>
						)}
					</div>
					<div className={styles.chart}>
						<Chart
							type="line"
							data={chartData}
							options={chartOptions}
							className="h-full"
						/>
					</div>
				</>
			) : (
				<span className={styles.empty}>
					{loading ? "Загрузка…" : "Нет данных о значениях метрики"}
				</span>
			)}
		</Section>
	);
};
