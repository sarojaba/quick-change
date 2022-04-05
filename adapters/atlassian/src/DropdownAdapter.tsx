import * as React from 'react'

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu'

export function DropdownAdapter({ title, children }) {
  return (
    <DropdownMenu trigger={title}>
      <DropdownItemGroup>{children}</DropdownItemGroup>
    </DropdownMenu>
  )
}

export function DropdownItemAdapter({ href, children }) {
  return (
    <DropdownItem>{children}</DropdownItem>
  )
}