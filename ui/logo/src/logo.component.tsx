import React         from 'react'
import { FC }        from 'react'

import { NextLink }  from '@ui/link'

import { LogoIcon }  from './logo.icon'
import { LogoProps } from './logo.interfaces'

const Logo: FC<LogoProps> = ({ width, height }) => (
  <NextLink path='/' keep>
    <LogoIcon width={width} height={height} />
  </NextLink>
)

export { Logo }
