import styled from "styled-components"
import { StyledComponent } from "../type"
import { useState, useRef } from "react"

interface DisplayProps extends StyledComponent {}

const RawDisplay = (props: DisplayProps) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	return (
		<div className={props.className}>
			<textarea ref={textAreaRef}></textarea>
		</div>
	)
}

const Display = styled(RawDisplay)`
	width: 100%;
	height: 20%;
	background-color: lightcyan;
`

export default Display
