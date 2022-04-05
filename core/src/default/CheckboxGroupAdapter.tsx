import * as React from 'react'

import { CheckboxGroupProps } from '../interfaces'

/**
 * @see 
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <div>{children}</div>
  )
}