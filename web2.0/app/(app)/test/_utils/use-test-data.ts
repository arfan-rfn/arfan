import { QUERY_KEYS } from "@/config/query-keys";
import { getQueryClient } from "@/lib/query-client";
import { dehydrate, useQuery } from "@tanstack/react-query";

const fetchData = async () => {
	// NOTE: This is a placeholder function that would be replaced with a real API call
	// This can be also be a server-side function/action that fetches data from a database
	return {};
}

const queryOptions = () => {
	return {
		queryKey: [QUERY_KEYS.Test],
		queryFn: () => fetchData(),
	}
}

export const useTestData = () => {
	return useQuery(queryOptions());
};

export const prefetchTestData = async () => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(queryOptions());
	const dehydratedState = dehydrate(queryClient);
	return { dehydratedState, queryClient };
};