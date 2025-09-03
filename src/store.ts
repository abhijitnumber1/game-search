import type { GameQuery } from "./entities/GameQuery";
import type { Genres } from "./entities/Genres";
import type { ParentPlatform } from "./entities/ParentPlatform";
import { create } from "zustand";

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenre: (genre: Genres) => void;
	setPlatform: (platform: ParentPlatform) => void;
	setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {
		genre: null,
		platform: null,
		sortOrder: null,
		searchGameText: "",
	},
	setSearchText: (searchText) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, searchGameText: searchText },
		})),
	setGenre: (genre) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
	setPlatform: (platform) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
