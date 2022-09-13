import { styleFn } from 'styled-system'

export const baseMenuStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  width: triggerBounds ? triggerBounds.width : 'auto',
})

export const shapeMenuStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.normal,
  fontFamily: theme.fonts.primary,
})

export const appearanceMenuStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.background.white,
  boxShadow: theme.shadows.light,
})
