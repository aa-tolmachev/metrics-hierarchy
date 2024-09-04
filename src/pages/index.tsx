import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage: NextPage = () => {
	const { push } = useRouter();

	useEffect(() => {
		push("/metrics");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
};

export default IndexPage;
