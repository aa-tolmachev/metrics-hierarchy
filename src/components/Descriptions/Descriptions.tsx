import cx from "classnames";
import { DataView } from "primereact/dataview";
import { FC, HTMLAttributes, ReactNode } from "react";

import { Typography } from "../Typography/Typography";
import styles from "./Descriptions.module.scss";

export interface Description {
	label: string;
	value: ReactNode;
}
const itemTemplate = ({ label, value }: Description) => {
	const valueClassName = cx("font-normal text-right", styles.value);
	return (
		<div className="col-12 flex justify-content-between gap-3 p-4">
			<Typography
				component="span"
				className="font-semibold inline-flex align-items-center"
			>
				{label}
			</Typography>
			<Typography component="span" className={valueClassName}>
				{value}
			</Typography>
		</div>
	);
};

interface DescriptionsProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	value: Description[];
	title?: string;
}

export const Descriptions: FC<DescriptionsProps> = ({
	value,
	title,
	className,
	...props
}) => {
	const descriptionsClassName = cx("flex flex-column gap-3", className);
	return (
		<div className={descriptionsClassName} {...props}>
			<Typography className="text-left" component="h3">
				{title}
			</Typography>
			<DataView value={value} itemTemplate={itemTemplate} />
		</div>
	);
};
