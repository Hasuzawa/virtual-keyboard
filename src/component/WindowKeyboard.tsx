import styled, { css } from "styled-components"
import { StyledComponent } from "../type"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import { BsWindows, BsCommand } from "react-icons/bs"
import { SiRaspberrypi } from "react-icons/si"
import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import { KeyWidth, arrowIconParams } from "./Keyboard"
import Span from "./Span"

interface WindowKeyboardProps extends StyledComponent {}

const padding = 15
const smallerFont = 14

const RawWindowKeyboard = (props: WindowKeyboardProps) => {
	return (
		<>
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
				lowerCase={
					<Span paddingRight={padding} fontSize={smallerFont}>
						Backspace
					</Span>
				}
				width={KeyWidth.TAB_DEL}
				placement="center-right"
			/>

			<KeyCap
				lowerCase={
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Tab
					</Span>
				}
				width={KeyWidth.TAB_DEL}
				placement="center-left"
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
				lowerCase={
					<Span paddingLeft={padding} fontSize={smallerFont}>
						Caps
					</Span>
				}
				width={KeyWidth.CAP_RETURN}
				placement="center-left"
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
				lowerCase={
					<Span paddingRight={padding} fontSize={smallerFont}>
						Shift
					</Span>
				}
				width={KeyWidth.SHIFT}
				placement="center-right"
			/>

			<KeyCap
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
			<KeyCap lowerCase={<BsWindows size={20} />} />
			<KeyCap
				lowerCase={<Span fontSize={smallerFont}>Alt</Span>}
				placement="center-center"
			/>
			<KeyCap lowerCase="" width={KeyWidth.SPACEBAR} />
			<KeyCap
				lowerCase={<Span fontSize={smallerFont}>Alt</Span>}
				placement="center-center"
			/>
			<KeyCap
				lowerCase={<Span fontSize={smallerFont}>Ctrl</Span>}
				placement="center-center"
			/>
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
