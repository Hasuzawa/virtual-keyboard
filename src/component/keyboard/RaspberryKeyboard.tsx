import { raspberryKeys } from "./RaspberryKeys"

const raspberryKeyboard = (
	<>
		{/* first row */}
		{raspberryKeys["`"]}
		{raspberryKeys["1"]}
		{raspberryKeys["2"]}
		{raspberryKeys["3"]}
		{raspberryKeys["4"]}
		{raspberryKeys["5"]}
		{raspberryKeys["6"]}
		{raspberryKeys["7"]}
		{raspberryKeys["8"]}
		{raspberryKeys["9"]}
		{raspberryKeys["0"]}
		{raspberryKeys["-"]}
		{raspberryKeys["="]}
		{raspberryKeys["backspace"]}
		{/* second row */}
		{raspberryKeys["tab"]}
		{raspberryKeys["q"]}
		{raspberryKeys["w"]}
		{raspberryKeys["e"]}
		{raspberryKeys["r"]}
		{raspberryKeys["t"]}
		{raspberryKeys["y"]}
		{raspberryKeys["u"]}
		{raspberryKeys["i"]}
		{raspberryKeys["o"]}
		{raspberryKeys["p"]}
		{raspberryKeys["["]}
		{raspberryKeys["]"]}
		{raspberryKeys["\\"]}
		{/* third row */}
		{raspberryKeys["capsLock"]}
		{raspberryKeys["a"]}
		{raspberryKeys["s"]}
		{raspberryKeys["d"]}
		{raspberryKeys["f"]}
		{raspberryKeys["g"]}
		{raspberryKeys["h"]}
		{raspberryKeys["j"]}
		{raspberryKeys["k"]}
		{raspberryKeys["l"]}
		{raspberryKeys[";"]}
		{raspberryKeys["'"]}
		{raspberryKeys["enter"]}
		{/* fourth row */}
		{raspberryKeys["leftShift"]}
		{raspberryKeys["z"]}
		{raspberryKeys["x"]}
		{raspberryKeys["c"]}
		{raspberryKeys["v"]}
		{raspberryKeys["b"]}
		{raspberryKeys["n"]}
		{raspberryKeys["m"]}
		{raspberryKeys[","]}
		{raspberryKeys["."]}
		{raspberryKeys["/"]}
		{raspberryKeys["rightShift"]}
		{/* fifth row */}
		{raspberryKeys["leftCtrl"]}
		{raspberryKeys["fn"]}
		{raspberryKeys["logoKey"]}
		{raspberryKeys["alt"]}
		{raspberryKeys["spacebar"]}
		{raspberryKeys["alt"]}
		{raspberryKeys["ctrl"]}
		{raspberryKeys["arrowLeft"]}
		<div>
			{raspberryKeys["arrowUp"]}
			{raspberryKeys["arrowDown"]}
		</div>
		{raspberryKeys["arrowRight"]}
	</>
)

export { raspberryKeyboard }
