interface KeyData {
	windows: Keyboard
}

type Keyboard = KeyCap[]

interface KeyCap {
	key: string
	lowerKey: string | React.ReactNode
	upperKey?: string | React.ReactNode
}
export const keyData: KeyData = {
	windows: [
		{
			key: "`",
			lowerKey: "`",
		},
	],
}
