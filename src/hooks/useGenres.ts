import genre from "@/data/genre";
import { apiClient } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "./useData";

export interface Genres {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	const getGenres = useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Genres>>("/genres")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { results: genre, count: genre.length },
	});
	return {
		data: getGenres.data,
		error: getGenres.error,
		loading: getGenres.isPending,
	};
};

export default useGenres;
