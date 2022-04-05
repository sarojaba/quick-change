import * as React from 'react'

import { NavItemProps } from '@quick-change/core'

import { MenuItem } from 'monday-ui-react-core'

/**
 * @see 
 */
export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <MenuItem title={label} disabled={disabled} />
  )
}