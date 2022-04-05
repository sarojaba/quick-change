import * as React from 'react'

import { NavProps } from '../interfaces'

/**
 * @see 
 */
export function NavAdapter({ children }: NavProps) {
  return (
    <nav>{children}</nav>
  )
}