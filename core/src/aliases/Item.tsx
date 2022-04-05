import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useScope } from '../providers'

import { Accordion, Breadcrumb, Nav, Select } from '../interfaces'

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

const defaultProps = {
  children: []
}

export type ItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function Item({ icon, label, name, value, href, selected, disabled, children }: any) {
  const scope = useScope()

  switch (scope) {
    case 'accordion':
      return (
        <Accordion.Item title={label}>
          {children}
        </Accordion.Item>
      )
    case 'breadcrumb':
      return (
        <Breadcrumb.Item href={href} active={selected}>
          {children}
        </Breadcrumb.Item>
      )
    case 'nav':
      return (
        <Nav.Item
          href={href}
          disabled={disabled}
          label={label}
          icon={icon}
        >
          {children}
        </Nav.Item>
      )
    case 'select':
      return (
        <Select.Item
          value={value}
        >
          {children}
        </Select.Item>
      )
    default:
      return 'Error'
  }
}

Item.propTypes = propTypes
Item.defaultProps = defaultProps
