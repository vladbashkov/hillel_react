import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const data = res.json();
			setData(data);
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, isLoading, error, fetchData };
};

export default useFetch;
