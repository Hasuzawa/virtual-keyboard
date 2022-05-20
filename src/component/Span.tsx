import styled, { css } from "styled-components"
import { StyledComponent } from "../type"

interface SpanProps extends StyledComponent {
	text?: string
	paddingLeft?: number
	paddingRight?: number
	paddingTop?: number
	paddingBottom?: number
	fontSize?: number
}

const RawSpan = (props: SpanProps) => {
	return <span className={props.className}>{props.children}</span>
}

const Span = styled(RawSpan)`
	padding-left: ${({ paddingLeft }) => paddingLeft}px;
	padding-right: ${({ paddingRight }) => paddingRight}px;
	padding-top: ${({ paddingTop }) => paddingTop}px;
	padding-bottom: ${({ paddingBottom }) => paddingBottom}px;

	font-size: ${({ fontSize }) => fontSize}px;
`

export default Span
