import styled, { ThemeProvider, css, keyframes } from "styled-components"
import { StyledComponent } from "../../type"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { selectedTheme } from "../../theme/theme"
import { useAppDispatch, useAppSelector } from "../../store/useStore"
import { selectOS } from "../../store/keyboardSlice"

import KeyboardData from "./KeyboardData"

interface KeyboardProps extends StyledComponent {
	dragging: boolean
	setDragging: React.Dispatch<React.SetStateAction<boolean>>
}

const RawKeyboard = forwardRef<HTMLDivElement, KeyboardProps>((props, ref) => {
	const { setDragging } = props
	const os = useAppSelector(selectOS)

	// note: for transition animation to appear, the same component must be used, so switching or rendering different
	// won't have animation

	return (
		<motion.div
			drag
			dragConstraints={ref as any} // framer-motion library forgot to handle forwarded ref, but it still works
			onDragStart={() => setDragging(true)}
			onDragEnd={() => setDragging(false)}
			className={props.className}
		>
			{/* {getKeys()} */}
			{KeyboardData.getKeyboardLayout(os)}
		</motion.div>
	)
})

const Keyboard = styled(RawKeyboard)`
	display: inline-flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;

	position: absolute;

	border: 3px solid black;
	border-color: ${(props) => props.theme.keyboardBorderColor};

	border-radius: 10px;
	padding: 12px;
	width: 1064px;
	height: 382px;
	gap: 8px;
	bottom: 10%;
	flex-flow: row wrap;

	background-color: ${(props) => props.theme.keyboardBackgroundColor};

	${(props) => {
		if (props.dragging)
			return css`
				box-shadow: 30px 30px 10px 10px rgba(0, 0, 0, 0.5);
			`
	}}
	transition: box-shadow 0.3s ease-in-out;

	overflow: hidden;
`

export default Keyboard
