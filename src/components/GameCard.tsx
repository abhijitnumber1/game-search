import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import MetaCritic from "./MetaCritic";
import getOptimizedImageUrl from "@/services/image-url";

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card.Root maxW="sm" overflow="hidden" marginBottom={"10px"}>
			<Image
				src={getOptimizedImageUrl(game.background_image)}
				alt={game.name}
			/>
			<Card.Body gap="2">
				<Card.Title>{game.name}</Card.Title>
				<HStack justifyContent={"space-between"}>
					<PlatformIcons
						plastforms={game.platforms.map((p) => p.platform)}
					/>
					<MetaCritic score={game.metacritic} />
				</HStack>
				<Text
					textStyle="2xl"
					fontWeight="medium"
					letterSpacing="tight"
					mt="2"
				>
					$450
				</Text>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
