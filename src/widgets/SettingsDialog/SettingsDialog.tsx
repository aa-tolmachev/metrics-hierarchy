import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { FC } from "react";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setSettings } from "../../store/reducer/settingsReducer";
import { SettingsState } from "../../store/types";
import { saveSettings } from "../../utils/settingsStorage";
import styles from "./SettingsDialog.module.scss";

interface SettingsDialogProps {
	visible: boolean;
	onHide: VoidFunction;
}

export const SettingsDialog: FC<SettingsDialogProps> = ({
	visible,
	onHide,
}) => {
	const dispatch = useAppDispatch();
	const settings = useAppSelector((state) => state.settings);

	const changeSettings = (patch: Partial<SettingsState>) => {
		dispatch(setSettings(patch));
		saveSettings({ ...settings, ...patch });
	};

	return (
		<Dialog
			header="Настройки"
			visible={visible}
			onHide={onHide}
			className={styles.dialog}
			dismissableMask
		>
			<div className={styles.row}>
				<label htmlFor="highlight-dynamics" className={styles.label}>
					Подсвечивать значимые изменения метрик
					<span className={styles.hint}>
						Карточка на графе станет зелёной при росте и красной при
						падении на величину порога и больше
					</span>
				</label>
				<InputSwitch
					inputId="highlight-dynamics"
					checked={settings.highlightDynamics}
					onChange={(e) =>
						changeSettings({ highlightDynamics: Boolean(e.value) })
					}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="dynamics-threshold" className={styles.label}>
					Порог значимости изменения
					<span className={styles.hint}>
						Изменение метрики в динамике, начиная с которого оно
						считается значимым
					</span>
				</label>
				<InputNumber
					inputId="dynamics-threshold"
					value={settings.dynamicsThreshold}
					onValueChange={(e) => {
						if (typeof e.value === "number")
							changeSettings({ dynamicsThreshold: e.value });
					}}
					disabled={!settings.highlightDynamics}
					suffix=" %"
					min={0}
					max={1000}
					maxFractionDigits={1}
					showButtons
					inputClassName={styles.thresholdInput}
				/>
			</div>
			<p className={styles.footnote}>
				Настройки сохраняются в этом браузере.
			</p>
		</Dialog>
	);
};
