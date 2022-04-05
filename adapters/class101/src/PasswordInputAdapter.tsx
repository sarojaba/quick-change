import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/input
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input
      type="password"
      // label={label}
      placeholder={placeholder}
      // allowMessage={message}
      size={sizeBySize(size)}
      disabled={disabled}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'medium':
      return 'md'
    default:
      return undefined
  }
}