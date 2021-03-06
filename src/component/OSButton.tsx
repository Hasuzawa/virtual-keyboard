import styled from "styled-components"
import { StyledComponent, OS } from "../type"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import { selectOS, setOS } from "../store/keyboardSlice"
import { BsWindows, BsApple } from "react-icons/bs"
import { FaLinux, FaRaspberryPi } from "react-icons/fa"
import { useState } from "react"

interface OSButtonProps extends StyledComponent {
	os: OS
	selected: boolean
}

const defaultColor = "#000000"

const windowsColor = "#0078D4"
const macColor = "#A2AAAD"
const linuxColor = "#25c725"
const raspberryColor = "#CD2355"

const iconSize = 30

const RawOSButton = (props: OSButtonProps) => {
	const { os, selected } = props
	const dispatch = useAppDispatch()
	const [hover, setHover] = useState<boolean>(false)

	const renderIcon = () => {
		switch (props.os) {
			case "windows":
				return <BsWindows size={iconSize} color={windowsColor} />
			case "mac":
				return <BsApple size={iconSize} color={macColor} />
			case "linux":
				return <FaLinux size={iconSize} color={linuxColor} />
			case "raspberry":
			default:
				return <FaRaspberryPi size={iconSize} color={raspberryColor} />
		}
	}
	return (
		<button
			className={props.className}
			onClick={() => dispatch(setOS(props.os))}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{renderIcon()}
		</button>
	)
}

export const OSButton = styled(RawOSButton)`
	width: 60px;
	height: 60px;
	border-radius: 9999px;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: background-color 0.3s;

	&&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}
`

const WindowOS = styled(OSButton)``

const MacOS = styled(OSButton)``

export default OSButton
