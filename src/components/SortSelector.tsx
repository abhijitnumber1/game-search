import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
const SortSelector = () => {
	const { gameQuery, setSortOrder } = useGameQueryStore();

	const sortOrder = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Data Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];
	const currentSortOrder = sortOrder.find(
		(order) => order.value === gameQuery.sortOrder
	);
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					Order By : {currentSortOrder?.label || "Relevance"}
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{sortOrder.map((order) => (
							<Menu.Item
								key={order.value}
								value={order.value}
								onClick={() => {
									setSortOrder(order.value);
								}}
							>
								{order.label}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default SortSelector;
