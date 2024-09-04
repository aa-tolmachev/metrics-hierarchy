import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { CreateRelationContent } from "./CreateRelationContent";

export const CreateRelationButton = () => {
	const [openModal, setOpenModal] = useState(false);
	const addedNodes = useAppSelector((state) => state.addMetricNodes.metrics);
	return (
		<>
			<Button
				disabled={addedNodes.length > 0}
				onClick={() => setOpenModal(true)}
			>
				Добавить связь на граф
			</Button>
			<Dialog visible={openModal} onHide={() => setOpenModal(false)}>
				<CreateRelationContent setOpenModal={setOpenModal} />
			</Dialog>
		</>
	);
};
