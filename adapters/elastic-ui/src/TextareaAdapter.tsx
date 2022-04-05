import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { EuiTextArea } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <EuiTextArea
      value={value}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
}