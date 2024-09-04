export const getAdditionalInfoTextFromNames = (names: string[]) => {
	if (names.length === 0) return "—";
	return names.join(", ");
};
