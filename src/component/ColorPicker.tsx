import styled from "styled-components"
import { StyledComponent, Color } from "../type"

interface ColorPickProps extends StyledComponent {
	defaultColor: Color
	setColor: React.Dispatch<React.SetStateAction<Color>>
}

const RawColorPick = (props: ColorPickProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.setColor(e.target.value)
	}
	return (
		<input
			type="color"
			defaultValue={props.defaultColor}
			onChange={handleChange}
			className={props.className}
		/>
	)
}

const ColorPick = styled(RawColorPick)`
	position: absolute;
	width: 30px;
	height: 30px;
	left: 20px;
	bottom: 20px;
`

export default ColorPick
