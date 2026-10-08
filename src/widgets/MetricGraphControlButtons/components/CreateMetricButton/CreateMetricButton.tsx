import { useRouter } from "next/router";
import { Button } from "primereact/button";

import { useAppSelector } from "../../../../store/hooks/useAppSelector";

export const CreateMetricButton = () => {
	const router = useRouter();
	const createdRelationType = useAppSelector(
		(state) => state.createRelation.typeConnection,
	);
	return (
		<Button
			text
			icon="pi pi-plus"
			label="Новая метрика"
			disabled={!!createdRelationType}
			onClick={() => {
				if (router.query.graph)
					router.push(`/graphs/${router.query.graph}/new-metric`);
			}}
		/>
	);
};
