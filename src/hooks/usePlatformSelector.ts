import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";

const apiClient = new ApiClient<ParentPlatform>("/platforms/lists/parents");
export interface ParentPlatform {
	id: number;
	name: string;
	slug: string;
}

const usePlatformSelector = () => {
	const getPlatform = useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.get,
		staleTime: 24 * 60 * 60 * 1000,
	});
	return {
		data: getPlatform.data,
		error: getPlatform.error,
		loading: getPlatform.isPending,
	};
};

export default usePlatformSelector;
