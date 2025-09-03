import useScreenshots from "@/hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
	gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
	const { data, error, isLoading } = useScreenshots(gameId);
	if (error) throw error;
	if (isLoading) return <Spinner />;
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
			{data?.map((s) => (
				<Image key={s.id} src={s.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
