import * as React from 'react'

import { NavProps } from '@quick-change/core'

import { Nav } from 'react-bootstrap'

export function NavAdapter({ children }: NavProps) {
  return (
    <Nav>{children}</Nav>
  )
}