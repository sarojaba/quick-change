import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/input
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <div className="md-input-group medium-5 columns">
      <label>{label}</label>
      <textarea
        className="md-input"
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  )
}