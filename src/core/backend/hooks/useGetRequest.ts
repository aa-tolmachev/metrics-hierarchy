import { useCallback, useEffect, useState } from "react";

export function useGetRequest<Output>(
	getData: () => Output | Promise<Output> | undefined,
	...deps: any[]
) {
	const [data, setData] = useState<Output | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(undefined);
	const [reloader, setReloader] = useState(false);

	const get = useCallback(async () => {
		try {
			const result = await getData();
			setData(result);
		} catch (e: any) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}, [getData]);

	useEffect(() => {
		setLoading(true);
		get();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reloader, ...deps]);

	const reload = useCallback(() => {
		setReloader((prev) => !prev);
	}, []);

	return {
		data,
		loading,
		error,
		reload,
	};
}
