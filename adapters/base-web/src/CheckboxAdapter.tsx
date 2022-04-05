import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'baseui/checkbox'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={onChange}>
      {label}
    </Checkbox>
  )
}
