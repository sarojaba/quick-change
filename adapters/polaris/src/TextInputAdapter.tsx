import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextField } from '@shopify/polaris'

/**
 * @see 
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      autoComplete="off"
    />
  )
}