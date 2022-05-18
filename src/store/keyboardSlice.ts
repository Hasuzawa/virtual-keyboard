import { createSlice } from "@reduxjs/toolkit"

interface keyboardState {
	cap: boolean
	shift: boolean

	a: boolean
	b: boolean
	c: boolean
	d: boolean
	e: boolean
	f: boolean
	g: boolean
	h: boolean
	i: boolean
	j: boolean
	k: boolean
	l: boolean
	m: boolean
	n: boolean
	o: boolean
	p: boolean
	q: boolean
	r: boolean
	s: boolean
	t: boolean
	u: boolean
	v: boolean
	w: boolean
	x: boolean
	y: boolean
	z: boolean
}

const initialState: keyboardState = {
	cap: false,
	shift: false,

	a: false,
	b: false,
	c: false,
	d: false,
	e: false,
	f: false,
	g: false,
	h: false,
	i: false,
	j: false,
	k: false,
	l: false,
	m: false,
	n: false,
	o: false,
	p: false,
	q: false,
	r: false,
	s: false,
	t: false,
	u: false,
	v: false,
	w: false,
	x: false,
	y: false,
	z: false,
}

// const initialState: keyboardState  = {

// }

// const keyboardSlice = createSlice({
//     name: "keyboardSlice",

// })

export {}
