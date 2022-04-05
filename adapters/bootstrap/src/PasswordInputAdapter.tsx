import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { FormControl } from './common/FormControl'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <FormControl
      type="password"
      value={value}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}