import usePlatformSelector, {
	type ParentPlatform,
} from "@/hooks/usePlatformSelector";
import { Button, Menu, Portal } from "@chakra-ui/react";
interface Props {
	selectedPlatform: ParentPlatform | null;
	selectPlatform: (platform: ParentPlatform) => void;
}
const PlatformSelector = ({ selectPlatform, selectedPlatform }: Props) => {
	const { data } = usePlatformSelector();
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					{selectedPlatform?.name || "Select Platform"}
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
									selectPlatform(platform);
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
