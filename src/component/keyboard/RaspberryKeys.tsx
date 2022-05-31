import Span from "../Span"
import { KeyCapProps } from "../../type"
import { LowerCaseKey } from "../../type"
import { iconSize } from "./spacing"
import { SiRaspberrypi } from "react-icons/si"

const raspberryKeys: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>> = {
	logoKey: {
		lowerCase: <SiRaspberrypi size={iconSize.raspberry} />,
	},
}

export default raspberryKeys
