import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextField } from '@shopify/polaris'

/**
 * @see 
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextField
      type="password"
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      autoComplete="off"
    />
  )
}