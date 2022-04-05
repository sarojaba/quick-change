import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from '@trussworks/react-uswds'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      type="text"
      id={undefined}
      name={undefined}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}