import { Condition }      from '@ui/condition/src'
import { Text }           from '@ui/text/src'
import { useSelect }      from '@atls-ui-parts/select'

import React              from 'react'
import { FC }             from 'react'

import { Button }         from '@ui/button'
import { ArrowDownIcon }  from '@ui/icons'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'

import { ArrowContainer } from './arrow-container'
import { Menu }           from './menu'
import { MenuItem }       from './menu-item'
import { SelectProps }    from './select.interface'

const Select: FC<SelectProps> = ({ items, label, value, onChange, placeholder }) => {
  const {
    isOpen,
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
    selectedItem,
    highlightedIndex,
  } = useSelect({
    items,
    onChange,
  })

  return (
    <Row>
      <Column fill>
        <Condition match={label !== ''}>
          <Text color='text.semiBlack' fontWeight='semiBold' fontSize='semiRegular'>
            {label}
          </Text>
          <Layout flexShrink={0} flexBasis={8} />
        </Condition>
        <Button variant='quaternary' isSelected={!!selectedItem} {...buttonProps}>
          <Row>
            {value || selectedItem || placeholder}
            <Layout flexGrow={1} />
            <ArrowContainer isOpen={isOpen}>
              <ArrowDownIcon color={isOpen ? 'black' : 'gray'} />
            </ArrowContainer>
          </Row>
        </Button>
        {renderMenu(
          <Menu {...menuProps}>
            {items.map((item, index) => (
              <MenuItem {...getMenuItemProps(item, index)} highlighted={index === highlightedIndex}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Column>
    </Row>
  )
}

export { Select }
