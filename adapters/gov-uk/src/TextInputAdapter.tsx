import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { InputField } from 'govuk-react'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <InputField
      input={{
        value: value,
        placeholder: placeholder
      }}
    >
      {label}
    </InputField>
  )
}