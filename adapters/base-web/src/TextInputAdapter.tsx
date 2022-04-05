import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input, SIZE } from 'baseui/input'

/**
 * @see https://baseweb.design/components/input/
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      size={sizeBySize(size)}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return SIZE.compact
    case 'large':
      return SIZE.large
    case 'medium':
    default:
      return undefined
  }
}