import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import TextArea from '@atlaskit/textarea'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <TextArea
      name={name}
      placeholder={placeholder}
    />
  )
}