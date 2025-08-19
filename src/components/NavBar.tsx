import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
	return (
		<HStack>
			<Image src={logo} height={"10"} margin={"1"} />
			Game Search
			<ColorModeButton />
		</HStack>
	);
};

export default NavBar;
