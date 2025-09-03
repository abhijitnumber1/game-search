import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import type { Game } from "@/entities/Game";
interface GameDetailProps {
	game: Game;
}
const GameDetail = ({ game }: GameDetailProps) => {
	const [expanded, setExpanded] = useState(false);

	if (!game) return null;

	const actualTextLength = game.description_raw.length;
	const testLength = 300;

	const displayedText = expanded
		? game.description_raw
		: game.description_raw.substring(0, testLength) +
		  (actualTextLength > testLength ? "..." : "");

	return (
		<>
			<Text textStyle="4xl">{game.name}</Text>
			<Text>
				{displayedText}
				{actualTextLength > testLength && (
					<Button
						size="xs"
						ml={2}
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? "Read Less" : "Read More"}
					</Button>
				)}
			</Text>
		</>
	);
};

export default GameDetail;
