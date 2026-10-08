import { FC, ReactNode } from "react";

import styles from "./PageCard.module.scss";

interface PageCardProps {
	children: ReactNode;
}

export const PageCard: FC<PageCardProps> = ({ children }) => (
	<div className={styles.page}>
		<div className={styles.card}>{children}</div>
	</div>
);
