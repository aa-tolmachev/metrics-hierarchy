import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { CloningDialog } from "./CloningDialog";

export const CloneMetricGraphButton = () => {
	const router = useRouter();

	const [openCloningDialog, setOpenCloningDialog] = useState(false);
	const [clonedGraphId, setClonedGraphId] = useState<string>();
	const successToast = useRef<Toast>(null);
	const redirectToast = useRef<Toast>(null);

	const onCloningSuccess = (newGraphId: string) => {
		setClonedGraphId(newGraphId);

		if (successToast.current) {
			successToast.current.show({
				severity: "success",
				summary: "Граф успешно скопирован!",
				life: 800,
			});
		}

		setOpenCloningDialog(false);
	};

	return (
		<>
			<Button
				label="Создать копию графа"
				onClick={() => {
					setOpenCloningDialog(true);
				}}
			/>
			{openCloningDialog && (
				<CloningDialog
					onCloningSuccess={onCloningSuccess}
					onCloningCancel={() => {
						setOpenCloningDialog(false);
					}}
				/>
			)}
			<Toast
				ref={successToast}
				onRemove={() => {
					if (redirectToast.current) {
						redirectToast.current.show({
							severity: "info",
							summary: (
								<article className="flex flex-column gap-3">
									<Typography component="b">
										Хотите перейти к новому графу?
									</Typography>
									<div className="flex gap-3">
										<Button
											severity="secondary"
											onClick={() => {
												redirectToast.current?.clear();
											}}
										>
											Нет
										</Button>
										<Button
											onClick={() => {
												if (!clonedGraphId)
													throw new Error(
														"No cloned graph id!",
													);
												router.push(
													`/graphs/${clonedGraphId}`,
												);
												redirectToast.current?.clear();
											}}
										>
											Да
										</Button>
									</div>
								</article>
							),
							life: 5000,
						});
					}
				}}
			/>
			<Toast ref={redirectToast} />
		</>
	);
};
