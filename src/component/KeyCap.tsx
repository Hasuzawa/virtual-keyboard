import styled, { css } from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"

interface KeyCapProps extends StyledComponent {
	lowerCase: string
	upperCase: string
	width?: number
	// onClick: Function
	// onEnter: Function
}

const RawKeyCap = (props: KeyCapProps) => {
	const { lowerCase, upperCase, className } = props
	// const shifting
	// cap lock

	return <motion.button className={className}>{lowerCase}</motion.button>
}

const KeyCap = styled(RawKeyCap)`
	width: ${(props) => props.width ?? 64}px;
	height: 64px;

	/* display: flex;
	flex-direction: column;
	flex-wrap: nowrap; */
	border-radius: 6px;
	/* font-size: 20px; */
	/* box-shadow: 0px 0px 0px 0px black; */

	/* justify-content: center;
	align-items: center; */
	color: ${(props) => props.theme.keyCapColor};
	background-color: ${(props) => props.theme.keyCapBackgroundColor};
`

export default KeyCap
