import useGenres from "@/hooks/useGenres";
import getOptimizedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const Genres = () => {
	const { data } = useGenres();
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
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default Genres;
