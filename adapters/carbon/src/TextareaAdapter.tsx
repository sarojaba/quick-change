import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { TextArea } from 'carbon-components-react'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <TextArea
      labelText={label}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}>
    </TextArea>
  )
}