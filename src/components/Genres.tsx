import useGenres, { type Genres } from "@/hooks/useGenres";
import getOptimizedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
	selectedGenre: (genre: Genres) => void;
}

const Genre = ({ selectedGenre }: Props) => {
	const { data, loading, error } = useGenres();
	if (error) return null;
	if (loading) return <Spinner />;
	return (
		<List.Root gap="2" variant="plain" align="center">
			{data.map((genre) => (
				<List.Item key={genre.id}>
					<HStack>
						<Image
							src={getOptimizedImageUrl(genre.image_background)}
							boxSize="32px"
							borderRadius={8}
							marginBottom={2}
						/>
						<Button
							fontSize="lg"
							variant="plain"
							onClick={() => selectedGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default Genre;
