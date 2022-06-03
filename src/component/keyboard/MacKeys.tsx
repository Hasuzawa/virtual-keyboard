// import KeyCapProps from "./component/KeyCap"
import Span from "../Span"
import { KeyCapProps } from "../../type"
import { LowerCaseKey } from "../../type"
import { BsCommand, BsOption } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import {
	KeyWidth,
	padding,
	smallerFont,
	iconSize,
	KeyWidth as keyWidth,
} from "./spacing"
import { defaultKeys } from "./DefaultKeys"
import KeyCap from "./KeyCap"

// const macKeys: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>> = {

// 	leftOption: {
// 		lowerCase: (
// 			<>
// 				<Span
// 					alignSelf="flex-end"
// 					paddingTop={padding.mac}
// 					paddingRight={padding.mac}
// 				>
// 					<BsOption size={iconSize.mac} />
// 				</Span>
// 				<Span
// 					alignSelf="center"
// 					paddingBottom={padding.mac}
// 					fontSize={smallerFont.mac}
// 				>
// 					option
// 				</Span>
// 			</>
// 		),
// 		placement: "vertical-split",
// 	},
// 	leftCommand: {
// 		lowerCase: (
// 			<>
// 				<Span
// 					alignSelf="flex-end"
// 					paddingTop={padding.mac}
// 					paddingRight={padding.mac}
// 				>
// 					<BsCommand size={iconSize.mac} />
// 				</Span>
// 				<Span
// 					paddingBottom={padding.mac}
// 					fontSize={smallerFont.mac}
// 					alignSelf="center"
// 				>
// 					command
// 				</Span>
// 			</>
// 		),
// 		width: KeyWidth.COMMAND,
// 		placement: "vertical-split",
// 	},
// 	spacebar: {
// 		lowerCase: "",
// 		width: KeyWidth.SPACEBAR,
// 	},
// 	rightOption: {
// 		lowerCase: (
// 			<>
// 				<Span
// 					alignSelf="flex-start"
// 					paddingLeft={padding.mac}
// 					paddingTop={padding.mac}
// 				>
// 					<BsOption size={iconSize.mac} />
// 				</Span>
// 				<Span
// 					alignSelf="center"
// 					paddingBottom={padding.mac}
// 					fontSize={smallerFont.mac}
// 				>
// 					option
// 				</Span>
// 			</>
// 		),
// 		placement: "vertical-split",
// 	},
// 	rightCommand: {
// 		lowerCase: (
// 			<>
// 				<Span
// 					alignSelf="flex-start"
// 					paddingTop={padding.mac}
// 					paddingLeft={padding.mac}
// 				>
// 					<BsCommand size={iconSize.mac} />
// 				</Span>
// 				<Span
// 					paddingBottom={padding.mac}
// 					fontSize={smallerFont.mac}
// 					alignSelf="center"
// 				>
// 					command
// 				</Span>
// 			</>
// 		),
// 		width: KeyWidth.COMMAND,
// 		placement: "vertical-split",
// 	},
// }

const macKeys = Object.create(defaultKeys)
macKeys.delete = (
	<KeyCap
		lowerCase={
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				delete
			</Span>
		}
		width={keyWidth.TAB_DEL}
		placement="bottom-right"
	/>
)
macKeys.tab = (
	<KeyCap
		lowerCase={
			<Span
				paddingLeft={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				tab
			</Span>
		}
		width={keyWidth.TAB_DEL}
		placement="bottom-left"
	/>
)
macKeys.capsLock = (
	<KeyCap
		lowerCase={
			<Span
				paddingLeft={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				caps lock
			</Span>
		}
		width={keyWidth.CAP_RETURN}
		placement="bottom-left"
	/>
)
macKeys.return = (
	<KeyCap
		lowerCase={
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				return
			</Span>
		}
		width={keyWidth.CAP_RETURN}
		placement="bottom-right"
	/>
)
macKeys.leftShift = (
	<KeyCap
		lowerCase={
			<Span
				paddingLeft={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				shift
			</Span>
		}
		width={keyWidth.SHIFT}
		placement="bottom-left"
	/>
)
macKeys.rightShift = (
	<KeyCap
		lowerCase={
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				shift
			</Span>
		}
		width={keyWidth.SHIFT}
		placement="bottom-right"
	/>
)
macKeys.fn = (
	<KeyCap
		lowerCase={
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
		}
		placement="vertical-split"
	/>
)
macKeys.ctrl = (
	<KeyCap
		lowerCase={
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
		}
		placement="vertical-split"
	/>
)

// macKey.return = <KeyCap

// />

export { macKeys }
