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
		<footer className="flex justify-content-end">
			<div className="flex gap-3">
				<Button severity="secondary" outlined onClick={onCancel}>
					Отмена
				</Button>
				<Button onClick={finishEditing}>Отправить</Button>
			</div>
		</footer>
	);
};
