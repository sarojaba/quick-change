import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from 'grommet'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      type="text"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
    />
  )
}