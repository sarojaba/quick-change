import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextField } from '@fluentui/react'

/**
 * @see https://developer.microsoft.com/en-us/fluentui#/controls/web/textfield
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}