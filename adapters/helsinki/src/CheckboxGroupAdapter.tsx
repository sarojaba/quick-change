import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { SelectionGroup } from 'hds-react'

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <SelectionGroup
      label={label}
      direction="vertical"
    >
      {children}
    </SelectionGroup>
  )
}