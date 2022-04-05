import * as React from 'react'

import { NumberInputProps } from '@quick-change/core'

import { TextField } from '@shopify/polaris'

/**
 * @see 
 */
export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <TextField
      label={undefined}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      autoComplete="off"
    />
  )
}