import useData from "./useData";
import type { Genres } from "./useGenres";
import type { ParentPlatform } from "./usePlatformSelector";
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
}

const useGames = (
	selectedGenre: Genres | null,
	selectedPlatform: ParentPlatform | null
) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
				parent_platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre?.id, selectedPlatform?.id]
	);

export default useGames;
