import styled, { css } from "styled-components"
import { StyledComponent } from "../type"
import KeyCap, { HalfKeyCap } from "./keyboard/KeyCap"
import { BsWindows, BsCommand, BsOption } from "react-icons/bs"
import { SiRaspberrypi } from "react-icons/si"
import { AiOutlineGlobal } from "react-icons/ai"

import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import { KeyWidth, arrowIconParams } from "./keyboard/Keyboard"
import Span from "./Span"

const padding = 8
const smallerFont = 14
const iconSize = 20

interface MacKeyCapsProps extends StyledComponent {}

const RawMacKeyCaps = (props: MacKeyCapsProps) => {
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
					<Span
						paddingRight={padding}
						paddingBottom={padding}
						fontSize={smallerFont}
					>
						delete
					</Span>
				}
				width={KeyWidth.TAB_DEL}
				placement="bottom-right"
			/>

			<KeyCap
				lowerCase={
					<Span
						paddingLeft={padding}
						paddingBottom={padding}
						fontSize={smallerFont}
					>
						tab
					</Span>
				}
				width={KeyWidth.TAB_DEL}
				placement="bottom-left"
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
					<Span
						paddingLeft={padding}
						paddingBottom={padding}
						fontSize={smallerFont}
					>
						caps lock
					</Span>
				}
				width={KeyWidth.CAP_RETURN}
				placement="bottom-left"
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
					<Span
						paddingRight={padding}
						paddingBottom={padding}
						fontSize={smallerFont}
					>
						return
					</Span>
				}
				width={KeyWidth.CAP_RETURN}
				placement="bottom-right"
			/>

			<KeyCap
				lowerCase={
					<Span
						paddingLeft={padding}
						paddingBottom={padding}
						fontSize={smallerFont}
					>
						shift
					</Span>
				}
				width={KeyWidth.SHIFT}
				placement="bottom-left"
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
					<Span
						paddingRight={padding}
						paddingBottom={padding}
						fontSize={smallerFont}
					>
						shift
					</Span>
				}
				width={KeyWidth.SHIFT}
				placement="bottom-right"
			/>

			<KeyCap
				lowerCase={
					<>
						<Span
							alignSelf="flex-end"
							paddingTop={padding}
							paddingRight={padding}
							fontSize={smallerFont}
						>
							fn
						</Span>
						<Span
							alignSelf="flex-start"
							paddingLeft={padding}
							paddingBottom={padding}
							fontSize={smallerFont}
						>
							<AiOutlineGlobal size={iconSize} />
						</Span>
					</>
				}
				placement="vertical-split"
			/>
			<KeyCap
				lowerCase={
					<>
						<Span
							alignSelf="flex-end"
							paddingTop={padding}
							paddingRight={padding}
						>
							^
						</Span>
						<Span
							alignSelf="center"
							paddingBottom={padding}
							fontSize={smallerFont}
						>
							control
						</Span>
					</>
				}
				placement="vertical-split"
			/>
			<KeyCap
				lowerCase={
					<>
						<Span
							alignSelf="flex-end"
							paddingTop={padding}
							paddingRight={padding}
						>
							<BsOption size={iconSize} />
						</Span>
						<Span
							alignSelf="center"
							paddingBottom={padding}
							fontSize={smallerFont}
						>
							option
						</Span>
					</>
				}
				placement="vertical-split"
			/>
			<KeyCap
				lowerCase={
					<>
						<Span
							alignSelf="flex-end"
							paddingTop={padding}
							paddingRight={padding}
						>
							<BsCommand size={iconSize} />
						</Span>
						<Span
							paddingBottom={padding}
							fontSize={smallerFont}
							alignSelf="center"
						>
							command
						</Span>
					</>
				}
				width={KeyWidth.COMMAND}
				placement="vertical-split"
			/>

			<KeyCap lowerCase="" width={KeyWidth.SPACEBAR} />
			<KeyCap
				lowerCase={
					<>
						<Span
							alignSelf="flex-start"
							paddingTop={padding}
							paddingLeft={padding}
						>
							<BsCommand size={iconSize} />
						</Span>
						<Span
							paddingBottom={padding}
							fontSize={smallerFont}
							alignSelf="center"
						>
							command
						</Span>
					</>
				}
				width={KeyWidth.COMMAND}
				placement="vertical-split"
			/>
			<KeyCap
				lowerCase={
					<>
						<Span
							alignSelf="flex-start"
							paddingLeft={padding}
							paddingTop={padding}
						>
							<BsOption size={iconSize} />
						</Span>
						<Span
							alignSelf="center"
							paddingBottom={padding}
							fontSize={smallerFont}
						>
							option
						</Span>
					</>
				}
				placement="vertical-split"
			/>
			<HalfKeyCap lowerCase={<MdArrowLeft {...arrowIconParams} />} />
			<div>
				<HalfKeyCap
					lowerCase={<MdArrowDropUp {...arrowIconParams} />}
				/>
				<HalfKeyCap
					lowerCase={<MdArrowDropDown {...arrowIconParams} />}
				/>
			</div>
			<HalfKeyCap lowerCase={<MdArrowRight {...arrowIconParams} />} />
		</>
	)
}

const MacKeyCaps = styled(RawMacKeyCaps)``

export default MacKeyCaps
