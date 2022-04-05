import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      value={value}
      placeholder={placeholder}
      allowMessage={message}
      rows={rows}
      disabled={disabled}
      onChange={onChange}
    />
  )
}