import { Badge } from "@chakra-ui/react";

interface MetaCriticProps {
	score: number;
}
const MetaCritic = ({ score }: MetaCriticProps) => {
	return (
		<Badge
			backgroundColor={score > 75 ? "green" : "yellow"}
			fontSize="16px"
			paddingX={2}
			borderRadius="4px"
		>
			{score}
		</Badge>
	);
};

export default MetaCritic;
