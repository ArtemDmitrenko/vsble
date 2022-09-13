import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const InboxIcon = (props: IconProps) => {
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
        d='M23 12L20.5943 3.27945C20.2221 1.93021 19.0315 1 17.6766 1H6.32339C4.96856 1 3.77787 1.93022 3.40566 3.27945L1 12'
        stroke={theme.colors.background[props.color] || props.color || 'black'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.29051 12.9077C8.89893 12.4146 8.35053 12 7.7075 12H1V20.0667C1 21.6867 2.35858 23 4.03448 23H19.9655C21.6415 23 23 21.6867 23 20.0667V12H16.2924C15.6494 12 15.1011 12.4146 14.7095 12.9077C14.0854 13.6934 13.1039 14.2 12 14.2C10.8961 14.2 9.91455 13.6934 9.29051 12.9077Z'
        stroke={theme.colors.background[props.color] || props.color || 'black'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
