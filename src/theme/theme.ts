import { OS, Color, BoxShadow } from "../type"

type KeyboardTheme = {
	keyCapColor: Color
	keyCapBackgroundColor: Color
	keyboardBackgroundColor: Color

	keyboardBorderColor?: Color
	keyboardBoxShadow?: Color
	keyCapBoxShadow?: BoxShadow

	// buttonColor: Color
}

const themes: Record<OS, Readonly<KeyboardTheme>> = {
	windows: {
		keyCapColor: "#dcdcdc",
		keyCapBackgroundColor: "#303030",
		keyboardBackgroundColor: "#303030",
		keyCapBoxShadow: "0px 0px 5px 1px black",
	},
	mac: {
		keyCapColor: "white",
		keyCapBackgroundColor: "black",
		keyboardBackgroundColor: "#c0c1c3",
	},
	linux: {
		keyCapColor: "#111111",
		keyCapBackgroundColor: "#de8c6f",
		keyboardBackgroundColor: "#77216F",
	},
	raspberry: {
		keyCapColor: "#CD2355",
		keyCapBackgroundColor: "white",
		keyboardBackgroundColor: "white",
		keyCapBoxShadow: "0px 0px 3px 1px black",
	},
}

const raspberry = {
	keyCapColor: "#CD2355",
	keyCapBackgroundColor: "white",
	keyboardBackgroundColor: "white",

	keyCapBoxShadow: "0px 0px 3px 1px black",
	// keyboardBorderColor: "black"
}

export function selectedTheme(os: OS) {
	const { windows, mac, linux, raspberry } = themes
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
