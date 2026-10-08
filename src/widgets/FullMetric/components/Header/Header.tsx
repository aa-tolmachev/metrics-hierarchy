import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { FC, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import { DeleteMetricControls } from "../DeleteMetricControls/DeleteMetricControls";
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

	if (fullMetricState === "create")
		return (
			<header className={styles.createHeader}>
				<h1 className={styles.name}>Новая метрика</h1>
				{editedMetric && (
					<InputText
						type="text"
						placeholder="Название метрики"
						value={editedMetric.name}
						className="w-full"
						onChange={(e) => {
							changeEditedMetric("name", e.currentTarget.value);
						}}
					/>
				)}
			</header>
		);

	return (
		<>
			<Toast ref={toast} />
			<header className={styles.header}>
				{usedMetric && (
					<h1 className={styles.name}>{usedMetric.name}</h1>
				)}
				<div className={styles.actions}>
					{typeof window !== "undefined" && (
						<CopyToClipboard
							text={window.location.href}
							onCopy={onCopy}
						>
							<Button
								icon="pi pi-link"
								severity="secondary"
								text
								rounded
								tooltip="Скопировать ссылку"
								tooltipOptions={{ position: "bottom" }}
							/>
						</CopyToClipboard>
					)}
					{!editedMetric && (
						<Button
							icon="pi pi-pencil"
							severity="secondary"
							text
							rounded
							tooltip="Редактировать"
							tooltipOptions={{ position: "bottom" }}
							onClick={startEditing}
						/>
					)}
					{fullMetricState === "default" && <DeleteMetricControls />}
				</div>
			</header>
		</>
	);
};

export default Header;
