import { Dropdown } from "primereact/dropdown";
import { FC, ReactNode } from "react";

import { Section } from "../../../../components/Section/Section";
import { useGetUsers } from "../../../../core/backend/hooks/metrics/dictionaries/useGetUsers";
import { MetricUser } from "../../../../hierarchy-metric-client";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import styles from "./OwnerCards.module.scss";

const getInitials = (name: string | undefined) =>
	(name ?? "")
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0].toUpperCase())
		.join("");

interface PersonProps {
	role: string;
	user: MetricUser | null | undefined;
	editor?: ReactNode;
}

const Person: FC<PersonProps> = ({ role, user, editor }) => (
	<div className={styles.person}>
		{!editor && (
			<span className={styles.avatar}>
				{getInitials(user?.name) || "?"}
			</span>
		)}
		<div className={styles.info}>
			<span className={styles.role}>{role}</span>
			{editor ?? (
				<span className={styles.name}>
					{user?.name ?? "Не назначен"}
				</span>
			)}
		</div>
	</div>
);

export const OwnerCards: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { data: owners } = useGetUsers("");
	const { data: analysts } = useGetUsers("");
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	return (
		<Section title="Ответственные">
			<div className={styles.grid}>
				<Person
					role="Владелец метрики"
					user={usedMetric?.owner}
					editor={
						editedMetric && (
							<Dropdown
								className="w-full"
								filter
								value={editedMetric.ownerId}
								options={owners}
								onChange={(e) => {
									changeEditedMetric("ownerId", e.value);
								}}
								optionLabel="name"
								optionValue="id"
							/>
						)
					}
				/>
				<Person
					role="Аналитик"
					user={usedMetric?.analyst}
					editor={
						editedMetric && (
							<Dropdown
								className="w-full"
								filter
								value={editedMetric.analystId}
								options={analysts}
								onChange={(e) => {
									changeEditedMetric("analystId", e.value);
								}}
								optionLabel="name"
								optionValue="id"
							/>
						)
					}
				/>
			</div>
		</Section>
	);
};
