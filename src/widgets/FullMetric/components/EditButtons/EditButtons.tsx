import { Button } from "primereact/button";
import { FC, useCallback } from "react";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { confirmWithoutSavingMetric } from "../../../../utils/confirmWithoutSavingMetric";

interface EditButtonsProps {
	finishEditing: VoidFunction;
	endEditing: VoidFunction;
}

export const EditButtons: FC<EditButtonsProps> = ({
	finishEditing,
	endEditing,
}) => {
	const fullMetricState = useAppSelector((state) => state.fullMetric.state);

	if (!fullMetricState || fullMetricState === "default")
		throw new Error(
			"Компонент EditButtons должен существовать только если метрика редактируется или создаётся",
		);

	const onCancel = useCallback(() => {
		confirmWithoutSavingMetric(fullMetricState, endEditing, undefined);
	}, [endEditing, fullMetricState]);

	return (
		<footer className="flex justify-content-end gap-2">
			<Button severity="secondary" text onClick={onCancel}>
				Отмена
			</Button>
			<Button icon="pi pi-check" onClick={finishEditing}>
				Сохранить
			</Button>
		</footer>
	);
};
