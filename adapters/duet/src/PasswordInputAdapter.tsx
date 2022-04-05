import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { DuetInput as Input } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/input/
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input
      type="password"
      label={label}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onDuetChange={onChange}
    />
  )
}