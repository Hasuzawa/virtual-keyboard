export interface StyledComponent {
	className?: string
	children?: React.ReactNode | React.ReactNode[]
}

export type OS = "windows" | "mac" | "linux" | "raspberry"

export type Color = string
// unless we want to spend a lot of effort just to make a type that is neither indicative nor accurate,
// this is probably better

export type BoxShadow = string
