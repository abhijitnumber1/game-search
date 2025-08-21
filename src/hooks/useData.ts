import { apiClient } from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
	count: number;
	results: T[];
}
const useData = <T>(url: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		apiClient
			.get<FetchResponse<T>>(url, { signal: controller.signal })
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErrors(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { data, error, loading };
};

export default useData;
