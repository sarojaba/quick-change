import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea } from 'baseui/textarea'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}