import type { JSX } from "react";
import {
	FaHeartCircleBolt,
	FaTachographDigital,
	FaThumbsUp,
} from "react-icons/fa6";
interface Props {
	rating: number;
}
const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;
	const emojiMap: { [key: number]: JSX.Element | string } = {
		3: <FaTachographDigital size={24} />,
		4: <FaThumbsUp size={24} />,
		5: <FaHeartCircleBolt size={24} />,
	};
	return emojiMap[rating];
};

export default Emoji;
