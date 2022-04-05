import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/input
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      // label={label}
      placeholder={placeholder}
      allowMessage={message}
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