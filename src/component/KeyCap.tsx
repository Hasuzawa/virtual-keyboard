import styled from "styled-components"

interface KeyCapProps {
	keyCapColor: string
	keyCapTextColor: string
	placement?: string

	className?: string
	children?: string | React.ReactNode
	width?: number
	// onClick
}

const rawKeyCap = (props: KeyCapProps) => {
	const onClick = () => {}

	const content = () => {
		if (typeof props.children === "string")
			return <span>{props.children}</span>
		else return props.children
	}

	return (
		<button className={props.className} onClick={onClick}>
			{content()}
		</button>
	)
}

const KeyCap = styled(rawKeyCap)`
	background-color: ${(props) => props.keyCapColor};
	color: ${(props) => props.keyCapTextColor};
	width: ${(props) => props.width ?? 64}px;
	height: 64px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	border-radius: 6px;
	font-size: 20px;
	/* box-shadow: 0px 0px 0px 0px black; */

	justify-content: center;
	align-items: center;
`

export default KeyCap
