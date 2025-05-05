import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchTestData } from "./_utils/use-test-data";
import { TestPage } from "./test-page";


export default async function Page() {

	const { dehydratedState } = await prefetchTestData();


	return (
		<HydrationBoundary state={dehydratedState}>
			<TestPage />
		</HydrationBoundary>
	);
}