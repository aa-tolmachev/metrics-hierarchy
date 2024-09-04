import cx from "classnames";
import { Button } from "primereact/button";
import { FC, ReactNode } from "react";

import styles from "./SidePanel.module.scss";

interface SidePanelProps {
	children: ReactNode;

	onCancel: VoidFunction;
}

export const SidePanel: FC<SidePanelProps> = ({ children, onCancel }) => {
	const closeButtonClassName = cx("pi", "pi-times", styles.closeButton);
	return (
		<aside className={styles.panel}>
			<Button
				className={closeButtonClassName}
				severity="secondary"
				rounded
				outlined
				onClick={onCancel}
				aria-label="Cancel"
			/>
			{children}
		</aside>
	);
};
