import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextField } from 'ui-neumorphism'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {  
  return (
    <TextField
      label={placeholder}
      value={value}
      disabled={disabled}
    />
  )
}