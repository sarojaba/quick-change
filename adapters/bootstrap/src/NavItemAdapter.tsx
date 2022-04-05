import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

import { Nav } from 'react-bootstrap'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <Nav.Item>
      <Nav.Link href={href} disabled={disabled}>{children}</Nav.Link>
    </Nav.Item>
  )
}