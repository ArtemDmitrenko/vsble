import styled                        from '@emotion/styled'

import React                         from 'react'
import { FC }                        from 'react'
import { layout }                    from 'styled-system'

import { Box }                       from '@ui/layout'

import { baseContainerStyles }       from './container.styles'
import { appearanceContainerStyles } from './container.styles'
import { shapeContainerStyles }      from './container.styles'

const ParentContainer = styled(Box)(
  baseContainerStyles,
  shapeContainerStyles,
  appearanceContainerStyles,
  layout
)

const Container: FC<any> = ({ children, ...props }) => (
  <ParentContainer {...props}>
    <Box borderRadius='full' overflow='hidden'>
      {children}
    </Box>
  </ParentContainer>
)

Container.defaultProps = {
  width: 40,
  height: 40,
}

export { Container }
