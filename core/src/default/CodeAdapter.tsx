import * as React from 'react'

import { CodeProps } from '../interfaces'

/**
 * @see 
 */
export function CodeAdapter({ children }: CodeProps) {
  return (
    <code>{children}</code>
  )
}