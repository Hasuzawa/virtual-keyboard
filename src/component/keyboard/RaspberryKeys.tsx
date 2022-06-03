import { SiRaspberrypi } from "react-icons/si"
import { iconSize } from "./spacing"
import { defaultKeys } from "./DefaultKeys"
import { MdArrowLeft, MdArrowRight } from "react-icons/md"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import { RaspberryKeys } from "../../type"

const raspberryKeys: RaspberryKeys = Object.create(defaultKeys)
raspberryKeys.logoKey = (
	<KeyCap lowerCase={<SiRaspberrypi size={iconSize.raspberry} />} />
)
raspberryKeys.arrowLeft = (
	<HalfKeyCap lowerCase={<MdArrowLeft size={iconSize.arrow} />} />
)
raspberryKeys.arrowRight = (
	<HalfKeyCap lowerCase={<MdArrowRight size={iconSize.arrow} />} />
)

export { raspberryKeys }
