import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import type { ParentPlatform } from "../entities/ParentPlatform";

const apiClient = new ApiClient<ParentPlatform>("/platforms/lists/parents");
const usePlatformSelector = () => {
	const getPlatform = useQuery({
		queryKey: ["platforms"],
		queryFn: () => apiClient.get({}),
		staleTime: 24 * 60 * 60 * 1000,
	});
	return {
		data: getPlatform.data,
		error: getPlatform.error,
		loading: getPlatform.isPending,
	};
};

export default usePlatformSelector;
