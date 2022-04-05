import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextField } from 'gestalt'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextField
      id={undefined}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}