import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { OS } from "../type"
import { selectRandom } from "../util/function"

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
type LowerCaseAlphabet = typeof lowerCaseAlphabet[number]
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as const
type Digit = typeof digit[number]
type SpecialCharacters =
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
type NonPrintable = " " | "\t"
type FunctionalKey =
	| "Tab"
	| "Backspace"
	| "CapsLock"
	| "Enter"
	| "Control"
	| "Alt"
type ArrowKey = "ArrowLeft" | "ArrowUp" | "ArrowDown" | "ArrowRight"
// don't forget Dead, Meta keys!

type Key =
	| "`"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "0"
	| "Shift"
	| "CapsLock"

export const allOS: OS[] = ["windows", "mac", "linux", "raspberry"]

interface keyboardState {
	capLock: boolean
	shifting: boolean
	heldKey: Map<Key, boolean>

	os: OS
}

const initialState: keyboardState = {
	capLock: false,
	shifting: false,

	heldKey: new Map([
		["Shift", false],
		["CapsLock", false],
		["`", false],
		["1", false],
		["2", false],
		["3", false],
		["4", false],
		["5", false],
		["6", false],
		["7", false],
		["8", false],
		["9", false],
		["0", false],
	]),

	os: selectRandom(allOS),
}

const keyboardSlice = createSlice({
	name: "keyboard",
	initialState,
	reducers: {
		handleKeyDown: (state, action: PayloadAction<Key>) => {
			console.log(`${action.payload} pressed !`)
			if (state.heldKey.get(action.payload) !== undefined) {
				state.heldKey.set(action.payload, true)
			}
		},
		handleKeyUp: (state, action: PayloadAction<Key>) => {
			console.log(`${action.payload} released !`)
			if (state.heldKey.get(action.payload) !== undefined) {
				state.heldKey.set(action.payload, false)
			}
		},
		setOS: (state, action: PayloadAction<OS>) => {
			state.os = action.payload
		},
	},
})

export default keyboardSlice.reducer
export const { handleKeyDown, handleKeyUp, setOS } = keyboardSlice.actions

export const selectOS = (state: RootState) => state.keyboard.os
export const selectShift = (state: RootState) =>
	state.keyboard.heldKey.get("Shift") ?? false
export const selectCapsLock = (state: RootState) =>
	state.keyboard.heldKey.get("CapsLock") ?? false

/*
obviously a derived result, but doing it here can save some event emit and logic in component
*/
export const selectDisplayUpperCase = (state: RootState) => {
	const { heldKey } = state.keyboard
	return (
		(heldKey.get("Shift") ?? false) !== (heldKey.get("CapsLock") ?? false)
	)
}
