import * as React from 'react'

import { TextareaProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
}