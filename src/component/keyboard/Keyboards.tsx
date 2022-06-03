import { defaultKeyboard } from "./DefaultKeyboard"
import { windowsKeyboard } from "./WindowsKeyboard"
import { macKeyboard } from "./MacKeyboard"
import { raspberryKeyboard } from "./RaspberryKeyboard"
import { Keyboards } from "../../type"

const keyboards: Keyboards = {
	default: defaultKeyboard,
	windows: windowsKeyboard,
	mac: macKeyboard,
	linux: <></>,
	raspberry: raspberryKeyboard,
}

export default keyboards
