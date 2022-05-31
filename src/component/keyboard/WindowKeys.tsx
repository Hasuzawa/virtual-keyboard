import Span from "../Span"
import { KeyCapProps } from "../../type"
import { LowerCaseKey } from "../../type"
import { BsWindows } from "react-icons/bs"
import { KeyWidth, padding, smallerFont } from "./spacing"

const windowKeys: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>> = {
	backspace: {
		lowerCase: (
			<Span paddingRight={padding.windows} fontSize={smallerFont.windows}>
				Backspace
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "center-right",
	},
	tab: {
		lowerCase: (
			<Span paddingLeft={padding.windows} fontSize={smallerFont.windows}>
				Tab
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "center-left",
	},
	capsLock: {
		lowerCase: (
			<Span paddingLeft={padding.windows} fontSize={smallerFont.windows}>
				Caps
			</Span>
		),
		width: KeyWidth.CAP_RETURN,
		placement: "center-left",
	},
	enter: {
		lowerCase: (
			<Span paddingRight={padding.windows} fontSize={smallerFont.windows}>
				Enter
			</Span>
		),
		width: KeyWidth.CAP_RETURN,
		placement: "center-right",
	},
	leftShift: {
		lowerCase: (
			<Span paddingLeft={padding.windows} fontSize={smallerFont.windows}>
				Shift
			</Span>
		),
		width: KeyWidth.SHIFT,
		placement: "center-left",
	},
	rightShift: {
		lowerCase: (
			<Span paddingRight={padding.windows} fontSize={smallerFont.windows}>
				Shift
			</Span>
		),
		width: KeyWidth.SHIFT,
		placement: "center-right",
	},
	leftCtrl: {
		lowerCase: (
			<Span paddingLeft={padding.windows} fontSize={smallerFont.windows}>
				Ctrl
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "center-left",
	},
	fn: {
		lowerCase: <Span fontSize={smallerFont.windows}>Fn</Span>,
	},
	logoKey: {
		lowerCase: <BsWindows size={20} />,
	},
	leftAlt: {
		lowerCase: <Span fontSize={smallerFont.windows}>Alt</Span>,
	},
	spacebar: {
		lowerCase: "",
		width: KeyWidth.SPACEBAR,
	},
	rightAlt: {
		lowerCase: <Span fontSize={smallerFont.windows}>Alt</Span>,
	},
	rightCtrl: {
		lowerCase: <Span fontSize={smallerFont.windows}>Ctrl</Span>,
	},
}

export default windowKeys
