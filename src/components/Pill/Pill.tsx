import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

import styles from "./Pill.module.scss";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
	color?: string;
	background?: string;
	monospace?: boolean;
}

export const Pill: FC<PillProps> = ({
	children,
	color,
	background,
	monospace,
	className,
	style,
	...props
}) => (
	<span
		className={cx(
			styles.pill,
			{ [styles.monospace]: monospace },
			className,
		)}
		style={{ color, backgroundColor: background, ...style }}
		{...props}
	>
		{children}
	</span>
);
