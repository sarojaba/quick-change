import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

import { Navigation } from 'hds-react'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <Navigation.Item
      href={href}
      label={label}
    />
  )
}