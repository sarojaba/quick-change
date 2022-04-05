import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      id={undefined}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}