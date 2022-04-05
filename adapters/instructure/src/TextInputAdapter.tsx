import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from '@instructure/ui'

/**
 * @see https://instructure.design/#TextInput
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      renderLabel={label}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}