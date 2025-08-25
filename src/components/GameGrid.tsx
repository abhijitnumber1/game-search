import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
interface Props {
	gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, loading } = useGames(gameQuery);
	const skeleton = [1, 2, 3, 4, 5, 6];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
				{loading &&
					skeleton.map((s) => {
						return (
							<GameCardContainer key={s}>
								<GameSkeleton />
							</GameCardContainer>
						);
					})}
				{data.map((game) => {
					return (
						<GameCardContainer key={game.id}>
							<GameCard game={game} />
						</GameCardContainer>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
