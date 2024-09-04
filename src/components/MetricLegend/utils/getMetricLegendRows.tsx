const getMetricLegendRow = (
	index: number,
	legendElements: (JSX.Element | null)[],
) => {
	let j = index;
	const legendRow: JSX.Element[] = [];
	while (j < legendElements.length && j < index + 4) {
		const legendItem = legendElements[j];
		if (legendItem) legendRow.push(legendItem);
		j += 1;
	}
	return legendRow;
};

export const getMetricLegendRows = (legendElements: (JSX.Element | null)[]) => {
	let i = 0;
	const metricLegendRows: JSX.Element[] = [];
	while (i < legendElements.length) {
		const legendRow = getMetricLegendRow(i, legendElements);
		metricLegendRows.push(
			<div key={i} className="flex gap-3">
				{legendRow}
			</div>,
		);
		i += 4;
	}
	return metricLegendRows;
};
