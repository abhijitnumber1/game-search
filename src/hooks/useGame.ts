import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import type { Game } from "./useGames";
const useGame = (gameslug: string) => {
	const apiClient = new ApiClient<Game>(`/games/${gameslug}`);
	const getGame = useQuery({
		queryKey: ["game", gameslug],
		queryFn: () => apiClient.getOne({}),
		enabled: !!gameslug, // 👈 don’t run if slug is empty
	});
	return {
		data: getGame.data,
		error: getGame.error,
		loading: getGame.isPending,
	};
};
export default useGame;
