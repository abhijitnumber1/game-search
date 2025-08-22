import useData from "./useData";
export interface ParentPlatform {
	id: number;
	name: string;
	slug: string;
}

const usePlatformSelector = () =>
	useData<ParentPlatform>("/platforms/lists/parents");

export default usePlatformSelector;
