import Keyboard from "./Keyboard"
import Row from "./Row"
import KeyCap from "./KeyCap"
import {
	VscTriangleLeft,
	VscTriangleUp,
	VscTriangleDown,
	VscTriangleRight,
} from "react-icons/vsc"

const MacKeyboard = () => {
	const [defaultWidth, defaultHeight] = [64, 64]
	const [columnSeparation, rowSeparation, keyboardPadding] = [8, 8, 12]
	const keyboardColor = "#c0c1c3"
	const keyCapColor = "#28292d"
	const keyCapTextColor = "#c0c1c3"
	const keyboardBoundaryColor = "#28292d"

	const keyboardProps = {
		keyboardColor: keyboardColor,
		rowSeparation: rowSeparation,
		keyboardPadding: keyboardPadding,
		keyboardBoundaryColor: keyboardBoundaryColor,
	}

	const rowProps = {
		columnSeparation: columnSeparation,
	}

	const keyCapProps = {
		keyCapColor: keyCapColor,
		keyCapTextColor: keyCapTextColor,
	}

	const numberRow = splitContent([
		"~`",
		"!1",
		"@2",
		"#3",
		"$4",
		"%5",
		"^6",
		"&7",
		"*8",
		"(9",
		")0",
		"_-",
		"+=",
	])

	const qwerRow = splitContent([
		"Q",
		"W",
		"E",
		"R",
		"T",
		"Y",
		"U",
		"I",
		"O",
		"P",
		"{[",
		"}]",
		"|\\",
	])

	const asdfRow = splitContent([
		"A",
		"S",
		"D",
		"F",
		"G",
		"H",
		"J",
		"K",
		"L",
		":;",
		"\"'",
	])

	const zxcvRow = splitContent([
		"Z",
		"X",
		"C",
		"V",
		"B",
		"N",
		"M",
		"<,",
		">.",
		"?/",
	])

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
				<KeyCap key={content} {...keyCapProps}>
					{cellContent}
				</KeyCap>
			)
		}
		return rowContent
	}

	return (
		<Keyboard {...keyboardProps}>
			<Row {...rowProps}>
				{numberRow}
				<KeyCap width={98} {...keyCapProps}>
					delete
				</KeyCap>
			</Row>
			<Row {...rowProps}>
				<KeyCap width={98} {...keyCapProps}>
					tab
				</KeyCap>
				{qwerRow}
			</Row>
			<Row {...rowProps}>
				<KeyCap width={117} {...keyCapProps}>
					caps lock
				</KeyCap>
				{asdfRow}
				<KeyCap width={117} {...keyCapProps}>
					return
				</KeyCap>
			</Row>
			<Row {...rowProps}>
				<KeyCap width={153} {...keyCapProps}>
					shift
				</KeyCap>
				{zxcvRow}
				<KeyCap width={153} {...keyCapProps}>
					shift
				</KeyCap>
			</Row>
			<Row {...rowProps}>
				<KeyCap width={64} {...keyCapProps}>
					fn
				</KeyCap>
				<KeyCap width={64} {...keyCapProps}>
					control
				</KeyCap>
				<KeyCap width={64} {...keyCapProps}>
					option
				</KeyCap>

				<KeyCap width={81} {...keyCapProps}>
					command
				</KeyCap>
				<KeyCap width={352} {...keyCapProps}></KeyCap>
				<KeyCap width={81} {...keyCapProps}>
					command
				</KeyCap>
				<KeyCap width={64} {...keyCapProps}>
					option
				</KeyCap>
				<KeyCap width={64} {...keyCapProps}>
					<VscTriangleLeft />
				</KeyCap>
				<KeyCap width={64} {...keyCapProps}>
					<span>
						<VscTriangleUp />
					</span>
					<span>
						<VscTriangleDown />
					</span>
				</KeyCap>
				<KeyCap width={64} {...keyCapProps}>
					<VscTriangleRight />
				</KeyCap>
			</Row>

			{/* <Row columnSeparation={columnSeparation}>
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
