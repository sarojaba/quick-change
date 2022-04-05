import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { SelectionGroup } from 'hds-react'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <SelectionGroup
      label={label}
      direction={inline ? 'horizontal' : 'vertical'}>
      {children}
    </SelectionGroup>
  )
}