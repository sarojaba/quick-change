import * as React from 'react'

import { useComponents, ScopeProvider } from '../providers'

import { NavItem } from './NavItem'

export interface NavProps {
  children: any
}

export function Nav({ children }: NavProps) {
  const { NavAdapter } = useComponents()

  return (
    <NavAdapter>
      <ScopeProvider scope="nav">
        {children}
      </ScopeProvider>
    </NavAdapter>
  )
}

Nav.Item = NavItem
