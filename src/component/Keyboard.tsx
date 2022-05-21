import styled, { ThemeProvider, css, keyframes } from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import { selectedTheme } from "../theme/theme"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import { selectOS } from "../store/keyboardSlice"
import { BsWindows, BsCommand } from "react-icons/bs"
import { SiRaspberrypi } from "react-icons/si"
import { useState } from "react"
import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import WindowKeyboard from "./WindowKeyboard"
import RaspberryPiKeyCaps from "./RaspberryPiKeyCaps"
import MacKeyCaps from "./MacKeyCaps"
import { rainbowRotate } from "../animation/rainbow"

interface KeyboardProps extends StyledComponent {
	dragging: boolean
	setDragging: React.Dispatch<React.SetStateAction<boolean>>
}

export enum KeyWidth {
	STANDARD = 64,
	TAB_DEL = 98,
	CAP_RETURN = 117,
	SHIFT = 153,
	SPACEBAR = 352,
	COMMAND = 81,
}

export const arrowIconParams = {
	size: 30,
}

const RawKeyboard = forwardRef<HTMLDivElement, KeyboardProps>((props, ref) => {
	const { setDragging } = props
	const os = useAppSelector(selectOS)

	const getKeys = () => {
		switch (os) {
			case "windows":
				return <WindowKeyboard />
			case "mac":
				return <MacKeyCaps />
			case "linux":
				return (
					<>
						<KeyCap lowerCase="Ctrl" width={KeyWidth.TAB_DEL} />
						<KeyCap lowerCase="Fn" />
						<KeyCap lowerCase={<BsWindows size={20} />} />
						<KeyCap lowerCase="Alt" />
						<KeyCap lowerCase="" width={KeyWidth.SPACEBAR} />
						<KeyCap lowerCase="Alt" />
						<KeyCap lowerCase="Ctrl" />
						<KeyCap
							lowerCase={<MdArrowLeft {...arrowIconParams} />}
						/>
						<div>
							<HalfKeyCap
								lowerCase={
									<MdArrowDropUp {...arrowIconParams} />
								}
							/>
							<HalfKeyCap
								lowerCase={
									<MdArrowDropDown {...arrowIconParams} />
								}
							/>
						</div>
						<KeyCap
							lowerCase={<MdArrowRight {...arrowIconParams} />}
						/>
					</>
				)
			case "raspberry":
				return <RaspberryPiKeyCaps />
		}
	}
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
			{getKeys()}
		</motion.div>
	)
})

const hueRotate = keyframes`
	0% {filter: hue-rotate(0deg);}
	50% {filter: hue-rotate(360deg);}
	100% {filter: hue-rotate(-360deg);}

`

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
	/* background: linear-gradient(120deg, red, orange, yellow, green, cyan, indigo, purple); */

	/* animation: ${rainbowRotate} 10s infinite linear; */
	/* background: radial-gradient(ellipse at top left, red, purple);
	animation: ${hueRotate} 10s infinite linear; */

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
