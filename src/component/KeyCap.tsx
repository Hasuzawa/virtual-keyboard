import styled from "styled-components"


interface KeyCapProps {
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
        <div
            className={props.className}
            onClick={onClick}
        >
            {content()}
        </div>
    )
}

// interface KeyCapProps {
//     width?: number
// }

const KeyCap = styled(rawKeyCap)`
    background-color: lightblue;
    width: ${props => props.width ? props.width : 64}px;  // 64 is default value
    height: 64px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`


export default KeyCap