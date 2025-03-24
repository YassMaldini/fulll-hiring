export const theme = Object.freeze({
  colors: {
    primary: "#00a2fe",
    primaryText: "#212529",
    secondary: "#838589",
    secondaryText: "#6C757D",
    secondaryLight: '#d5d4d5',
    accent: "#28A745",
    warning: "#FFC107",
    danger: "#DC3545",
    
    white: '#fff',
    black: '#000'
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32
  }
})

export type Theme = typeof theme;