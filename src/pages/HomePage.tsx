import GameGrid from "@/components/GameGrid";
import HeadingComponent from "@/components/HeadingComponent";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import Genre from "../components/Genres";

import { useBreakpointValue, Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
	const isLg = useBreakpointValue({ base: false, lg: true });
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "240px 1fr" }}
		>
			{isLg ? (
				<GridItem area="aside" padding={5}>
					<Genre />
				</GridItem>
			) : null}
			<GridItem
				area={"main"}
				display="flex"
				flexDirection="column"
				padding={5}
			>
				<HeadingComponent />
				<HStack mb={4}>
					<SortSelector />
					<PlatformSelector />
				</HStack>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
