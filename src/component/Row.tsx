import styled from "styled-components"

interface RowProps {
    className?: string
    children?: React.ReactNode | React.ReactNode[]
    columnSeparation?: number
    rowSeparation?: number
}

const rawRow = (props: RowProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

const Row = styled(rawRow)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: ${props => props.columnSeparation ?? 8}px;
`


export default Row