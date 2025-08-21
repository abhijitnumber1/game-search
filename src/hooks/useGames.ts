import { apiClient } from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
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

interface FetchGamesResponse {
	count: number;
	results: Game[];
}
const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		apiClient
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErrors(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { games, error, loading };
};

export default useGames;
