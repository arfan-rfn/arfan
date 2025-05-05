'use client'
import { useTestData } from "./_utils/use-test-data";

export function TestPage() {

	const { data, error, isLoading } = useTestData();

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!data) {
		return <div>No data</div>
	}

	return (
		<div>
			This is a test page that prefetch data on the server and hydrate on the client.
		</div>
	);
}