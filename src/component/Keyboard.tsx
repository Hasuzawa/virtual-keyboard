import styled from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { forwardRef } from "react"



interface KeyboardProps extends StyledComponent {}


const RawKeyboard = forwardRef<HTMLDivElement>((props: KeyboardProps, ref) => {
	return (
		<motion.div
			drag
			dragConstraints={ref as any}	// framer-motion library forgot to handle this
		>
			this is keyboard
		</motion.div>
	)
})


const Keyboard = styled(RawKeyboard)`
	
`


export default Keyboard
