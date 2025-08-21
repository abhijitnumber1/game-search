import { apiClient } from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
export interface Genres {
	id: number;
	name: string;
}

interface FetchGenresResponse {
	count: number;
	results: Genres[];
}
const useGenres = () => {
	const [genres, setGenres] = useState<Genres[]>([]);
	const [error, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		apiClient
			.get<FetchGenresResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErrors(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { genres, error, loading };
};

export default useGenres;
