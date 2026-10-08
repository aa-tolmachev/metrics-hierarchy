import { FC, HTMLAttributes, ReactNode } from "react";

import { Section } from "../Section/Section";
import styles from "./Descriptions.module.scss";

export interface Description {
	label: string;
	value: ReactNode;
}

interface DescriptionsProps
	extends Omit<HTMLAttributes<HTMLElement>, "children" | "title"> {
	value: Description[];
	title?: string;
}

export const Descriptions: FC<DescriptionsProps> = ({
	value,
	title,
	...props
}) => (
	<Section title={title} {...props}>
		<dl className={styles.list}>
			{value.map(({ label, value: itemValue }) => (
				<div key={label} className={styles.row}>
					<dt className={styles.label}>{label}</dt>
					<dd className={styles.value}>{itemValue}</dd>
				</div>
			))}
		</dl>
	</Section>
);
