import type { Platform } from "@/entities/Platform";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
	description_raw: string;
	slug: string;
}
