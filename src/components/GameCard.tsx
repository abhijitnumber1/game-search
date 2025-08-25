import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import MetaCritic from "./MetaCritic";
import getOptimizedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

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
				<Card.Title fontSize="2xl" marginBottom={3}>
					{game.name}
				</Card.Title>
				<Emoji rating={game.rating_top} />
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
