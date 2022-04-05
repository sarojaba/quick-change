import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextField } from 'gestalt'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextField
      type="password"
      id={undefined}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}