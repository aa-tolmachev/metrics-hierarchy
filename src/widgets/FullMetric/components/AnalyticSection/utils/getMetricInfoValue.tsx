import cx from "classnames";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Typography } from "../../../../../components/Typography/Typography";
import styles from "../AnalyticSection.module.scss";

const prepareValue = (initialValue: string | undefined) => {
	const NO_VALUE = "—";

	if (!initialValue) return NO_VALUE;

	const preparedValue = initialValue.trim();
	if (preparedValue.length === 0) return NO_VALUE;
	return preparedValue;
};

export const getMetricInfoValue = (
	initialValue: string | undefined,
	copyable: boolean,
	isLink: boolean = false,
) => {
	const trimmedValue = initialValue?.trim();
	const preparedValue = prepareValue(trimmedValue);
	const metricInfoValueClassName = cx(styles.value, "text-right max-w-18rem");
	return (
		<div className="flex gap-3 align-items-center max-w-20rem">
			{!isLink ? (
				<Typography
					component="span"
					className={metricInfoValueClassName}
				>
					{preparedValue}
				</Typography>
			) : (
				<Typography
					component="span"
					className={metricInfoValueClassName}
				>
					{<Link href={preparedValue}>{preparedValue}</Link>}
				</Typography>
			)}
			{copyable && trimmedValue && trimmedValue.length > 0 && (
				<CopyToClipboard text={preparedValue}>
					<i className="pi pi-copy cursor-pointer" />
				</CopyToClipboard>
			)}
		</div>
	);
};
