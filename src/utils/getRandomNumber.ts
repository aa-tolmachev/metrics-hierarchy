export const getRandomNumber = (min: number, max: number, digits?: number) => {
	const random = Math.random() * (max - min + 1) + min;
	if (!digits) return Math.floor(random);
	return Number(random.toFixed(digits));
};
