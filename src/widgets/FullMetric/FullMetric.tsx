import dynamic from "next/dynamic";
import { ScrollPanel } from "primereact/scrollpanel";

import {
	AdditionalInfo,
	AnalyticSection,
	DeleteMetricControls,
	Description,
	EditButtons,
	OwnerCards,
	ShortInfo,
} from "./components";
import { MetricTrivia } from "./components/MetricTrivia/MetricTrivia";
import { useFullMetric } from "./hooks/useFullMetric";

const Header = dynamic(() => import("./components/Header/Header"), {
	ssr: false,
});

export const FullMetric = () => {
	const {
		editedMetric,
		fullMetricState,
		startEditing,
		changeEditedMetric,
		endEditing,
		finishEditing,
	} = useFullMetric();

	return (
		<ScrollPanel
			className="h-full overflow-visible"
			pt={{ barY: { className: "bg-primary" } }}
		>
			<div className="flex flex-column gap-4 overflow-x-visible p-2">
				<Header
					editedMetric={editedMetric}
					startEditing={startEditing}
					changeEditedMetric={changeEditedMetric}
				/>
				{fullMetricState === "default" && <DeleteMetricControls />}
				<ShortInfo
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<MetricTrivia
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<Description
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<OwnerCards
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<AdditionalInfo
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<AnalyticSection
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				{editedMetric &&
					(fullMetricState === "edit" ||
						fullMetricState === "create") && (
						<EditButtons
							finishEditing={finishEditing}
							endEditing={endEditing}
						/>
					)}
			</div>
		</ScrollPanel>
	);
};
