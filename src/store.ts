import type { Genres } from "./hooks/useGenres";
import type { ParentPlatform } from "./hooks/usePlatformSelector";
import { create } from "zustand";

interface GameQuery {
	genre: Genres | null;
	platform: ParentPlatform | null;
	sortOrder: string | null;
	searchGameText: string;
}

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
