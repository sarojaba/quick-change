import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { FormControl } from './common/FormControl'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {

  return (
    <FormControl
      type="text"
      value={value}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}