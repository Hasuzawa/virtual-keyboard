import Keyboard from "./Keyboard"
import Row from "./Row"
import KeyCap from "./KeyCap"


const MacKeyboard = () => {
    const [defaultWidth, defaultHeight] = [64, 64]
    const [columnSeparation, rowSeparation] = [8, 8]
    const keyboardColor = "#c0c1c3"
    const keyCapColor = "#28292d"
    const keyCapTextColor = "#c0c1c3"

    const qwer = []
    for (let comb in ["~`", "!1", "@2", "#3"]) {
        let content = null
        if (comb.length === 1) {
            content = comb
        } else {
            content = []
            for (let char in comb.split("")) {
                content.push(<span>{char}</span>)
            }
        }
        qwer.push(<KeyCap>{content}</KeyCap>)
    }

    return (
        <Keyboard
            keyboardColor={keyboardColor}
            rowSeparation={8}
        >
            <Row columnSeparation={columnSeparation}>
                {qwer}
                {/* {["~`", "!1", "@2", "#3"].map(
                    (symbols: string) => symbols.split("").map(
                        (char: string) => 
                    )
                )} */}
                {/* <KeyCap>~</KeyCap>
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
                <KeyCap width={98}>delete</KeyCap> */}
            </Row>
            <Row columnSeparation={columnSeparation}>
                <KeyCap width={98}>tab</KeyCap>
                {"QWERTYUIOP".split("").map((char: string) => <KeyCap key={char}>{char}</KeyCap>)}
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
            <Row columnSeparation={columnSeparation}>
                <KeyCap width={117}>caps lock</KeyCap>
                {"ASDFGHJKL".split("").map((char: string) => <KeyCap key={char}>{char}</KeyCap>)}
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
            <Row columnSeparation={columnSeparation}>
                <KeyCap width={153}>shift</KeyCap>
                {"ZXCVBNM".split("").map((char: string) => <KeyCap key={char}>{char}</KeyCap>)}
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
                <KeyCap width={153}>shift</KeyCap>
            </Row>
            <Row columnSeparation={columnSeparation}>
                <KeyCap>fn</KeyCap>
                <KeyCap>control</KeyCap>
                <KeyCap>option</KeyCap>
                <KeyCap width={81}>command</KeyCap>
                <KeyCap width={352}></KeyCap>
                <KeyCap width={81}>command</KeyCap>
                <KeyCap>option</KeyCap>
                <KeyCap></KeyCap>
                <KeyCap></KeyCap>
                <KeyCap></KeyCap>
            </Row>

        </Keyboard>
    )
}


export default MacKeyboard