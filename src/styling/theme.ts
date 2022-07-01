import { colors } from './colors'

export const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xl2: '1.5rem',
  xl4: "2.25rem"
}

export const spacing = {
  s00: '0px',
  s005: '0.125rem',
  s01: '0.25rem',
  s015: '0.375rem',
  s02: '0.5rem',
  s025: '0.625rem',
  s03: '0.75rem',
  s035: '0.875rem',
  s04: '1rem',
  s05: '1.25rem',
  s06: '1.5rem',
  s07: '1.75rem',
  s08: '2rem',
  s09: '2.25rem',
  s10: '2.5rem',
  s11: '2.75rem',
  s12: '3rem',
  s14: '3.5rem',
  s16: '4rem',
  s20: '5rem',
  s24: '6rem',
  s28: '7rem',
  s32: '8rem',
  s36: '9rem',
  s40: '10rem',
  s44: '11rem',
  s48: '12rem',
  s52: '13rem',
  s56: '14rem',
  s60: '15rem',
  s64: '16rem',
  s72: '18rem',
  s80: '20rem',
  s96: '24rem',
  px: '1px',
}

export const borderRadius = {
  none: "0px",
  sm: "0.125rem",
  rounded: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  xl2: "1rem",
  xl3: "1.5rem",
  full: "9999px",
}

export const border = {
  main: `1px solid ${colors.fontColor.light}`
}

export const theme = {
  fontSize,
  spacing,
  colors,
  borderRadius,
  border
}

export type Theme = typeof theme
