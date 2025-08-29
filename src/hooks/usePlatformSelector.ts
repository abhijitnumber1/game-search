import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../services/api-client";
import { apiClient } from "@/services/api-client";
export interface ParentPlatform {
	id: number;
	name: string;
	slug: string;
}

const usePlatformSelector = () => {
	const getPlatform = useQuery({
		queryKey: ["platforms"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<ParentPlatform>>("/platforms/lists/parents")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
	});
	return {
		data: getPlatform.data,
		error: getPlatform.error,
		loading: getPlatform.isPending,
	};
};

export default usePlatformSelector;
