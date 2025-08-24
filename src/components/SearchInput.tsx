import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
	return (
		<InputGroup flex="1" startElement={<LuSearch />} maxWidth="50%">
			<Input
				placeholder="Search contacts"
				borderRadius={20}
				variant={"outline"}
			/>
		</InputGroup>
	);
};
export default SearchInput;
