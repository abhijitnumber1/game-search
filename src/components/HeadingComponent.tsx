import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";
const HeadingComponent = () => {
	const { gameQuery } = useGameQueryStore();
	const heading = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
	}  Games`;
	return (
		<Heading as="h1" size="5xl" marginBottom={"10px"}>
			{heading}
		</Heading>
	);
};
export default HeadingComponent;
