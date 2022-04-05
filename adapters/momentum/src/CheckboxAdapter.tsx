import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}