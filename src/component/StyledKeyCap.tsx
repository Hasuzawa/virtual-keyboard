import styled from "styled-components"


interface KeyCapProps {
    className?: string
    children?: React.ReactNode
}


const KeyCap = (props: KeyCapProps) => {

    return (
        <div>
            <span>{props.children}</span>
        </div>
    )
}


const StyledKeyCap = styled(KeyCap)`
    color: red;
    font-size: 80px;
`


export default StyledKeyCap