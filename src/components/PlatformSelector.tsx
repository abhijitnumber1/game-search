import usePlatformSelector from "@/hooks/usePlatformSelector";
import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
const PlatformSelector = () => {
	const { gameQuery, setPlatform } = useGameQueryStore();

	const { data } = usePlatformSelector();
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					{gameQuery.platform?.name || "Select Platform"}
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{data?.results.map((platform) => (
							<Menu.Item
								key={platform.id}
								value={platform.slug}
								onClick={() => {
									setPlatform(platform);
								}}
							>
								{platform.name}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default PlatformSelector;
