import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from 'hds-react'

/**
 * 
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      id={undefined}
      label={label}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}