import MacKeyboard from "./component/MacKeyboard"
import styled from "styled-components"

interface AppProps {

    className?: string
    children?: React.ReactNode
}
const rawApp = (props: AppProps) => {
    return (
        <main className={props.className}>
            <div>
                <textarea />
            </div>
            <MacKeyboard />
        </main>
    )
}

const App = styled(rawApp)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    background-color: lightblue;
`


export default App;
