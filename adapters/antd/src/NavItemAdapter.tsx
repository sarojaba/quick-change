import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

import { Menu } from 'antd'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <Menu.Item disabled={disabled}>{children}</Menu.Item>
  )
}