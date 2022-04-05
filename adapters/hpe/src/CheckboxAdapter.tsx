import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { CheckBox } from 'grommet'

/**
 * @see https://design-system.hpe.design/components/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <CheckBox
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
