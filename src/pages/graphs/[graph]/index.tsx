import { MetricGraphLayout } from "../../../layouts/MetricGraphLayout/MetricGraphLayout";

export default function MetricGraphPage() {
	return <></>;
}

MetricGraphPage.getLayout = function getLayout(page: any) {
	return <MetricGraphLayout>{page}</MetricGraphLayout>;
};
