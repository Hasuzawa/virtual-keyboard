import styled from "styled-components"
import { StyledComponent } from "../type"

import { OSButton } from "./OSButton"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import { selectOS } from "../store/keyboardSlice"
import { OS } from "../type"
import { shuffleArray } from "../util/function"
import { allOS } from "../store/keyboardSlice"
import { useState } from "react"

interface SelectOSProps extends StyledComponent {}

const RawSelectOS = (props: SelectOSProps) => {
	const os = useAppSelector(selectOS)
	// const [ OSArray ] = useState<OS[]>(shuffleArray(allOS))
	const OSArray: OS[] = ["windows", "mac", "linux", "raspberry"]

	return (
		<div className={props.className}>
			{/* if shuffle here, the order will change everytime this component changes */}
			{OSArray.map((x, idx) => (
				<OSButton os={x} />
			))}
			{/* <OSButton os="windows" />
			<OSButton os="mac" />
			<OSButton os="linux" />
			<OSButton os="raspberry" /> */}
		</div>
	)
}

const SelectOS = styled(RawSelectOS)`
	position: absolute;
	display: flex;
	flex-flow: column nowrap;
	left: 20px;
	top: 20px;
	width: 100px;
	height: 300px;
	background-color: lightgrey;
`

export default SelectOS
