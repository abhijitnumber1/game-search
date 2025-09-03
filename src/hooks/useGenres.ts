import genre from "@/data/genre";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Genres } from "../entities/Genres";
const apiClient = new ApiClient<Genres>("/genres");
const useGenres = () => {
	const getGenres = useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.get({}),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { results: genre, count: genre.length, next: null },
	});
	return {
		data: getGenres.data,
		error: getGenres.error,
		loading: getGenres.isPending,
	};
};

export default useGenres;
