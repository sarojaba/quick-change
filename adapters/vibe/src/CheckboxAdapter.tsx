import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/inputs-checkbox--overview
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={disabled}
    />
  )
}