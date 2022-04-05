import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-inputs-checkbox-react--basic
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      label={label}
      onChange={onChange}
    />
  )
}