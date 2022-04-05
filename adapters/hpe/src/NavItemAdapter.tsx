import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

import { Button } from 'grommet'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <Button label={label} />
  )
}