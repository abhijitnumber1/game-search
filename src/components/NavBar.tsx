import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<Flex justify="space-between" align="center" p="2">
			<Flex align="center" gap="2">
				<Image src={logo} h="10" />
				Game Search
			</Flex>
			<SearchInput />
			<ColorModeButton />
		</Flex>
	);
};

export default NavBar;
