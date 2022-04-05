import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@heathmont/moon-core'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={disabled}
    />
  )
}