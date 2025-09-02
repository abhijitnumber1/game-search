import useGame from "@/hooks/useGame";
import { Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
const GameDetail = () => {
	const param = useParams();

	const { data: game, error, loading } = useGame(param.slug!);
	if (error) throw error;
	if (loading) return <Spinner />;
	return (
		<>
			<Text textStyle="4xl">{game?.name}</Text>
			<Text>{game?.description_raw}</Text>
		</>
	);
};

export default GameDetail;
