import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { OS } from "../type"

type Key = "`" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0"

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

	os: "windows", // before release, randomly pick one
}

const keyboardSlice = createSlice({
	name: "keyboard",
	initialState,
	reducers: {
		handleKeyPress: (state, action: PayloadAction<Key>) => {
			if (state.heldKey.get(action.payload) !== undefined) {
				state.heldKey.set(action.payload, true)
			}
		},
		handleKeyRelease: (state, action: PayloadAction<Key>) => {
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
export const { handleKeyPress, handleKeyRelease, setOS } = keyboardSlice.actions

export const selectOS = (state: RootState) => state.keyboard.os
