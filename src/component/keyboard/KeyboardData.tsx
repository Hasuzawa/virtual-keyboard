// import KeyCapProps from "./component/KeyCap"
import Span from "../Span"
import { Placement } from "./KeyCap"
import {
	Digit,
	LowerCaseAlphabet,
	SpecialCharacters,
	FunctionalKey,
	LayoutOS,
	ArrowKey,
} from "../../type"
import { BsWindows, BsCommand, BsOption } from "react-icons/bs"
import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import { AiOutlineGlobal } from "react-icons/ai"

enum KeyWidth {
	STANDARD = 64,
	TAB_DEL = 98,
	CAP_RETURN = 117,
	SHIFT = 153,
	SPACEBAR = 352,
	COMMAND = 81,
}

// for windows

const padding = {
	windows: 15,
	mac: 8,
}

const smallerFont = {
	windows: 14,
	mac: 14,
}

const arrowIconParams = {
	size: 30,
}

const iconSize = {
	mac: 20,
}

type LowerCaseKey =
	| LowerCaseAlphabet
	| Digit
	| SpecialCharacters
	| FunctionalKey
	| ArrowKey

interface KeyCapProps {
	lowerCase: string | React.ReactNode
	upperCase?: string | React.ReactNode
	width?: number
	placement?: Placement
}

type KeyboardLayout = Record<
	LayoutOS,
	Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
>
// default: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
// windows: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
// mac: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
// linux: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
// raspberry: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>

// const this: this = {
class KeyboardData {
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
			z: {
				lowerCase: "z",
				upperCase: "Z",
			},
			x: {
				lowerCase: "x",
				upperCase: "X",
			},
			c: {
				lowerCase: "c",
				upperCase: "C",
			},
			v: {
				lowerCase: "v",
				upperCase: "V",
			},
			b: {
				lowerCase: "b",
				upperCase: "B",
			},
			n: {
				lowerCase: "n",
				upperCase: "N",
			},
			m: {
				lowerCase: "m",
				upperCase: "M",
			},
			",": {
				lowerCase: ",",
				upperCase: "<",
			},
			".": {
				lowerCase: ".",
				upperCase: ">",
			},
			"/": {
				lowerCase: "/",
				upperCase: "?",
			},
			ArrowLeft: {
				lowerCase: <MdArrowLeft {...arrowIconParams} />,
			},
			ArrowUp: {
				lowerCase: <MdArrowDropUp {...arrowIconParams} />,
			},
			ArrowDown: {
				lowerCase: <MdArrowDropDown {...arrowIconParams} />,
			},
			ArrowRight: {
				lowerCase: <MdArrowRight {...arrowIconParams} />,
			},
		},
		windows: {
			backspace: {
				lowerCase: (
					<Span
						paddingRight={padding.windows}
						fontSize={smallerFont.windows}
					>
						Backspace
					</Span>
				),
				width: KeyWidth.TAB_DEL,
				placement: "center-right",
			},
			tab: {
				lowerCase: (
					<Span
						paddingLeft={padding.windows}
						fontSize={smallerFont.windows}
					>
						Tab
					</Span>
				),
				width: KeyWidth.TAB_DEL,
				placement: "center-left",
			},
			capsLock: {
				lowerCase: (
					<Span
						paddingLeft={padding.windows}
						fontSize={smallerFont.windows}
					>
						Caps
					</Span>
				),
				width: KeyWidth.CAP_RETURN,
				placement: "center-left",
			},
			enter: {
				lowerCase: (
					<Span
						paddingRight={padding.windows}
						fontSize={smallerFont.windows}
					>
						Enter
					</Span>
				),
				width: KeyWidth.CAP_RETURN,
				placement: "center-right",
			},
			leftShift: {
				lowerCase: (
					<Span
						paddingLeft={padding.windows}
						fontSize={smallerFont.windows}
					>
						Shift
					</Span>
				),
				width: KeyWidth.SHIFT,
				placement: "center-left",
			},
			rightShift: {
				lowerCase: (
					<Span
						paddingRight={padding.windows}
						fontSize={smallerFont.windows}
					>
						Shift
					</Span>
				),
				width: KeyWidth.SHIFT,
				placement: "center-right",
			},
			leftCtrl: {
				lowerCase: (
					<Span
						paddingLeft={padding.windows}
						fontSize={smallerFont.windows}
					>
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
		},
		mac: {
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
		},
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

	private static getWindowsLayout(): React.ReactNode {
		const os = "windows"
		return (
			<>
				{"`1234567890-=".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "backspace")} />
				<KeyCap {...this.getKeyCapProps(os, "tab")} />
				{"qwertyuiop[]\\".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "capsLock")} />
				{"asdfghjkl;'".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "enter")} />
				<KeyCap {...this.getKeyCapProps(os, "leftShift")} />
				{"zxcvbnm,./".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "rightShift")} />
				<KeyCap {...this.getKeyCapProps(os, "leftCtrl")} />
				<KeyCap {...this.getKeyCapProps(os, "fn")} />
				<KeyCap {...this.getKeyCapProps(os, "logoKey")} />
				<KeyCap {...this.getKeyCapProps(os, "leftAlt")} />
				<KeyCap {...this.getKeyCapProps(os, "spacebar")} />
				<KeyCap {...this.getKeyCapProps(os, "rightAlt")} />
				<KeyCap {...this.getKeyCapProps(os, "rightCtrl")} />
				<KeyCap {...this.getKeyCapProps(os, "ArrowLeft")} />
				<div>
					<HalfKeyCap {...this.getKeyCapProps(os, "ArrowUp")} />
					<HalfKeyCap {...this.getKeyCapProps(os, "ArrowDown")} />
				</div>
				<KeyCap {...this.getKeyCapProps(os, "ArrowRight")} />
			</>
		)
	}

	private static getMacLayout(): React.ReactNode {
		const os = "mac"
		return (
			<>
				{"`1234567890-=".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "delete")} />
				<KeyCap {...this.getKeyCapProps(os, "tab")} />
				{"qwertyuiop[]\\".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "capsLock")} />
				{"asdfghjkl;'".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "return")} />
				<KeyCap {...this.getKeyCapProps(os, "leftShift")} />
				{"zxcvbnm,./".split("").map((s: string) => (
					<KeyCap {...this.getKeyCapProps(os, s as any)} />
				))}
				<KeyCap {...this.getKeyCapProps(os, "rightShift")} />
				<KeyCap {...this.getKeyCapProps(os, "fn")} />
				<KeyCap {...this.getKeyCapProps(os, "control")} />
				<KeyCap {...this.getKeyCapProps(os, "leftOption")} />
				<KeyCap {...this.getKeyCapProps(os, "leftCommand")} />
				<KeyCap {...this.getKeyCapProps(os, "spacebar")} />
				<KeyCap {...this.getKeyCapProps(os, "rightCommand")} />
				<KeyCap {...this.getKeyCapProps(os, "rightOption")} />
				<KeyCap {...this.getKeyCapProps(os, "ArrowLeft")} />
				<div>
					<HalfKeyCap {...this.getKeyCapProps(os, "ArrowUp")} />
					<HalfKeyCap {...this.getKeyCapProps(os, "ArrowDown")} />
				</div>
				<KeyCap {...this.getKeyCapProps(os, "ArrowRight")} />
			</>
		)
	}

	public static getKeyboardLayout(os: LayoutOS) {
		switch (os) {
			case "windows":
				return this.getWindowsLayout()
			case "mac":
				return this.getMacLayout()
			case "linux":
			case "raspberry":
			default:
				return null
		}
	}
}

export default KeyboardData
