import { FC, useState } from "react";

import { useGetDomains } from "../../core/backend/hooks/metrics/dictionaries/useGetDomains";
import { Typography } from "../Typography/Typography";
import { getMetricLegendRows } from "./utils/getMetricLegendRows";
import { mapDomain } from "./utils/mapDomain";

interface MetricLegendProps {
	className?: string;
}

export const MetricLegend: FC<MetricLegendProps> = ({ className }) => {
	const { data: domains } = useGetDomains();
	const legendElements = domains?.map(mapDomain) ?? [];
	const metricLegendRows = getMetricLegendRows(legendElements);

	const [open, setOpen] = useState(true);

	if (!open) return <></>;
	return (
		<article className={`border-round-lg bg-white ${className}`}>
			<div className="relative h-full flex flex-column align-items-center gap-4 p-4">
				<i
					className="pi pi-times-circle absolute text-xl cursor-pointer"
					style={{ top: 10, right: 10 }}
					onClick={() => setOpen(false)}
				/>
				<Typography component="h1">Цветовая легенда</Typography>
				<div className="flex flex-column gap-3">{metricLegendRows}</div>
			</div>
		</article>
	);
};
