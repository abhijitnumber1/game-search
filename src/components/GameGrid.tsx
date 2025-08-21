import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { data, error, loading } = useGames();
	const skeleton = [1, 2, 3, 4, 5, 6];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} padding="10px">
				{loading &&
					skeleton.map((s) => {
						return (
							<GameCardContainer>
								<GameSkeleton key={s} />
							</GameCardContainer>
						);
					})}
				{data.map((game) => {
					return (
						<GameCardContainer>
							<GameCard key={game.id} game={game} />
						</GameCardContainer>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
