import { iconSize } from "./spacing"
import { defaultKeys } from "./DefaultKeys"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import { LinuxKeys } from "../../type"
import { FaLinux } from "react-icons/fa"


const linuxKeys: LinuxKeys = Object.create(defaultKeys)
linuxKeys.logoKey = (
	<KeyCap lowerCase={<FaLinux size={iconSize.linux} />} />
)

export { linuxKeys }
