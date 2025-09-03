import type { Trailer } from "@/entities/Trailer";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
	const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery<Trailer[]>({
		queryKey: ["trailers", gameId],
		queryFn: async () => {
			const res = await apiClient.get({});
			return res.results; // ✅ now it returns Trailer[]
		},
	});
};

export default useTrailers;
