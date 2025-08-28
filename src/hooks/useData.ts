import { apiClient } from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}
const useData = <T>(url: string, geners?: AxiosRequestConfig, depe?: any[]) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			const controller = new AbortController();
			apiClient
				.get<FetchResponse<T>>(url, {
					signal: controller.signal,
					...geners,
				})
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
		},
		depe ? [...depe] : []
	);

	return { data, error, loading };
};

export default useData;
