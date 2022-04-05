import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <textarea id={name} rows={rows} />
  )
}