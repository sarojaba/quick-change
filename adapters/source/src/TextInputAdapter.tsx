import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from '@guardian/source-react-components'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      label={label}
      value={value}
      placeholder={placeholder}
			onChange={onChange}
      onKeyDown={onKeyDown}
		/>
  )
}