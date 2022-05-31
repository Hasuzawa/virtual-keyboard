// import KeyCapProps from "./component/KeyCap"
import Span from "../Span"
import { KeyCapProps } from "../../type"
import { LowerCaseKey } from "../../type"
import { BsCommand, BsOption } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import { KeyWidth, padding, smallerFont, iconSize } from "./spacing"

const macKeys: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>> = {
	delete: {
		lowerCase: (
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				delete
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "bottom-right",
	},
	tab: {
		lowerCase: (
			<Span
				paddingLeft={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				tab
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "bottom-left",
	},
	capsLock: {
		lowerCase: (
			<Span
				paddingLeft={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				caps lock
			</Span>
		),
		width: KeyWidth.CAP_RETURN,
		placement: "bottom-left",
	},
	return: {
		lowerCase: (
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				return
			</Span>
		),
		width: KeyWidth.CAP_RETURN,
		placement: "bottom-right",
	},
	leftShift: {
		lowerCase: (
			<Span
				paddingLeft={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				shift
			</Span>
		),
		width: KeyWidth.SHIFT,
		placement: "bottom-left",
	},
	rightShift: {
		lowerCase: (
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				shift
			</Span>
		),
		width: KeyWidth.SHIFT,
		placement: "bottom-right",
	},
	fn: {
		lowerCase: (
			<>
				<Span
					alignSelf="flex-end"
					paddingTop={padding.mac}
					paddingRight={padding.mac}
					fontSize={smallerFont.mac}
				>
					fn
				</Span>
				<Span
					alignSelf="flex-start"
					paddingLeft={padding.mac}
					paddingBottom={padding.mac}
					fontSize={smallerFont.mac}
				>
					<AiOutlineGlobal size={iconSize.mac} />
				</Span>
			</>
		),
		placement: "vertical-split",
	},
	control: {
		lowerCase: (
			<>
				<Span
					alignSelf="flex-end"
					paddingTop={padding.mac}
					paddingRight={padding.mac}
				>
					^
				</Span>
				<Span
					alignSelf="center"
					paddingBottom={padding.mac}
					fontSize={smallerFont.mac}
				>
					control
				</Span>
			</>
		),
		placement: "vertical-split",
	},
	leftOption: {
		lowerCase: (
			<>
				<Span
					alignSelf="flex-end"
					paddingTop={padding.mac}
					paddingRight={padding.mac}
				>
					<BsOption size={iconSize.mac} />
				</Span>
				<Span
					alignSelf="center"
					paddingBottom={padding.mac}
					fontSize={smallerFont.mac}
				>
					option
				</Span>
			</>
		),
		placement: "vertical-split",
	},
	leftCommand: {
		lowerCase: (
			<>
				<Span
					alignSelf="flex-end"
					paddingTop={padding.mac}
					paddingRight={padding.mac}
				>
					<BsCommand size={iconSize.mac} />
				</Span>
				<Span
					paddingBottom={padding.mac}
					fontSize={smallerFont.mac}
					alignSelf="center"
				>
					command
				</Span>
			</>
		),
		width: KeyWidth.COMMAND,
		placement: "vertical-split",
	},
	spacebar: {
		lowerCase: "",
		width: KeyWidth.SPACEBAR,
	},
	rightOption: {
		lowerCase: (
			<>
				<Span
					alignSelf="flex-start"
					paddingLeft={padding.mac}
					paddingTop={padding.mac}
				>
					<BsOption size={iconSize.mac} />
				</Span>
				<Span
					alignSelf="center"
					paddingBottom={padding.mac}
					fontSize={smallerFont.mac}
				>
					option
				</Span>
			</>
		),
		placement: "vertical-split",
	},
	rightCommand: {
		lowerCase: (
			<>
				<Span
					alignSelf="flex-start"
					paddingTop={padding.mac}
					paddingLeft={padding.mac}
				>
					<BsCommand size={iconSize.mac} />
				</Span>
				<Span
					paddingBottom={padding.mac}
					fontSize={smallerFont.mac}
					alignSelf="center"
				>
					command
				</Span>
			</>
		),
		width: KeyWidth.COMMAND,
		placement: "vertical-split",
	},
}

export default macKeys
