import styled, { css } from "styled-components"
import { StyledComponent, KeyCapProps } from "../../type"
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../store/useStore"
import {
	handleKeyDown,
	handleKeyUp,
	selectDisplayUpperCase,
} from "../../store/keyboardSlice"

const RawKeyCap = (props: KeyCapProps) => {
	const { lowerCase, upperCase, className } = props
	const [lower, upper] = [lowerCase, upperCase ?? lowerCase]
	const dispatch = useAppDispatch()
	const displayUpperCase = useAppSelector(selectDisplayUpperCase)

	const handleActive = (key: string) => dispatch(handleKeyDown(key as any))

	return (
		<motion.button
			className={className}
			// onClick={() => handleActive(lowerCase)}
		>
			{displayUpperCase ? upper : lower}
		</motion.button>
	)
}

const KeyCap = styled(RawKeyCap)`
	width: ${(props) => props.width ?? 64}px;
	height: 64px;
	font-size: 18px;

	display: flex;
	/* flex-direction: column;
	flex-wrap: nowrap; */
	border-radius: 6px;
	/* border: 2px solid black; */
	/* font-size: 20px; */

	/* justify-content: center;
	align-items: center; */
	color: ${(props) => props.theme.keyCapColor};
	background-color: ${(props) => props.theme.keyCapBackgroundColor};
	box-shadow: ${(props) => props.theme.keyCapBoxShadow};

	${(props) => {
		switch (props.placement) {
			case "top-left":
				return css`
					justify-content: flex-start;
					align-items: flex-start;
				`
			case "top-center":
				return css`
					justify-content: center;
					align-items: flex-start;
				`
			case "top-right":
				return css`
					justify-content: flex-end;
					align-items: flex-start;
				`
			case "center-left":
				return css`
					justify-content: flex-start;
					align-items: center;
				`
			default:
			case "center-center":
				return css`
					justify-content: center;
					align-items: center;
				`
			case "center-right":
				return css`
					justify-content: flex-end;
					align-items: center;
				`
			case "bottom-left":
				return css`
					justify-content: flex-start;
					align-items: flex-end;
				`
			case "bottom-center":
				return css`
					justify-content: center;
					align-items: flex-end;
				`
			case "bottom-right":
				return css`
					justify-content: flex-end;
					align-items: flex-end;
				`
			case "vertical-split":
				return css`
					flex-flow: column nowrap;
					justify-content: space-between;
				`
		}
	}}

	&&:active {
		color: ${(props) => props.theme.keyCapBackgroundColor};
		background-color: ${(props) => props.theme.keyCapColor};
	}
	transition: color 0.2s ease-in-out;
	transition: background-color 0.2s ease-in-out;
`

export const HalfKeyCap = styled(KeyCap)`
	height: 32px;
	align-self: end;
`

export default KeyCap
