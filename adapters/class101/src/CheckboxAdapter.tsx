import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    >
      {label}
    </Checkbox>
  )
}