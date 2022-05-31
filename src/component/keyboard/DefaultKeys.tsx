import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md"
import { LowerCaseKey, KeyCapProps } from "../../type"
import { iconSize } from "./spacing"
import Span from "../Span"
import { KeyWidth, padding, smallerFont } from "./spacing"

/**
 * The fallback keys for all OS.
 */
const defaultKeys: Partial<Readonly<Record<LowerCaseKey, KeyCapProps>>> = {
	"`": {
		lowerCase: "`",
		upperCase: "~",
	},
	"1": {
		lowerCase: "1",
		upperCase: "!",
	},
	"2": {
		lowerCase: "2",
		upperCase: "@",
	},
	"3": {
		lowerCase: "3",
		upperCase: "#",
	},
	"4": {
		lowerCase: "4",
		upperCase: "$",
	},
	"5": {
		lowerCase: "5",
		upperCase: "%",
	},
	"6": {
		lowerCase: "6",
		upperCase: "^",
	},
	"7": {
		lowerCase: "7",
		upperCase: "&",
	},
	"8": {
		lowerCase: "8",
		upperCase: "*",
	},
	"9": {
		lowerCase: "9",
		upperCase: "(",
	},
	"0": {
		lowerCase: "0",
		upperCase: ")",
	},
	"-": {
		lowerCase: "-",
		upperCase: "_",
	},
	"=": {
		lowerCase: "=",
		upperCase: "+",
	},
	q: {
		lowerCase: "q",
		upperCase: "Q",
	},
	w: {
		lowerCase: "w",
		upperCase: "W",
	},
	e: {
		lowerCase: "e",
		upperCase: "E",
	},
	r: {
		lowerCase: "r",
		upperCase: "R",
	},
	t: {
		lowerCase: "t",
		upperCase: "T",
	},
	y: {
		lowerCase: "y",
		upperCase: "Y",
	},
	u: {
		lowerCase: "u",
		upperCase: "U",
	},
	i: {
		lowerCase: "i",
		upperCase: "I",
	},
	o: {
		lowerCase: "o",
		upperCase: "O",
	},
	p: {
		lowerCase: "p",
		upperCase: "P",
	},
	"[": {
		lowerCase: "[",
		upperCase: "{",
	},
	"]": {
		lowerCase: "]",
		upperCase: "}",
	},
	"\\": {
		lowerCase: "\\",
		upperCase: "|",
	},
	a: {
		lowerCase: "a",
		upperCase: "A",
	},
	s: {
		lowerCase: "s",
		upperCase: "S",
	},
	d: {
		lowerCase: "d",
		upperCase: "D",
	},
	f: {
		lowerCase: "f",
		upperCase: "F",
	},
	g: {
		lowerCase: "g",
		upperCase: "G",
	},
	h: {
		lowerCase: "h",
		upperCase: "H",
	},
	j: {
		lowerCase: "j",
		upperCase: "J",
	},
	k: {
		lowerCase: "k",
		upperCase: "K",
	},
	l: {
		lowerCase: "l",
		upperCase: "L",
	},
	";": {
		lowerCase: ";",
		upperCase: ":",
	},
	"'": {
		lowerCase: "'",
		upperCase: '"',
	},
	z: {
		lowerCase: "z",
		upperCase: "Z",
	},
	x: {
		lowerCase: "x",
		upperCase: "X",
	},
	c: {
		lowerCase: "c",
		upperCase: "C",
	},
	v: {
		lowerCase: "v",
		upperCase: "V",
	},
	b: {
		lowerCase: "b",
		upperCase: "B",
	},
	n: {
		lowerCase: "n",
		upperCase: "N",
	},
	m: {
		lowerCase: "m",
		upperCase: "M",
	},
	",": {
		lowerCase: ",",
		upperCase: "<",
	},
	".": {
		lowerCase: ".",
		upperCase: ">",
	},
	"/": {
		lowerCase: "/",
		upperCase: "?",
	},
	ArrowLeft: {
		lowerCase: <MdArrowLeft size={iconSize.arrow} />,
	},
	ArrowUp: {
		lowerCase: <MdArrowDropUp size={iconSize.arrow} />,
	},
	ArrowDown: {
		lowerCase: <MdArrowDropDown size={iconSize.arrow} />,
	},
	ArrowRight: {
		lowerCase: <MdArrowRight size={iconSize.arrow} />,
	},

	backspace: {
		lowerCase: (
			<Span paddingRight={padding.default} fontSize={smallerFont.default}>
				Backspace
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "center-right",
	},
	tab: {
		lowerCase: (
			<Span paddingLeft={padding.default} fontSize={smallerFont.default}>
				Tab
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "center-left",
	},
	capsLock: {
		lowerCase: (
			<Span paddingLeft={padding.default} fontSize={smallerFont.default}>
				Caps
			</Span>
		),
		width: KeyWidth.CAP_RETURN,
		placement: "center-left",
	},
	enter: {
		lowerCase: (
			<Span paddingRight={padding.default} fontSize={smallerFont.default}>
				Enter
			</Span>
		),
		width: KeyWidth.CAP_RETURN,
		placement: "center-right",
	},
	leftShift: {
		lowerCase: (
			<Span paddingLeft={padding.default} fontSize={smallerFont.default}>
				Shift
			</Span>
		),
		width: KeyWidth.SHIFT,
		placement: "center-left",
	},
	rightShift: {
		lowerCase: (
			<Span paddingRight={padding.default} fontSize={smallerFont.default}>
				Shift
			</Span>
		),
		width: KeyWidth.SHIFT,
		placement: "center-right",
	},
	leftCtrl: {
		lowerCase: (
			<Span paddingLeft={padding.default} fontSize={smallerFont.default}>
				Ctrl
			</Span>
		),
		width: KeyWidth.TAB_DEL,
		placement: "center-left",
	},
	fn: {
		lowerCase: <Span fontSize={smallerFont.default}>Fn</Span>,
	},
	leftAlt: {
		lowerCase: <Span fontSize={smallerFont.default}>Alt</Span>,
	},
	spacebar: {
		lowerCase: "",
		width: KeyWidth.SPACEBAR,
	},
	rightAlt: {
		lowerCase: <Span fontSize={smallerFont.default}>Alt</Span>,
	},
	rightCtrl: {
		lowerCase: <Span fontSize={smallerFont.default}>Ctrl</Span>,
	},
}

export default defaultKeys
