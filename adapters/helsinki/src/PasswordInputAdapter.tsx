import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { PasswordInput } from 'hds-react'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <PasswordInput
      id={undefined}
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}