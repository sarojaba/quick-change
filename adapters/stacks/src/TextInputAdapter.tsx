import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

/**
 * @see 
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}