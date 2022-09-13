import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const BookmarkIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 12 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.75 2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H9.25C10.3546 0.75 11.25 1.64543 11.25 2.75V15.25L6 10.75L0.75 15.25V2.75Z'
        stroke={theme.colors.background[props.color] || props.color || 'black'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
