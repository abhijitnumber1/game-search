import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genres";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { ParentPlatform } from "./hooks/usePlatformSelector";
export interface GameQuery {
	genre: Genres | null;
	platform: ParentPlatform | null;
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
			<GridItem area={"main"}>
				<PlatformSelector
					selectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
					selectedPlatform={gameQuery.platform}
				/>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
