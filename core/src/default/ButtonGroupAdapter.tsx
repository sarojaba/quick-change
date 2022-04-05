import * as React from 'react'

import { ButtonGroupProps } from '../interfaces'

/**
 * @see 
 */
export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <div>{children}</div>
  )
}