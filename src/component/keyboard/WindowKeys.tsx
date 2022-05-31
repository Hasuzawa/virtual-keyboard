import Span from "../Span"
import { KeyCapProps } from "../../type"
import { LowerCaseKey } from "../../type"
import { BsWindows } from "react-icons/bs"
import { KeyWidth, padding, smallerFont, iconSize } from "./spacing"

const windowKeys: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>> = {
	logoKey: {
		lowerCase: <BsWindows size={iconSize.window} />,
	},
}

export default windowKeys
