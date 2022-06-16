import { linuxKeys } from "./LinuxKeys"

const linuxKeyboard = (
	<>
		{/* first row */}
		{linuxKeys["`"]}
		{linuxKeys["1"]}
		{linuxKeys["2"]}
		{linuxKeys["3"]}
		{linuxKeys["4"]}
		{linuxKeys["5"]}
		{linuxKeys["6"]}
		{linuxKeys["7"]}
		{linuxKeys["8"]}
		{linuxKeys["9"]}
		{linuxKeys["0"]}
		{linuxKeys["-"]}
		{linuxKeys["="]}
		{linuxKeys["backspace"]}
		{/* second row */}
		{linuxKeys["tab"]}
		{linuxKeys["q"]}
		{linuxKeys["w"]}
		{linuxKeys["e"]}
		{linuxKeys["r"]}
		{linuxKeys["t"]}
		{linuxKeys["y"]}
		{linuxKeys["u"]}
		{linuxKeys["i"]}
		{linuxKeys["o"]}
		{linuxKeys["p"]}
		{linuxKeys["["]}
		{linuxKeys["]"]}
		{linuxKeys["\\"]}
		{/* third row */}
		{linuxKeys["capsLock"]}
		{linuxKeys["a"]}
		{linuxKeys["s"]}
		{linuxKeys["d"]}
		{linuxKeys["f"]}
		{linuxKeys["g"]}
		{linuxKeys["h"]}
		{linuxKeys["j"]}
		{linuxKeys["k"]}
		{linuxKeys["l"]}
		{linuxKeys[";"]}
		{linuxKeys["'"]}
		{linuxKeys["enter"]}
		{/* fourth row */}
		{linuxKeys["leftShift"]}
		{linuxKeys["z"]}
		{linuxKeys["x"]}
		{linuxKeys["c"]}
		{linuxKeys["v"]}
		{linuxKeys["b"]}
		{linuxKeys["n"]}
		{linuxKeys["m"]}
		{linuxKeys[","]}
		{linuxKeys["."]}
		{linuxKeys["/"]}
		{linuxKeys["rightShift"]}
		{/* fifth row */}
		{linuxKeys["leftCtrl"]}
		{linuxKeys["fn"]}
		{linuxKeys["logoKey"]}
		{linuxKeys["alt"]}
		{linuxKeys["spacebar"]}
		{linuxKeys["alt"]}
		{linuxKeys["ctrl"]}
		{linuxKeys["arrowLeft"]}
		<div>
			{linuxKeys["arrowUp"]}
			{linuxKeys["arrowDown"]}
		</div>
		{linuxKeys["arrowRight"]}
	</>
)

export { linuxKeyboard }
