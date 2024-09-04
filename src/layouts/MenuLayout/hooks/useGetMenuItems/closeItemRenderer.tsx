// eslint-disable-next-line react/display-name
export const getCloseItemRenderer = (onClose: VoidFunction) => () => {
	return (
		<div className="p-menuitem-content p-2 flex justify-content-end	">
			<i
				className="pi pi-times-circle text-2xl cursor-pointer"
				onClick={onClose}
			/>
		</div>
	);
};
