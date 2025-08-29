import genre from "@/data/genre";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new ApiClient<Genres>("/genres");
export interface Genres {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	const getGenres = useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.get,
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
