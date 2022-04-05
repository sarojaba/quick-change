import * as React from 'react'

import { NavItemProps } from '../interfaces'

/**
 * @see 
 */
export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {
  return (
    <a href={href}>{label}</a>
  )
}