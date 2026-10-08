import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

import styles from "./Section.module.scss";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
	title?: ReactNode;
	children: ReactNode;
}

export const Section: FC<SectionProps> = ({
	title,
	children,
	className,
	...props
}) => (
	<section className={cx(styles.section, className)} {...props}>
		{title && <h3 className={styles.title}>{title}</h3>}
		{children}
	</section>
);
