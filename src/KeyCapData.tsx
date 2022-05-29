// import KeyCapProps from "./component/KeyCap"
import Span from "./component/Span"
import { Placement } from "./component/KeyCap"
import {
	Digit,
	LowerCaseAlphabet,
	SpecialCharacters,
	FunctionalKey,
} from "./type"

enum KeyWidth {
	STANDARD = 64,
	TAB_DEL = 98,
	CAP_RETURN = 117,
	SHIFT = 153,
	SPACEBAR = 352,
	COMMAND = 81,
}

// const backspace: React.ReactElement =
// for windows
const padding = 15
const smallerFont = 14

type LowerCaseKey =
	| LowerCaseAlphabet
	| Digit
	| SpecialCharacters
	| FunctionalKey

interface KeyCapProps {
	lowerCase: string | React.ReactNode
	upperCase?: string | React.ReactNode
	width?: number
	placement?: Placement
}

type KeyCapData = {
	default: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
	windows: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
}

const keyCapData: KeyCapData = {
	default: {
		"`": {
			lowerCase: "`",
			upperCase: "~",
		},
		"1": {
			lowerCase: "1",
			upperCase: "!",
		},
		"2": {
			lowerCase: "2",
			upperCase: "@",
		},
		"3": {
			lowerCase: "3",
			upperCase: "#",
		},
		"4": {
			lowerCase: "4",
			upperCase: "$",
		},
		"5": {
			lowerCase: "5",
			upperCase: "%",
		},
		"6": {
			lowerCase: "6",
			upperCase: "^",
		},
		"7": {
			lowerCase: "7",
			upperCase: "&",
		},
		"8": {
			lowerCase: "8",
			upperCase: "*",
		},
		"9": {
			lowerCase: "9",
			upperCase: "(",
		},
		"0": {
			lowerCase: "0",
			upperCase: ")",
		},
		"-": {
			lowerCase: "-",
			upperCase: "_",
		},
		"=": {
			lowerCase: "=",
			upperCase: "+",
		},
	},
	windows: {
		backspace: {
			lowerCase: (
				<Span paddingRight={padding} fontSize={smallerFont}>
					Backspace
				</Span>
			),
			width: KeyWidth.TAB_DEL,
			placement: "center-right",
		},
	},
	// mac: {

	// },
	// linux: {

	// },
	// raspberry: {

	// },
}

// const getKeyCapData = new Proxy()

export default keyCapData
