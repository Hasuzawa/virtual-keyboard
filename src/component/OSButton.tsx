import styled from "styled-components"
import { StyledComponent, OS } from "../type"
import { useAppDispatch, useAppSelector } from "../store/useStore"
import { selectOS } from "../store/keyboardSlice"
import { BsWindows, BsApple } from "react-icons/bs"
import { FaLinux, FaRaspberryPi } from "react-icons/fa"

interface OSButtonProps extends StyledComponent {
	os: OS
	// selected: boolean
}

const windowsColor = "#0078D4"
const macColor = "#A2AAAD"
const linuxColor = "#25c725"
const raspberryColor = "#CD2355"

const iconSize = 30

const RawOSButton = (props: OSButtonProps) => {
	const os = useAppSelector(selectOS)

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
	return <button className={props.className}>{renderIcon()}</button>
}

export const OSButton = styled(RawOSButton)`
	width: 60px;
	height: 60px;
	border-radius: 9999px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightcoral;

	outline: none;

	&&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}

	&&:active {
	}

	&&:focus {
		box-shadow: 0px 0px 5px 5px black; // change to each OS's color later
	}
`

const WindowOS = styled(OSButton)``

const MacOS = styled(OSButton)``

export default OSButton
