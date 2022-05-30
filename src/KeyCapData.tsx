// import KeyCapProps from "./component/KeyCap"
import Span from "./component/Span"
import { Placement } from "./component/KeyCap"
import {
	Digit,
	LowerCaseAlphabet,
	SpecialCharacters,
	FunctionalKey,
	LayoutOS,
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

type KeyboardLayout = {
	default: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
	windows: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
	mac: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
	linux: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
	raspberry: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
}

// const keyCapData: KeyCapData = {
class KeyCapData {
	private static readonly keyboardLayout: KeyboardLayout = {
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
			q: {
				lowerCase: "q",
				upperCase: "Q",
			},
			w: {
				lowerCase: "w",
				upperCase: "W",
			},
			e: {
				lowerCase: "e",
				upperCase: "E",
			},
			r: {
				lowerCase: "r",
				upperCase: "R",
			},
			t: {
				lowerCase: "t",
				upperCase: "T",
			},
			y: {
				lowerCase: "y",
				upperCase: "Y",
			},
			u: {
				lowerCase: "u",
				upperCase: "U",
			},
			i: {
				lowerCase: "i",
				upperCase: "I",
			},
			o: {
				lowerCase: "o",
				upperCase: "O",
			},
			p: {
				lowerCase: "p",
				upperCase: "P",
			},
			"[": {
				lowerCase: "[",
				upperCase: "{",
			},
			"]": {
				lowerCase: "]",
				upperCase: "}",
			},
			"\\": {
				lowerCase: "\\",
				upperCase: "|",
			},
			a: {
				lowerCase: "a",
				upperCase: "A",
			},
			s: {
				lowerCase: "s",
				upperCase: "S",
			},
			d: {
				lowerCase: "d",
				upperCase: "D",
			},
			f: {
				lowerCase: "f",
				upperCase: "F",
			},
			g: {
				lowerCase: "g",
				upperCase: "G",
			},
			h: {
				lowerCase: "h",
				upperCase: "H",
			},
			j: {
				lowerCase: "j",
				upperCase: "J",
			},
			k: {
				lowerCase: "k",
				upperCase: "K",
			},
			l: {
				lowerCase: "l",
				upperCase: "L",
			},
			";": {
				lowerCase: ";",
				upperCase: ":",
			},
			"'": {
				lowerCase: "'",
				upperCase: '"',
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
			tab: {
				lowerCase: (
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Tab
					</Span>
				),
				width: KeyWidth.TAB_DEL,
				placement: "center-left",
			},
			capsLock: {
				lowerCase: (
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Caps
					</Span>
				),
				width: KeyWidth.CAP_RETURN,
				placement: "center-left",
			},
			enter: {
				lowerCase: (
					<Span paddingRight={padding} fontSize={smallerFont}>
						Enter
					</Span>
				),
				width: KeyWidth.CAP_RETURN,
				placement: "center-right",
			},
		},
		mac: {},
		linux: {},
		raspberry: {},
	}

	public static getKeyCapProps(
		os: LayoutOS,
		lowerCaseKey: LowerCaseKey
	): KeyCapProps {
		return (
			this.keyboardLayout[os][lowerCaseKey] ??
			this.keyboardLayout.default[lowerCaseKey]!
		)
	}
}

// const getKeyCapData = new Proxy()

export default KeyCapData
