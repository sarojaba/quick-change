import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <label htmlFor={name}>
      {label}
      <textarea
        id={name}
        name={name}
        placeholder={ placeholder } rows={ rows }
      />
    </label>
  )
}