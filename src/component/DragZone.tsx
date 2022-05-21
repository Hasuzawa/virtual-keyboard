import styled from "styled-components"
import { StyledComponent } from "../type"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Keyboard from "./Keyboard"
import SelectOS from "./SelectOS"
import ColorPicker from "./ColorPicker"
import { Color } from "../type"

interface DragZoneProps extends StyledComponent {}

const RawDragZone = (props: DragZoneProps) => {
	const divRef = useRef<HTMLDivElement>(null)
	const [dragging, setDragging] = useState<boolean>(false)
	const [areaColor, setAreaColor] = useState<string>("#565656")

	return (
		<motion.div
			className={props.className}
			ref={divRef}
			style={{ backgroundColor: areaColor }}
		>
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
			<ColorPicker setColor={setAreaColor} defaultColor={areaColor} />
		</motion.div>
	)
}

const DragZone = styled(RawDragZone)`
	position: relative;
	width: 100%;
	height: 100%;
	/* background-color: #565656; */
	display: flex;
	justify-content: center;
`

export default DragZone
