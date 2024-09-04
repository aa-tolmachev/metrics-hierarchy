import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { FC, useEffect, useMemo, useState } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { MetricFilters } from "../../../../core/backend/hooks/metrics/types";
import { useGetMetrics } from "../../../../core/backend/hooks/metrics/useGetMetrics";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { SetState } from "../../../../utils";
import { AddExistingMetricsFilters } from "./AddExistingMetricFilters";
import { addMetricsById } from "./utils/addMetricById";

interface AddExistingMetricContentProps {
	setOpenModal: SetState<boolean>;
}

const NO_METRIC_FILTERS: MetricFilters = {
	domain: "",
	name: "",
	description: "",
	label: "",
	type: "",
	owner: "",
	dataSource: "",
	graphs: [],
	rank: "",
	level: "",
	platform: "",
	product: "",
	attractionChannel: "",
};

export const AddExistingMetricsContent: FC<AddExistingMetricContentProps> = ({
	setOpenModal,
}) => {
	const dispatch = useAppDispatch();

	const [filters, setFilters] = useState<MetricFilters>(NO_METRIC_FILTERS);

	const { data: metrics, reload } = useGetMetrics(filters);
	const graph = useAppSelector((state) => state.metricGraph.data);

	const [metricIds, setMetricIds] = useState<number[]>([]);

	useEffect(() => {
		reload();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters]);

	// exclude metrics already exist on graph
	const externalMetrics = useMemo(() => {
		return metrics?.filter((metric) => {
			const existingNodes = Array.from(graph.body.data.nodes._data);
			return !existingNodes.find(
				(nodeData: any) => nodeData[1].metricId === metric.id,
			);
		});
	}, [metrics, graph]);

	const disabled = metricIds.length === 0 || !externalMetrics;

	return (
		<div className="flex flex-column gap-3">
			<Typography component="h3">Добавить метрику</Typography>
			<AddExistingMetricsFilters
				filters={filters}
				setFilters={setFilters}
			/>
			<div className="flex flex-column gap-2">
				<Typography component="strong">Метрика:</Typography>
				<MultiSelect
					options={externalMetrics}
					value={metricIds}
					onChange={(e) => setMetricIds(e.value)}
					optionLabel="name"
					optionValue="id"
					virtualScrollerOptions={{
						itemSize: 30,
					}}
				/>
			</div>
			<Button
				disabled={disabled}
				className="align-self-start"
				onClick={() => {
					if (disabled) return;
					addMetricsById(metricIds, externalMetrics, dispatch);
					setOpenModal(false);
				}}
			>
				Добавить
			</Button>
		</div>
	);
};
