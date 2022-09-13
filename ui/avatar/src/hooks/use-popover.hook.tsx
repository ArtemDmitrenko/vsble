import { useState } from 'react'
import { useLayer } from 'react-laag'

const usePopover = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const close = () => setOpen(false)

  const { layerProps, triggerProps, renderLayer } = useLayer({
    isOpen,
    placement: 'bottom-end',
    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: 5,
  })

  const render = (children) => renderLayer(isOpen && children)

  return {
    triggerProps: { ...triggerProps, onClick: () => setOpen(!isOpen) },
    layerProps: {
      ...layerProps,
      style: {
        ...layerProps.style,
        zIndex: 3000,
      },
    },
    render,
    isOpen,
  }
}

export { usePopover }
