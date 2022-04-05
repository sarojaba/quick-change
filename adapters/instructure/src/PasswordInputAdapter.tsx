import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextInput } from '@instructure/ui'

/**
 * @see 
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextInput
      type="password"
      renderLabel={label}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}