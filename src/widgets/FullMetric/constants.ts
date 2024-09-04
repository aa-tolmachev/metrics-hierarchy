import { EditedMetric } from "./types";

export const EMPTY_METRIC: EditedMetric = {
	name: "",
	label: "",
	state: "",
	typeId: undefined,
	rankId: undefined,
	valuePostfix: "",
	description: "",
	statusId: undefined,
	nameCalculation: "",
	granularitiesIds: [],
	dimensionsIds: [],
	dataSource: "",
	refToBoard: "",
	queryExample: "",
	ownerId: undefined,
	analystId: undefined,
	domainId: undefined,
};
