import * as React from 'react'

import { LinkProps } from '../interfaces'

/**
 * @see 
 */
export function LinkAdapter({ href, children }: LinkProps) {
  return <a href={href}>{children}</a>
}