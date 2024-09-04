import {
	DimensionInner,
	GranularityInner,
	Metric,
} from "../../../hierarchy-metric-client";
import { EMPTY_METRIC } from "../constants";
import { EditedMetric } from "../types";

const mapGranularity = (granularity: GranularityInner): number => {
	return granularity.id!;
};

const mapDimension = (dimension: DimensionInner): number => {
	return dimension.id!;
};

export const mapMetricToEditedMetric = (metric: Metric): EditedMetric => {
	return {
		name: metric.name,
		label: metric.label,
		state: metric.state,
		typeId: metric.type?.id ?? EMPTY_METRIC.typeId,
		rankId: metric.rank.id ?? EMPTY_METRIC.rankId,
		valuePostfix: metric.valuePostfix,
		description: metric.description,
		statusId: metric.status?.id ?? EMPTY_METRIC.statusId,
		nameCalculation: metric.nameCalculation,
		granularitiesIds: metric.granularities.map(mapGranularity),
		dimensionsIds: metric.dimensions.map(mapDimension) ?? [],
		dataSource: metric.dataSource,
		refToBoard: metric.refToBoard,
		queryExample: metric.queryExample,
		ownerId: metric.owner?.id ?? EMPTY_METRIC.ownerId,
		analystId: metric.analyst?.id ?? EMPTY_METRIC.analystId,
		domainId: metric.domain?.id ?? EMPTY_METRIC.domainId,
	};
};
