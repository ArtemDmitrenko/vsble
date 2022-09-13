import React             from 'react'
import { FC }            from 'react'

import { Condition }     from '@ui/condition'
import { ArrowUpIcon }   from '@ui/icons'
import { ArrowDownIcon } from '@ui/icons'

import { ArrowProps }    from './arrow.interfaces'

const Arrow: FC<ArrowProps> = ({ active, hover }) => (
  <>
    <Condition match={active}>
      <ArrowUpIcon width={14} height={5} />
    </Condition>
    <Condition match={!active}>
      <ArrowDownIcon width={14} height={5} color={hover ? 'black' : 'gray'} />
    </Condition>
  </>
)

export { Arrow }
