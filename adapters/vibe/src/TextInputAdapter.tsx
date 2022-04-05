import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextField } from './commons/TextField'

/**
 * @see https://style.monday.com/?path=/docs/inputs-textfield--overview
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextField
      type="text"
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
