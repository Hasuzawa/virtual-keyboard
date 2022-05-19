import { OS, Color } from "../type"

type KeyboardTheme = {
	keyCapColor: Color
	keyCapBackgroundColor: Color
	// keyboardColor: Color,
	keyboardBackgroundColor: Color
}

const windows: KeyboardTheme = {
	keyCapColor: "#dcdcdc",
	keyCapBackgroundColor: "#303030",
	keyboardBackgroundColor: "red",
}

const mac = {
	keyCapColor: "white",
	keyCapBackgroundColor: "black",
	keyboardBackgroundColor: "",
}

const linux = {
	keyCapColor: "green",
	keyCapBackgroundCOlor: "pink",
}

const raspberry = {
	keyCapColor: "oragne",
	keyCapBackgroundColor: "white",
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
