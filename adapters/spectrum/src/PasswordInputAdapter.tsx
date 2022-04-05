import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextField } from '@adobe/react-spectrum'

/**
 * @see https://react-spectrum.adobe.com/react-spectrum/TextField.html
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextField
      label={label}
      value={value}
      isDisabled={disabled}
      isReadOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}