import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";

function App() {
	const isLg = useBreakpointValue({ base: false, lg: true });
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>

			{isLg ? (
				<GridItem area="aside">
					<Genres />
				</GridItem>
			) : null}
			<GridItem area={"main"}>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
