import type { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsAndroid, BsNintendoSwitch } from "react-icons/bs";
import { FaLinux, FaWindows, FaXbox } from "react-icons/fa6";
import {
	SiMacos,
	SiPlaystation3,
	SiPlaystation4,
	SiPlaystation5,
} from "react-icons/si";

interface PlatformIconsProps {
	plastforms: Platform[];
}

const PlatformIcons = ({ plastforms }: PlatformIconsProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		android: BsAndroid,
		linux: FaLinux,
		playstation3: SiPlaystation3,
		playstation5: SiPlaystation5,
		xbox360: FaXbox,
		macos: SiMacos,
		"xbox-one": FaXbox,
		playstation4: SiPlaystation4,
		"nintendo-switch": BsNintendoSwitch,
		"xbox-series-x": FaXbox,
	};

	return (
		<HStack>
			{plastforms.map((platform) => {
				const Icon = iconMap[platform.slug]; // look up icon

				return Icon ? (
					<Icon key={platform.slug} size={"1.3em"} color="gray" />
				) : (
					platform.slug
				);
			})}
		</HStack>
	);
};
export default PlatformIcons;
