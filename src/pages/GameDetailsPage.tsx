import GameDetail from "@/components/GameDetails";
import GameDetailsAttribute from "@/components/GameDetailsAttribute";
import useGame from "@/hooks/useGame";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import MetaCritic from "@/components/MetaCritic";
import GameTrailer from "@/components/GameTrailer";
const GameDetailsPage = () => {
	const param = useParams();

	const { data, error, loading } = useGame(param.slug!);
	if (error) throw error;
	if (loading) return <Spinner />;
	return (
		<>
			<GameDetail game={data!} />
			<SimpleGrid columns={2} as={"dl"}>
				<GameDetailsAttribute term="Platforms">
					{data?.platforms.map((p) => (
						<Text key={p.platform.id}>{p.platform.name}</Text>
					))}
				</GameDetailsAttribute>
				<GameDetailsAttribute term="Metascore">
					<MetaCritic score={data!.metacritic} />
				</GameDetailsAttribute>
				<GameDetailsAttribute term="Genres">
					{data?.genres.map((g) => (
						<Text key={g.id}>{g.name}</Text>
					))}
				</GameDetailsAttribute>
				<GameDetailsAttribute term="Publishers">
					{data?.publishers?.map((p) => (
						<Text key={p.id}>{p.name}</Text>
					))}
				</GameDetailsAttribute>
			</SimpleGrid>
			<GameTrailer gameId={data!.id} />
		</>
	);
};

export default GameDetailsPage;
