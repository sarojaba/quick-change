import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea } from '@trussworks/react-uswds'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
}