import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { TextArea } from 'govuk-react'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {

  return (
    <TextArea
      input={{
        name: name,
        value: value,
        placeholder: placeholder,
        rows: rows,
        disabled: disabled
      }}
    >
      {label}
    </TextArea>
  )
}