import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextInput } from '@trussworks/react-uswds'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextInput
      type="password"
      id={undefined}
      name={undefined}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}