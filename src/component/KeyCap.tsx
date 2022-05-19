import styled, { css } from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import {
	handleKeyDown,
	handleKeyUp,
	selectDisplayUpperCase,
} from "../store/keyboardSlice"

type VerticalPlacement = "top" | "center" | "bottom"
type HorizontalPlacement = "left" | "center" | "right"

type Placement = `${VerticalPlacement}-${HorizontalPlacement}`

interface KeyCapProps extends StyledComponent {
	lowerCase: string | React.ReactNode
	upperCase: string
	width?: number
	// onClick: Function
	// onEnter: Function
	placement?: Placement
}

const RawKeyCap = (props: KeyCapProps) => {
	const { lowerCase, upperCase, className } = props
	const dispatch = useAppDispatch()
	const displayUpperCase = useAppSelector(selectDisplayUpperCase)

	const handleActive = (key: string) => dispatch(handleKeyDown(key as any))

	return (
		<motion.button
			className={className}
			// onClick={() => handleActive(lowerCase)}
		>
			{displayUpperCase ? upperCase : lowerCase}
		</motion.button>
	)
}

const KeyCap = styled(RawKeyCap)`
	width: ${(props) => props.width ?? 64}px;
	height: 64px;
	font-size: 16px;

	display: flex;
	/* flex-direction: column;
	flex-wrap: nowrap; */
	border-radius: 6px;
	/* font-size: 20px; */
	/* box-shadow: 0px 0px 0px 0px black; */

	/* justify-content: center;
	align-items: center; */
	color: ${(props) => props.theme.keyCapColor};
	background-color: ${(props) => props.theme.keyCapBackgroundColor};
	${(props) => {
		switch (props.placement) {
			default:
			case "center-center":
				return css`
					justify-content: center;
					align-items: center;
				`
		}
	}}
`

export const HalfKeyCap = styled(KeyCap)`
	height: 32px;
	align-self: end;
`

export default KeyCap
