import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/input
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}