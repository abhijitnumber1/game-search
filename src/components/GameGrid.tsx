import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "@/store";
const GameGrid = () => {
	const { gameQuery } = useGameQueryStore();

	const {
		data,
		error,
		isPending: loading,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const skeleton = [1, 2, 3, 4, 5, 6];
	const fetchedGamesCount =
		data?.pages.reduce((total, page) => {
			return total + page.results.length;
		}, 0) || 0;
	return (
		<>
			{error && <Text>{error.message}</Text>}
			<InfiniteScroll
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}
			>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
					{loading &&
						skeleton.map((s) => {
							return (
								<GameCardContainer key={s}>
									<GameSkeleton />
								</GameCardContainer>
							);
						})}
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	);
};

export default GameGrid;
