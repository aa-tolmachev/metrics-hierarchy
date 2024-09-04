import { Editor } from "primereact/editor";
import { FC } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { parseHTML } from "../../../../utils/parseHTML";
import { MetricSectionEditableProps } from "../../types";

export const Description: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (editedMetric)
		return (
			<div className="flex flex-column gap-2">
				<Typography component="h3">Описание</Typography>
				<Editor
					value={editedMetric.description}
					onTextChange={(e) => {
						changeEditedMetric("description", e.htmlValue ?? "");
					}}
					style={{ height: "200px" }}
				/>
			</div>
		);

	if (!usedMetric) return null;

	const description = parseHTML(usedMetric.description);
	return <Typography component="p">{description}</Typography>;
};
