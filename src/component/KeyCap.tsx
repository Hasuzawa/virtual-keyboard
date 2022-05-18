import styled from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"

interface KeyCapProps extends StyledComponent {
	lowerCase: string
	upperCase: string
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
	width: 64px;
	height: 64px;

	/* display: flex;
	flex-direction: column;
	flex-wrap: nowrap; */
	border-radius: 6px;
	/* font-size: 20px; */
	/* box-shadow: 0px 0px 0px 0px black; */

	/* justify-content: center;
	align-items: center; */
`

export default KeyCap
