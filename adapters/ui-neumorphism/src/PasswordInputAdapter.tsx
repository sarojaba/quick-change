import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextField } from 'ui-neumorphism'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextField
      type="password"
      label={placeholder}
      value={value}
      disabled={disabled}
    />
  )
}