import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
	const isLg = useBreakpointValue({ base: false, lg: true });
	return (
		<>
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
					<GridItem area="aside" bg="green">
						Aside
					</GridItem>
				) : null}
				<GridItem area={"main"} bg={"blue"}>
					Main
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
