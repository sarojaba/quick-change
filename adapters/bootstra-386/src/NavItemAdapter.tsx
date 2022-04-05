import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>{children}</a>
    </li>
  )
}