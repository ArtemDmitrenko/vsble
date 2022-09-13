import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'

export const baseContainerStyles: CSSObject = {
  overflow: 'hidden',
}

export const shapeContainerStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.full,
  border: '1px solid',
  padding: 3,
})

export const appearanceContainerStyles: styleFn = ({ theme, hover }) => ({
  borderColor: hover ? theme.colors.background.black : theme.colors.background.white,
})
