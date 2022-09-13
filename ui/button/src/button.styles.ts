import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { ifProp }                 from 'styled-tools'

const smallNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 32,
  fontSize: prop('theme.fontSizes.small'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 44,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 20,
  paddingRight: 20,
})

const shapeGhostStyles = createShapeStyles({
  size: 'auto' as any,
  paddingLeft: 0,
  paddingRight: 0,
})

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.active.font'),
  backgroundColor: prop('theme.colors.button.primary.active.background'),
  borderColor: prop('theme.colors.button.primary.active.border'),
})

const appearanceSecondaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.active.font'),
  backgroundColor: prop('theme.colors.button.secondary.active.background'),
  borderColor: prop('theme.colors.button.secondary.active.border'),
})

const appearanceTertiaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.default.font'),
  backgroundColor: prop('theme.colors.button.tertiary.default.background'),
  borderColor: prop('theme.colors.button.tertiary.default.border'),
})

const appearanceTertiaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.hover.font'),
  backgroundColor: prop('theme.colors.button.tertiary.hover.background'),
  borderColor: prop('theme.colors.button.tertiary.hover.border'),
})

const appearanceTertiaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.active.font'),
  backgroundColor: prop('theme.colors.button.tertiary.active.background'),
  borderColor: prop('theme.colors.button.tertiary.active.border'),
})

const appearanceQuaternaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.default.font'),
  backgroundColor: prop('theme.colors.button.quaternary.default.background'),
  borderColor: prop('theme.colors.button.quaternary.default.border'),
})

const appearanceQuaternaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.hover.font'),
  backgroundColor: prop('theme.colors.button.quaternary.hover.background'),
  borderColor: prop('theme.colors.button.quaternary.hover.border'),
})

const appearanceQuaternaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.active.font'),
  backgroundColor: prop('theme.colors.button.quaternary.active.background'),
  borderColor: prop('theme.colors.button.quaternary.active.border'),
})

const appearanceGhostStyles = createAppearanceStyles({
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  fontColor: 'transparent',
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  ghost: shapeGhostStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('active', false),
    appearancePrimaryActiveStyles,
    ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryStyles)
  ),
  secondary: ifProp(
    prop('active', false),
    appearanceSecondaryActiveStyles,
    ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryStyles)
  ),
  tertiary: ifProp(
    prop('active', false),
    appearanceTertiaryActiveStyles,
    ifProp(prop('hover', false), appearanceTertiaryHoverStyles, appearanceTertiaryStyles)
  ),
  quaternary: ifProp(
    prop('active', false),
    appearanceQuaternaryActiveStyles,
    ifProp(prop('hover', false), appearanceQuaternaryHoverStyles, appearanceQuaternaryStyles)
  ),
  ghost: appearanceGhostStyles,
})
