import cx from "classnames";

import { htmlToText } from "../../../utils/htmlToText";
import { parseHTML } from "../../../utils/parseHTML";
import styles from "../MetricsTable.module.scss";
import { MetricTableData } from "../types";

export const QueryExampleTemplate = (data: MetricTableData) => {
	return (
		<div
			className={cx(styles.clamp, styles.query)}
			title={htmlToText(data.queryExample)}
		>
			{parseHTML(data.queryExample)}
		</div>
	);
};
