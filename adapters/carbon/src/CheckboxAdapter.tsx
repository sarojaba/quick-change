import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'carbon-components-react'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      labelText={label}
      checked={checked}
      disabled={disabled}
    />
  )
}