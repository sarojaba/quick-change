import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { TextArea } from 'grommet'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <TextArea
      value={value}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
}