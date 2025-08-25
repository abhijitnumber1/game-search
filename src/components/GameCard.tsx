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
		<Card.Root>
			<Image
				src={getOptimizedImageUrl(game.background_image)}
				alt={game.name}
			/>
			<Card.Body>
				<HStack justifyContent={"space-between"} marginBottom={3}>
					<PlatformIcons
						plastforms={game.platforms.map((p) => p.platform)}
					/>
					<MetaCritic score={game.metacritic} />
				</HStack>
				<Card.Title fontSize="2xl">{game.name}</Card.Title>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
