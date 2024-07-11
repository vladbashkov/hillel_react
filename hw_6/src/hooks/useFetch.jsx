import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(
		async (signal) => {
			setIsLoading(true);

			try {
				const res = await fetch(url, { signal });

				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}

				const data = await res.json();
				setData(data);
			} catch (e) {
				if (e.name !== "AbortError") {
					setError(e.message);
				}
			} finally {
				setIsLoading(false);
			}
		},
		[url]
	);

	useEffect(() => {
		const controller = new AbortController();
		fetchData(controller.signal);

		return () => {
			controller.abort();
		};
	}, [fetchData]);

	return { data, isLoading, error, fetchData };
};

export default useFetch;
