import * as React from 'react'

import { BlockquoteProps } from '../interfaces'

/**
 * @see 
 */
export function BlockquoteAdapter({ children }: BlockquoteProps) {
  return (
    <blockquote>{children}</blockquote>
  )
}