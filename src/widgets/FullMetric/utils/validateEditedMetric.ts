import { EditedMetric } from "../types";

export const VALIDATE_METRIC_CAUSE = "validateNewMetric";

const createNewValidateError = (message: string) => {
	return new Error(message, { cause: VALIDATE_METRIC_CAUSE });
};

export const validateEditedMetric = (metric: EditedMetric): true => {
	if (!metric.name) throw createNewValidateError("Введите название метрики!");
	if (typeof metric.typeId === "undefined")
		throw createNewValidateError("Введите тип метрики!");
	if (typeof metric.rankId === "undefined")
		throw createNewValidateError("Введите ранг метрики!");
	if (!metric.valuePostfix) throw createNewValidateError("Введите постфикс!");
	if (!metric.description) throw createNewValidateError("Введите описание!");
	if (typeof metric.statusId === "undefined")
		throw createNewValidateError("Введите статус!");
	if (!metric.nameCalculation)
		throw createNewValidateError("Введите имя расчёта!");
	if (!metric.label)
		throw createNewValidateError("Введите краткое обозначение метрики!");
	if (!metric.granularitiesIds)
		throw createNewValidateError("Введите гранилярности метрики!");
	if (!metric.dimensionsIds)
		throw createNewValidateError("Введите измерения метрики!");
	if (!metric.dataSource)
		throw createNewValidateError("Введите источник данных!");
	if (!metric.refToBoard)
		throw createNewValidateError("Введите ссылку на доску!");
	if (!metric.queryExample)
		throw createNewValidateError("Введите пример запроса!");
	if (typeof metric.ownerId === "undefined" || metric.ownerId === null)
		throw createNewValidateError("Выберите владельца метрики!");
	if (typeof metric.analystId === "undefined" || metric.analystId === null)
		throw createNewValidateError("Выберите аналитика!");
	if (typeof metric.domainId === "undefined" || metric.domainId === null)
		throw createNewValidateError("Выберите домен!");

	return true;
};
