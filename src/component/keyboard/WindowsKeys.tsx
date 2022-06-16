import { WindowsKeys } from "../../type"
import { BsWindows } from "react-icons/bs"
import { iconSize } from "./spacing"
import { defaultKeys } from "./DefaultKeys"
import KeyCap from "./KeyCap"

const windowsKeys: WindowsKeys = Object.create(defaultKeys)
windowsKeys.logoKey = (
	<KeyCap lowerCase={<BsWindows size={iconSize.window} />} />
)

export { windowsKeys }
