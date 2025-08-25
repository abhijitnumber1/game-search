import type { GameQuery } from "@/App";
import useData from "./useData";
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

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchGameText,
			},
		},
		[gameQuery]
	);

export default useGames;
