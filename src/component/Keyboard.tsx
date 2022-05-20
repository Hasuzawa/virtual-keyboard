import styled, { ThemeProvider, css } from "styled-components"
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

interface KeyboardProps extends StyledComponent {
	dragging: boolean
	setDragging: any
}

enum KeyWidth {
	STANDARD = 64,
	TAB_DEL = 98,
	CAP_RETURN = 117,
	SHIFT = 153,
	SPACEBAR = 352,
	COMMAND = 81,
}

const iconParams = {
	size: 20,
}
const arrowIconParams = {
	size: 30,
}

const RawKeyboard = forwardRef<HTMLDivElement, KeyboardProps>((props, ref) => {
	const { setDragging } = props
	const os = useAppSelector(selectOS)

	const getBottomRow = () => {
		switch (os) {
			case "windows":
				return (
					<>
						<KeyCap lowerCase="Ctrl" width={KeyWidth.TAB_DEL} />
						<KeyCap lowerCase="Fn" />
						<KeyCap lowerCase={<BsWindows {...iconParams} />} />
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
			case "mac":
				return (
					<>
						<KeyCap lowerCase="fn" />
						<KeyCap lowerCase="control" />
						<KeyCap lowerCase="option" />
						<KeyCap lowerCase="command" width={KeyWidth.COMMAND} />
						<KeyCap lowerCase="" width={KeyWidth.SPACEBAR} />
						<KeyCap lowerCase="command" width={KeyWidth.COMMAND} />
						<KeyCap lowerCase="option" />
						<HalfKeyCap
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
						<HalfKeyCap
							lowerCase={<MdArrowRight {...arrowIconParams} />}
						/>
					</>
				)
			case "raspberry":
				return (
					<>
						<KeyCap lowerCase="Ctrl" width={KeyWidth.TAB_DEL} />
						<KeyCap lowerCase="Fn" />
						<KeyCap lowerCase={<SiRaspberrypi size={30} />} />
						<KeyCap lowerCase="Alt" />
						<KeyCap lowerCase="" width={KeyWidth.SPACEBAR} />
						<KeyCap lowerCase="Alt" />
						<KeyCap lowerCase="Ctrl" />
						<HalfKeyCap
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
						<HalfKeyCap
							lowerCase={<MdArrowRight {...arrowIconParams} />}
						/>
					</>
				)
		}
	}

	return (
		<motion.div
			drag
			dragConstraints={ref as any} // framer-motion library forgot to handle forwarded ref, but it still works
			onDragStart={() => setDragging(true)}
			onDragEnd={() => setDragging(false)}
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

			<KeyCap lowerCase="tab" upperCase="tab" width={KeyWidth.TAB_DEL} />
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

			<KeyCap
				lowerCase="shift"
				upperCase="shift"
				width={KeyWidth.SHIFT}
			/>
			<KeyCap lowerCase="z" upperCase="Z" />
			<KeyCap lowerCase="x" upperCase="X" />
			<KeyCap lowerCase="c" upperCase="C" />
			<KeyCap lowerCase="v" upperCase="V" />
			<KeyCap lowerCase="b" upperCase="B" />
			<KeyCap lowerCase="n" upperCase="N" />
			<KeyCap lowerCase="m" upperCase="M" />
			<KeyCap lowerCase="," upperCase="<" />

			<KeyCap lowerCase="." upperCase=">" />
			<KeyCap lowerCase="/" upperCase="?" />
			<KeyCap
				lowerCase="shift"
				upperCase="shift"
				width={KeyWidth.SHIFT}
			/>
			{getBottomRow()}
		</motion.div>
	)
})

const Keyboard = styled(RawKeyboard)`
	/* width: 1000px;
	height: 400px; */
	display: inline-flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;

	position: absolute;
	left: 50%;
	border: 3px solid black;
	border-color: ${(props) => props.theme.keyboardBorderColor};
	/* box-shadow: ${(props) => props.theme.keyboardBoxShadow}; */
	/* box-shadow: inset 0px 0px 5px 0px black; */
	border-radius: 10px;
	padding: 12px;
	width: 1064px;
	height: 382px;
	gap: 8px;
	/* transform: translateX(
		-50%
	); // center horizontally without hard coding half of width */ // will break drag behavior
	bottom: 10%;
	flex-flow: row wrap;

	background-color: ${(props) => props.theme.keyboardBackgroundColor};

	/* background-color: red; */

	${(props) => {
		if (props.dragging)
			return css`
				box-shadow: 30px 30px 10px 10px rgba(0, 0, 0, 0.5);
			`
	}}
	transition: box-shadow 0.3s ease-in-out;
`

export default Keyboard
