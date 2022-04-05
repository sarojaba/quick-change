import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import TextField from '@atlaskit/textfield'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      isDisabled={disabled}
      isReadOnly={readOnly}
      onChange={onChange}
    />
  )
}