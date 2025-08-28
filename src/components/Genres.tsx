import useGenres, { type Genres } from "@/hooks/useGenres";
import getOptimizedImageUrl from "@/services/image-url";
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	Spinner,
} from "@chakra-ui/react";

interface Props {
	selectedGenre: (genre: Genres) => void;
}

const Genre = ({ selectedGenre }: Props) => {
	const { data, loading, error } = useGenres();
	if (error) return null;
	if (loading) return <Spinner />;
	return (
		<>
			<Heading fontSize="3xl" marginBottom={4}>
				Genres
			</Heading>
			<List.Root gap="2" variant="plain" align="center">
				{data?.results.map((genre) => (
					<List.Item key={genre.id}>
						<HStack>
							<Image
								src={getOptimizedImageUrl(
									genre.image_background
								)}
								boxSize="32px"
								borderRadius={8}
								marginBottom={2}
								objectFit={"cover"}
							/>
							<Button
								fontSize="lg"
								variant="plain"
								whiteSpace="normal"
								onClick={() => selectedGenre(genre)}
							>
								{genre.name}
							</Button>
						</HStack>
					</List.Item>
				))}
			</List.Root>
		</>
	);
};

export default Genre;
