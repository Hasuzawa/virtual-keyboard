import KeyCap from "./KeyCap"
import Row from "./Row"
import styled from "styled-components"

import {} from "react-icons"

interface KeyboardProps {
    keyboardColor: string
    rowSeparation: number

    className?: string
    children?: React.ReactNode
}

const rawKeyboard = (props: KeyboardProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

const Keyboard = styled(rawKeyboard)`
    display: inline-flex;
    flex-direction: column;
    row-gap: ${props => props.rowSeparation}px;
    background-color: ${props => props.keyboardColor};
`



export default Keyboard