import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextInput } from '@workday/canvas-kit-react'

/**
 * @see 
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}