import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>{children}</div>
  )
}