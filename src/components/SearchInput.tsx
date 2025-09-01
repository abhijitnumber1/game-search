import { Field, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import useGameQueryStore from "@/store";
const searchSchema = z.object({
	query: z
		.string()
		.optional()
		.refine((val) => !val || val.length >= 3, {
			message: "Must be at least 3 characters",
		}),
});

type SearchForm = z.infer<typeof searchSchema>;
const SearchInput = () => {
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const {
		register,
		watch,
		formState: { errors },
	} = useForm<SearchForm>({
		resolver: zodResolver(searchSchema),
		mode: "onBlur",
	});

	const query = watch("query");

	useEffect(() => {
		if (query && query.length >= 3) {
			console.log(query);
			setSearchText(query);
		}
	}, [query]);

	return (
		<Field.Root flex="1" maxWidth="50%" invalid={!!errors.query}>
			<InputGroup startElement={<LuSearch />}>
				<Input
					placeholder="Search Game (min 3 characters)"
					borderRadius={20}
					variant="outline"
					{...register("query")}
				/>
			</InputGroup>
			<Field.ErrorText>{errors.query?.message}</Field.ErrorText>
		</Field.Root>
	);
};
export default SearchInput;
