import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { DuetInput as Input } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/input/
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      type="text"
      label={label}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onDuetChange={onChange}
    />
  )
}