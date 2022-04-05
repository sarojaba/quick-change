import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { EuiFieldPassword } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#password-field
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <EuiFieldPassword
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}