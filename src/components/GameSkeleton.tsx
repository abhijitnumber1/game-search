import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
	return (
		<Card.Root
			maxW="sm"
			overflow="hidden"
			marginBottom={"10px"}
			width={"300px"}
		>
			<Skeleton height="200px" />
			<Card.Body gap="2">
				<SkeletonText />
			</Card.Body>
		</Card.Root>
	);
};

export default GameSkeleton;
