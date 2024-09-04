import { confirmDialog } from "primereact/confirmdialog";

const CONFIG = {
	edit: {
		message: "Вы хотите выйти, не сохраняя изменения?",
		header: "Закрыть метрику без редактирования",
	},
	create: {
		message: "Вы хотите выйти, не сохраняя метрику?",
		header: "Закрыть без создания",
	},
};

export const confirmWithoutSavingMetric = (
	state: "edit" | "create",
	accept: VoidFunction | undefined,
	reject: VoidFunction | undefined,
) => {
	confirmDialog({
		...CONFIG[state],
		acceptLabel: "Да",
		rejectLabel: "Нет",
		icon: "pi pi-exclamation-triangle",
		defaultFocus: "reject",
		acceptClassName: "p-button-danger",
		accept,
		reject,
	});
};
