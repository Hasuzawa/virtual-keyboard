import styled from "styled-components"
import DragZone from "./component/DragZone"
import { useAppDispatch, useAppSelector } from "./store/useStore"
import { handleKeyDown, handleKeyUp } from "./store/keyboardSlice"
import { KeyboardEvent } from "react"
import { selectedTheme } from "./theme/theme"
import { selectOS } from "./store/keyboardSlice"
import { ThemeProvider } from "styled-components"

interface AppProps {
	className?: string
	children?: React.ReactNode
}
const rawApp = (props: AppProps) => {
	const dispatch = useAppDispatch()

	const onKeyDown = <T,>(e: KeyboardEvent<T>) =>
		dispatch(handleKeyDown(e.key as any))
	const onKeyUp = (e: KeyboardEvent) => dispatch(handleKeyUp(e.key as any))

	const os = useAppSelector(selectOS)

	return (
		<ThemeProvider theme={selectedTheme(os)}>
			<main
				className={props.className}
				tabIndex={-1}
				onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
					dispatch(handleKeyDown(e.key as any))
				}
				onKeyUp={(e: KeyboardEvent<HTMLElement>) =>
					dispatch(handleKeyUp(e.key as any))
				}
			>
				<DragZone />
			</main>
		</ThemeProvider>
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
