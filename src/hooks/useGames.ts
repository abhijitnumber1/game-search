import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { type FetchResponse } from "@/services/api-client";
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
	const gamesData = useQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient.get({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchGameText,
				},
			}),
	});
	return {
		data: gamesData.data,
		error: gamesData.error,
		loading: gamesData.isPending,
	};
};

export default useGames;
