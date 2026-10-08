import { Domain } from "../../../hierarchy-metric-client";
import styles from "../MetricLegend.module.scss";

export const mapDomain = (domain: Domain) => {
	if (!domain.id || !domain.color || !domain.name) return null;
	return (
		<li key={domain.id} className={styles.item}>
			<span
				className={styles.dot}
				style={{ backgroundColor: `#${domain.color}` }}
			/>
			{domain.name}
		</li>
	);
};
