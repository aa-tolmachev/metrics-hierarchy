import cx from "classnames";
import { FC, useState } from "react";

import { useGetDomains } from "../../core/backend/hooks/metrics/dictionaries/useGetDomains";
import styles from "./MetricLegend.module.scss";
import { mapDomain } from "./utils/mapDomain";

interface MetricLegendProps {
	className?: string;
}

export const MetricLegend: FC<MetricLegendProps> = ({ className }) => {
	const { data: domains } = useGetDomains();
	const legendElements = domains?.map(mapDomain) ?? [];

	const [open, setOpen] = useState(true);

	if (!open) return <></>;
	return (
		<article className={cx(styles.legend, className)}>
			<header className={styles.header}>
				<span className={styles.title}>Домены</span>
				<i
					className={cx("pi pi-times", styles.close)}
					onClick={() => setOpen(false)}
				/>
			</header>
			<ul className={styles.list}>{legendElements}</ul>
		</article>
	);
};
