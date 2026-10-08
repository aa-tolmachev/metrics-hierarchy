import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Typography } from "../components/Typography/Typography";

// В статической сборке (GitHub Pages) нет HTML-файлов под конкретные id,
// поэтому прямой заход на такой адрес попадает сюда и дорисовывается роутером.
const DYNAMIC_ROUTES = [
	/^\/graphs\/[^/]+(\/[^/]+)?\/?$/,
	/^\/metrics\/[^/]+\/?$/,
];

const NotFoundPage: NextPage = () => {
	const router = useRouter();
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		const path =
			window.location.pathname.slice(router.basePath.length) || "/";
		if (DYNAMIC_ROUTES.some((route) => route.test(path))) {
			router.replace(
				path + window.location.search + window.location.hash,
			);
		} else {
			setNotFound(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!notFound) return null;

	return (
		<div className="p-5">
			<Typography component="h3">Страница не найдена</Typography>
		</div>
	);
};

export default NotFoundPage;
