import type { Platform } from "@/entities/Platform";
import type { Genres } from "./Genres";
import type { Publishers } from "./Publishers";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	genres: Genres[];
	publishers: Publishers[];
	platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
	description_raw: string;
	slug: string;
}
