import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { EuiFieldText } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#text-field
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <EuiFieldText
      value={value}
      prepend={label}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
    />
  )
}