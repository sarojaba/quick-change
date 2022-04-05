import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextInput } from '@guardian/source-react-components'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextInput
      type="password"
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
			onChange={onChange}
      onKeyDown={onKeyDown}
		/>
  )
}