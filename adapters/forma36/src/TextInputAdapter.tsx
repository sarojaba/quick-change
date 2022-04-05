import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/text-input
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      name={name}
      value={value}
      isDisabled={disabled}
      isReadOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}