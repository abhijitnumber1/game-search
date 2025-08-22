import usePlatformSelector from "@/hooks/usePlatformSelector";
import { Button, Menu, Portal } from "@chakra-ui/react";

const PlatformSelector = () => {
	const { data } = usePlatformSelector();
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="solid" size="sm">
					Open
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{data.map((platform) => (
							<Menu.Item key={platform.id} value={platform.slug}>
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
