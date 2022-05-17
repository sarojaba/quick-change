import * as React from 'react'

import { useComponents } from '../providers'

export interface DropdownItemProps {
  href: string,
  children: any
}

export function DropdownItem({ href, children }: DropdownItemProps) {
  const { DropdownItemAdapter } = useComponents()
  return (
    <DropdownItemAdapter href={href}>
      {children}
    </DropdownItemAdapter>
  )
}
