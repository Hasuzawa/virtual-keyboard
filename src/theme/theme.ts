import { OS, Color, BoxShadow } from "../type"

type KeyboardTheme = {
	keyCapColor: Color
	keyCapBackgroundColor: Color
	// keyboardColor: Color,
	keyboardBackgroundColor: Color
	keyboardBorderColor?: Color
	boxShadow?: BoxShadow
}

const windows: KeyboardTheme = {
	keyCapColor: "#dcdcdc",
	keyCapBackgroundColor: "#303030",
	keyboardBackgroundColor: "",
}

const mac = {
	keyCapColor: "white",
	keyCapBackgroundColor: "black",
	keyboardBackgroundColor: "#c0c1c3",
}

const linux = {
	keyCapColor: "green",
	keyCapBackgroundCOlor: "pink",
}

const raspberry = {
	keyCapColor: "#CD2355",
	keyCapBackgroundColor: "white",
	keyboardBackgroundColor: "white",

	boxShadow: "0px 0px 3px 1px black",
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
