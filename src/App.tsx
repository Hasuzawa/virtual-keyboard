import MacKeyboard from "./component/legacy/MacKeyboard"
import styled from "styled-components"
import DragZone from "./component/DragZone"
import Display from "./component/Display"
import KeyCap from "./component/KeyCap"

interface AppProps {
	className?: string
	children?: React.ReactNode
}
const rawApp = (props: AppProps) => {
	return (
		<main className={props.className}>
			{/* <div>
                <textarea />
            </div>
            <MacKeyboard /> */}
			<Display />
			<DragZone />
			<MacKeyboard />
		</main>
	)
}

const App = styled(rawApp)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	background-color: #313131;
`

export default App
