import { Box, Heading } from "@chakra-ui/react";
interface Props {
	term: string;
	children: React.ReactNode | React.ReactNode[];
}
const GameDetailsAttribute = ({ term, children }: Props) => {
	return (
		<>
			<Box marginY={5}>
				<Heading as="dt" fontSize="md" color={"gray.600"}>
					{term}
				</Heading>
				<dd>{children}</dd>
			</Box>
		</>
	);
};

export default GameDetailsAttribute;
