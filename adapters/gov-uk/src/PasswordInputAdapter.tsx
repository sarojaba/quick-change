import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { InputField } from 'govuk-react'

/**
 * @see 
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <InputField
      input={{
        type: 'password',
        value: value,
        placeholder: placeholder
      }}
    >
      {label}
    </InputField>
  )
}