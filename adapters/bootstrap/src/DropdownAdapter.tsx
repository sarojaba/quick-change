import * as React from 'react'

import { Dropdown } from 'react-bootstrap'

export function DropdownAdapter({ title, children }) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">{title}</Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  )
}

export function DropdownItemAdapter({ href, children }) {
  return (
    <Dropdown.Item href={href}>{children}</Dropdown.Item>
  )
}