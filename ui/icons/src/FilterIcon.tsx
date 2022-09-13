import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FilterIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15.25 0.75H0.75L5.31174 6.4522C5.59544 6.8068 5.75 7.2474 5.75 7.7016V14.25C5.75 14.8023 6.1977 15.25 6.75 15.25H9.25C9.8023 15.25 10.25 14.8023 10.25 14.25V7.7016C10.25 7.2474 10.4046 6.8068 10.6883 6.4522L15.25 0.75Z'
        stroke='black'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
