import * as React from 'react'

import { useScope } from '../providers'

import { Accordion, Breadcrumb, Nav, Select } from '../interfaces'

export interface ItemProps {
  children: any
}

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
