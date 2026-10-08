import cx from "classnames";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "../AnalyticSection.module.scss";

const NO_VALUE = "—";

export const getMetricInfoValue = (
	initialValue: string | undefined,
	copyable: boolean,
	isLink: boolean = false,
) => {
	const trimmedValue = initialValue?.trim();
	if (!trimmedValue) return NO_VALUE;

	return (
		<span className={styles.infoValue}>
			{isLink ? (
				<Link
					href={trimmedValue}
					target="_blank"
					className={cx(styles.text, styles.link)}
				>
					{trimmedValue}
				</Link>
			) : (
				<span className={styles.text}>{trimmedValue}</span>
			)}
			{copyable && (
				<CopyToClipboard text={trimmedValue}>
					<i className={cx("pi pi-copy", styles.copy)} />
				</CopyToClipboard>
			)}
		</span>
	);
};
