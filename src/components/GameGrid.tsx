import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
	const { games, error, loading } = useGames();
	const skeleton = [1, 2, 3, 4, 5, 6];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} padding="10px">
				{loading &&
					skeleton.map((s) => {
						return <GameSkeleton key={s} />;
					})}
				{games.map((game) => {
					return <GameCard key={game.id} game={game} />;
				})}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
