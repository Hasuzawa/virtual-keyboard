import styled, { css } from "styled-components"
import { StyledComponent } from "../type"
import KeyCap, { HalfKeyCap } from "./keyboard/KeyCap"
import { BsWindows, BsCommand } from "react-icons/bs"
import { SiRaspberrypi } from "react-icons/si"
import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import { KeyWidth, arrowIconParams } from "./keyboard/Keyboard"
import Span from "./Span"

interface WindowKeyboardProps extends StyledComponent {}

const padding = 15
const smallerFont = 14

const RawWindowKeyboard = (props: WindowKeyboardProps) => {
	return (
		<>
			{/* <KeyCap lowerCase="`" upperCase="~" />

			<KeyCap lowerCase="\" upperCase="|" /> */}

			{/* <KeyCap
				lowerCase={
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Caps
					</Span>
				}
				width={KeyWidth.CAP_RETURN}
				placement="center-left"
			/>


			<KeyCap lowerCase=";" upperCase=":" />
			<KeyCap lowerCase="'" upperCase='"' /> */}
			<KeyCap
				lowerCase={
					<Span paddingRight={padding} fontSize={smallerFont}>
						Enter
					</Span>
				}
				width={KeyWidth.CAP_RETURN}
				placement="center-right"
			/>

			<KeyCap
				lowerCase={
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Shift
					</Span>
				}
				width={KeyWidth.SHIFT}
				placement="center-left"
			/>
			{/* <KeyCap lowerCase="z" upperCase="Z" />

			<KeyCap lowerCase="/" upperCase="?" /> */}
			<KeyCap
				lowerCase={
					<Span paddingRight={padding} fontSize={smallerFont}>
						Shift
					</Span>
				}
				width={KeyWidth.SHIFT}
				placement="center-right"
			/>

			{/* <KeyCap
				lowerCase={
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Ctrl
					</Span>
				}
				width={KeyWidth.TAB_DEL}
				placement="center-left"
			/>

			<KeyCap
				lowerCase={<Span fontSize={smallerFont}>Fn</Span>}
				placement="center-center"
			/>
			<KeyCap lowerCase={<BsWindows size={20} />} /> */}
			<KeyCap lowerCase={<Span fontSize={smallerFont}>Alt</Span>} />
			<KeyCap lowerCase="" width={KeyWidth.SPACEBAR} />
			<KeyCap lowerCase={<Span fontSize={smallerFont}>Alt</Span>} />
			<KeyCap lowerCase={<Span fontSize={smallerFont}>Ctrl</Span>} />
			<KeyCap lowerCase={<MdArrowLeft {...arrowIconParams} />} />
			<div>
				<HalfKeyCap
					lowerCase={<MdArrowDropUp {...arrowIconParams} />}
				/>
				<HalfKeyCap
					lowerCase={<MdArrowDropDown {...arrowIconParams} />}
				/>
			</div>
			<KeyCap lowerCase={<MdArrowRight {...arrowIconParams} />} />
		</>
	)
}

const WindowKeyboard = styled(RawWindowKeyboard)``

export default WindowKeyboard
