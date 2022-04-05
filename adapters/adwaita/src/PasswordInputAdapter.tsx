import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/input
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input
      type="password"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}