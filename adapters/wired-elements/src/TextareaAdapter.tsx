import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { WiredTextArea } from 'react-wired-elements'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <WiredTextArea
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
}