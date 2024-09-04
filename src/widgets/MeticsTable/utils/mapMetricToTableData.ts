import { NextRouter } from "next/router";

import {
	GranularityInner,
	Metric,
	MetricDelete202Response,
} from "../../../hierarchy-metric-client";
import { MetricTableData } from "../types";

GranularityInner;
const NO_VALUE = "—";

const prepareText = (text: string | undefined) => {
	const trimmedText = text?.trim();
	if (!trimmedText || trimmedText.length === 0) return NO_VALUE;
	return trimmedText;
};

interface ArrayItem {
	name?: string;
}

const prepareArray = (array: ArrayItem[] | undefined) => {
	const mappedArray = array?.map((d) => d.name).join(", ");
	return prepareText(mappedArray);
};

export const mapMetricToTableData =
	(
		router: NextRouter,
		metricDelete: (id: string) => Promise<MetricDelete202Response>,
		reloadMetrics: VoidFunction,
	) =>
	(metric: Metric): MetricTableData => {
		const {
			dimensions: rawDimensions,
			granularities: rawGranularities,
			status: rawStatus,
			owner: rawOwner,
			rank: rawRank,
			type: rawType,
			domain: rawDomain,
			dataSource: rawDataSource,
			queryExample: rawQueryExample,
			graphs: rawGraphs,
			product: rawProduct,
			platform: rawPlatform,
			attractionChannel: rawAttractionChannel,
			level: rawLevel,
			...rest
		} = metric;

		const dimensions = prepareArray(rawDimensions);
		const granularities = prepareArray(rawGranularities);
		const owner = prepareText(rawOwner?.name);
		const status = prepareText(rawStatus?.name);
		const rank = prepareText(rawRank?.name);
		const type = prepareText(rawType?.name);
		const domain = prepareText(rawDomain?.name);
		const dataSource = prepareText(rawDataSource);
		const queryExample = prepareText(rawQueryExample);
		const graphs = prepareArray(rawGraphs ?? undefined);
		const product = prepareText(rawProduct?.name);
		const platform = prepareText(rawPlatform?.name);
		const attractionChannel = prepareText(rawAttractionChannel?.name);
		const level = prepareText(rawLevel?.name);

		const onMetricEdit = () => {
			router.push(`/metrics/${metric.id}`);
		};
		const onMetricDelete =
			rawGraphs && rawGraphs.length === 0
				? () => {
						metricDelete(metric.id.toString());
						reloadMetrics();
					}
				: undefined;

		return {
			dimensions,
			granularities,
			owner,
			status,
			rank,
			type,
			domain,
			dataSource,
			queryExample,
			graphs,
			product,
			platform,
			attractionChannel,
			onMetricEdit,
			onMetricDelete,
			level,
			...rest,
		};
	};
