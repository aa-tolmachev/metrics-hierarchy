import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { AddExistingMetricsContent } from "./AddExistingMetricContent";

export const AddExistingMetricsButton = () => {
	const [openModal, setOpenModal] = useState(false);
	const createdRelationType = useAppSelector(
		(state) => state.createRelation.typeConnection,
	);
	return (
		<>
			<Button
				disabled={!!createdRelationType}
				onClick={() => setOpenModal(true)}
			>
				Добавить существующую метрику на граф
			</Button>
			<Dialog
				className="w-30rem"
				visible={openModal}
				resizable={false}
				draggable={false}
				onHide={() => setOpenModal(false)}
			>
				<AddExistingMetricsContent setOpenModal={setOpenModal} />
			</Dialog>
		</>
	);
};
