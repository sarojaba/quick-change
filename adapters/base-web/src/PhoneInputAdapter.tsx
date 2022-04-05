import * as React from 'react'

import { PhoneInputProps } from '@quick-change/core'

import { PhoneInput, SIZE } from 'baseui/phone-input'

/**
 * @see https://baseweb.design/components/phone-input
 */
export function PhoneInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {
  return (
    <PhoneInput
      text={value}
      placeholder={placeholder}
      size={sizeBySize(size)}
      disabled={disabled}
      onTextChange={onChange}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return SIZE.compact
    case 'medium':
      return SIZE.default
    case 'large':
      return SIZE.large
    default:
      return undefined
  }
}