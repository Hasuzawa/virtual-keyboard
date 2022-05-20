import { OS, Color, BoxShadow } from "../type"

type KeyboardTheme = {
	keyCapColor: Color
	keyCapBackgroundColor: Color
	// keyboardColor: Color,
	keyboardBackgroundColor: Color

	keyboardBorderColor?: Color
	keyboardBoxShadow?: Color
	keyCapBoxShadow?: BoxShadow
}

const windows: KeyboardTheme = {
	keyCapColor: "#dcdcdc",
	keyCapBackgroundColor: "#303030",
	keyboardBackgroundColor: "#303030",

	keyCapBoxShadow: "0px 0px 5px 1px black",
}

const mac: KeyboardTheme = {
	keyCapColor: "white",
	keyCapBackgroundColor: "black",
	keyboardBackgroundColor: "#c0c1c3",

	keyboardBoxShadow: "",
}

const linux: KeyboardTheme = {
	keyCapColor: "green",
	keyCapBackgroundColor: "pink",
	keyboardBackgroundColor: "cyan",
}

const raspberry = {
	keyCapColor: "#CD2355",
	keyCapBackgroundColor: "white",
	keyboardBackgroundColor: "white",

	keyCapBoxShadow: "0px 0px 3px 1px black",
	// keyboardBorderColor: "black"
}

export function selectedTheme(os: OS) {
	switch (os) {
		case "windows":
			return windows
		case "mac":
			return mac
		case "linux":
			return linux
		case "raspberry":
		default:
			return raspberry
	}
}
