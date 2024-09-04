import { Button } from "primereact/button";
import { useState } from "react";

import { PageWithMenuWrapper } from "../../components/PageWithMenuWrapper/PageWithMenuWrapper";
import { Typography } from "../../components/Typography/Typography";
import { useGetMetricGraphs } from "../../core/backend/hooks/metricGraphs/useGetMetricGraphs";
import { CreateMetricGraphDialog } from "../../widgets/CreateMetricGraphDialog/CreateMetricGraphDialog";
import { GraphsTable } from "../../widgets/GraphsTable/GraphsTable";

export default function MetricGraphsPage() {
	const { data: graphs, reload } = useGetMetricGraphs();
	const [openCreateMetricDialog, setOpenCreateMetricDialog] = useState(false);

	return (
		<PageWithMenuWrapper>
			{openCreateMetricDialog && (
				<CreateMetricGraphDialog
					onHide={() => setOpenCreateMetricDialog(false)}
				/>
			)}
			<div className="p-4 flex flex-column gap-6">
				<div className="flex justify-content-between">
					<Typography component="h1">Графы</Typography>
					<Button
						onClick={() => {
							setOpenCreateMetricDialog(true);
						}}
					>
						Создать граф
					</Button>
				</div>
				<GraphsTable graphs={graphs ?? []} onEditGraph={reload} />
			</div>
		</PageWithMenuWrapper>
	);
}
