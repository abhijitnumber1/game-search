import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genres";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { ParentPlatform } from "./hooks/usePlatformSelector";
import SortSelector from "./components/SortSelector";
export interface GameQuery {
	genre: Genres | null;
	platform: ParentPlatform | null;
	sortOrder: string | null;
}
function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
					<Genre
						selectedGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						}
					/>
				</GridItem>
			) : null}
			<GridItem
				area={"main"}
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<HStack mb={4}>
					<SortSelector
						onSelectOrder={(order) =>
							setGameQuery({ ...gameQuery, sortOrder: order })
						}
						selectedOrder={gameQuery?.sortOrder}
					/>
					<PlatformSelector
						selectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
