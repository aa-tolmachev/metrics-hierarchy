import cx from "classnames";
import { Tooltip } from "primereact/tooltip";
import { FC, ReactNode } from "react";

import { Typography } from "../Typography/Typography";
import styles from "./TextTooltip.module.scss";

interface TextTooltipProps {
	children: ReactNode;
	tooltip: string;
}

export const TextTooltip: FC<TextTooltipProps> = ({ children, tooltip }) => {
	return (
		<div className="flex align-items-center gap-1">
			<Typography component="span" className={styles.text}>
				{children}
			</Typography>
			<Tooltip target=".metric-short-name-help">{tooltip}</Tooltip>
			<i
				className={cx(
					"metric-short-name-help",
					"pi",
					"pi-question-circle",
					styles.question,
				)}
				data-pr-tooltip={tooltip}
				data-pr-position="right"
			></i>
		</div>
	);
};
