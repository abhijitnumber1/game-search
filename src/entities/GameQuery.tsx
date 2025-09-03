import type { Genres } from "./Genres";
import type { ParentPlatform } from "./ParentPlatform";

export interface GameQuery {
	genre: Genres | null;
	platform: ParentPlatform | null;
	sortOrder: string | null;
	searchGameText: string;
}
