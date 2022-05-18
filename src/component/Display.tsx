import styled from "styled-components"
import { StyledComponent } from "../type"

interface DisplayProps extends StyledComponent {}

const RawDisplay = (props: DisplayProps) => {
	return <div className={props.className}></div>
}

const Display = styled(RawDisplay)`
	width: 100%;
	height: 20%;
	background-color: lightcyan;
`

export default Display
