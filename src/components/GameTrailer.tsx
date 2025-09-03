import useTrailers from "@/hooks/useTrailer";
import { Spinner } from "@chakra-ui/react";
interface Props {
	gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
	const { data, error, isLoading } = useTrailers(gameId);
	const dataobj = data?.[0];
	if (error) throw error;
	if (isLoading) return <Spinner />;
	return (
		dataobj && (
			<video
				src={dataobj?.data[480]}
				poster={dataobj?.preview}
				controls
			/>
		)
	);
};
export default GameTrailer;
