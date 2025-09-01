import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
const apiClient = new ApiClient<Game>("/games");
export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

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
