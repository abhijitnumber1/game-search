import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genres";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { ParentPlatform } from "./hooks/usePlatformSelector";
import SortSelector from "./components/SortSelector";
import HeadingComponent from "./components/HeadingComponent";
export interface GameQuery {
	genre: Genres | null;
	platform: ParentPlatform | null;
	sortOrder: string | null;
	searchGameText: string;
}
function App() {
	const isLg = useBreakpointValue({ base: false, lg: true });
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "240px 1fr" }}
		>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>

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
}

export default App;
