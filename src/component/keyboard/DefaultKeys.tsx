import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import { DefaultKeys } from "../../type"
import { iconSize } from "./spacing"
import Span from "../Span"
import KeyCap, { HalfKeyCap } from "./KeyCap"
import { padding, smallerFont, KeyWidth as keyWidth } from "./spacing"

const defaultKeys: DefaultKeys = {
	/* first row */
	"`": <KeyCap lowerCase="`" upperCase="~" />,
	"1": <KeyCap lowerCase="1" upperCase="!" />,
	"2": <KeyCap lowerCase="2" upperCase="@" />,
	"3": <KeyCap lowerCase="3" upperCase="#" />,
	"4": <KeyCap lowerCase="4" upperCase="$" />,
	"5": <KeyCap lowerCase="5" upperCase="%" />,
	"6": <KeyCap lowerCase="6" upperCase="^" />,
	"7": <KeyCap lowerCase="7" upperCase="&amp;" />,
	"8": <KeyCap lowerCase="8" upperCase="*" />,
	"9": <KeyCap lowerCase="9" upperCase="(" />,
	"0": <KeyCap lowerCase="0" upperCase=")" />,
	"-": <KeyCap lowerCase="-" upperCase="_" />,
	"=": <KeyCap lowerCase="=" upperCase="+" />,
	backspace: (
		<KeyCap
			lowerCase={
				<Span
					paddingRight={padding.default}
					fontSize={smallerFont.default}
				>
					Backspace
				</Span>
			}
			width={keyWidth.TAB_DEL}
			placement="center-right"
		/>
	),

	/* second row */
	tab: (
		<KeyCap
			lowerCase={
				<Span
					paddingLeft={padding.default}
					fontSize={smallerFont.default}
				>
					Tab
				</Span>
			}
			width={keyWidth.TAB_DEL}
			placement="center-left"
		/>
	),
	q: <KeyCap lowerCase="q" upperCase="Q" />,
	w: <KeyCap lowerCase="w" upperCase="W" />,
	e: <KeyCap lowerCase="e" upperCase="E" />,
	r: <KeyCap lowerCase="r" upperCase="R" />,
	t: <KeyCap lowerCase="t" upperCase="T" />,
	y: <KeyCap lowerCase="y" upperCase="Y" />,
	u: <KeyCap lowerCase="u" upperCase="U" />,
	i: <KeyCap lowerCase="i" upperCase="I" />,
	o: <KeyCap lowerCase="o" upperCase="O" />,
	p: <KeyCap lowerCase="p" upperCase="P" />,
	"[": <KeyCap lowerCase="[" upperCase="{" />,
	"]": <KeyCap lowerCase="]" upperCase="}" />,
	"\\": <KeyCap lowerCase="\" upperCase="|" />,

	/* third row */
	capsLock: (
		<KeyCap
			lowerCase={
				<Span
					paddingLeft={padding.default}
					fontSize={smallerFont.default}
				>
					Caps
				</Span>
			}
			width={keyWidth.CAP_RETURN}
			placement="center-left"
		/>
	),
	a: <KeyCap lowerCase="a" upperCase="A" />,
	s: <KeyCap lowerCase="s" upperCase="S" />,
	d: <KeyCap lowerCase="d" upperCase="D" />,
	f: <KeyCap lowerCase="f" upperCase="F" />,
	g: <KeyCap lowerCase="g" upperCase="G" />,
	h: <KeyCap lowerCase="h" upperCase="H" />,
	j: <KeyCap lowerCase="j" upperCase="J" />,
	k: <KeyCap lowerCase="k" upperCase="K" />,
	l: <KeyCap lowerCase="l" upperCase="L" />,
	";": <KeyCap lowerCase=";" upperCase="" />,
	"'": <KeyCap lowerCase="'" upperCase='"' />,
	enter: (
		<KeyCap
			lowerCase={
				<Span
					paddingRight={padding.default}
					fontSize={smallerFont.default}
				>
					Enter
				</Span>
			}
			width={keyWidth.CAP_RETURN}
			placement="center-right"
		/>
	),

	/* fourth row */
	leftShift: (
		<KeyCap
			lowerCase={
				<Span
					paddingLeft={padding.default}
					fontSize={smallerFont.default}
				>
					Shift
				</Span>
			}
			width={keyWidth.SHIFT}
			placement="center-left"
		/>
	),
	z: <KeyCap lowerCase="z" upperCase="Z" />,
	x: <KeyCap lowerCase="x" upperCase="X" />,
	c: <KeyCap lowerCase="c" upperCase="C" />,
	v: <KeyCap lowerCase="v" upperCase="V" />,
	b: <KeyCap lowerCase="b" upperCase="B" />,
	n: <KeyCap lowerCase="n" upperCase="N" />,
	m: <KeyCap lowerCase="m" upperCase="M" />,
	",": <KeyCap lowerCase="," upperCase="<" />,
	".": <KeyCap lowerCase="." upperCase=">" />,
	"/": <KeyCap lowerCase="/" upperCase="?" />,
	rightShift: (
		<KeyCap
			lowerCase={
				<Span
					paddingRight={padding.default}
					fontSize={smallerFont.default}
				>
					Shift
				</Span>
			}
			width={keyWidth.SHIFT}
			placement="center-right"
		/>
	),

	/* fifth row */
	leftCtrl: (
		<KeyCap
			lowerCase={
				<Span
					paddingLeft={padding.default}
					fontSize={smallerFont.default}
				>
					Ctrl
				</Span>
			}
			width={keyWidth.TAB_DEL}
			placement="center-left"
		/>
	),
	fn: <KeyCap lowerCase={<Span fontSize={smallerFont.default}>Fn</Span>} />,
	ctrl: (
		<KeyCap lowerCase={<Span fontSize={smallerFont.default}>Ctrl</Span>} />
	),
	spacebar: <KeyCap lowerCase="" width={keyWidth.SPACEBAR} />,
	alt: <KeyCap lowerCase={<Span fontSize={smallerFont.default}>Alt</Span>} />,
	arrowLeft: <KeyCap lowerCase={<MdArrowLeft size={iconSize.arrow} />} />,
	arrowUp: <HalfKeyCap lowerCase={<MdArrowDropUp size={iconSize.arrow} />} />,
	arrowDown: (
		<HalfKeyCap lowerCase={<MdArrowDropDown size={iconSize.arrow} />} />
	),
	arrowRight: <KeyCap lowerCase={<MdArrowRight size={iconSize.arrow} />} />,
	blank: <KeyCap lowerCase="" />,
}

type Keyboard = typeof defaultKeys

const MacKeys: Keyboard = Object.create(defaultKeys)
MacKeys.backspace = (
	<KeyCap
		lowerCase={
			<Span
				paddingRight={padding.mac}
				paddingBottom={padding.mac}
				fontSize={smallerFont.mac}
			>
				delete
			</Span>
		}
		width={keyWidth.TAB_DEL}
		placement="bottom-right"
	/>
)

export { defaultKeys }
