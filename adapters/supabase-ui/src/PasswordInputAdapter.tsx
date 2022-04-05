import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from '@supabase/ui'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input
      type="password"
      value={value}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}