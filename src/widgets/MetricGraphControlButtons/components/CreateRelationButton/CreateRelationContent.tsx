import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { FC, useState } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { RelationsTypeConnectionEnum } from "../../../../hierarchy-metric-client";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { addCreateRelation } from "../../../../store/reducer/createRelationReducer";
import { SetState } from "../../../../utils";

interface CreateRelationContentProps {
	setOpenModal: SetState<boolean>;
}

const RELATION_TYPE_OPTIONS = [
	{
		label: "Сплошная линия (подтвержденное влияние)",
		value: "hard",
	},
	{
		label: "Пунктирная линия (неподтвержденное влияние)",
		value: "soft",
	},
];

export const CreateRelationContent: FC<CreateRelationContentProps> = ({
	setOpenModal,
}) => {
	const dispatch = useAppDispatch();
	const [typeConnection, setTypeConnection] = useState(
		RelationsTypeConnectionEnum.Hard,
	);

	return (
		<div className="flex flex-column gap-3">
			<Typography component="h3">Создать связь</Typography>
			<Dropdown
				value={typeConnection}
				onChange={(e) => {
					setTypeConnection(e.value);
				}}
				options={RELATION_TYPE_OPTIONS}
			/>
			<Button
				className="align-self-start"
				onClick={() => {
					dispatch(addCreateRelation(typeConnection));
					setOpenModal(false);
				}}
			>
				Создать
			</Button>
		</div>
	);
};
