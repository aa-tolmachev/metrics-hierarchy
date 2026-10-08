export interface DataSourceParts {
	database: string;
	schema: string;
	table: string;
}

/** Источник данных хранится в одном поле API в виде `база.схема.таблица`. */
export const parseDataSource = (dataSource: string | undefined) => {
	const parts = (dataSource ?? "").trim().split(".");
	if (parts.length !== 3) {
		return { database: dataSource?.trim() ?? "", schema: "", table: "" };
	}
	const [database, schema, table] = parts;
	return { database, schema, table };
};

export const composeDataSource = ({
	database,
	schema,
	table,
}: DataSourceParts) => {
	if (!database && !schema && !table) return "";
	return `${database}.${schema}.${table}`;
};
