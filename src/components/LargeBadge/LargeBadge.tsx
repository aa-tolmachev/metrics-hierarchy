import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

import { Typography } from "../Typography/Typography";
import styles from "./LargeBadge.module.scss";

interface LargeBadgeProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	backgroundColor: string;
}

export const LargeBadge: FC<LargeBadgeProps> = ({
	children,
	backgroundColor,
	className,
	...props
}) => {
	const badgeClassName = cx(
		"flex justify-content-center align-items-center text-center",
		styles.badge,
		className,
	);
	return (
		<div className={badgeClassName} style={{ backgroundColor }} {...props}>
			<Typography component="span" className={styles.text}>
				{children}
			</Typography>
		</div>
	);
};
