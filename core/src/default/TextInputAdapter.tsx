import * as React from 'react'

import { TextInputProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
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