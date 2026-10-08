import dynamic from "next/dynamic";
import { ScrollPanel } from "primereact/scrollpanel";

import styles from "./FullMetric.module.scss";
import {
	AnalyticSection,
	Description,
	Dynamics,
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
			<div className={styles.content}>
				<div className={styles.top}>
					<Header
						editedMetric={editedMetric}
						startEditing={startEditing}
						changeEditedMetric={changeEditedMetric}
					/>
					<ShortInfo
						editedMetric={editedMetric}
						changeEditedMetric={changeEditedMetric}
					/>
				</div>
				<Description
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<OwnerCards
					editedMetric={editedMetric}
					changeEditedMetric={changeEditedMetric}
				/>
				<Dynamics editedMetric={editedMetric} />
				<MetricTrivia
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
