import { windowsKeys } from "./WindowsKeys"

const windowsKeyboard = (
	<>
		{/* first row */}
		{windowsKeys["`"]}
		{windowsKeys["1"]}
		{windowsKeys["2"]}
		{windowsKeys["3"]}
		{windowsKeys["4"]}
		{windowsKeys["5"]}
		{windowsKeys["6"]}
		{windowsKeys["7"]}
		{windowsKeys["8"]}
		{windowsKeys["9"]}
		{windowsKeys["0"]}
		{windowsKeys["-"]}
		{windowsKeys["="]}
		{windowsKeys["backspace"]}
		{/* second row */}
		{windowsKeys["tab"]}
		{windowsKeys["q"]}
		{windowsKeys["w"]}
		{windowsKeys["e"]}
		{windowsKeys["r"]}
		{windowsKeys["t"]}
		{windowsKeys["y"]}
		{windowsKeys["u"]}
		{windowsKeys["i"]}
		{windowsKeys["o"]}
		{windowsKeys["p"]}
		{windowsKeys["["]}
		{windowsKeys["]"]}
		{windowsKeys["\\"]}
		{/* third row */}
		{windowsKeys["capsLock"]}
		{windowsKeys["a"]}
		{windowsKeys["s"]}
		{windowsKeys["d"]}
		{windowsKeys["f"]}
		{windowsKeys["g"]}
		{windowsKeys["h"]}
		{windowsKeys["j"]}
		{windowsKeys["k"]}
		{windowsKeys["l"]}
		{windowsKeys[";"]}
		{windowsKeys["'"]}
		{windowsKeys["enter"]}
		{/* fourth row */}
		{windowsKeys["leftShift"]}
		{windowsKeys["z"]}
		{windowsKeys["x"]}
		{windowsKeys["c"]}
		{windowsKeys["v"]}
		{windowsKeys["b"]}
		{windowsKeys["n"]}
		{windowsKeys["m"]}
		{windowsKeys[","]}
		{windowsKeys["."]}
		{windowsKeys["/"]}
		{windowsKeys["rightShift"]}
		{/* fifth row */}
		{windowsKeys["leftCtrl"]}
		{windowsKeys["fn"]}
		{windowsKeys["logoKey"]}
		{windowsKeys["alt"]}
		{windowsKeys["spacebar"]}
		{windowsKeys["alt"]}
		{windowsKeys["ctrl"]}
		{windowsKeys["arrowLeft"]}
		<div>
			{windowsKeys["arrowUp"]}
			{windowsKeys["arrowDown"]}
		</div>
		{windowsKeys["arrowRight"]}
	</>
)

export { windowsKeyboard }
