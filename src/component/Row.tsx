import styled from "styled-components"

interface RowProps {
    columnSeparation: number

    className?: string
    children?: React.ReactNode | React.ReactNode[]
}

const rawRow = (props: RowProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

const Row = styled(rawRow)`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: ${props => props.columnSeparation}px;
`


export default Row