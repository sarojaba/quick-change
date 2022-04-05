import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { TextField } from '@shopify/polaris'

/**
 * @see 
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <TextField
      label={label}
      value={value}
      multiline={rows}
      onChange={undefined}
      autoComplete="off"
    />
  )
}