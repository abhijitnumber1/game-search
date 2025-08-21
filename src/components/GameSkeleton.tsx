import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
	return (
		<Card.Root>
			<Skeleton height="200px" />
			<Card.Body gap="2">
				<SkeletonText />
			</Card.Body>
		</Card.Root>
	);
};

export default GameSkeleton;
