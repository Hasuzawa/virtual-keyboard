export interface StyledComponent {
	className?: string
	children?: React.ReactNode | React.ReactNode[]
}

export type OS = "windows" | "mac" | "linux" | "raspberry"
export type LayoutOS = OS | "default"

export type Color = string
// unless we want to spend a lot of effort just to make a type that is neither indicative nor helpful,
// this is probably better

export type BoxShadow = string

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const
export type Digit = typeof digit[number]

const lowerCaseAlphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
] as const
export type LowerCaseAlphabet = typeof lowerCaseAlphabet[number]

export type SpecialCharacters =
	| "`"
	| "-"
	| "="
	| "["
	| "]"
	| "\\"
	| ";"
	| "'"
	| ","
	| "."
	| "/"

type NonPrintable = "\t"
export type FunctionalKey =
	| "tab"
	| "backspace"
	| "capsLock"
	| "enter"
	// | "control"
	| "alt"
	| "leftShift"
	| "rightShift"
	| "leftCtrl"
	| "ctrl"
	| "fn"
	// | "logoKey"
	// | "leftAlt"
	// | "rightAlt"
	| "spacebar"

export type WindowsKey = "logoKey"
export type MacKey =
	| "delete"
	| "return"
	| "leftOption"
	| "leftCommand"
	| "rightCommand"
	| "rightOption"
export type RaspberryKey = "logoKey"
export type LinuxKey = "logoKey"

export type ArrowKey = "arrowLeft" | "arrowUp" | "arrowDown" | "arrowRight"
export type BlankKey = "blank"
// don't forget Dead, Meta keys!
export type LowerCaseKey =
	| LowerCaseAlphabet
	| Digit
	| SpecialCharacters
	| FunctionalKey
	| ArrowKey
	| BlankKey

type VerticalPlacement = "top" | "center" | "bottom"
type HorizontalPlacement = "left" | "center" | "right"

type Placement =
	| `${VerticalPlacement}-${HorizontalPlacement}`
	| "vertical-split"

export interface KeyCapProps extends StyledComponent {
	lowerCase: string | React.ReactNode
	upperCase?: string | React.ReactNode
	width?: number
	// onClick: Function
	// onEnter: Function
	placement?: Placement
}

export type DefaultKeys = {
	[key in LowerCaseKey]: React.ReactNode
}
export type WindowsKeys = {
	[key in LowerCaseKey | WindowsKey]: React.ReactNode
}
export type MacKeys = {
	[key in LowerCaseKey | MacKey]: React.ReactNode
}
export type LinuxKeys = {
	[key in LowerCaseKey | LinuxKey]: React.ReactNode
}

export type RaspberryKeys = {
	[key in LowerCaseKey | RaspberryKey]: React.ReactNode
}

export type Keyboards = Readonly<Record<LayoutOS, React.ReactNode>>
