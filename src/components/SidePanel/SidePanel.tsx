import { Button } from "primereact/button";
import { FC, ReactNode } from "react";

import styles from "./SidePanel.module.scss";

interface SidePanelProps {
	children: ReactNode;

	onCancel: VoidFunction;
}

export const SidePanel: FC<SidePanelProps> = ({ children, onCancel }) => {
	return (
		<aside className={styles.panel}>
			<Button
				className={styles.closeButton}
				icon="pi pi-times"
				severity="secondary"
				rounded
				text
				onClick={onCancel}
				aria-label="Закрыть"
			/>
			{children}
		</aside>
	);
};
