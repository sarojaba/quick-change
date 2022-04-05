import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { TextArea } from 'ui-neumorphism'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <TextArea label={placeholder} value={value} disabled={disabled} />
  )
}