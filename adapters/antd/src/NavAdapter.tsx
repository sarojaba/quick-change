import * as React from 'react'

import { NavProps } from '@quick-change/core'

import { Menu } from 'antd'

export function NavAdapter({ children }: NavProps) {
  return (
    <Menu mode="horizontal">{children}</Menu>
  )
}