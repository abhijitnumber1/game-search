import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
	return (
		<HStack>
			<Image src={logo} height={"10"} margin={"1"} />
			Game Search
		</HStack>
	);
};

export default NavBar;
