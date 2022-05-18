import styled from "styled-components"
import { StyledComponent } from "../type"

interface KeyCapProps extends StyledComponent {
	lowerCase: string
	upperCase: string
	onClick: Function
	onEnter: Function
}


const RawKeyCap = (props: KeyCapProps) => {
	return (<div>

	</div>
	)
}


const KeyCap = styled(RawKeyCap)`

`


export default KeyCap
