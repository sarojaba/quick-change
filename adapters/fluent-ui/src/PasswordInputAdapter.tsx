import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextField } from '@fluentui/react'

/**
 * @see https://developer.microsoft.com/en-us/fluentui#/controls/web/textfield
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextField
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