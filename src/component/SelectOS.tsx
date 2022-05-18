import styled from "styled-components"
import { StyledComponent } from "../type"

import { OSButton } from "./OSButton"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import { selectOS } from "../store/keyboardSlice"

interface SelectOSProps extends StyledComponent {}

const RawSelectOS = (props: SelectOSProps) => {
	const os = useAppSelector(selectOS)

	return (
		<div className={props.className}>
			<OSButton os="windows" />
			<OSButton os="mac" />
			<OSButton os="linux" />
			<OSButton os="raspberry" />
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
