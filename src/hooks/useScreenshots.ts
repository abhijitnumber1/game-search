import type { Screenshot } from "@/entities/Screenshots";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
	const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

	return useQuery<Screenshot[]>({
		queryKey: ["screenshots", gameId],
		queryFn: async () => {
			const res = await apiClient.get({});
			return res.results;
		},
	});
};
export default useScreenshots;
