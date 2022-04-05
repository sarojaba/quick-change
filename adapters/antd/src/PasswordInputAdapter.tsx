import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from 'antd'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input.Password
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}