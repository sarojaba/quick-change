import * as React from 'react'

import { PhoneInputProps } from '@quick-change/core'

import { TextField } from 'ui-neumorphism'

export function PhoneInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {
  return (
    <TextField
      type="tel"
      label={placeholder}
      value={value}
      disabled={disabled}
    />
  )
}