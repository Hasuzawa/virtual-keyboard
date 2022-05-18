import styled from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { useRef, RefObject, forwardRef } from "react"
import Keyboard from "./Keyboard"
import SelectOS from "./SelectOS"

interface DragZoneProps extends StyledComponent {}

const RawDragZone = (props: DragZoneProps) => {
	const divRef = useRef<HTMLDivElement>(null)

	return (
		<motion.div className={props.className} ref={divRef}>
			<Keyboard ref={divRef} />
			{/* <motion.div drag dragConstraints={divRef}>
				hello worlsdfjlskdfjskldfjsdlkfsjdf
			</motion.div>
			<Box ref={divRef} />
			<Trial ref={divRef} /> */}
			<SelectOS />
		</motion.div>
	)
}

const Trial = forwardRef((props: any, ref) => (
	<motion.div drag dragConstraints={ref as any}>
		sdfsdfsdfsfsd
	</motion.div>
))

const DragZone = styled(RawDragZone)`
	position: relative;
	width: 100%;
	height: 80%;
	background-color: coral;
`

interface BoxProps<T> extends StyledComponent {
	ref: RefObject<T>
}

const RawBox = forwardRef((props: BoxProps<HTMLDivElement>, ref) => {
	return (
		<motion.div
			drag
			dragConstraints={ref as any}
			className={props.className}
		>
			this is a box
		</motion.div>
	)
})

const Box = styled(RawBox)`
	width: 50px;
	height: 50px;
	background-color: pink;
`

export default DragZone
