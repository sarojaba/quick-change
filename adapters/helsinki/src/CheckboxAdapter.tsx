import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'hds-react'

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