import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

import { Navbar } from 'rbx'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <Navbar.Item>{children}</Navbar.Item>
  )  
}