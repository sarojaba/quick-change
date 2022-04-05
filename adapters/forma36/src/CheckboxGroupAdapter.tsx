import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

/**
 * @see 
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <div>{children}</div>
  )
}