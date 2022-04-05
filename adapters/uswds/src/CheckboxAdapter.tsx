import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@trussworks/react-uswds'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      id={undefined}
      name={undefined}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}