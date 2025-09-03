import type { GameQuery } from "@/entities/GameQuery";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import type { Game } from "../entities/Game";
const apiClient = new ApiClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => {
	const gamesData = useInfiniteQuery({
		queryKey: ["games", gameQuery],
		initialPageParam: 1,
		queryFn: ({ pageParam = 1 }) =>
			apiClient.get({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchGameText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
	return gamesData;
};

export default useGames;
