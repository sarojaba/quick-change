import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <div className="field">
      <div className="control">{ children }</div>
    </div>
  )
}