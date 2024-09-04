import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

import { PageWithMenuWrapper } from "../../components/PageWithMenuWrapper/PageWithMenuWrapper";
import { Typography } from "../../components/Typography/Typography";
import { MetricFilters } from "../../core/backend/hooks/metrics/types";
import { useGetMetrics } from "../../core/backend/hooks/metrics/useGetMetrics";
import { MetricsTable } from "../../widgets/MeticsTable/MetricsTable";

export default function MetricsPage() {
	const router = useRouter();
	const [filters, setFilters] = useState<MetricFilters>({
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
	});

	const { data: metrics, reload } = useGetMetrics(filters);

	useEffect(() => {
		reload();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters]);

	return (
		<PageWithMenuWrapper>
			<div className="p-4 flex flex-column gap-6">
				<div className="flex justify-content-between">
					<Typography component="h1">Метрики</Typography>
					<Button
						onClick={() => {
							router.push("/metrics/new");
						}}
					>
						Создать метрику
					</Button>
				</div>
				<MetricsTable
					metrics={metrics ?? []}
					filters={filters}
					setFilters={setFilters}
					reloadMetrics={reload}
				/>
			</div>
		</PageWithMenuWrapper>
	);
}
