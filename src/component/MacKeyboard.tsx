import Keyboard from "./Keyboard"
import Row from "./Row"
import KeyCap from "./KeyCap"


const MacKeyboard = () => {
    const [defaultWidth, defaultHeight] = [64, 64]
    const [columnSeparation, rowSeparation] = [8, 8]
    const keyboardColor = "#c0c1c3"
    const keyCapColor = "#28292d"
    const keyCapTextColor = "#c0c1c3"


    const rowProps = {
        "columnSeparation": columnSeparation
    }

    const keyCapProps = {
        "keyCapColor": keyCapColor,
        "keyCapTextColor": keyCapTextColor
    }

    const numberRow = splitContent(
        ["~`", "!1", "@2", "#3", "$4", "%5", "^6", "&7", "*8", "(9", ")0", "_-", "+="]
    )

    const qwerRow = splitContent(
        ["Q","W","E","R","T","Y","U","I","O","P","{[","}]","|\\"]
    )

    const asdfRow = splitContent(
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":;", "\"'"]
    )

    const zxcvRow = splitContent(
        ["Z", "X", "C", "V", "B", "N", "M", "<,", ">.", "?/"]
    )


    // for (let comb of ["~`", "!1", "@2", "#3", "$4", "%5", "^6", "&7", "*8", "(9", ")0", "_-", "+="]) {
    //     let content = null
    //     if (comb.length === 1) {
    //         content = comb
    //     } else {
    //         content = []
    //         for (let char of comb.split("")) {
    //             content.push(<span key={char}>{char}</span>)
    //         }
    //     }
    //     numberRow.push(
    //     <KeyCap
    //         key={comb}
    //         {...keyCapProps}
    //     >
    //         {content}
    //     </KeyCap>
    //     )
    // }

    function splitContent(contentArray: string[]) {
        let rowContent = []
        let cellContent = null
        for (let content of contentArray) {
            if (content.length === 1) {
                cellContent = content
            } else {
                cellContent = []
                for (let char of content.split("")) {
                    cellContent.push(<span key={char}>{char}</span>)
                }
            }
            rowContent.push(
                <KeyCap
                    key={content}
                    {...keyCapProps}
                >
                    {cellContent}
                </KeyCap>
            )
        }
        return rowContent
    }



    return (
        <Keyboard
            keyboardColor={keyboardColor}
            rowSeparation={rowSeparation}
        >
            <Row {...rowProps}>
                {numberRow}
                <KeyCap width={98} {...keyCapProps}>delete</KeyCap>
            </Row>
            <Row {...rowProps}>
                <KeyCap width={98} {...keyCapProps}>tab</KeyCap>
                {qwerRow}
            </Row>
            <Row {...rowProps}>
                <KeyCap width={117} {...keyCapProps}>caps lock</KeyCap>
                {asdfRow}
                <KeyCap width={117} {...keyCapProps}>return</KeyCap>
            </Row>
            <Row {...rowProps}>
                <KeyCap width={153} {...keyCapProps}>shift</KeyCap>
                {zxcvRow}
                <KeyCap width={153} {...keyCapProps}>shift</KeyCap>
            </Row>
            <Row {...rowProps}>

                <KeyCap width={81} {...keyCapProps}>command</KeyCap>
                <KeyCap width={352} {...keyCapProps}></KeyCap>
                <KeyCap width={81} {...keyCapProps}>command</KeyCap>
                
            </Row>
            
            {/*
            <Row columnSeparation={columnSeparation}>
                
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
            </Row> */}

        </Keyboard>
    )
}


export default MacKeyboard