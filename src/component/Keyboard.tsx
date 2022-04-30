import KeyCap from "./KeyCap"
import Row from "./Row"
import styled from "styled-components"

import {} from "react-icons"

interface KeyboardProps {
    defaultWidth: number
    defaultHeight: number
    baseColor: string
    textColor: string
    columnSeparation: number
    rowSeparation: number


    className?: string
    children?: React.ReactNode
}

const rawKeyboard = (props: KeyboardProps) => {
    return (
        <div className={props.className}>
            <Row>
                <KeyCap>~</KeyCap>
                <KeyCap>1</KeyCap>
                <KeyCap>2</KeyCap>
                <KeyCap>3</KeyCap>
                <KeyCap>4</KeyCap>
                <KeyCap>5</KeyCap>
                <KeyCap>6</KeyCap>
                <KeyCap>7</KeyCap>
                <KeyCap>8</KeyCap>
                <KeyCap>9</KeyCap>
                <KeyCap>0</KeyCap>
                <KeyCap>-</KeyCap>
                <KeyCap>+</KeyCap>
                <KeyCap width={98}>delete</KeyCap>
            </Row>
            <Row>
                <KeyCap width={98}>tab</KeyCap>
                <KeyCap>Q</KeyCap>
                <KeyCap>W</KeyCap>
                <KeyCap>E</KeyCap>
                <KeyCap>R</KeyCap>
                <KeyCap>T</KeyCap>
                <KeyCap>Y</KeyCap>
                <KeyCap>U</KeyCap>
                <KeyCap>I</KeyCap>
                <KeyCap>O</KeyCap>
                <KeyCap>P</KeyCap>
                <KeyCap>
                    <span>&#123;</span>
                    <span>[</span>
                </KeyCap>
                <KeyCap>
                    <span>&#125;</span>
                    <span>]</span>
                </KeyCap>
                <KeyCap>
                    <span>|</span>
                    <span>\</span>
                </KeyCap>
            </Row>
            <Row>
                <KeyCap width={117}>caps lock</KeyCap>
                <KeyCap>A</KeyCap>
                <KeyCap>S</KeyCap>
                <KeyCap>D</KeyCap>
                <KeyCap>F</KeyCap>
                <KeyCap>G</KeyCap>
                <KeyCap>H</KeyCap>
                <KeyCap>J</KeyCap>
                <KeyCap>K</KeyCap>
                <KeyCap>L</KeyCap>
                <KeyCap>
                    <span>:</span>
                    <span>;</span>
                </KeyCap>
                <KeyCap>
                    <span>"</span>
                    <span>'</span>
                </KeyCap>
                <KeyCap width={117}>return</KeyCap>
            </Row>
            <Row>
                <KeyCap width={151}>shift</KeyCap>
                <KeyCap>Z</KeyCap>
                <KeyCap>X</KeyCap>
                <KeyCap>C</KeyCap>
                <KeyCap>V</KeyCap>
                <KeyCap>B</KeyCap>
                <KeyCap>N</KeyCap>
                <KeyCap>M</KeyCap>
                <KeyCap>
                    <span>&lt;</span>
                    <span>,</span>
                </KeyCap>
                <KeyCap>
                    <span>&gt;</span>
                    <span>.</span>
                </KeyCap>
                <KeyCap>
                    <span>?</span>
                    <span>/</span>
                </KeyCap>
                <KeyCap width={151}>shift</KeyCap>
            </Row>
            <Row>
                <KeyCap>fn</KeyCap>
                <KeyCap>control</KeyCap>
                <KeyCap>option</KeyCap>
                <KeyCap width={82}>command</KeyCap>
                <KeyCap width={352}></KeyCap>
                <KeyCap width={82}>command</KeyCap>
                <KeyCap>option</KeyCap>
                <KeyCap></KeyCap>
                <KeyCap></KeyCap>
                <KeyCap></KeyCap>
            </Row>

        </div>
    )
}

const Keyboard = styled(rawKeyboard)`
    
`







export default Keyboard