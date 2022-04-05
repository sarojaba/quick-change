import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextInput } from 'grommet'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextInput
      type="password"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
    />
  )
}