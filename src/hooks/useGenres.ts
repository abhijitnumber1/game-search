import genre from "@/data/genre";

export interface Genres {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => ({ data: genre, error: null, loading: false });

export default useGenres;
