import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genres } from "@/hooks/useGenres";
import type { ParentPlatform } from "@/hooks/usePlatformSelector";
interface Props {
	selected_genre: Genres | null;
	selected_platform: ParentPlatform | null;
}
const GameGrid = ({ selected_genre, selected_platform }: Props) => {
	const { data, error, loading } = useGames(
		selected_genre,
		selected_platform
	);
	const skeleton = [1, 2, 3, 4, 5, 6];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} paddingY={4}>
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
