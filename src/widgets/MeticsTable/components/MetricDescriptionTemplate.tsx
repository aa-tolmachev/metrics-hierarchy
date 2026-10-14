import { htmlToText } from "../../../utils/htmlToText";
import { parseHTML } from "../../../utils/parseHTML";
import styles from "../MetricsTable.module.scss";
import { MetricTableData } from "../types";

export const MetricDescriptionTemplate = (data: MetricTableData) => {
	return (
		<div className={styles.clamp} title={htmlToText(data.description)}>
			{parseHTML(data.description)}
		</div>
	);
};
