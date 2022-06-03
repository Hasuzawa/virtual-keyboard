import { KeyCapProps } from "../../type"
import { LowerCaseKey, LayoutOS } from "../../type"
import KeyCap, { HalfKeyCap } from "./KeyCap"
// import defaultKeys from "./DefaultKeys"

type KeyboardLayout = Record<
	LayoutOS,
	Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
>

class KeyboardData {
	//private static readonly keyboardLayout:KeyboardLayout = {
	private static readonly keyboardLayout = {
		// default: defaultKeys,

		linux: {},
	}

	private static getKeyCapProps(
		os: LayoutOS,
		lowerCaseKey: LowerCaseKey
	): KeyCapProps {
		return {
			lowerCase: "",
		}
		// this.keyboardLayout[os][lowerCaseKey] ??
		// this.keyboardLayout.default[lowerCaseKey]!
	}

	private static getLinuxLayout(): React.ReactNode {
		const os = "linux"
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
				{/* <KeyCap {...this.getKeyCapProps(os, "logoKey")} />
				</div>
				<KeyCap {...this.getKeyCapProps(os, "ArrowRight")} /> */}
			</>
		)
	}

	/**
	 * The only entrypoint for getting a keyboard for particular OS
	 * @param os
	 * @returns React.ReactNode
	 */
	public static getKeyboardLayout(os: LayoutOS): React.ReactNode {
		switch (os) {
			case "linux":
				return this.getLinuxLayout()
			default:
				return null
		}
	}
}

export default KeyboardData
