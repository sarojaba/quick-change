import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { WiredInput } from 'react-wired-elements'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <WiredInput
      type="text"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}