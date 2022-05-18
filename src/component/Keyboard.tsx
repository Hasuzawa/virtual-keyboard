import styled from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import KeyCap from "./KeyCap"

interface KeyboardProps extends StyledComponent {}

const RawKeyboard = forwardRef<HTMLDivElement, KeyboardProps>((props, ref) => {
	return (
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
		</motion.div>
	)
})

const Keyboard = styled(RawKeyboard)`
	width: 1000px;
	height: 400px;
	display: inline-flex;
	position: absolute;
	left: 50%;
	transform: translateX(
		-50%
	); // center horizontally without hard coding half of width
	bottom: 10%;
	flex-flow: row wrap;
	background-color: coral;
`

export default Keyboard
