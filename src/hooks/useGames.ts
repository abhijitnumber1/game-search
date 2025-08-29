import type { GameQuery } from "@/App";
import type { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/services/api-client";
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
			apiClient
				.get<FetchResponse<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchGameText,
					},
				})
				.then((res) => res.data),
	});
	return {
		data: gamesData.data,
		error: gamesData.error,
		loading: gamesData.isPending,
	};
};

export default useGames;
