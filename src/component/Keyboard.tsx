import styled, { ThemeProvider } from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import KeyCap from "./KeyCap"
import { selectedTheme } from "../theme/theme"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import { selectOS } from "../store/keyboardSlice"

interface KeyboardProps extends StyledComponent {}

enum KeyWidth {
	STANDARD = 64,
	TAB_DEL = 98,
	CAP_RETURN = 117,
}

const RawKeyboard = forwardRef<HTMLDivElement, KeyboardProps>((props, ref) => {
	const os = useAppSelector(selectOS)

	return (
		<ThemeProvider theme={selectedTheme(os)}>
			<motion.div
				drag
				dragConstraints={ref as any} // framer-motion library forgot to handle forwarded ref, but it still works
				className={props.className}
			>
				<KeyCap lowerCase="`" upperCase="~" />
				<KeyCap lowerCase="1" upperCase="!" />
				<KeyCap lowerCase="2" upperCase="@" />
				<KeyCap lowerCase="3" upperCase="#" />
				<KeyCap lowerCase="4" upperCase="$" />
				<KeyCap lowerCase="5" upperCase="%" />
				<KeyCap lowerCase="6" upperCase="^" />
				<KeyCap lowerCase="7" upperCase="&amp;" />
				<KeyCap lowerCase="8" upperCase="*" />
				<KeyCap lowerCase="9" upperCase="(" />
				<KeyCap lowerCase="0" upperCase=")" />
				<KeyCap lowerCase="-" upperCase="_" />
				<KeyCap lowerCase="=" upperCase="+" />
				<KeyCap
					lowerCase="delete"
					upperCase="delete"
					width={KeyWidth.TAB_DEL}
				/>

				<KeyCap
					lowerCase="tab"
					upperCase="tab"
					width={KeyWidth.TAB_DEL}
				/>
				<KeyCap lowerCase="q" upperCase="Q" />
				<KeyCap lowerCase="w" upperCase="W" />
				<KeyCap lowerCase="e" upperCase="E" />
				<KeyCap lowerCase="r" upperCase="R" />
				<KeyCap lowerCase="t" upperCase="T" />
				<KeyCap lowerCase="y" upperCase="Y" />
				<KeyCap lowerCase="u" upperCase="U" />
				<KeyCap lowerCase="i" upperCase="I" />
				<KeyCap lowerCase="o" upperCase="O" />
				<KeyCap lowerCase="p" upperCase="P" />
				<KeyCap lowerCase="[" upperCase="{" />
				<KeyCap lowerCase="]" upperCase="}" />
				<KeyCap lowerCase="\" upperCase="|" />

				<KeyCap
					lowerCase="Caps"
					upperCase="Caps"
					width={KeyWidth.CAP_RETURN}
				/>
				<KeyCap lowerCase="a" upperCase="A" />
				<KeyCap lowerCase="s" upperCase="S" />
				<KeyCap lowerCase="d" upperCase="D" />
				<KeyCap lowerCase="f" upperCase="F" />
				<KeyCap lowerCase="g" upperCase="G" />
				<KeyCap lowerCase="h" upperCase="H" />
				<KeyCap lowerCase="j" upperCase="J" />
				<KeyCap lowerCase="k" upperCase="K" />
				<KeyCap lowerCase="l" upperCase="L" />

				<KeyCap lowerCase=";" upperCase=":" />
				<KeyCap lowerCase="'" upperCase='"' />
				<KeyCap
					lowerCase="return"
					upperCase="return"
					width={KeyWidth.CAP_RETURN}
				/>
			</motion.div>
		</ThemeProvider>
	)
})

const Keyboard = styled(RawKeyboard)`
	width: 1000px;
	height: 400px;
	display: inline-flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;

	position: absolute;
	left: 50%;
	border: 3px solid black;
	padding: 12px;
	width: 1064px;
	height: 382px;
	gap: 8px;
	/* transform: translateX(
		-50%
	); // center horizontally without hard coding half of width */ // will break drag behavior
	bottom: 10%;
	flex-flow: row wrap;

	background-color: coral;
`

export default Keyboard
