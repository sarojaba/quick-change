import * as React from 'react'

import { NavProps } from '@quick-change/core'

import { Menu } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/navigation-menu-menu--overview
 */
export function NavAdapter({ children }: NavProps) {
  return (
    <Menu>{children}</Menu>
  )
}