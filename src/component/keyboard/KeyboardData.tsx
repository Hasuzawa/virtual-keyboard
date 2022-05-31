import { KeyCapProps } from "../../type"
import { LowerCaseKey, LayoutOS } from "../../type"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import defaultKeys from "./DefaultKeys"
import windowKeys from "./WindowKeys"
import macKeys from "./MacKeys"
import raspberryKeys from "./RaspberryKeys"

type KeyboardLayout = Record<
	LayoutOS,
	Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>>
>

class KeyboardData {
	private static readonly keyboardLayout: KeyboardLayout = {
		default: defaultKeys,
		windows: windowKeys,
		mac: macKeys,
		linux: {},
		raspberry: raspberryKeys,
	}

	private static getKeyCapProps(
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

	private static getRaspberryLayout(): React.ReactNode {
		const os = "raspberry"
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
				<HalfKeyCap {...this.getKeyCapProps(os, "ArrowLeft")} />
				<div>
					<HalfKeyCap {...this.getKeyCapProps(os, "ArrowUp")} />
					<HalfKeyCap {...this.getKeyCapProps(os, "ArrowDown")} />
				</div>
				<HalfKeyCap {...this.getKeyCapProps(os, "ArrowRight")} />
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
			case "windows":
				return this.getWindowsLayout()
			case "mac":
				return this.getMacLayout()
			case "linux":
				return
			case "raspberry":
				return this.getRaspberryLayout()
			default:
				return null
		}
	}
}

export default KeyboardData
