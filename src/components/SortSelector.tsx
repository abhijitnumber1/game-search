import { Button, Menu, Portal } from "@chakra-ui/react";
interface Props {
	onSelectOrder: (order: string) => void;
	selectedOrder: string | null;
}
const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
	const sortOrder = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Data Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];
	const currentSortOrder = sortOrder.find(
		(order) => order.value === selectedOrder
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
									onSelectOrder(order.value);
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
