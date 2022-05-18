import styled from "styled-components"

import {} from "react-icons"

interface KeyboardProps {
	keyboardColor: string
	rowSeparation: number
	keyboardPadding: number
	keyboardBoundaryColor: string

	className?: string
	children?: React.ReactNode
}

const rawKeyboard = (props: KeyboardProps) => {
	return <div className={props.className}>{props.children}</div>
}

const Keyboard = styled(rawKeyboard)`
	width: fit-content;
	height: fit-content;
	display: inline-flex;
	flex-direction: column;
	border-width: 3px;
	border-radius: 6px;
	border-color: black;
	box-shadow: inset 0px 0px 7px 0px black;

	padding: ${(props) => props.keyboardPadding}px;
	row-gap: ${(props) => props.rowSeparation}px;
	background-color: ${(props) => props.keyboardColor};
`

export default Keyboard
