import * as React from 'react'

import { useComponents } from '../providers'

export interface DropdownProps {
  title: string,
  children: any
}

export function Dropdown({ title, children }: DropdownProps) {
  const { DropdownAdapter } = useComponents()

  return <DropdownAdapter title={ title }>{children}</DropdownAdapter>
}

/**
 * Sub components
 */
import { DropdownItem } from './DropdownItem'

Dropdown.Item = DropdownItem
