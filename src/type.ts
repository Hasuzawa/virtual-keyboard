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
	| "delete"
	| "capsLock"
	| "enter"
	| "control"
	| "alt"
	| "leftShift"
	| "rightShift"
	| "leftCtrl"
	| "rightCtrl"
	| "fn"
	| "logoKey"
	| "leftAlt"
	| "rightAlt"
	| "spacebar"
	| "return"
	| "leftOption"
	| "leftCommand"
	| "rightOption"
	| "rightCommand"
export type ArrowKey = "ArrowLeft" | "ArrowUp" | "ArrowDown" | "ArrowRight"
// don't forget Dead, Meta keys!
