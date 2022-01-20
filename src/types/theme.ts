import { theme } from "~/styles"

export type ITheme = typeof theme

export type IColors = keyof typeof theme.colors
export type ISizes = keyof typeof theme.sizes
