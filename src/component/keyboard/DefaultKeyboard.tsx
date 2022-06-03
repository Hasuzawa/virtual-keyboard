import { defaultKeys } from "./DefaultKeys"

const defaultKeyboard = (
	<>
		{/* first row */}
		{defaultKeys["`"]}
		{defaultKeys["1"]}
		{defaultKeys["2"]}
		{defaultKeys["3"]}
		{defaultKeys["4"]}
		{defaultKeys["5"]}
		{defaultKeys["6"]}
		{defaultKeys["7"]}
		{defaultKeys["8"]}
		{defaultKeys["9"]}
		{defaultKeys["0"]}
		{defaultKeys["-"]}
		{defaultKeys["="]}
		{defaultKeys["backspace"]}
		{/* second row */}
		{defaultKeys["tab"]}
		{defaultKeys["q"]}
		{defaultKeys["w"]}
		{defaultKeys["e"]}
		{defaultKeys["r"]}
		{defaultKeys["t"]}
		{defaultKeys["y"]}
		{defaultKeys["u"]}
		{defaultKeys["i"]}
		{defaultKeys["o"]}
		{defaultKeys["p"]}
		{defaultKeys["["]}
		{defaultKeys["]"]}
		{defaultKeys["\\"]}
		{/* third row */}
		{defaultKeys["capsLock"]}
		{defaultKeys["a"]}
		{defaultKeys["s"]}
		{defaultKeys["d"]}
		{defaultKeys["f"]}
		{defaultKeys["g"]}
		{defaultKeys["h"]}
		{defaultKeys["j"]}
		{defaultKeys["k"]}
		{defaultKeys["l"]}
		{defaultKeys[";"]}
		{defaultKeys["'"]}
		{defaultKeys["enter"]}
		{/* fourth row */}
		{defaultKeys["leftShift"]}
		{defaultKeys["z"]}
		{defaultKeys["x"]}
		{defaultKeys["c"]}
		{defaultKeys["v"]}
		{defaultKeys["b"]}
		{defaultKeys["n"]}
		{defaultKeys["m"]}
		{defaultKeys[","]}
		{defaultKeys["."]}
		{defaultKeys["/"]}
		{defaultKeys["rightShift"]}
		{/* fifth row */}
		{defaultKeys["leftCtrl"]}
		{defaultKeys["fn"]}
		{defaultKeys["blank"]}
		{defaultKeys["alt"]}
		{defaultKeys["spacebar"]}
		{defaultKeys["alt"]}
		{defaultKeys["ctrl"]}
		{defaultKeys["arrowLeft"]}
		<div>
			{defaultKeys["arrowUp"]}
			{defaultKeys["arrowDown"]}
		</div>
		{defaultKeys["arrowRight"]}
	</>
)

export { defaultKeyboard }
