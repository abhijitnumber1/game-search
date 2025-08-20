import type { Game } from "@/hooks/useGames";
import { Button, Card, Image, Text } from "@chakra-ui/react";

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card.Root maxW="sm" overflow="hidden" marginBottom={"10px"}>
			<Image src={game.background_image} alt={game.name} />
			<Card.Body gap="2">
				<Card.Title>{game.name}</Card.Title>
				<Card.Description>
					This sofa is perfect for modern tropical spaces, baroque
					inspired spaces.
				</Card.Description>
				<Text
					textStyle="2xl"
					fontWeight="medium"
					letterSpacing="tight"
					mt="2"
				>
					$450
				</Text>
			</Card.Body>
			<Card.Footer gap="2">
				<Button variant="solid">Buy now</Button>
				<Button variant="ghost">Add to cart</Button>
			</Card.Footer>
		</Card.Root>
	);
};

export default GameCard;
