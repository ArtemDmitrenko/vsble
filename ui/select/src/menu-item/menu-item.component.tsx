import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'

import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'

import { MenuItemProps }  from './menu-item.interface'
import { baseItemStyles } from './menu-item.styles'

const Container = styled.li(baseItemStyles)

const MenuItem: FC<MenuItemProps> = ({ highlighted, children, ...props }) => (
  <Container {...props}>
    <Layout flexBasis={16} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={16} flexShrink={0} />
      <Layout>
        <Text fontSize='semiRegular' color={highlighted ? 'text.purple' : 'text.accent'}>
          {children}
        </Text>
      </Layout>
      <Layout flexBasis={16} flexShrink={0} />
    </Column>
    <Layout flexBasis={16} flexShrink={0} />
  </Container>
)

export { MenuItem }
