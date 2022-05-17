import * as React from 'react'

import { useComponents } from '../providers'

export interface NavItemProps {
  href: string,
  label: string,
  icon: any,
  as?: any,
  disabled: boolean,
  children: any
}

export function NavItem({ href, label, icon, as, disabled, children }: NavItemProps) {
  const { NavItemAdapter } = useComponents()
  return (
    <NavItemAdapter href={ href } label={label} icon={icon} as={as} disabled={disabled}>
      { children }
    </NavItemAdapter>
  )
}
