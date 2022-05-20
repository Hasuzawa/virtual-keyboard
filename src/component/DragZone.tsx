import styled from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Keyboard from "./Keyboard"
import SelectOS from "./SelectOS"

interface DragZoneProps extends StyledComponent {}

const RawDragZone = (props: DragZoneProps) => {
	const divRef = useRef<HTMLDivElement>(null)
	const [dragging, setDragging] = useState<boolean>(false)

	return (
		<motion.div className={props.className} ref={divRef}>
			<Keyboard
				ref={divRef}
				dragging={dragging}
				setDragging={setDragging}
			/>
			{/* <motion.div drag dragConstraints={divRef}>
				hello worlsdfjlskdfjskldfjsdlkfsjdf
			</motion.div>
			<Box ref={divRef} />
			<Trial ref={divRef} /> */}
			<SelectOS />
		</motion.div>
	)
}

const DragZone = styled(RawDragZone)`
	position: relative;
	width: 100%;
	height: 80%;
	background-color: #565656;
`

export default DragZone
