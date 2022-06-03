import { macKeys } from "./MacKeys"

const macKeyboard = (
	<>
		{/* first row */}
		{macKeys["`"]}
		{macKeys["1"]}
		{macKeys["2"]}
		{macKeys["3"]}
		{macKeys["4"]}
		{macKeys["5"]}
		{macKeys["6"]}
		{macKeys["7"]}
		{macKeys["8"]}
		{macKeys["9"]}
		{macKeys["0"]}
		{macKeys["-"]}
		{macKeys["="]}
		{macKeys["delete"]}
		{/* second row */}
		{macKeys["tab"]}
		{macKeys["q"]}
		{macKeys["w"]}
		{macKeys["e"]}
		{macKeys["r"]}
		{macKeys["t"]}
		{macKeys["y"]}
		{macKeys["u"]}
		{macKeys["i"]}
		{macKeys["o"]}
		{macKeys["p"]}
		{macKeys["["]}
		{macKeys["]"]}
		{macKeys["\\"]}
		{/* third row */}
		{macKeys["capsLock"]}
		{macKeys["a"]}
		{macKeys["s"]}
		{macKeys["d"]}
		{macKeys["f"]}
		{macKeys["g"]}
		{macKeys["h"]}
		{macKeys["j"]}
		{macKeys["k"]}
		{macKeys["l"]}
		{macKeys[";"]}
		{macKeys["'"]}
		{macKeys["return"]}
		{/* fourth row */}
		{macKeys["leftShift"]}
		{macKeys["z"]}
		{macKeys["x"]}
		{macKeys["c"]}
		{macKeys["v"]}
		{macKeys["b"]}
		{macKeys["n"]}
		{macKeys["m"]}
		{macKeys[","]}
		{macKeys["."]}
		{macKeys["/"]}
		{macKeys["rightShift"]}
		{/* fifth row */}
		{macKeys["fn"]}
		{macKeys["ctrl"]}
		{macKeys["leftOption"]}
		{macKeys["leftCommand"]}
		{macKeys["spacebar"]}
		{macKeys["rightCommand"]}
		{macKeys["rightOption"]}
		{macKeys["arrowLeft"]}
		<div>
			{macKeys["arrowUp"]}
			{macKeys["arrowDown"]}
		</div>
		{macKeys["arrowRight"]}
	</>
)

export { macKeyboard }
