import cx from "classnames";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { FC, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Typography } from "../../../../components/Typography/Typography";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import styles from "./Header.module.scss";

interface HeaderProps extends MetricSectionEditableProps {
	startEditing: VoidFunction;
}

const Header: FC<HeaderProps> = ({
	editedMetric,
	startEditing,
	changeEditedMetric,
}) => {
	const { usedMetric, state: fullMetricState } = useAppSelector(
		(state) => state.fullMetric,
	);

	const toast = useRef<Toast>(null);

	const onCopy = () =>
		toast.current?.show({
			severity: "info",
			summary: "Ссылка на метрику скопирована.",
			life: 1500,
		});

	const headerClassName = cx(
		"flex",
		"align-content-center",
		"gap-3",
		styles.header,
	);

	if (fullMetricState === "create")
		return (
			<div className="flex flex-column gap-3">
				<Typography component="h1" className={styles.name}>
					Создание метрики
				</Typography>
				<div className="flex gap-2 align-items-center">
					<Typography component="span">Название метрики:</Typography>
					{editedMetric && (
						<InputText
							type="text"
							value={editedMetric.name}
							className="p-inputtext-sm"
							onChange={(e) => {
								changeEditedMetric(
									"name",
									e.currentTarget.value,
								);
							}}
						/>
					)}
				</div>
			</div>
		);

	return (
		<>
			<Toast ref={toast} />
			<header className={headerClassName}>
				{typeof window !== "undefined" && (
					<CopyToClipboard
						text={window.location.href}
						onCopy={onCopy}
					>
						<i className={cx("pi pi-link", styles.copy)} />
					</CopyToClipboard>
				)}
				{usedMetric && (
					<Typography component="h1" className={styles.name}>
						{usedMetric.name}
					</Typography>
				)}
				{!editedMetric && (
					<Button
						icon={cx("pi pi-pencil", styles.editing)}
						severity="secondary"
						rounded
						text
						onClick={startEditing}
					/>
				)}
			</header>
		</>
	);
};

export default Header;
