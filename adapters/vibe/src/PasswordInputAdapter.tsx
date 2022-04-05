import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextField } from './commons/TextField'

/**
 * @see 
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextField
      type="password"
      label={label}
      placeholder={placeholder}
      value={value}
      size={size}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}