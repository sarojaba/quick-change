import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'ui-neumorphism'

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
