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
