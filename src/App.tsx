import type { Genres } from "./hooks/useGenres";
import type { ParentPlatform } from "./hooks/usePlatformSelector";
export interface GameQuery {
	genre: Genres | null;
	platform: ParentPlatform | null;
	sortOrder: string | null;
	searchGameText: string;
}
