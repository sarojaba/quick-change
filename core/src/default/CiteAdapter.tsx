import * as React from 'react'

import { CiteProps } from '../interfaces'

/**
 * @see 
 */
export function CiteAdapter({ children }: CiteProps) {
  return (
    <cite>{children}</cite>
  )
}