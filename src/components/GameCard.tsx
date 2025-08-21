import type { Game } from "@/hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card.Root maxW="sm" overflow="hidden" marginBottom={"10px"}>
			<Image
				src={game.background_image}
				alt={game.name}
				height={"200px"}
			/>
			<Card.Body gap="2">
				<Card.Title>{game.name}</Card.Title>
				<PlatformIcons
					plastforms={game.platforms.map((p) => p.platform)}
				/>
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
