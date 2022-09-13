import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ShoppingCartIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.55172 5.17391L4.41379 1H1L5.55172 5.17391ZM5.55172 5.17391H23L20.516 14.8547C20.1934 16.1117 18.9704 17 17.5622 17H11.3013C9.92441 17 8.72013 16.1499 8.36782 14.9295L5.55172 5.17391Z'
        stroke={theme.colors.background[props.color] || props.color || 'black'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 23C10.1046 23 11 22.5523 11 22C11 21.4477 10.1046 21 9 21C7.89544 21 7 21.4477 7 22C7 22.5523 7.89544 23 9 23Z'
        fill={theme.colors.background[props.color] || props.color || 'black'}
      />
      <path
        d='M20 23C21.1046 23 22 22.5523 22 22C22 21.4477 21.1046 21 20 21C18.8954 21 18 21.4477 18 22C18 22.5523 18.8954 23 20 23Z'
        fill={theme.colors.background[props.color] || props.color || 'black'}
      />
    </svg>
  )
}
