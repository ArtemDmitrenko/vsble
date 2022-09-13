import React          from 'react'
import { FC }         from 'react'

import { Button }     from '@ui/button'
import { ImageBlock } from '@ui/image'
import { Layout }     from '@ui/layout'
import { useHover }   from '@ui/utils'

import { Arrow }      from './arrow'
import { Container }  from './container'
import { Menu }       from './menu'
import { usePopover } from './hooks'

const Avatar: FC = () => {
  const [hover, hoverProps] = useHover()
  const { layerProps, triggerProps, render, isOpen } = usePopover()

  return (
    <>
      <Button size='ghost' variant='ghost' {...hoverProps} {...triggerProps}>
        <Container hover={hover}>
          <ImageBlock width='100%' height='100%' src='https://source.unsplash.com/random' />
        </Container>
        <Layout>
          <Arrow active={isOpen} hover={hover} />
        </Layout>
      </Button>
      {render(
        <div {...layerProps}>
          <Menu />
        </div>
      )}
    </>
  )
}

export { Avatar }
