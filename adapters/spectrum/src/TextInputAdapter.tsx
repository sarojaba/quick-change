import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextField } from '@adobe/react-spectrum'

/**
 * @see https://react-spectrum.adobe.com/react-spectrum/TextField.html
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
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