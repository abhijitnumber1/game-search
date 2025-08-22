import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genres";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
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
					<Genre selectedGenre={(genre) => setSelectedGenre(genre)} />
				</GridItem>
			) : null}
			<GridItem area={"main"}>
				<PlatformSelector />
				<GameGrid selected_genre={selectedGenre} />
			</GridItem>
		</Grid>
	);
}

export default App;
